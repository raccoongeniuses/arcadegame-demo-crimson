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
<!-- test repo1 -->
<script>
export default {
  data() {
    return {
      games: [
        { name: "Street Fighter", status: "Online", image: "/sf6.png", link: "http://sf.arcadegame-stream.com/?currency=THB&lang=en&params=ZQHxo6Nil4BIJ9UTXArXxOepNjPxBbWo2iscmE5l586ilh4p6CHTAwRj7Ikf%0A6svkV7j16RpTceT%2F%2F4pA6A4dYGK2EAqH2RRpGKZy7wkApxFlGg64mgA7dLLS%0Ay43%2Bbc%2FoUsgC5QlQmtEJr%2BKODQC3Ixt%2FX54wuElFBcDctztqcNvMUxxp9B91%0Ar2oRzbHCr1o4SsjfSghPQBqA6yO90fqjukanFdqplgylp%2Fh6dwbghFrpIxw6%0ASN9cMbM3vcs9Gp9xid6wjyVO3CJmDY1gznZ13MYdqSNhjpXmhFl0%2FkHSMgVx%0A84D%2BF%2FDnUea%2BYqcOWYGhG1dZ9heQ6zs%3D%0A&returnURL=https%3A%2F%2Fm13.ns86.kingdomhall729.com%2Fportal&test=0" },
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
