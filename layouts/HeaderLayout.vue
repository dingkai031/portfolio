<template>
  <header
    class="z-50 flex items-center justify-between px-8 py-4"
    :class="{ 'bg-white': !opened }"
  >
    <nuxt-link
      class="border-2 border-black p-1 text-lg font-extrabold"
      to="/"
      data-no-blobity
      no-underline-effect
      >YJA</nuxt-link
    >
    <nav
      class="flex max-md:fixed max-md:inset-0 max-md:-z-10 max-md:w-full max-md:flex-col max-md:gap-8 max-md:px-8 max-md:pt-[76px] md:space-x-3"
      :class="{
        'max-md:hidden': !opened,
        'bg-white': opened,
      }"
    >
      <div class="flex items-center">
        <nuxt-link class="max-md:text-6xl" @click="customScrollTo('#about')"
          >about.</nuxt-link
        >
      </div>
      <div class="flex items-center">
        <nuxt-link class="max-md:text-6xl" @click="customScrollTo('#works')"
          >works.</nuxt-link
        >
      </div>
      <CustomButton text="contact." @click="customScrollTo('#contact')" />
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
      :opened="opened"
    />
  </header>
</template>
<script setup>
  import HamburgerIcon from "~/components/HamburgerIcon.vue";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import CustomButton from "~/components/ButtonComponent.vue";

  gsap.registerPlugin(ScrollToPlugin);

  const opened = ref(false);
  const animating = ref(false);
  const animatingTimeout = ref(null);

  function customScrollTo(elmId) {
    if (opened.value) opened.value = false;
    gsap.to(window, { duration: 1.5, scrollTo: elmId, ease: "power3.inOut" });
  }
  function toggleOpen() {
    if (!animating.value) {
      animating.value = true;
      opened.value = !opened.value;
      animatingTimeout.value = setTimeout(() => {
        animating.value = false;
        clearTimeout(animatingTimeout.value);
      }, 601);
    }
  }
</script>
<style lang=""></style>
