<script>
  import '../app.css';
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';

  let showModal = writable(false);
  setContext('modal', showModal);

  function openModal() {
    showModal.set(true);
  }

  function closeModal() {
    showModal.set(false);
  }

  setContext('openModal', openModal);
</script>

<main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
  <nav class="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <a href="/" class="flex items-center space-x-2">
            <img src="/favicon.webp" alt="PicPark Logo" class="w-7 h-7" />
            <span class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PicPark</span>
          </a>
        </div>
        <div class="flex items-center space-x-2 sm:space-x-6">
          <a href="/support" class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base">Support</a>
          <a href="/privacy" class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base">Privacy</a>
          <a
            href="/#download"
            class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 sm:px-4 rounded-full font-medium hover:shadow-lg transition-all text-sm sm:text-base"
          >
            Get App
          </a>
        </div>
      </div>
    </div>
  </nav>
  <slot />

  <!-- Demo Modal -->
  {#if $showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in" on:click={closeModal}>
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in" on:click|stopPropagation>
        <div class="flex justify-between items-center p-6 border-b">
          <h3 class="text-2xl font-bold text-gray-900">PicPark Demo</h3>
          <button on:click={closeModal} class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
            <div class="text-center text-gray-500">
              <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <p class="text-lg font-medium">Demo video placeholder</p>
              <p class="text-sm">Add your video embed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
