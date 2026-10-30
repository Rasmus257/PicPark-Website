<script>
  import AppStoreButton from '$lib/components/AppStoreButton.svelte';
  import Faq from '$lib/components/Faq.svelte';
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

  const countries = [
    {
      id: 'us',
      label: 'United States',
      when: 'Tuesday, 08:15',
      ok: false,
      verdict: 'No parking',
      detail: 'Street cleaning until 9:00 am',
      plain:
        "You can normally park for 2 hours, 8am to 6pm, Monday to Saturday. On Tuesday mornings from 7 to 9 the street is cleaned, so right now you can't park here.",
    },
    {
      id: 'de',
      label: 'Germany',
      when: 'Wednesday, 10:05',
      ok: true,
      verdict: 'You can park',
      detail: 'Set your disc to 10:30. Move by 12:30.',
      plain: 'On weekdays from 8:00 to 18:00 you need a parking disc and can stay up to 2 hours. Set the disc to the next half hour after you arrive.',
    },
    {
      id: 'fr',
      label: 'France',
      when: 'Sunday, 14:00',
      ok: true,
      verdict: 'You can park',
      detail: 'Free today. Paid from Monday 9:00.',
      plain: 'Parking is paid from 9:00 to 19:00, except on Sundays and public holidays. Today it costs nothing.',
    },
    {
      id: 'uk',
      label: 'United Kingdom',
      when: 'Saturday, 17:40',
      ok: true,
      verdict: 'You can park',
      detail: "Pay until 18:30, then it's free.",
      plain: "Monday to Saturday, 8.30am to 6.30pm, you pay at the machine and can stay 2 hours. If you leave, you can't come back within an hour.",
    },
    {
      id: 'se',
      label: 'Sweden',
      when: 'Thursday in January, 09:30',
      ok: false,
      verdict: 'No parking',
      detail: 'Street cleaning until 16:00',
      plain: 'Paid parking on weekdays from 7 to 19. But from 1 November to 15 May, Thursdays 8 to 16 are kept clear for street cleaning.',
    },
  ];
  let current = countries[0];

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
      a: 'Photos are sent securely for analysis and are never linked to your identity, sold or used for advertising. The <a href="/privacy">privacy policy</a> has the details.',
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
      <div class="sky">
        <div class="pole" aria-hidden="true"></div>
        {#if current.id === 'us'}
          <div class="stack" role="img" aria-label="US sign: 2 hour parking 8am to 6pm Monday through Saturday. Below: no parking 7am to 9am Tuesday, street cleaning.">
            <div class="drop us green">
              <div class="f44">2 Hour</div><div class="f32">Parking</div><div class="f26 mt8">8AM - 6PM</div><div class="f22 mt4">Mon thru Sat</div>
            </div>
            <div class="drop us red" style="animation-delay: 0.12s">
              <svg aria-hidden="true" width="56" height="56" viewBox="0 0 60 60" class="mx"
                ><circle cx="30" cy="30" r="25" fill="none" stroke="#C8231E" stroke-width="5" /><text
                  x="30"
                  y="41"
                  text-anchor="middle"
                  font-size="32"
                  font-weight="800"
                  fill="#15181D"
                  font-family="Barlow Condensed, sans-serif">P</text
                ><line x1="12" y1="12" x2="48" y2="48" stroke="#C8231E" stroke-width="5" /></svg
              >
              <div class="f30 mt4">No parking</div><div class="f26 mt8">7AM - 9AM</div><div class="f22 mt4">Tuesday</div><div class="f18 mt4">Street cleaning</div>
            </div>
          </div>
        {:else if current.id === 'de'}
          <div class="stack" role="img" aria-label="German sign: blue P. Below: parking disc, 2 hours. Below: Monday to Friday 8 to 18.">
            <div class="drop p-sign"><div>P</div></div>
            <div class="drop white row" style="animation-delay: 0.1s">
              <svg aria-hidden="true" width="52" height="52" viewBox="0 0 52 52"
                ><rect x="1" y="1" width="50" height="50" rx="6" fill="#1D5FAF" /><circle cx="26" cy="26" r="17" fill="#fff" /><path
                  d="M26 15v11l7 5"
                  stroke="#15181D"
                  stroke-width="3.5"
                  fill="none"
                  stroke-linecap="round"
                /></svg
              >
              2 Std.
            </div>
            <div class="drop white" style="animation-delay: 0.2s">Mo-Fr<br />8-18 h</div>
          </div>
        {:else if current.id === 'fr'}
          <div class="stack" role="img" aria-label="French sign: blue P. Below: paid parking 9h to 19h, except Sundays and public holidays.">
            <div class="drop p-sign"><div>P</div></div>
            <div class="drop white wide" style="animation-delay: 0.1s">
              <div class="f38 caps">Payant</div>
              <div class="f30 mt8">9h - 19h</div>
              <div class="f19 mt8">sauf dimanches<br />et jours fériés</div>
            </div>
          </div>
        {:else if current.id === 'uk'}
          <div class="stack" role="img" aria-label="UK sign: pay at machine, Monday to Saturday 8.30am to 6.30pm, max stay 2 hours, no return within 1 hour.">
            <div class="drop uk">
              <div class="uk-top"><span class="uk-p">P</span><span>Pay at machine</span></div>
              <div>Mon - Sat<br />8.30 am - 6.30 pm</div>
              <div class="uk-rule">Max stay 2 hours<br />No return within 1 hour</div>
            </div>
          </div>
        {:else}
          <div class="stack" role="img" aria-label="Swedish sign: blue P. Below: fee 7 to 19. Below: no parking Thursdays 8 to 16, from 1 November to 15 May.">
            <div class="drop p-sign small"><div>P</div></div>
            <div class="drop se-fee" style="animation-delay: 0.1s"><div>Avgift<br />7-19</div></div>
            <div class="drop se-no" style="animation-delay: 0.2s">
              <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48"
                ><circle cx="24" cy="24" r="20" fill="#1D5FAF" stroke="#C8231E" stroke-width="5" /><line
                  x1="11"
                  y1="11"
                  x2="37"
                  y2="37"
                  stroke="#C8231E"
                  stroke-width="5"
                /></svg
              >
              <span>Torsd 8-16<br />1/11-15/5</span>
            </div>
          </div>
        {/if}
      </div>

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
    gap: 20px;
  }
  @media (max-width: 900px) {
    .split {
      grid-template-columns: minmax(0, 1fr);
    }
    .sky {
      min-height: 360px;
    }
  }
  .sky {
    position: relative;
    min-height: 480px;
    padding: 48px 24px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 24px;
    background: #dde5ee;
  }
  .pole {
    position: absolute;
    left: 50%;
    top: 40px;
    bottom: 0;
    width: 12px;
    margin-left: -6px;
    border-radius: 6px;
    background: #8e98a3;
  }
  .stack {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-family: var(--display);
    font-weight: 800;
    line-height: 1.05;
    text-align: center;
  }
  .us {
    width: 230px;
    padding: 14px 10px;
    border-radius: 10px;
    background: #fff;
    border: 4px solid;
    text-transform: uppercase;
    line-height: 1;
  }
  .us.green {
    color: #1e7a3c;
  }
  .us.red {
    color: #c8231e;
  }
  .mx {
    margin: 0 auto;
  }
  .p-sign {
    width: 150px;
    height: 150px;
    padding: 7px;
    border-radius: 14px;
    background: var(--sign-blue);
  }
  .p-sign.small {
    width: 140px;
    height: 140px;
  }
  .p-sign div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    border-radius: 9px;
    color: #fff;
    font-size: 104px;
    line-height: 1;
  }
  .white {
    width: 190px;
    padding: 12px;
    border-radius: 8px;
    background: #fff;
    border: 3px solid var(--ink);
    font-size: 32px;
  }
  .white.row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    font-size: 34px;
    line-height: 1;
  }
  .white.wide {
    width: 220px;
    padding: 14px 10px;
  }
  .uk {
    width: 260px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    background: #fff;
    border: 3px solid var(--ink);
    font-family: var(--body);
    font-weight: 700;
    font-size: 22px;
    line-height: 1.15;
    text-align: left;
  }
  .uk-top {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .uk-p {
    width: 58px;
    height: 58px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: var(--sign-blue);
    color: #fff;
    font-family: var(--display);
    font-weight: 800;
    font-size: 46px;
  }
  .uk-rule {
    padding-top: 10px;
    border-top: 2px solid var(--ink);
    font-size: 19px;
  }
  .se-fee {
    width: 140px;
    padding: 6px;
    border-radius: 10px;
    background: var(--sign-blue);
  }
  .se-fee div {
    padding: 8px;
    border: 3px solid #fff;
    border-radius: 6px;
    color: #fff;
    font-size: 30px;
  }
  .se-no {
    width: 200px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    background: var(--yellow);
    border: 4px solid #c8231e;
    font-size: 28px;
    text-align: left;
  }
  .se-no svg {
    flex-shrink: 0;
  }
  .f44 {
    font-size: 44px;
  }
  .f38 {
    font-size: 38px;
  }
  .f32 {
    font-size: 32px;
  }
  .f30 {
    font-size: 30px;
  }
  .f26 {
    font-size: 26px;
  }
  .f22 {
    font-size: 22px;
  }
  .f19 {
    font-size: 19px;
    font-weight: 700;
  }
  .f18 {
    font-size: 18px;
  }
  .mt4 {
    margin-top: 4px;
  }
  .mt8 {
    margin-top: 8px;
  }
  .caps {
    text-transform: uppercase;
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
    .drop {
      animation: drop 0.55s var(--ease) both;
    }
  }
  @keyframes swap {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
  }
  @keyframes drop {
    from {
      opacity: 0;
      transform: translateY(-18px);
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
