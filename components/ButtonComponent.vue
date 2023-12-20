<template>
  <nuxt-link
    no-underline-effect
    class="rounded-full bg-black px-6 py-2 text-lg text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:outline hover:outline-black md:inline"
    >{{ text }}</nuxt-link
  >
</template>

<script setup lang="ts">
  defineProps<{
    text: string;
  }>();
</script>
