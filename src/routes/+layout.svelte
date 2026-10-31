<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { APP_STORE_URL, SUPPORT_EMAIL } from '$lib/site.js';

  const links = [
    { href: '/#signs', label: 'Signs' },
    { href: '/#how', label: 'How it works' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/support', label: 'Support' },
  ];
</script>

<nav class="topnav" aria-label="Main">
  <a class="brand" href="/">
    <img src="/favicon.png" alt="" width="40" height="40" />
    <span>PicPark</span>
  </a>
  <div class="links">
    {#each links as link}
      <a href={link.href} aria-current={$page.url.pathname === link.href ? 'page' : undefined}>{link.label}</a>
    {/each}
  </div>
  <a class="btn download" href={APP_STORE_URL}>Download</a>
</nav>

<main>
  <slot />
</main>

<footer>
  <div class="road" aria-hidden="true"></div>
  <a class="brand" href="/">
    <img src="/favicon.png" alt="" width="36" height="36" loading="lazy" />
    <span>PicPark</span>
  </a>
  <nav aria-label="Footer">
    <a href="/support">Support</a>
    <a href="/privacy">Privacy</a>
    <a href="mailto:{SUPPORT_EMAIL}">{SUPPORT_EMAIL}</a>
  </nav>
  <p>PicPark is not responsible for parking tickets or fines. Always confirm local rules.<br />© {new Date().getFullYear()} PicPark</p>
</footer>

<style>
  .topnav {
    max-width: 1200px;
    min-height: 76px;
    margin: 0 auto;
    padding: 18px 24px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 16px;
  }
  .brand {
    justify-self: start;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--ink);
    text-decoration: none;
    font-family: var(--display);
    font-weight: 800;
    font-size: 30px;
  }
  .brand img {
    border-radius: 10px;
  }
  .links {
    display: flex;
    gap: 32px;
  }
  .links a {
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
  }
  .links a:hover,
  .links a[aria-current='page'] {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 7px;
  }
  .download {
    justify-self: end;
    display: inline-flex;
    align-items: center;
    min-height: 46px;
    padding: 0 22px;
    border-radius: 14px;
    background: var(--blue);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
  }
  .download:hover {
    color: #fff;
  }
  @media (max-width: 720px) {
    .topnav {
      display: flex;
      justify-content: space-between;
    }
    .links {
      display: none;
    }
  }

  footer {
    padding: 56px 24px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    text-align: center;
    color: var(--muted);
  }
  .road {
    width: 100%;
    max-width: 1200px;
    height: 6px;
    margin-bottom: 18px;
    background: repeating-linear-gradient(90deg, var(--ink) 0 36px, transparent 36px 60px);
    opacity: 0.18;
  }
  footer .brand {
    justify-self: auto;
    font-size: 28px;
  }
  footer nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
    font-size: 16px;
    font-weight: 600;
  }
  footer nav a {
    color: var(--ink);
  }
  footer p {
    margin: 0;
    max-width: 36em;
    font-size: 14px;
    line-height: 1.55;
  }
</style>
