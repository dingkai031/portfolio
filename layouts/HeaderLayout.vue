<template>
  <header class="flex items-center justify-between px-8 py-4">
    <nuxt-link class="text-lg font-bold" to="/" data-no-blobity>YJA</nuxt-link>
    <nav
      class="flex max-md:fixed max-md:inset-0 max-md:-z-10 max-md:w-full max-md:flex-col max-md:gap-8 max-md:bg-white max-md:px-8 max-md:pt-[76px] md:space-x-3"
      :class="{
        'max-md:hidden': !opened,
      }"
    >
      <div class="flex items-center">
        <nuxt-link class="max-md:text-6xl" :to="{ path: '/', hash: '#section' }"
          >about.</nuxt-link
        >
      </div>
      <div class="flex items-center">
        <nuxt-link class="max-md:text-6xl" :to="{ path: '/', hash: '#section' }"
          >works.</nuxt-link
        >
      </div>
      <nuxt-link
        no-underline-effect
        class="hidden rounded-full bg-black px-6 py-2 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black md:inline"
        :to="{ path: '/', hash: '#section' }"
        >contact.</nuxt-link
      >
    </nav>
    <nuxt-link
      no-underline-effect
      class="rounded-full bg-black px-6 py-2 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black max-md:me-3 max-md:ms-auto md:hidden"
      :to="{ path: '/', hash: '#section' }"
      >contact.</nuxt-link
    >
    <HamburgerIcon
      data-no-blobity
      class="flex md:hidden"
      @click="toggleOpen"
      :size="40"
    />
  </header>
</template>
<script setup>
  import HamburgerIcon from "~/components/HamburgerIcon.vue";

  const opened = ref(false);

  function toggleOpen() {
    opened.value = !opened.value;
  }
</script>
<style lang=""></style>
