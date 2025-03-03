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
                <a 
                  v-if="game.status === 'Online'"
                  :href="generateGameLink(game.link)"
                  target="_blank"
                  class="inline-block cursor-pointer"
                >
                  <img :src="game.image" :alt="game.name" class="w-24 h-auto rounded-lg border-0">
                </a>
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
import Swal from "sweetalert2";

export default {
  data() {
    return {
      games: [
        { 
          name: "Street Fighter", 
          status: "Online", 
          image: "/sf6.png", 
          link: "http://sf.arcadegame-stream.com/?currency=THB&lang=en"
        },
        { 
          name: "Tekken 8", 
          status: "Offline", 
          image: "/tekken8.png", 
          link: "#" 
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

    generateGameLink(baseURL) {
      const token = this.generateToken(); // generate token
      const returnURL = encodeURIComponent("https://m13.ns86.kingdomhall729.com/portal");
      
      // append token and returnURL to the game link
      return `${baseURL}&params=${token}&returnURL=${returnURL}&test=0`;
    },

    generateToken() {
      // generate a random Base64 token
      const randomBytes = new Uint8Array(32);
      crypto.getRandomValues(randomBytes);
      return btoa(String.fromCharCode.apply(null, randomBytes));
    }
  },
};
</script>
