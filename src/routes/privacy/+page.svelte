<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import { SITE_URL, SUPPORT_EMAIL, OG_IMAGE } from '$lib/site.js';

  const title = 'PicPark Privacy Policy';
  const description = 'What data PicPark collects, how it is used, and how you stay in control. Scanned photos are processed to produce your result, then discarded.';

  const toc = [
    ['p1', 'Our approach'],
    ['p2', 'Data we collect'],
    ['p3', 'On-device data'],
    ['p4', 'How we use it'],
    ['p5', 'Third parties'],
    ['p6', 'Security'],
    ['p7', 'Your control'],
    ['p8', 'Updates'],
    ['p9', 'Disclaimer'],
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href="{SITE_URL}/privacy" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{SITE_URL}/privacy" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<PageHeader title="Privacy policy" lead="What data we collect, how we use it, and how you stay in control.">
  <p class="updated">Last updated October 31, 2026</p>
</PageHeader>

<div class="doc">
  <section class="summary reveal" aria-labelledby="short-h">
    <div>
      <h2 id="short-h">The short version</h2>
      <ul>
        <li>Scanned photos are processed only to produce your result, then discarded. They are not stored (unless you report a result) or used to train AI models.</li>
        <li>Your parking history, photos and stats stay on your device.</li>
        <li>We do not sell, rent or share your data for advertising or marketing.</li>
      </ul>
    </div>
  </section>

  <nav class="toc" aria-label="Policy sections">
    {#each toc as [id, label]}
      <a href="#{id}">{label}</a>
    {/each}
  </nav>

  <article>
    <section id="p1">
      <h2>Our approach</h2>
      <p>
        PicPark uses AI to read parking signs. When you scan a sign, the photo is sent securely to our server and on to our AI provider for analysis. It is processed only to produce
        your result and is never linked to your identity. Your parking history, photos, and stats stay on your device.
      </p>
    </section>

    <section id="p2">
      <h2>Data we collect</h2>
      <h3>Always collected</h3>
      <ul>
        <li>Basic error reports (via Sentry): technical logs used to diagnose crashes and performance issues</li>
        <li>Device information, such as model and operating system version</li>
      </ul>
      <h3>Photos and AI analysis</h3>
      <p>
        When you scan a parking sign, the photo is sent securely to our server and then to our AI provider (OpenAI) to read the sign and work out the parking rules. Your photos:
      </p>
      <ul>
        <li>Are processed transiently to generate your result, then discarded (not stored on our servers)</li>
        <li>Are not used to train AI models</li>
        <li>Are not linked to your identity or location</li>
        <li>Are never sold, or shared or used for advertising</li>
      </ul>
      <p>The resulting analysis is saved only in your device's local history.</p>
      <h3>Reporting an issue</h3>
      <p>
        If you tap Report Issue on a result, the photo, your description, the AI result and your random device identifier are sent to us so we can review the
        problem. Reports are kept for as long as we need them to investigate and improve detection.
      </p>
      <h3>Location</h3>
      <p>
        If you grant location permission, PicPark uses your device's location to label a scan with the nearby city and street name. This happens on your device only. Your location
        is never sent to our servers. You can deny or revoke this permission at any time, and the app still works without it.
      </p>
      <h3>Optional, when enabled</h3>
      <ul>
        <li>Detailed app usage statistics</li>
        <li>Feature interaction data</li>
        <li>Detailed crash reports</li>
        <li>AI analysis results (anonymized), used only to improve detection accuracy</li>
      </ul>
    </section>

    <section id="p3">
      <h2>On-device data</h2>
      <p>
        Your parking history, the photos you keep, and the statistics shown on the Analytics screen are stored and computed only on your device. They are never uploaded to our
        servers, and deleting an item or uninstalling the app removes them.
      </p>
    </section>

    <section id="p4">
      <h2>How we use your data</h2>
      <p>We use the collected information solely to:</p>
      <ul>
        <li>Improve overall app functionality</li>
        <li>Fix bugs and crashes</li>
        <li>Enhance AI detection accuracy</li>
        <li>Develop and test new features</li>
      </ul>
      <p class="callout">We do not sell, rent, or share your data with any third parties for advertising or marketing purposes.</p>
    </section>

    <section id="p5">
      <h2>Third-party services</h2>
      <p>A few trusted services help run PicPark. Each receives only the data it needs and is bound by its own privacy policy:</p>
      <ul>
        <li><strong>OpenAI</strong>: analyzes the parking-sign photos you scan</li>
        <li><strong>RevenueCat</strong>: manages in-app purchases</li>
        <li><strong>Sentry</strong>: crash and error reporting</li>
        <li><strong>Google AdMob</strong>: advertising</li>
      </ul>
      <div class="notice">
        <div>
          <h3>EU/EEA/UK users</h3>
          <p>Users in the EU/EEA/UK may be asked for consent to serve personalized or non-personalized ads through our consent management platform.</p>
        </div>
      </div>
      <h3>Data collected by ad services</h3>
      <ul>
        <li>Device identifiers (IDFA/AAID) for ad targeting and measurement</li>
        <li>Usage data to serve relevant advertisements</li>
        <li>Ad performance metrics and analytics</li>
      </ul>
      <h3>Your ad preferences</h3>
      <p>You can manage your advertising preferences through the consent form shown when you first use the app, and at any time in the app's settings.</p>
      <p>
        For more information about Google's advertising practices, see <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
          >Google's Privacy Policy for Ad Services</a
        >.
      </p>
      <p>Purchases are tied to a random device identifier rather than your name or email, so they are not linked to your real-world identity.</p>
    </section>

    <section id="p6">
      <h2>Data security</h2>
      <ul>
        <li>All data is transmitted securely over encrypted connections</li>
        <li>
          The only information stored on our servers is a minimal device record: a random device identifier, encrypted session keys, and scan-quota counters used to operate the
          service and prevent abuse
        </li>
        <li>This record contains no name, email, photos, or location</li>
        <li>We retain it only as long as necessary to run PicPark, and we never sell or share your personal information</li>
      </ul>
    </section>

    <section id="p7">
      <h2>Your control</h2>
      <ul>
        <li>You remain in control of your data</li>
        <li>You can enable or disable additional data collection any time in the app's settings</li>
        <li>Even when disabled, we collect only the minimal technical information needed for the app to work reliably</li>
      </ul>
    </section>

    <section id="p8">
      <h2>Updates to this policy</h2>
      <p>We may update this policy from time to time. We'll post any changes in the app and on this page, and they take effect once posted.</p>
    </section>

    <section id="p9">
      <h2>Disclaimer</h2>
      <p>
        PicPark is not responsible for any parking tickets, fines, or violations that may occur while using the app. The verdict is advisory, so always confirm against the
        physical sign and local regulations.
      </p>
    </section>
  </article>
</div>

<section class="contact-wrap">
  <div class="plate dark reveal">
    <div class="plate-inner contact">
      <h2 class="display">Questions or concerns?</h2>
      <p>If you have any questions about our privacy practices, get in touch.</p>
      <a class="btn mail" href="mailto:{SUPPORT_EMAIL}">{SUPPORT_EMAIL}</a>
    </div>
  </div>
</section>

<style>
  .updated {
    margin: 0;
    font-size: 16px;
    color: #d5e4f6;
  }
  .doc {
    max-width: 820px;
    margin: 0 auto;
    padding: 96px 24px 140px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  .summary {
    padding: 8px;
    border-radius: 28px;
    background: #fff;
    box-shadow: 0 0 0 2px var(--ink);
  }
  .summary > div {
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    border: 3px solid var(--ink);
    border-radius: 21px;
  }
  .summary h2 {
    margin: 0;
    text-align: center;
    font-family: var(--display);
    font-weight: 800;
    font-size: 38px;
    text-transform: uppercase;
    line-height: 1;
  }
  .summary ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 18px;
    line-height: 1.5;
  }
  .summary li {
    padding-left: 38px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230F7B45' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E")
      no-repeat 0 2px;
  }
  .toc {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .toc a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    border: 2px solid #c9cdc6;
    background: #fff;
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;
  }
  .toc a:hover {
    background: var(--ink);
    border-color: var(--ink);
    color: #fff;
  }
  article {
    display: flex;
    flex-direction: column;
    gap: 56px;
    font-size: 18px;
    line-height: 1.7;
    color: #2e333a;
  }
  article section {
    display: flex;
    flex-direction: column;
    gap: 14px;
    scroll-margin-top: 24px;
  }
  article h2 {
    margin: 0;
    font-family: var(--display);
    font-weight: 800;
    font-size: 40px;
    line-height: 1;
    text-transform: uppercase;
    color: var(--ink);
  }
  article h3 {
    margin: 10px 0 0;
    font-size: 20px;
    color: var(--ink);
  }
  article p,
  article ul {
    margin: 0;
  }
  article ul {
    padding-left: 22px;
  }
  .callout {
    margin-top: 6px;
    padding: 18px 22px;
    border-radius: 16px;
    background: #fff;
    border: 2px solid var(--ink);
    font-weight: 600;
    color: var(--ink);
  }
  .notice {
    padding: 6px;
    border-radius: 18px;
    background: var(--yellow);
  }
  .notice > div {
    padding: 18px 20px;
    border: 3px solid var(--ink);
    border-radius: 13px;
    color: var(--ink);
  }
  .notice h3 {
    margin: 0;
  }
  .notice p {
    margin-top: 6px;
  }

  .contact-wrap {
    padding: 0 14px;
  }
  .contact {
    padding: 80px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    text-align: center;
  }
  .contact h2 {
    font-size: clamp(40px, 5.5vw, 76px);
    line-height: 0.9;
  }
  .contact p {
    margin: 0;
    font-size: 19px;
    line-height: 1.5;
    color: var(--muted-dark);
  }
  .mail {
    display: inline-flex;
    align-items: center;
    min-height: 62px;
    padding: 0 30px;
    border-radius: 14px;
    background: var(--yellow);
    color: var(--ink);
    font-weight: 700;
    font-size: 19px;
    text-decoration: none;
  }
  .mail:hover {
    color: var(--ink);
  }
</style>
