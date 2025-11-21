<script>
  import '../app.css';

  /**
   * @param {string} id
   */
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
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
          <button
            on:click={() => scrollToSection('download')}
            class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 sm:px-4 rounded-full font-medium hover:shadow-lg transition-all text-sm sm:text-base"
          >
            Get App
          </button>
        </div>
      </div>
    </div>
  </nav>
  <slot />
</main>
