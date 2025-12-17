<script>
  import { onMount, getContext } from 'svelte';
  
  const openModal = getContext('openModal');

  let apiStatus = { status: 'checking', ping: '...' };

  onMount(async () => {
    try {
      const start = performance.now();
      const healthRes = await fetch('https://api.picpark.app/status');
      const healthData = await healthRes.json();
      const pingMs = Math.round(performance.now() - start);

      apiStatus = {
        status: healthData.status,
        ping: `${pingMs}ms`,
      };
    } catch (error) {
      apiStatus = {
        status: 'offline',
        ping: 'timeout',
      };
    }
  });
</script>

<footer class="bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      <div class="col-span-2 md:col-span-2">
        <div class="flex items-center space-x-2 mb-4">
          <img src="/favicon.webp" alt="PicPark Logo" class="w-6 h-6" />
          <span class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">PicPark</span>
        </div>
        <p class="text-gray-400 mb-4 max-w-md text-sm sm:text-base">Never get a parking ticket again. Smart AI-powered parking sign detection that works worldwide.</p>
        <div class="flex flex-col sm:flex-row sm:items-center text-sm space-y-1 sm:space-y-0 sm:space-x-2">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full {apiStatus.status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}"></div>
            <span class="text-gray-400">API:</span>
            <span class="text-white">{apiStatus.status}</span>
          </div>
          {#if apiStatus.ping !== 'timeout'}
            <div class="hidden sm:block text-gray-600">•</div>
            <span class="text-gray-400">{apiStatus.ping}</span>
          {/if}
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="/#download" class="hover:text-white transition-colors">Download</a></li>
          <li><button on:click={openModal} class="hover:text-white transition-colors text-left">Demo</button></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="/support" class="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="mailto:support@picpark.app" class="hover:text-white transition-colors">Contact Us</a></li>
          <li><a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
      <p class="text-gray-400 text-xs sm:text-sm text-center">© {new Date().getFullYear()} PicPark. All rights reserved.</p>
    </div>
  </div>
</footer>
