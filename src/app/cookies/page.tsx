import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPageLayout from '../../components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy | Zero Barriers',
  description:
    'Zero Barriers Cookie Policy — how zerobarriers.io uses cookies and similar technologies.',
  alternates: { canonical: 'https://zerobarriers.io/cookies' },
}

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy">
      <p>
        This Cookie Policy explains how Zero Barriers (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) uses cookies and similar technologies on zerobarriers.io (the
        &quot;Site&quot;). It should be read together with our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They can help a site remember preferences or support basic
        functionality. Similar technologies include local storage, session
        storage, and tracking pixels.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We have configured this website to avoid non-essential third-party
        cookies. Specifically:
      </p>
      <ul>
        <li>
          <strong>Analytics:</strong> We use self-hosted analytics that does not
          set cookies, does not track you across other websites, and does not
          collect personally identifiable information. No third-party analytics
          scripts are present on the Site.
        </li>
        <li>
          <strong>No advertising cookies:</strong> We do not use advertising
          networks or retargeting pixels on this Site.
        </li>
        <li>
          <strong>Self-hosted assets:</strong> Icons, fonts, and other site
          assets are served from our own domain rather than third-party CDNs that
          may set cookies or log IP addresses.
        </li>
      </ul>

      <h2>Bot Protection on the Contact Form</h2>
      <p>
        Our Contact form uses privacy-focused bot verification provided by our
        hosting and security provider. This tool loads only on the Contact page
        and does not set tracking or advertising cookies. Depending on
        configuration, a session-based security cookie may be set during
        verification. This cookie:
      </p>
      <ul>
        <li>
          Is strictly functional — used only to confirm that bot-detection has
          passed;
        </li>
        <li>Does not track you across other websites;</li>
        <li>Does not collect or share data for advertising; and</li>
        <li>Expires when you close your browser.</li>
      </ul>
      <p>
        For complete details on how this service processes data, see the{' '}
        <a
          href="https://www.cloudflare.com/turnstile-privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloudflare Turnstile Privacy Addendum
        </a>
        .
      </p>

      <h2>Essential Cookies</h2>
      <p>
        Our hosting infrastructure may use strictly necessary cookies or similar
        technologies required for security, load balancing, or basic site
        delivery. These are session-based, expire when you close your browser,
        and do not track you across other websites.
      </p>

      <h2>Third-Party Cookies We Do Not Use</h2>
      <p>This website does not intentionally set or permit:</p>
      <ul>
        <li>Third-party analytics or behavioral tracking scripts</li>
        <li>Advertising, retargeting, or conversion pixels of any kind</li>
        <li>Social media widgets or share buttons</li>
        <li>Embedded video or map services that set third-party cookies</li>
        <li>Font or icon delivery via third-party CDNs</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can control cookies through your browser settings. Most browsers
        allow you to block or delete cookies. Note that blocking all cookies may
        affect how some websites function. Common browser help pages:
      </p>
      <ul>
        <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
        <li>Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
        <li>Safari: Settings → Privacy → Cookies and website data</li>
        <li>Edge: Settings → Cookies and site permissions</li>
      </ul>

      <h2>Do Not Track</h2>
      <p>
        Because we do not use behavioral tracking on this Site, we do not respond
        differently to &quot;Do Not Track&quot; browser signals — but we also do not engage
        in cross-site tracking regardless of that signal.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is not directed at children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Updates</h2>
      <p>
        If we add cookies or similar technologies in the future, we will update
        this policy and, where required by law, obtain consent before placing
        non-essential cookies.
      </p>

      <h2>Contact Us</h2>
      <p>Questions about this Cookie Policy? Contact us:</p>
      <address style={{ fontStyle: 'normal' }}>
        Zero Barriers
        <br />
        518 E 800 N, Suite A
        <br />
        Orem, Utah 84097
        <br />
        sk@zerobarriers.io
      </address>
    </LegalPageLayout>
  )
}
