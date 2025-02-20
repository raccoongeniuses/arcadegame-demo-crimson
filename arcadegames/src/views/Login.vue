<template>
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold text-white mb-4 text-center">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-300">Username</label>
          <input v-model="username" class="w-full p-2 bg-gray-700 text-white rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-300">Password</label>
          <input type="password" v-model="password" class="w-full p-2 bg-gray-700 text-white rounded" required />
        </div>
        <div>
          <button type="submit" class="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded mt-4" style="margin-top: 10px;">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Always successful login
      localStorage.setItem("isAuthenticated", "true");
      this.$router.push("/dashboard");
    },
  },
};
</script>
