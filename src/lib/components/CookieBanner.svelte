<script>
  import { onMount } from 'svelte';

  const KEY = 'cookie-consent';
  export let open = false;

  onMount(() => {
    try {
      open = !localStorage.getItem(KEY);
    } catch {
      open = true;
    }
  });

  function choose(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    open = false;
    if (value === 'granted') window.loadAnalytics();
    // Withdrawn after GA already ran: reload so it's gone and app.html clears its cookies.
    else if (window.gaLoaded) location.reload();
  }
</script>

{#if open}
  <div class="banner" role="dialog" aria-label="Cookie consent">
    <p>
      We'd like to use Google Analytics cookies to see how this site is used. Nothing is loaded unless you accept. <a href="/privacy#p5">Privacy policy</a>
    </p>
    <div class="actions">
      <button type="button" class="decline" on:click={() => choose('denied')}>Decline</button>
      <button type="button" class="accept" on:click={() => choose('granted')}>Accept</button>
    </div>
  </div>
{/if}

<style>
  .banner {
    position: fixed;
    z-index: 50;
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: 560px;
    margin: 0 auto;
    padding: 18px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 20px;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: 0 12px 40px -12px rgba(21, 24, 29, 0.3);
  }
  p {
    flex: 1 1 260px;
    margin: 0;
    font-size: 15px;
    line-height: 1.45;
    color: var(--muted);
  }
  .actions {
    display: flex;
    gap: 10px;
  }
  button {
    min-height: 44px;
    padding: 0 20px;
    border-radius: 12px;
    font: inherit;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }
  .decline {
    background: transparent;
    border: 1.5px solid var(--ink);
    color: var(--ink);
  }
  .accept {
    background: var(--ink);
    border: 1.5px solid var(--ink);
    color: #fff;
  }
</style>
