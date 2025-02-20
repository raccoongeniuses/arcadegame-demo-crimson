<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <button @click="logout" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white">Logout</button>
    </div>

    <!-- Table -->
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
  },
  methods: {
    logout() {
      localStorage.removeItem("isAuthenticated");
      this.$router.push("/login");
    },
  },
};
</script>
