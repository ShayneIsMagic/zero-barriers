import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPageLayout from '../../components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zero Barriers',
  description:
    'Zero Barriers Privacy Policy — how we handle information on zerobarriers.io.',
  alternates: { canonical: 'https://zerobarriers.io/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Your Privacy, Clearly Explained" documentLabel="Privacy Policy">
      <p>
        Zero Barriers (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
        zerobarriers.io (the &quot;Site&quot;). This Privacy Policy explains what
        information we collect, how we use it, and your choices. It should be read
        together with our <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>1. Overview</h2>
      <p>
        We do not sell your personal information. We do not use third-party
        advertising networks, behavioral retargeting, or social-media tracking
        widgets on this Site. Fonts, icons, and analytics are self-hosted on
        infrastructure we control rather than loaded from third-party CDNs.
      </p>

      <h2>2. Information You Provide Directly</h2>
      <p>
        The Contact form lets you voluntarily submit your first name, last name,
        phone number, email address, company name, website, and a message. We use
        this information solely to respond to your inquiry. We do not sell, rent,
        or share it with third parties for marketing purposes.
      </p>
      <p>
        Our Contact form uses Cloudflare Turnstile bot verification, which loads
        only on the Contact page. Turnstile may process limited technical data
        (such as browser signals) to distinguish humans from bots. It does not
        set advertising or cross-site tracking cookies. See our{' '}
        <Link href="/cookies">Cookie Policy</Link> and Cloudflare&apos;s Turnstile
        privacy documentation for details.
      </p>

      <h2>3. Analytics</h2>
      <p>
        We use <strong>self-hosted Umami analytics</strong> served from our own
        domain. Umami helps us understand aggregate site usage (such as page
        views and general traffic patterns). It is configured to:
      </p>
      <ul>
        <li>Not set cookies for analytics purposes;</li>
        <li>Not track you across other websites;</li>
        <li>Not collect names, email addresses, or other personally identifiable
          information through analytics; and</li>
        <li>Not share data with third-party ad networks.</li>
      </ul>
      <p>
        We may track custom events (such as navigation or form submission
        outcomes) to improve the Site. These events do not include the content of
        your messages or contact details.
      </p>

      <h2>4. Server Logs and Hosting</h2>
      <p>
        Our hosting provider may automatically record limited technical
        information (such as IP address, browser type, and access times) in
        standard server logs for security and operational purposes. These logs
        are not used to build advertising profiles, are retained only as long as
        needed for operations, and are not sold to third parties.
      </p>

      <h2>5. No Session Replay or Communication Interception</h2>
      <p>
        We do not use session replay, keystroke logging, mouse-tracking, chatbots
        that capture visitor interactions, or tools that record communications
        between you and the Site beyond what is described above.
      </p>

      <h2>6. Children&apos;s Privacy</h2>
      <p>
        The Site is intended for business audiences and is not directed at
        children under 13. We do not knowingly collect personal information from
        children.
      </p>

      <h2>7. Your Privacy Rights</h2>
      <p>
        If you submitted information through our Contact form, you may contact
        us below to request access to or deletion of that information. Because we
        do not sell personal information, there is no sale for us to opt you out
        of.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        If our practices change, we will update this Policy and the &quot;Last
        Updated&quot; date above. Where required by law, we will provide
        additional notice or obtain consent before material changes take effect.
      </p>

      <h2>9. Contact Us</h2>
      <p>Questions about this Privacy Policy? Contact us:</p>
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
