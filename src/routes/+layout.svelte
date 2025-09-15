<script>
  import '../app.css';
</script>

<main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
  <nav class="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="flex items-center space-x-2">
            <img src="/favicon.png" alt="PicPark Logo" class="w-8 h-8" />
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PicPark</span>
          </a>
        </div>
        <div class="flex items-center space-x-6">
          <a href="/support" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Support</a>
          <a href="/privacy" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Privacy</a>
          <a href="#download" class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"> Get App </a>
        </div>
      </div>
    </div>
  </nav>
  <slot />
</main>
