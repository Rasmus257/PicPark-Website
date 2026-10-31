<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import { SITE_URL, SUPPORT_EMAIL, OG_IMAGE } from '$lib/site.js';

  const title = 'PicPark Support: scan tips and common questions';
  const description =
    'Help with PicPark, the parking sign reader app. Tips for better scans, answers to common questions, and how to contact support.';

  const faq = [
    { q: 'Why does a scan sometimes take a while?', a: 'It depends on image quality, how complex the sign is, and how busy our servers are at that moment.' },
    {
      q: 'Which countries are supported?',
      a: 'PicPark works with standard parking signs across many countries and major cities. If a sign is not read correctly, report it from the result screen.',
    },
    {
      q: 'Is my data safe?',
      a: 'Each photo is sent securely for analysis, used only to produce your result, then discarded. It is never stored unless you report a result, and never linked to your identity, and your history and stats stay on your device. Read the <a href="/privacy">privacy policy</a> for exactly what is collected.',
    },
    {
      q: 'What if the app gives a wrong result?',
      a: 'Use your own judgment in complex situations and check local rules when in doubt. Tap Report Issue on the result so we can improve detection.',
    },
    { q: 'Do I need an account?', a: 'No. Download the app and start scanning.' },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href="{SITE_URL}/support" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{SITE_URL}/support" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<PageHeader title="How can we help?" lead="Tips for better scans, answers to common questions, and a real person on the other end of the email.">
  <a class="btn email" href="mailto:{SUPPORT_EMAIL}">
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
      ><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg
    >
    Email support
  </a>
</PageHeader>

<section class="tips-section" aria-labelledby="tips-h">
  <h2 id="tips-h" class="display reveal">Get a better scan</h2>
  <div class="tips">
    <div class="tip reveal">
      <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0E5AAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        ><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /><rect x="9" y="6" width="6" height="12" rx="1" /></svg
      >
      <h3>Whole pole in frame</h3>
      <p>The small plates underneath often change the answer. Step back until they all fit.</p>
    </div>
    <div class="tip reveal">
      <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0E5AAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        ><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg
      >
      <h3>Steady, good light</h3>
      <p>Hold the phone still. At night, turn on the flash from the camera screen.</p>
    </div>
    <div class="tip reveal">
      <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0E5AAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        ><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg
      >
      <h3>Try another angle</h3>
      <p>If a result looks off, take a new photo from straight in front of the sign.</p>
    </div>
    <div class="tip warn reveal">
      <div>
        <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#15181D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          ><path d="M12 3l10 18H2L12 3z" /><path d="M12 10v5M12 18h.01" /></svg
        >
        <h3>Low confidence?</h3>
        <p>Check the sign yourself, and tap Report Issue on the result so we can fix it.</p>
      </div>
    </div>
  </div>
</section>

<section class="faq-section" aria-labelledby="faq-h">
  <h2 id="faq-h" class="display reveal">Common questions</h2>
  <div class="reveal faq-wrap"><Faq items={faq} /></div>
</section>

<section class="contact-wrap">
  <div class="plate dark reveal">
    <div class="plate-inner contact">
      <h2 class="display">Still need help?</h2>
      <p>Send us an email and we'll get back to you. A photo of the sign helps.</p>
      <a class="btn yellow-btn" href="mailto:{SUPPORT_EMAIL}">Email support</a>
    </div>
  </div>
</section>

<style>
  .email,
  .yellow-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 60px;
    padding: 0 26px;
    border-radius: 14px;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
  }
  .email {
    background: #fff;
    color: var(--ink);
  }
  .yellow-btn {
    background: var(--yellow);
    color: var(--ink);
  }
  .email:hover,
  .yellow-btn:hover {
    color: var(--ink);
  }

  .tips-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 120px 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
  .tips-section h2,
  .faq-section h2 {
    text-align: center;
  }
  .tips {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
  @media (max-width: 760px) {
    .tips {
      grid-template-columns: minmax(0, 1fr);
    }
  }
  .tip {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 24px;
    background: #fff;
    border: 1px solid var(--line);
  }
  .tip.warn {
    padding: 7px;
    border: 0;
    background: var(--yellow);
  }
  .tip.warn > div {
    height: 100%;
    padding: 26px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 3px solid var(--ink);
    border-radius: 18px;
  }
  .tip h3 {
    margin: 0;
    font-family: var(--display);
    font-weight: 700;
    font-size: 28px;
    text-transform: uppercase;
  }
  .tip p {
    margin: 0;
    font-size: 17px;
    line-height: 1.55;
    color: var(--muted);
  }
  .tip.warn p {
    color: var(--ink);
  }

  .faq-section {
    max-width: 820px;
    margin: 0 auto;
    padding: 140px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
  .faq-wrap {
    width: 100%;
  }

  .contact-wrap {
    padding: 0 14px;
  }
  .contact {
    padding: 88px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }
  .contact h2 {
    font-size: clamp(44px, 6vw, 88px);
    line-height: 0.9;
  }
  .contact p {
    margin: 0;
    max-width: 26em;
    font-size: 20px;
    line-height: 1.5;
    color: var(--muted-dark);
  }
</style>
