<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Page Not Found - PicPark</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
  <div class="text-center max-w-md">
    <div class="mb-8">
      <svg class="w-24 h-24 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
      <h1 class="text-6xl font-bold text-gray-900 mb-2">404</h1>
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p class="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
    </div>

    <div class="space-y-4">
      <a href="/" class="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"> Back to Home </a>
      <div>
        <a href="/support" class="text-blue-600 hover:text-blue-800 font-medium">Need Help?</a>
      </div>
    </div>
  </div>
</div>
