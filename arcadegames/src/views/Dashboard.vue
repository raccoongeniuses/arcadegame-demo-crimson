<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-3xl font-bold text-purple-300 uppercase">Game Launcher</h1>
      <button @click="logout" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white">
        Logout
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="(game, index) in games" 
        :key="index" 
        class="relative bg-gradient-to-br from-pink-600 to-purple-800 rounded-lg shadow-lg overflow-hidden"
      >
        <span 
          class="absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-lg text-white"
          :class="game.status === 'Online' ? 'bg-pink-500' : 'bg-blue-500'"
        >
          {{ game.status === 'Online' ? 'HOT' : 'COMING SOON' }}
        </span>

        <img :src="game.image" :alt="game.name" class="w-full h-180 object-cover rounded-t-lg">

        <div class="p-4">
          <h2 class="text-lg font-bold text-white">{{ game.name }}</h2>
          <p class="text-sm text-gray-200">{{ game.description }}</p>

          <div class="flex items-center mt-2">
            <span class="text-yellow-400 text-lg">★★★★★</span>
            <span class="text-gray-300 text-sm ml-2">({{ game.rating }})</span>
          </div>

          <!-- Category -->
          <span class="inline-block bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full mt-3">
            Fighting
          </span>

          <div class="mt-4">
            <button 
              v-if="game.status === 'Online'"
              @click="launchGame"
              class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              🎮 PLAY NOW
            </button>
            <button 
              v-else 
              @click="showComingSoon"
              class="w-full bg-blue-500 text-white font-bold py-2 rounded-lg opacity-70 cursor-not-allowed"
            >
              ⏳ INCOMING
            </button>
          </div>
        </div>
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
          name: "Street Fighter 6", 
          status: "Online", 
          image: "/sf6.png", 
          description: "The newest edition of the legendary fighting game series with stunning visuals and next-gen gameplay.",
          rating: "4.9",
          id: "sf6"
        },
        { 
          name: "Tekken 8", 
          status: "Offline", 
          image: "/tekken8.png", 
          description: "The latest chapter in the legendary Tekken saga with revolutionary graphics and intense combat mechanics.",
          rating: "4.7",
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
