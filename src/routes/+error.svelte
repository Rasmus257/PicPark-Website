<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status === 404 ? 'Page not found' : 'Something went wrong'} | PicPark</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="container">
  <div class="sign" aria-hidden="true"><span></span></div>
  <h1 class="display">{$page.status === 404 ? 'Wrong turn' : 'Something went wrong'}</h1>
  <p class="lead">
    {$page.status === 404 ? "This page doesn't exist or has moved." : 'Please try again in a moment.'}
  </p>
  <div class="actions">
    <a class="btn home" href="/">Back to home</a>
    <a href="/support">Need help?</a>
  </div>
</main>

<style>
  main {
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    text-align: center;
  }
  /* No-entry sign */
  .sign {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--red);
    box-shadow: inset 0 0 0 5px #fff, 0 0 0 2px var(--red);
  }
  .sign span {
    width: 70px;
    height: 16px;
    border-radius: 3px;
    background: #fff;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 24px;
    font-weight: 600;
  }
  .home {
    display: inline-flex;
    align-items: center;
    min-height: 52px;
    padding: 0 24px;
    border-radius: 14px;
    background: var(--ink);
    color: #fff;
    text-decoration: none;
  }
  .home:hover {
    color: #fff;
  }
</style>
