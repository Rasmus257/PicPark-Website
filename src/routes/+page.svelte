<script>
  import { onMount } from 'svelte';

  let apiStatus = { status: 'checking', ping: '...', message: 'Connecting...' };
  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  /**
   * @param {string} id
   */
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(async () => {
    try {
      const healthRes = await fetch('/api/status');

      const healthData = await healthRes.json();

      apiStatus = {
        status: healthData.status,
        ping: healthData.ping,
        message: healthData.message,
      };
    } catch (error) {
      apiStatus = { status: 'down', ping: 'timeout', message: 'API unavailable' };
    }

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });
  });
</script>

<svelte:head>
  <title>PicPark - Smart Parking Sign Detection | AI-Powered Parking Assistant</title>
  <meta
    name="description"
    content="Never get a parking ticket again! PicPark uses AI to instantly decode complex parking signs worldwide. Get clear yes/no answers in seconds. Free download."
  />
  <meta name="keywords" content="parking app, parking signs, AI parking, parking assistant, parking tickets, smart parking, parking detection" />
  <meta name="author" content="PicPark" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Open Graph -->
  <meta property="og:title" content="PicPark - Smart Parking Sign Detection" />
  <meta
    property="og:description"
    content="PicPark is the simple way to read parking signs. Whether it's a clean, complex, or confusing sign, PicPark gives you an instant yes or no, so you can park without overthinking."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://picpark.app" />
  <meta property="og:image" content="https://picpark.app/og-image.png" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="PicPark - Smart Parking Sign Detection" />
  <meta
    name="twitter:description"
    content="PicPark is the simple way to read parking signs. Whether it's a clean, complex, or confusing sign, PicPark gives you an instant yes or no, so you can park without overthinking."
  />
  <meta name="twitter:image" content="https://picpark.app/og-image.png" />

  <!-- Canonical -->
  <link rel="canonical" href="https://picpark.app" />

  <!-- JSON-LD -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "PicPark",
      "description": "AI-powered parking sign detection app that helps you avoid parking tickets",
      "url": "https://picpark.app",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": ["iOS", "Android"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  </script>
</svelte:head>

<!-- Hero Section -->
<div class="relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="text-center relative z-10">
      <div class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-8">🌍 Works Worldwide with AI</div>

      <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
        Turn Confusing
        <br class="hidden sm:block" />
        <span class="text-blue-500">Parking Signs</span> Crystal Clear
      </h1>

      <p class="mt-6 text-xl leading-8 text-gray-700 max-w-3xl mx-auto">
        Complex parking signs got you puzzled? Advanced AI technology instantly decodes any parking sign worldwide – from multilingual text to cryptic symbols. Get clear yes/no
        answers in seconds.
      </p>

      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          on:click={() => scrollToSection('download')}
          class="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          Download Free App
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <button on:click={openModal} class="text-gray-700 hover:text-blue-600 font-semibold text-lg flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
          Watch Demo
        </button>
      </div>
    </div>

    <!-- Floating parking icons -->
    <div class="absolute top-16 left-8 opacity-60 float-sign" style="animation-delay: 0s;">
      <svg class="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>
    <div class="absolute top-32 right-16 opacity-40 float-sign" style="animation-delay: 2s;">
      <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        ></path>
      </svg>
    </div>
    <div class="absolute bottom-32 left-20 opacity-50 float-sign" style="animation-delay: 4s;">
      <svg class="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div class="absolute bottom-16 right-8 opacity-60 float-sign" style="animation-delay: 1s;">
      <svg class="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </div>
  </div>
</div>

<!-- How It Works Section -->
<div class="py-20 bg-white/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
      <p class="text-gray-600 text-xl max-w-3xl mx-auto">
        From confusing parking signs to crystal clear answers in seconds. Advanced AI handles the complexity so you don't have to.
      </p>
    </div>

    <!-- Process Flow -->
    <div class="relative mb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Step 1 -->
        <div class="text-center group relative">
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</div>
          <div
            class="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl"
          >
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              ></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Snap & Capture</h3>
          <p class="text-gray-600 text-lg md:mb-4 h-32 md:h-28">
            Simply point your camera at any parking sign. Advanced optical character recognition captures all text, symbols, and formatting instantly.
          </p>
          <div class="bg-blue-50 rounded-xl p-4 text-sm text-blue-800 h-24 flex flex-col justify-center">
            <div class="flex items-center justify-center space-x-2 mb-2">
              <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span class="font-medium">Instant capture</span>
            </div>
            <div class="text-blue-600">Fast photo processing with smart cropping</div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="text-center group relative">
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</div>
          <div
            class="mx-auto w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl"
          >
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">AI Intelligence</h3>
          <p class="text-gray-600 text-lg md:mb-4 h-32 md:h-28">
            Sophisticated machine learning algorithms interpret complex parking regulations, time restrictions, permit requirements and local exceptions.
          </p>
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 text-sm h-24 flex items-center">
            <div class="grid grid-cols-2 gap-3 text-xs justify-items-center w-full">
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                <span class="text-blue-700">Time parsing</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                <span class="text-purple-700">Rule analysis</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                <span class="text-green-700">Multi-language</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                <span class="text-orange-700">Context aware</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="text-center group relative">
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</div>
          <div
            class="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl"
          >
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Instant Clarity</h3>
          <p class="text-gray-600 text-lg md:mb-4 h-32 md:h-28">Get a clear YES or NO answer with detailed explanations, time limits, and helpful tips to avoid tickets.</p>
          <div class="bg-green-50 rounded-xl p-4 h-24 flex flex-col justify-center">
            <div class="flex items-center justify-center space-x-2 mb-2">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="font-medium text-green-800">You can park here!</span>
            </div>
            <div class="text-green-600 text-sm">2hr limit • Mon-Fri 9AM-6PM</div>
            <div class="text-green-500 text-xs mt-1">⏰ Set reminder for 1h 45min</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Features -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
      <div class="flex items-center justify-center mb-8">
        <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
        <h3 class="text-2xl font-bold text-gray-900">Advanced Capabilities</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Global Coverage</h4>
          <p class="text-gray-600 text-sm">Works in 50+ countries with local parking rules</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Smart Reminders</h4>
          <p class="text-gray-600 text-sm">Auto-set timers before your parking expires</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Secure & Private</h4>
          <p class="text-gray-600 text-sm">Your photos are processed securely and never stored</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Ticket Prevention</h4>
          <p class="text-gray-600 text-sm">Avoid costly mistakes with clear parking guidance</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- How It Looks Section -->
<div class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">See It In Action</h2>
      <p class="text-gray-600 text-lg">Real examples of PicPark analyzing parking signs</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white rounded-2xl p-6 shadow-lg">
        <div class="aspect-square bg-gray-200 rounded-xl mb-4 overflow-hidden">
          <img src="/ParkSignPhoto.jpg" alt="Parking sign photo" class="w-full h-full object-cover" />
        </div>
        <h3 class="font-semibold mb-2">Step 1: Take Photo</h3>
        <p class="text-gray-600 text-sm">Point your camera at any parking sign</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-lg">
        <div class="aspect-square bg-gray-200 rounded-xl mb-4 overflow-hidden">
          <img src="/ParkSignPhoto_Scan.png" alt="AI scanning parking sign" class="w-full h-full object-cover" />
        </div>
        <h3 class="font-semibold mb-2">Step 2: AI Analysis</h3>
        <p class="text-gray-600 text-sm">Advanced AI reads and interprets the sign</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-lg">
        <div class="aspect-square bg-gray-200 rounded-xl mb-4 overflow-hidden">
          <img src="/ParkSignPhoto_Result.png" alt="Parking analysis result" class="w-full h-full object-cover" />
        </div>
        <h3 class="font-semibold mb-2">Step 3: Clear Result</h3>
        <p class="text-gray-600 text-sm">Get instant yes/no with details</p>
      </div>
    </div>
  </div>
</div>

<!-- Download Section -->
<div id="download" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Park with Confidence?</h2>
    <p class="text-xl text-gray-600 mb-12">Download the app and never worry about parking tickets again.</p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      <a href="#" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 hover:bg-blue-700 transition-colors">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
          />
        </svg>
        <div class="text-left">
          <div class="text-xs">Download on the</div>
          <div class="text-lg">App Store</div>
        </div>
      </a>
      <a href="#" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 hover:bg-blue-700 transition-colors">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
          />
        </svg>
        <div class="text-left">
          <div class="text-xs">Get it on</div>
          <div class="text-lg">Google Play</div>
        </div>
      </a>
    </div>

    <p class="text-gray-500 text-sm">Free download • No subscription required • Works offline</p>
  </div>
</div>

<!-- Footer -->
<footer class="bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      <div class="col-span-2 md:col-span-2">
        <div class="flex items-center space-x-2 mb-4">
          <img src="/favicon.webp" alt="PicPark Logo" class="w-6 h-6" />
          <span class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">PicPark</span>
        </div>
        <p class="text-gray-400 mb-4 max-w-md text-sm sm:text-base">Never get a parking ticket again. Smart AI-powered parking sign detection that works offline on your device.</p>
        <div class="flex flex-col sm:flex-row sm:items-center text-sm space-y-1 sm:space-y-0 sm:space-x-2">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full {apiStatus.status === 'up' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}"></div>
            <span class="text-gray-400">API:</span>
            <span class="text-white">{apiStatus.message}</span>
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
          <li><button on:click={() => scrollToSection('download')} class="hover:text-white transition-colors text-left">Download</button></li>
          <li><button on:click={openModal} class="hover:text-white transition-colors text-left">Demo</button></li>
          <li><a href="/support" class="hover:text-white transition-colors">Features</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="/support" class="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="mailto:support@picpark.app" class="hover:text-white transition-colors">Contact Us</a></li>
          <li><a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="/support" class="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
      <p class="text-gray-400 text-xs sm:text-sm text-center">© {new Date().getFullYear()} PicPark. All rights reserved.</p>
    </div>
  </div>
</footer>

<!-- Demo Modal -->
{#if showModal}
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

<style>
  .scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }

  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .float-sign {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

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
