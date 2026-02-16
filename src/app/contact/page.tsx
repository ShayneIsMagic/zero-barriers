"use client";

import { useState, useRef, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { trackFormSubmission } from "../../lib/analytics";

const RATE_LIMIT_MS = 60_000;
const BACKEND_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL || "";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

function scrollToMessage(elementId: string) {
  setTimeout(() => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, 100);
}

function buildFormPayload(form: HTMLFormElement): Record<string, string> {
  const payload: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (key !== "website_url") payload[key] = value.toString();
  });
  payload.website_name = "zerobarriers.io";
  return payload;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const lastSubmission = localStorage.getItem("lastFormSubmission");
    if (
      lastSubmission &&
      Date.now() - parseInt(lastSubmission) < RATE_LIMIT_MS
    ) {
      alert("Please wait 60 seconds before submitting again.");
      setIsSubmitting(false);
      return;
    }

    if (new FormData(form).get("website_url")) {
      console.warn("Bot submission blocked");
      setIsSubmitting(false);
      return;
    }

    if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
      setErrorMessage(
        "Please verify you're human by completing the \"I'm not a robot\" checkbox above before submitting."
      );
      setSubmitStatus("error");
      trackFormSubmission("contact_form", false, "reCAPTCHA not completed");
      scrollToMessage("form-error-message");
      setIsSubmitting(false);
      return;
    }

    if (!BACKEND_URL) {
      setSubmitStatus("error");
      trackFormSubmission("contact_form", false, "Form service not configured");
      scrollToMessage("form-error-message");
      setIsSubmitting(false);
      return;
    }

    const payload = buildFormPayload(form);
    if (recaptchaToken) payload.recaptcha_token = recaptchaToken;

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      const isSuccess = res.ok && data.MESSAGE === "Message sent";

      if (isSuccess) {
        setSubmittedEmail(payload.email || "");
        setSubmitStatus("success");
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
        form.reset();
        trackFormSubmission("contact_form", true, undefined, {
          email: payload.email,
          firstName: payload.first_name,
          lastName: payload.last_name,
          company: payload.company,
        });
        localStorage.setItem("lastFormSubmission", Date.now().toString());
        scrollToMessage("form-success-message");
      } else {
        const errorMsg = data.MESSAGE || data.error || "Form submission failed";
        setSubmitStatus("error");
        trackFormSubmission("contact_form", false, errorMsg);
        scrollToMessage("form-error-message");
      }
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Form submission failed";
      setSubmitStatus("error");
      trackFormSubmission("contact_form", false, errorMsg);
      scrollToMessage("form-error-message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkStyle = { color: "inherit", textDecoration: "underline" as const };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="section-title">
            <span className="section-eyebrow">POTENTIAL UNLEASHED</span>
            <h1>Begin Your Transformation</h1>
            <p>
              Ready to align purpose-driven transformation, activated technology
              systems, and engineered revenue acceleration?
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section-bg">
        <div className="container contact-main">
          <div className="contact-info sticky">
            <h2
              style={{
                fontSize: "26px",
                color: "var(--teal-rich)",
                marginBottom: "20px",
              }}
            >
              Get in Touch
            </h2>
            <p>
              Every client is different. Ready to discover how purpose-driven
              transformation can unleash your breakthrough results? Complete the
              form to begin your transformation journey.
            </p>

            <div className="contact-person">
              <div className="contact-person-img">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="contact-person-details">
                <strong>Shayne Roy</strong>
                <span>Founder, Zero Barriers</span>
              </div>
            </div>

            <ul className="contact-details-list">
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:8019970457">801-997-0457</a>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
                <a
                  href="https://www.instagram.com/zerobarriersinc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <i className="fab fa-facebook-f"></i>
                <a
                  href="https://www.facebook.com/zerobarriers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/company/zerobarriers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <form
              className="contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">
                    Last Name <span className="required">*</span>
                  </label>
                  <input type="text" id="last_name" name="last_name" required />
                </div>
              </div>

              <div className="form-row" style={{ marginTop: "16px" }}>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <label htmlFor="company">
                Company <span className="required">*</span>
              </label>
              <input type="text" id="company" name="company" required />

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" id="website" name="website" />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  How can we help you? <span className="required">*</span>
                </label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <input type="hidden" name="page" value="Contact" />
              <input
                type="hidden"
                name="from_name"
                value="Zero Barriers Contact Form"
              />
              <input
                type="text"
                name="website_url"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {submitStatus === "success" && (
                <div
                  className="form-message form-message-success"
                  role="alert"
                  aria-live="polite"
                  id="form-success-message"
                  style={{ scrollMarginTop: "20px" }}
                >
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>
                      Thank you for contacting Zero Barriers. We&apos;ve
                      received your message and will respond to you
                      {submittedEmail ? ` at ${submittedEmail}` : ""} as soon as
                      possible.
                    </p>
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "0.9em",
                        opacity: 0.9,
                      }}
                    >
                      For immediate assistance, contact us at{" "}
                      <a href="mailto:sk@zerobarriers.io" style={linkStyle}>
                        sk@zerobarriers.io
                      </a>{" "}
                      or{" "}
                      <a href="tel:8019970457" style={linkStyle}>
                        801-997-0457
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="form-message form-message-error"
                  role="alert"
                  aria-live="polite"
                  id="form-error-message"
                  style={{ scrollMarginTop: "20px" }}
                >
                  <i className="fas fa-exclamation-circle"></i>
                  <div>
                    <strong>
                      {errorMessage ? "Action Required" : "Unable to Send Message"}
                    </strong>
                    <p>
                      {errorMessage ||
                        "We encountered an issue sending your message. Please try again, or contact us directly:"}
                    </p>
                    <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                      <li>
                        Email:{" "}
                        <a href="mailto:sk@zerobarriers.io" style={linkStyle}>
                          sk@zerobarriers.io
                        </a>
                      </li>
                      <li>
                        Phone:{" "}
                        <a href="tel:8019970457" style={linkStyle}>
                          801-997-0457
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {RECAPTCHA_SITE_KEY && (
                <div className="form-group" style={{ marginBottom: "16px" }}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => {
                      setRecaptchaToken(token);
                      if (token) {
                        setErrorMessage("");
                        setSubmitStatus("idle");
                      }
                    }}
                    onExpired={() => setRecaptchaToken(null)}
                    theme="light"
                  />
                </div>
              )}

              <button
                type="submit"
                className="cta-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
