<script>
  import AppStoreButton from '$lib/components/AppStoreButton.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import { onMount } from 'svelte';
  import { SITE_URL, APP_STORE_URL, OG_IMAGE } from '$lib/site.js';

  const title = 'PicPark: Can I park here? Parking sign reader app';
  const description =
    'Snap any parking sign and PicPark tells you if you can park, until when, and when to move. Reads parking signs in many countries. Free on the App Store.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'PicPark',
    description,
    url: SITE_URL,
    image: OG_IMAGE,
    installUrl: APP_STORE_URL,
    operatingSystem: 'iOS',
    applicationCategory: 'TravelApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  // Photos from Wikimedia Commons, cropped; credit lines are required by their licenses.
  const countries = [
    {
      id: 'us',
      label: 'United States',
      when: 'Friday in June, 08:15',
      ok: false,
      verdict: 'No parking',
      detail: 'Street cleaning until 9:00 am. Tow zone.',
      plain:
        'Normally you can park for 2 hours, 9am to 10pm, Monday to Saturday. But from April to October the street is cleaned on Friday mornings from 7 to 9, and cars left there get towed.',
      alt: 'Chicago signs on one pole. Top: street cleaning, no parking 7am to 9am Fridays, April 1 to October 31, tow zone. Bottom: two hour parking 9am to 10pm Monday to Saturday.',
      credit: { title: 'Street Cleaning and Two Hour Parking signs', author: 'Eric Fischer', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Street_Cleaning_and_Two_Hour_Parking_signs_(37412426774).jpg' },
    },
    {
      id: 'de',
      label: 'Germany',
      when: 'Wednesday, 10:05',
      ok: true,
      verdict: 'You can park',
      detail: 'Set your disc to 10:30. Move by 11:30.',
      plain: 'On working days, Monday to Saturday, from 8:00 to 18:00 you need a parking disc and can stay up to 1 hour. Set the disc to the next half hour after you arrive.',
      alt: 'German sign: blue P with an arrow to the left. Below: werktags 8 to 18h. Below: parking disc, 1 Std.',
      credit: { title: 'Zeichen 314 in Neuendettelsau', author: 'Alexander Rahm', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Zeichen_314_in_Neuendettelsau_20250126_143043.jpg' },
    },
    {
      id: 'fr',
      label: 'France',
      when: 'Tuesday, 13:15',
      ok: true,
      verdict: 'You can park',
      detail: 'Free until 14:00. Then set your disc and move by 15:00.',
      plain: 'With a parking disc you can stay up to 1 hour, from 9:00 to 12:30 and from 14:00 to 19:00. Over lunch there is no limit.',
      alt: 'French sign: blue P with a parking disc symbol. Below: parking disc, 9h00 to 12h30, 14h00 to 19h00, maxi 1h.',
      credit: { title: "Civrieux-d'Azergues, Panneau C1b M6c parking à disque", author: 'Sebleouf', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: "https://commons.wikimedia.org/wiki/File:Civrieux-d'Azergues_-_Panneau_C1b_M6c_parking_%C3%A0_disque_(ao%C3%BBt_2018).jpg" },
    },
    {
      id: 'uk',
      label: 'United Kingdom',
      when: 'Saturday, 15:00',
      ok: false,
      verdict: 'No parking',
      detail: 'Permit holders only until 4:00 pm.',
      plain: 'On Saturdays you can pay at the machine from 9am to 2pm and from 4 to 6.30pm. Between 2 and 4pm, and from 6.30 to 8pm, only zone F permit holders can park here.',
      alt: 'London parking sign. Monday to Friday: 9am to 6.30pm permit holders F or pay at machine, 6.30 to 8pm permit holders only. Saturday: 9am to 2pm and 4 to 6.30pm permit holders F or pay at machine, 2 to 4pm and 6.30 to 8pm permit holders only.',
      credit: { title: 'Hammersmith & Fulham roadside parking restriction notice', author: 'DeFacto', license: 'CC BY-SA 2.5', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/', source: 'https://commons.wikimedia.org/wiki/File:Hammersmith_%26_Fulham_roadside_parking_restriction_notice.jpg' },
    },
    {
      id: 'se',
      label: 'Sweden',
      when: 'Wednesday in November, 12:30',
      ok: false,
      verdict: 'No parking',
      detail: 'Not allowed until 15:00.',
      plain: 'This is paid parking, up to 2 hours from 08 to 18. But on Wednesdays from 12 to 15, between 1 October and 30 April, parking is not allowed here.',
      alt: 'Swedish sign: blue P. Below: Avgift. Below: 2 tim 08 to 18. Below, yellow: no parking Onsdag 12 to 15, 1 okt to 30 april. Below: 0 to 8 m.',
      credit: { title: 'Parkering-Lkpg-Ekkallan-Datum', author: 'Riiga', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', source: 'https://commons.wikimedia.org/wiki/File:Parkering-Lkpg-Ekkallan-Datum.jpg' },
    },
  ];
  let current = countries[0];
  // Warm the cache so switching countries doesn't flash an empty frame.
  onMount(() => countries.forEach((c) => (new Image().src = `/signs/${c.id}.webp`)));

  const faq = [
    {
      q: 'Does PicPark work in my country?',
      a: 'PicPark reads parking signs from many countries and languages. It is made for travelers, rental cars and unfamiliar cities as much as your own street.',
    },
    { q: 'Is it free, and do I need an account?', a: 'PicPark is free to download from the App Store. No account needed, just open it and start scanning.' },
    {
      q: 'Can it read several signs on one pole?',
      a: 'Yes. It combines every plate, including discs, fees, permits, resident zones and seasonal rules, into one answer for the current time.',
    },
    {
      q: 'What if PicPark gets it wrong?',
      a: 'Every answer shows a confidence score. When it is low, check the sign yourself and tap Report Issue. PicPark is a guide, and you are responsible for following local rules.',
    },
    {
      q: 'What happens to my photos?',
      a: 'Each photo is sent securely for analysis, used only to produce your result, then discarded. It is never stored or linked to your identity. Your history stays on your phone. The <a href="/privacy">privacy policy</a> has the details.',
    },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href="{SITE_URL}/" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{SITE_URL}/" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preload" as="image" href="/screens/result.webp" />
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<header class="hero container">
  <h1 class="in">Can I park here?</h1>
  <p class="in lead" style="animation-delay: 0.1s">Snap any parking sign, anywhere in the world. Get a clear yes or no, and when to move.</p>
  <div class="in" style="animation-delay: 0.2s"><AppStoreButton /></div>

  <div class="trio">
    <div class="phone fade side rise" style="animation-delay: 0.55s">
      <img src="/screens/scan.webp" width="640" height="1340" alt="PicPark camera pointed at a parking sign pole" />
    </div>
    <div class="phone fade main rise" style="animation-delay: 0.3s">
      <img src="/screens/result.webp" width="640" height="1340" alt="PicPark result: You can park, max 2 hours with parking disc, ends at 16:06" />
    </div>
    <div class="phone fade side rise" style="animation-delay: 0.7s">
      <img src="/screens/history.webp" width="640" height="1340" alt="PicPark history of past scans marked You can park or No parking" />
    </div>
  </div>
</header>

<section id="signs" class="container signs" aria-labelledby="signs-h">
  <div class="intro reveal">
    <h2 id="signs-h" class="display">Every country writes it differently</h2>
    <p class="lead">Same question, very different signs. Pick a country to see what the sign actually means right now.</p>
  </div>

  <div class="tabs" role="group" aria-label="Choose a country">
    {#each countries as c}
      <button type="button" class="tab" aria-pressed={c === current} on:click={() => (current = c)}>{c.label}</button>
    {/each}
  </div>

  {#key current}
    <div class="split swap">
      <figure class="photo">
        <img src="/signs/{current.id}.webp" width="1000" height="1000" alt={current.alt} />
        <figcaption>
          <a href={current.credit.source} target="_blank" rel="noopener">{current.credit.title}</a> by {current.credit.author},
          <a href={current.credit.licenseUrl} target="_blank" rel="noopener license">{current.credit.license}</a>, cropped
        </figcaption>
      </figure>

      <div class="answer">
        <div class="when">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            ><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg
          >{current.when}
        </div>
        <div class="verdict" class:no={!current.ok}>
          <div class="verdict-inner">
            <strong>{current.verdict}</strong>
            <span>{current.detail}</span>
          </div>
        </div>
        <div>
          <h3>In plain words</h3>
          <p>{current.plain}</p>
        </div>
      </div>
    </div>
  {/key}
</section>

<section id="how" class="container how" aria-labelledby="how-h">
  <h2 id="how-h" class="display reveal">From sign to answer</h2>
  <div class="steps-wrap">
    <div class="road" aria-hidden="true"><div class="road-line"></div></div>
    <ol class="steps">
      <li>
        <span class="marker pop">1</span>
        <h3>Snap the sign</h3>
        <p>Fit the whole pole in the photo, including the small plates underneath.</p>
      </li>
      <li>
        <span class="marker pop blue">2</span>
        <h3>Get one answer</h3>
        <p>PicPark combines every rule with the day, the time and your vehicle.</p>
      </li>
      <li>
        <span class="marker pop green">3</span>
        <h3>Park, then relax</h3>
        <p>Set a reminder and get a nudge before you have to move.</p>
      </li>
    </ol>
  </div>
</section>

<section class="after" aria-labelledby="after-h">
  <div class="plate dark">
    <div class="plate-inner">
      <div class="container after-body">
        <div class="intro reveal">
          <h2 id="after-h" class="display">Everything after yes</h2>
          <p class="lead">Reminders, history and your own parking stats, in the same app.</p>
        </div>
        <div class="bento">
          <div class="card l1 reveal">
            <h3>Reminders</h3>
            <p>5, 10 or 15 minutes before time runs out, or a custom timer.</p>
            <img class="reminder" src="/screens/reminder.webp" width="780" height="851" loading="lazy" alt="Reminder sheet with 5, 10 and 15 minute options before parking ends at 16:06" />
          </div>
          <div class="tile green l2 reveal">
            <div>
              <h3>Honest confidence</h3>
              <p>Every answer shows how sure PicPark is. Low score? Take a second look.</p>
            </div>
          </div>
          <div class="card center reveal">
            <h3 class="big">Every scan, saved</h3>
            <p>Look back at any spot you have checked, with the street and time.</p>
            <div class="phone history">
              <img src="/screens/history.webp" width="640" height="1340" loading="lazy" alt="History screen listing past scans marked You can park or No parking" />
            </div>
          </div>
          <div class="card r1 reveal">
            <h3>Your vehicle</h3>
            <p>Car, bike, bus or truck, plus disabled and electric permits. The answer follows.</p>
            <img class="vehicle" src="/screens/vehicle.webp" width="626" height="199" loading="lazy" alt="Vehicle picker with car, bike, bus and truck, plus Disabled and Electric" />
          </div>
          <div class="tile blue r2 reveal">
            <div>
              <h3>Your parking stats</h3>
              <p>Scans per week, average confidence and the areas you park in most.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="faq-section" aria-labelledby="faq-h">
  <h2 id="faq-h" class="display reveal">Questions</h2>
  <div class="reveal faq-wrap"><Faq items={faq} /></div>
  <p class="more">Something else? <a href="/support">Visit support</a></p>
</section>

<section class="cta-wrap">
  <div class="plate yellow reveal">
    <div class="plate-inner cta">
      <h2 class="display cta-h">Don't decode it yourself</h2>
      <p>Free on the App Store. No account needed.</p>
      <AppStoreButton />
    </div>
  </div>
</section>

<style>
  /* Hero */
  .hero {
    padding-top: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  h1 {
    margin: 0;
    font-weight: 800;
    font-size: clamp(48px, 6vw, 84px);
    line-height: 1;
    letter-spacing: -0.03em;
  }
  .hero .lead {
    font-size: 21px;
    max-width: 30em;
  }
  .trio {
    width: 100%;
    height: 474px;
    margin-top: 36px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
  }
  .fade {
    -webkit-mask-image: linear-gradient(180deg, #000 62%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 62%, transparent 100%);
  }
  .main {
    width: 310px;
    height: 470px;
    border-width: 11px;
    border-radius: 52px 52px 0 0;
    box-shadow: 0 -10px 50px -10px rgba(20, 32, 52, 0.35);
  }
  .side {
    width: 262px;
    height: 410px;
    margin-top: 64px;
    box-shadow: 0 -10px 40px -14px rgba(20, 32, 52, 0.3);
  }
  @media (max-width: 900px) {
    .side {
      display: none;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    .rise {
      animation: phoneUp 1.1s var(--ease) both;
    }
  }
  @keyframes phoneUp {
    from {
      opacity: 0;
      transform: translateY(80px);
    }
  }

  /* Country switcher */
  .signs {
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
  }
  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .tab {
    min-height: 48px;
    padding: 0 22px;
    border-radius: 999px;
    border: 2px solid #c9cdc6;
    background: #fff;
    color: var(--ink);
    font: 600 17px var(--body);
    cursor: pointer;
    transition:
      background-color 0.2s,
      color 0.2s,
      transform 0.25s var(--ease);
  }
  .tab:hover {
    transform: translateY(-1px);
  }
  .tab[aria-pressed='true'] {
    background: var(--ink);
    border-color: var(--ink);
    color: #fff;
    font-weight: 700;
  }
  .split {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 20px;
  }
  .answer {
    grid-column: 2;
    grid-row: 1;
  }
  @media (max-width: 900px) {
    .split {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 20px;
    }
    .photo {
      row-gap: 10px;
    }
    .answer {
      grid-column: auto;
      grid-row: auto;
    }
  }
  /* Subgrid puts the photo and answer card in one row, with the credit underneath; the photo fills that row. */
  .photo {
    margin: 0;
    grid-row: span 2;
    display: grid;
    grid-template-rows: subgrid;
  }
  .photo img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 24px;
    background: #dde5ee;
  }
  .photo figcaption {
    padding-left: 4px;
    color: var(--muted);
    font-size: 13px;
  }
  .photo figcaption a {
    color: inherit;
  }
  .answer {
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 22px;
    border-radius: 24px;
    background: #fff;
    border: 1px solid var(--line);
  }
  .when {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    color: var(--muted);
  }
  .verdict {
    padding: 6px;
    border-radius: 20px;
    background: var(--green);
    color: #fff;
  }
  .verdict.no {
    background: var(--red);
  }
  .verdict-inner {
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 3px solid #fff;
    border-radius: 15px;
  }
  .verdict strong {
    font-family: var(--display);
    font-weight: 800;
    font-size: 44px;
    line-height: 1;
  }
  .verdict span {
    font-size: 18px;
    font-weight: 600;
  }
  .answer h3 {
    margin: 0 0 8px;
    font-size: 17px;
  }
  .answer p {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    color: var(--muted);
  }
  @media (prefers-reduced-motion: no-preference) {
    .swap {
      animation: swap 0.5s var(--ease) both;
    }
  }
  @keyframes swap {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
  }

  /* How it works */
  .how {
    padding-top: 140px;
    padding-bottom: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
  .how h2 {
    text-align: center;
  }
  .steps-wrap {
    position: relative;
    width: 100%;
  }
  .road {
    position: absolute;
    top: 44px;
    left: 16.66%;
    right: 16.66%;
    height: 6px;
    overflow: clip;
  }
  .road-line {
    height: 100%;
    background: repeating-linear-gradient(90deg, var(--ink) 0 36px, transparent 36px 60px);
  }
  .steps {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
  }
  .steps li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
  }
  .marker {
    width: 94px;
    height: 94px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 5px solid var(--ink);
    background: #fff;
    font-family: var(--display);
    font-weight: 800;
    font-size: 48px;
  }
  .marker.blue {
    background: var(--blue);
    color: #fff;
  }
  .marker.green {
    background: var(--green);
    color: #fff;
  }
  .steps h3 {
    margin: 0;
    font-family: var(--display);
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;
  }
  .steps p {
    margin: 0;
    max-width: 19em;
    font-size: 18px;
    line-height: 1.55;
    color: var(--muted);
  }
  @media (max-width: 900px) {
    .steps {
      grid-template-columns: minmax(0, 1fr);
    }
    .road {
      display: none;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      .road-line {
        transform-origin: left center;
        animation: draw linear both;
        animation-timeline: view();
        animation-range: entry 30% cover 50%;
      }
      .pop {
        animation: pop linear both;
        animation-timeline: view();
        animation-range: entry 20% entry 80%;
      }
    }
  }
  @keyframes draw {
    from {
      transform: scaleX(0);
    }
  }
  @keyframes pop {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
  }

  /* Everything after yes */
  .after {
    padding: 0 14px;
  }
  .after-body {
    padding-top: 110px;
    padding-bottom: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }
  .after .lead {
    color: var(--muted-dark);
    max-width: 30em;
  }
  .bento {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr) minmax(0, 1fr);
    gap: 20px;
  }
  .l1 {
    grid-column: 1;
    grid-row: 1;
  }
  .l2 {
    grid-column: 1;
    grid-row: 2;
  }
  .center {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  .r1 {
    grid-column: 3;
    grid-row: 1;
  }
  .r2 {
    grid-column: 3;
    grid-row: 2;
  }
  @media (max-width: 900px) {
    .bento {
      grid-template-columns: minmax(0, 1fr);
    }
    .bento > * {
      grid-column: auto;
      grid-row: auto;
    }
  }
  .card {
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    border-radius: 24px;
    background: var(--asphalt-2);
  }
  .card.center {
    padding-bottom: 0;
    align-items: center;
    text-align: center;
  }
  .l1 {
    padding-bottom: 0;
  }
  .bento h3 {
    margin: 0;
    font-family: var(--display);
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
  }
  .bento h3.big {
    font-size: 34px;
  }
  .bento p {
    margin: 0;
    font-size: 17px;
    line-height: 1.5;
    color: var(--muted-dark);
  }
  .reminder {
    width: 100%;
    height: 230px;
    margin-top: 14px;
    object-fit: cover;
    object-position: top;
    border-radius: 18px 18px 0 0;
  }
  .vehicle {
    margin-top: auto;
    border-radius: 16px;
  }
  .history {
    width: 290px;
    max-width: 100%;
    height: 520px;
    margin-top: 22px;
  }
  .tile {
    padding: 7px;
    border-radius: 24px;
  }
  .tile > div {
    height: 100%;
    padding: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border: 3px solid #fff;
    border-radius: 18px;
  }
  .tile h3 {
    color: #fff;
  }
  .tile.green {
    background: var(--green);
  }
  .tile.green p {
    color: #e4f3ea;
  }
  .tile.blue {
    background: var(--blue);
  }
  .tile.blue p {
    color: #e4eefa;
  }

  /* FAQ */
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
  .more {
    margin: 0;
    font-size: 18px;
    color: var(--muted);
  }

  /* CTA */
  .cta-wrap {
    padding: 0 14px;
  }
  .cta {
    padding: 96px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    text-align: center;
  }
  .cta-h {
    font-size: clamp(52px, 7.5vw, 112px);
    line-height: 0.9;
  }
  .cta p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
</style>
