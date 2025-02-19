<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <nav class="bg-gray-800 p-4 w-full">
      <div class="w-full px-4 flex justify-between">
        <span class="text-lg font-semibold">Arcade Dashboard</span>
      </div>
    </nav>
    
    <div class="w-full">
      <Dashboard />
    </div>
  </div>
</template>

<script setup>
import Dashboard from "./views/Dashboard.vue";
</script>
