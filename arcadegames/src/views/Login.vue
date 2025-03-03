<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-900">
    <div class="card w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
      <h1 class="text-3xl font-bold text-center text-white">Welcome back</h1>
      <p class="text-gray-400 text-center mb-6">Enter your credentials to sign in</p>

      <form @submit.prevent="login">
        <div v-if="error" class="alert alert-error mb-4">
          <span>{{ error }}</span>
        </div>

        <div class="form-control mb-6">
          <label class="label">
            <span class="label-text text-gray-300">Username</span>
          </label>
          <input 
            v-model="username" 
            type="text"
            required 
            class="input input-bordered w-full bg-gray-700 text-gray-900 rounded-lg h-10 text-lg"
          />
        </div>

        <div class="form-control mb-6">
          <label class="label">
            <span class="label-text text-gray-300">Password</span>
          </label>
          <input 
            v-model="password" 
            type="password" 
            required 
            class="input input-bordered w-full bg-white text-gray-900 rounded-lg h-10 text-lg"
          />
        </div>

        <button 
          type="submit" 
          class="btn w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg h-12 text-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref("");

const login = () => {
  localStorage.setItem("isAuthenticated", "true");
  router.push("/dashboard");
};
</script>
