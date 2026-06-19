<script setup>
import { ref } from 'vue'
const activeGovTab = ref('board')
const governanceTabs = ref([
  { id: 'board', name: 'Advisory Board' },
  { id: 'management', name: 'Management' },
  { id: 'awards', name: 'Awards' }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-blue-900 border-b-4 border-yellow-500 inline-block pb-2">Governance</h2>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full md:w-1/4 flex flex-col space-y-3">
        <button v-for="tab in governanceTabs" :key="tab.id" @click="activeGovTab = tab.id"
                :class="activeGovTab === tab.id ? 'bg-blue-900 text-white shadow-md' : 'bg-white text-blue-900 hover:bg-slate-100'"
                class="text-left px-6 py-4 rounded-lg font-bold transition-all border border-slate-200">
          {{ tab.name }} <i class="fas fa-chevron-right float-right mt-1 opacity-50" v-if="activeGovTab === tab.id"></i>
        </button>
      </div>
      <div class="w-full md:w-3/4 bg-white p-8 rounded-xl shadow-sm border border-slate-100 min-h-[300px]">
        <div v-if="activeGovTab === 'board'" class="animate-[fadeIn_0.5s_ease-out]">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Advisory Board</h3>
          <p class="text-slate-600 leading-relaxed">Our Advisory Board comprises leading global minds in enterprise architecture, economic policy, and technology. They provide critical strategic oversight to ensure our operations meet the highest standards of international business management.</p>
        </div>
        <div v-if="activeGovTab === 'management'" class="animate-[fadeIn_0.5s_ease-out]">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Executive Management</h3>
          <p class="text-slate-600 leading-relaxed">The management team oversees the daily execution of our mandate—formulating, building, and launching businesses with precision. They serve as the direct architects transforming entrepreneurial ideas into profitable ventures.</p>
        </div>
        <div v-if="activeGovTab === 'awards'" class="animate-[fadeIn_0.5s_ease-out]">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Awards & Recognition</h3>
          <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 p-6 rounded shadow-sm">
            <i class="fas fa-trophy text-3xl text-yellow-500 mb-3"></i>
            <p class="font-bold text-xl text-blue-900">2025 Architecture Awards Winner</p>
            <p class="text-slate-700 font-medium mt-1">Best Venture Management Architecture Firm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>