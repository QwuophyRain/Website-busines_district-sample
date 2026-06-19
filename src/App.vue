<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
    <header class="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <RouterLink to="/" class="text-2xl font-bold tracking-tight cursor-pointer mb-4 md:mb-0">
          Business District International
        </RouterLink>
        <nav class="flex flex-wrap justify-center space-x-4 md:space-x-6 font-medium text-sm">
          <RouterLink to="/" class="nav-link">HOME</RouterLink>
          <RouterLink to="/about" class="nav-link">ABOUT US</RouterLink>
          <RouterLink to="/services" class="nav-link">SERVICES</RouterLink>
          <RouterLink to="/governance" class="nav-link">GOVERNANCE</RouterLink>
          <RouterLink to="/contact" class="nav-link">CONTACT</RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-grow w-full">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="bg-slate-900 text-slate-400 py-8 text-center text-sm mt-auto">
      <p>&copy; 2026 Business District International. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
.nav-link {
  @apply hover:text-yellow-300 transition-colors duration-200 py-1;
}
.router-link-active {
  @apply text-yellow-400 border-b-2 border-yellow-400;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>