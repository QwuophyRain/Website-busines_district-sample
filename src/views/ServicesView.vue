<script setup>
import { ref } from 'vue'

const servicesList = ref([
  { title: "Entrepreneurship", desc: "Providing holistic support for startup formulation, ensuring resilience and adaptability in dynamic markets." },
  { title: "Venture Management Architect", desc: "We formulate, design, build, launch, and manage businesses on behalf of our global clients, acting as hands-on architects of growth." },
  { title: "Economic & Management Consulting", desc: "Delivering world-class advisory, policy formulation, and strategic interventions across complex sectors.", sub: ["Banking", "Insurance", "Capital Management", "Public Sector", "Business & Financial Policies Strategies"] },
  { title: "Agro Business & Business Technology Innovation Services", desc: "Bridging the gap between agricultural potential and modern technology to scale agribusiness ventures globally." }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-blue-900 border-b-4 border-yellow-500 inline-block pb-2">Our Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="service in servicesList" :key="service.title" class="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-900 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-4 text-blue-800">{{ service.title }}</h3>
        <p class="text-slate-600 mb-6">{{ service.desc }}</p>
        <div v-if="service.sub" class="bg-slate-50 p-5 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Key Sectors:</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li v-for="sub in service.sub" :key="sub" class="flex items-start text-sm font-medium text-slate-700">
              <i class="fas fa-check-circle text-yellow-500 mt-1 mr-2"></i> <span>{{ sub }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>