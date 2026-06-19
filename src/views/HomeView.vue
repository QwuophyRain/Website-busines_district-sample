<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="w-full">
    <div class="bg-blue-800 text-white py-24 md:py-32 px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6">Venture Management Architect Firm</h1>
      <p class="text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
        We Formulate, Design, Build, Launch, and Manage Businesses on behalf of Global clients through Entrepreneurial Technological Innovation.
      </p>
      <button @click="router.push('/services')" class="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
        Explore Our Capabilities
      </button>
    </div>
  </div>
</template>