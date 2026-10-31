<script>
  /** @type {{ q: string, a: string }[]} answers may contain trusted inline HTML (links) */
  export let items = [];
</script>

<div class="faq">
  {#each items as item}
    <details>
      <summary>{item.q}<span class="x" aria-hidden="true">+</span></summary>
      <p class="ans">{@html item.a}</p>
    </details>
  {/each}
</div>

<style>
  .faq {
    width: 100%;
    border-top: 2px solid var(--ink);
  }
  details {
    border-bottom: 1px solid #cfd2cb;
  }
  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    min-height: 44px;
    padding: 24px 4px;
    font-size: 21px;
    font-weight: 700;
    cursor: pointer;
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  .x {
    font-size: 32px;
    font-weight: 400;
    line-height: 1;
    color: var(--blue);
    transition: transform 0.3s var(--ease);
  }
  details[open] .x {
    transform: rotate(45deg);
  }
  .ans {
    margin: 0 4px 24px;
    font-size: 18px;
    line-height: 1.6;
    color: var(--muted);
  }
  @media (prefers-reduced-motion: no-preference) {
    details[open] .ans {
      animation: ans 0.35s var(--ease);
    }
  }
  @keyframes ans {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
  }
</style>
