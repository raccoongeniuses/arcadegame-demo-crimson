<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <button @click="logout" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white">
        Logout
      </button>
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
              <td class="p-3 text-center font-black text-white">{{ game.name }}</td>
              <td class="p-3 text-center">
                <span 
                  class="px-3 py-1 rounded font-semibold text-white"
                  :class="game.status === 'Online' ? 'bg-green-500' : 'bg-red-500'"
                >
                  {{ game.status }}
                </span>
              </td>
              <td class="p-3 text-center">
                <button 
                  v-if="game.status === 'Online'"
                  @click="launchGame"
                  class="inline-block cursor-pointer"
                >
                  <img :src="game.image" :alt="game.name" class="w-24 h-auto rounded-lg border-0">
                </button>
                <button v-else @click="showComingSoon" class="inline-block cursor-pointer">
                  <img :src="game.image" :alt="game.name" class="w-24 h-auto rounded-lg border-0 opacity-50">
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      games: [
        { 
          name: "Street Fighter", 
          status: "Online", 
          image: "/sf6.png", 
          id: "sf6"
        },
        { 
          name: "Tekken 8", 
          status: "Offline", 
          image: "/tekken8.png", 
          id: "tekken8" 
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("isAuthenticated");
      this.$router.push("/login");
    },

    showComingSoon() {
      Swal.fire({
        title: "Coming Soon!",
        text: "This game is not available yet. Stay tuned!",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#facc15",
        width: "400px",
        customClass: {
          title: "text-lg",
          content: "text-sm",
          popup: "p-4",
        },
      });
    },

  async launchGame() {
    const url = await this.generateGameLink();
    if (url !== "#") {
      window.open(url, "_blank");
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch game URL. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#facc15",
        width: "400px",
        customClass: {
          title: "text-lg",
          content: "text-sm",
          popup: "p-4",
        },
      });
    }
  },

  async generateGameLink() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_V1}/game/v1/user/launcher`
      );
      return response.data?.responseData?.data?.attributes?.url || "#";
    } catch (error) {
      console.error("Error fetching game URL:", error);
      return "#";
    }
  }
  },
};
</script>
