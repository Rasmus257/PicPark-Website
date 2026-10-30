<script>
  export let title = '';
  export let lead = '';
</script>

<header>
  <div class="plate blue">
    <div class="plate-inner body">
      <h1 class="display in">{title}</h1>
      <p class="in" style="animation-delay: 0.12s">{lead}</p>
      <div class="in" style="animation-delay: 0.22s"><slot /></div>
    </div>
  </div>
</header>

<style>
  header {
    padding: 0 14px;
  }
  .body {
    padding: 72px 24px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    text-align: center;
  }
  h1 {
    font-size: clamp(56px, 8vw, 116px);
    line-height: 0.9;
  }
  p {
    margin: 0;
    max-width: 30em;
    font-size: 21px;
    line-height: 1.45;
  }
</style>
