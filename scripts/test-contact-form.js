const puppeteer = require("puppeteer");

const TEST_URL = process.env.TEST_URL || "http://localhost:3000";
const CONTACT_PAGE = `${TEST_URL}/contact`;
const NAV_TIMEOUT = 30_000;
const RESPONSE_TIMEOUT = 15_000;
const STABILITY_DELAY = 3000;

const FORM_FIELDS = {
  'input[name="first_name"]': "Test",
  'input[name="last_name"]': "User",
  'input[name="phone"]': "801-555-1234",
  'input[name="email"]': "test@example.com",
  'input[name="company"]': "Test Company",
  'textarea[name="message"]': "This is a test message from the automated test script.",
};

const isFormSubmission = (url) => url.includes("/send");

async function getResponseBody(response) {
  const text = await response.text().catch(() => null);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function testContactForm() {
  console.log("Testing Contact Form...\n");
  console.log(`Testing URL: ${CONTACT_PAGE}\n`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  const consoleMessages = [];
  const networkRequests = [];
  const networkResponses = [];

  page.on("console", (msg) => {
    const entry = { type: msg.type(), text: msg.text() };
    consoleMessages.push(entry);
    if (msg.type() === "error") console.log(`  Console Error: ${entry.text}`);
  });

  page.on("request", (req) => {
    if (req.method() === "POST" && isFormSubmission(req.url())) {
      networkRequests.push({ url: req.url(), method: req.method() });
    }
  });

  page.on("response", async (response) => {
    const req = response.request();
    if (req.method() !== "POST" || !isFormSubmission(response.url())) return;

    const body = await getResponseBody(response);
    networkResponses.push({
      url: response.url(),
      status: response.status(),
      statusText: response.statusText(),
      body,
    });
  });

  try {
    console.log("1. Navigating to contact page...");
    await page.goto(CONTACT_PAGE, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });
    await new Promise((r) => setTimeout(r, 2000));

    const formExists = (await page.$("form#contact-form, form.contact-form")) !== null;
    if (!formExists) throw new Error("Contact form not found on page");
    console.log("   Form found\n");

    console.log("2. Filling out form fields...");
    for (const [selector, value] of Object.entries(FORM_FIELDS)) {
      await page.type(selector, value);
    }
    console.log("   Done\n");

    console.log("3. Submitting form...");
    const submitButton = await page.$('button[type="submit"]');
    if (!submitButton) throw new Error("Submit button not found");

    const responsePromise = page
      .waitForResponse((r) => r.request().method() === "POST" && isFormSubmission(r.url()), {
        timeout: RESPONSE_TIMEOUT,
      })
      .catch(() => null);

    await submitButton.click();
    console.log("   Submitted\n");

    await new Promise((r) => setTimeout(r, STABILITY_DELAY));

    const response = await responsePromise;
    if (response) {
      console.log("   Response:", response.url(), response.status(), response.statusText());
    }

    console.log("4. Checking submission status...");
    const messageInfo = await page.evaluate(() => {
      const success = document.getElementById("form-success-message")?.textContent?.trim();
      const error = document.getElementById("form-error-message")?.textContent?.trim();
      return { success: success || null, error: error || null };
    });

    if (messageInfo.success) {
      console.log("   Success:", messageInfo.success.substring(0, 60) + "...");
    } else if (messageInfo.error) {
      console.log("   Error:", messageInfo.error.substring(0, 80));
    } else {
      console.log("   No success/error message found");
    }

    console.log("5. Network activity:");
    if (networkRequests.length) {
      networkRequests.forEach((r) => console.log(`   - ${r.method} ${r.url}`));
    }
    if (networkResponses.length) {
      networkResponses.forEach((r) => {
        const line = `   - ${r.status} ${r.statusText}: ${r.url}`;
        console.log(line);
        if (r.body && r.status >= 400) {
          const bodyStr = typeof r.body === "string" ? r.body : JSON.stringify(r.body);
          console.log(`     Body: ${bodyStr}`);
        }
      });
    } else {
      console.log("   No form submission requests captured");
    }

    console.log("6. Console output:");
    const errors = consoleMessages.filter((m) => m.type === "error");
    const logs = consoleMessages.filter((m) => m.type === "log");
    if (errors.length) errors.forEach((e) => console.log(`   - [error] ${e.text}`));
    if (logs.length) logs.forEach((l) => console.log(`   - ${l.text}`));

    if (networkRequests.length) {
      console.log("\n   Backend:", networkRequests[0].url);
    }
  } catch (error) {
    console.error("\nTest Error:", error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
  }

  console.log("\nTest completed\n");
}

testContactForm().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
