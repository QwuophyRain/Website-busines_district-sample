<script setup>
const submitForm = () => {
  alert('Thank you for reaching out to Business District International. We will review your inquiry and get back to you shortly.');
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-blue-900 border-b-4 border-yellow-500 inline-block pb-2">Contact Us</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
      <div>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Name</label>
            <input type="text" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition" required>
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Email</label>
            <input type="email" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition" required>
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">Inquiry</label>
            <textarea rows="4" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition" required></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md">
            Send Message
          </button>
        </form>
      </div>
      <div class="space-y-8 flex flex-col justify-center bg-slate-50 p-8 rounded-xl border border-slate-200">
        <div>
          <h3 class="text-xl font-bold text-blue-900 mb-2"><i class="fas fa-map-marker-alt mr-2 text-yellow-500"></i> Headquarters</h3>
          <p class="text-slate-600 mt-2 leading-relaxed">
            Westlands Boulevard, Kisseiman<br>
            Achimota<br>
            Ghana
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-blue-900 mb-2"><i class="fas fa-envelope mr-2 text-yellow-500"></i> Email</h3>
          <p class="text-slate-600 mt-2">info@venturemanagementarchitect.com</p>
        </div>
      </div>
    </div>
  </div>
</template>