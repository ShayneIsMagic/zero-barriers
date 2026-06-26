import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zero Barriers",
  description:
    "Zero Barriers Privacy Policy — how we handle information submitted through our website.",
  alternates: { canonical: "https://zerobarriers.io/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Privacy Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-title">
            <h1>Privacy Policy</h1>
            <p>
              Effective Date: July 24, 2026 &nbsp;|&nbsp; Last Updated: July 24,
              2026
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="contact-section-bg">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "40px",
              lineHeight: 1.7,
            }}
          >
            <h2>1. Overview</h2>
            <p>
              Zero Barriers ("we," "us," or "our") operates the website located
              at zerobarriers.io (the "Site"). This Privacy Policy explains our
              practices regarding information on the Site.
            </p>
            <p>
              <strong>
                We do not collect, store, process, sell, or share any Personal
                Information from visitors to this Site, except information you
                voluntarily submit through our Contact form, as described in
                Section 3 below.
              </strong>{" "}
              We do not use cookies, web beacons, pixel tags, session replay
              tools, analytics software, advertising trackers, or any similar
              technology. Fonts, icons, and other site assets are hosted
              directly on our own servers rather than loaded from third-party
              services, so visiting the Site does not transmit your information
              to any third party.
            </p>

            <h2>
              2. No Tracking, Monitoring, or Interception of Communications
            </h2>
            <p>
              In connection with the California Invasion of Privacy Act
              (California Penal Code §§ 630-638), we confirm that the Site does
              not:
            </p>
            <ul>
              <li>
                Record, intercept, or eavesdrop on any communication between you
                and the Site or any third party;
              </li>
              <li>
                Use session replay, keystroke logging, mouse-tracking, or
                chatbot technology that captures visitor interactions;
              </li>
              <li>
                Deploy tracking pixels, software development kits (SDKs), or
                similar tools that share visitor data with third parties; or
              </li>
              <li>
                Permit any third party to monitor, record, or intercept
                communications occurring on or through the Site.
              </li>
            </ul>
            <p>
              If this changes in the future — for example, if we add live chat,
              analytics, or advertising technology — we will update this Policy
              and implement appropriate consent mechanisms (such as a consent
              banner or in-product disclosure) before any such technology
              becomes active.
            </p>

            <h2>3. Information You Provide Directly</h2>
            <p>
              The Site includes a Contact form where you may voluntarily submit
              your first name, last name, phone number, email address, company
              name, website, and a message. We use this information solely to
              respond to your inquiry. Your information is not sent to us until
              you choose to submit the form, and we do not sell, rent, or share
              this information with third parties for marketing purposes.
            </p>
            <p>
              If you contact us outside the Site (for example, by emailing an
              address we publish), any information you share in that
              communication is governed by the policies, if any, of the email or
              communication service you use — not by this Policy — and we will
              use it only to respond to you.
            </p>

            <h2>4. Server Logs and Hosting</h2>
            <p>
              Our hosting provider may automatically and temporarily record
              limited technical information (such as IP address, browser type,
              and access times) in standard server logs for security and
              operational purposes. These logs are not used to identify
              individual visitors, are not combined with other information, and
              are not shared with third parties except as required by law.
            </p>

            <h2>5. Children's Privacy</h2>
            <p>
              The Site is intended for business audiences and is not directed at
              children. We do not knowingly collect information from children
              under 13 or any other age, and no additional measures under the
              Children's Online Privacy Protection Act (COPPA) are applicable.
            </p>

            <h2>6. Your Privacy Rights</h2>
            <p>
              If you have submitted information through our Contact form, you
              may contact us using the information below to request that we
              delete it. Because we do not sell Personal Information, there is
              no sale of your information for us to opt you out of.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              If our data practices change — including the addition of any
              analytics, cookies, tracking, or communication-monitoring
              technology referenced in Section 2 — we will revise this Policy,
              update the "Last Updated" date above, and, where required by law,
              provide additional notice or obtain consent before the change
              takes effect.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this Policy, you may contact us at:
            </p>
            <address style={{ fontStyle: "normal" }}>
              Zero Barriers
              <br />
              518 E 800 N, Suite A<br />
              Orem, Utah 84097
              <br />
              sk@zerobarriers.io
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
