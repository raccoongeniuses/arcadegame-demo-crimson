<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-5 py-5">Dashboard</h1>
    
    <!-- Responsive Table Wrapper -->
    <div class="w-full">
      <div class="overflow-x-auto lg:overflow-visible">
        <table class="table min-w-full border border-gray-700">
          <thead>
            <tr class="bg-gray-800 text-white">
              <th class="p-3 text-center">No.</th>
              <th class="p-3 text-center">Game Name</th>
              <th class="p-3 text-center">Status</th>
              <th class="p-3 text-center">Launch</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(game, index) in games" :key="index" class="border-b border-gray-700">
              <td class="p-3 text-center">{{ index + 1 }}.</td>
              <td class="p-3 text-center">{{ game.name }}</td>
              <td class="p-3 text-center">
                <span class="badge" :class="game.status === 'Online' ? 'badge-success' : 'badge-error'">
                  {{ game.status }}
                </span>
              </td>
              <td class="p-3 text-center">
                <a :href="game.link" target="_blank" class="inline-block cursor-pointer">
                  <img :src="game.image" :alt="game.name" class="w-24 h-auto rounded-lg border-0">
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        { name: "Street Fighter", status: "Online", image: "/sf6.png", link: "#" },
        { name: "Tekken 8", status: "Offline", image: "/tekken8.png", link: "#" },
        { name: "Mortal Kombat", status: "Offline", image: "/mortalkombat.png", link: "#" },
      ],
    };
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.badge-success {
  background-color: #10b981;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.badge-error {
  background-color: #ef4444;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

/* Ensure text and elements stay centered */
th, td {
  text-align: center;
}
</style>
