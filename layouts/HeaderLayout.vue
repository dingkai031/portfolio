<template>
  <header class="z-50 px-8 py-4" :class="{ 'bg-glass': !opened }">
    <div class="mx-auto flex max-w-[1580px] items-center justify-between">
      <nuxt-link
        class="border-2 border-black p-1 text-lg font-extrabold"
        to="/"
        data-no-blobity
        no-underline-effect
        >YJA</nuxt-link
      >
      <nav
        class="flex max-md:fixed max-md:inset-0 max-md:-z-10 max-md:w-full max-md:flex-col max-md:px-8 max-md:pt-[76px] md:space-x-3"
        :class="{
          'max-md:translate-x-1/3': !opened,
          'max-md:opacity-0': !opened,
          'max-md:hidden': !opened,
          'bg-glass': opened,
        }"
        id="nav-wrapper"
      >
        <div class="flex gap-8 max-md:flex-col md:items-center">
          <nuxt-link
            class="nav-list max-md:text-6xl"
            @click="customScrollTo('#about')"
            >about.</nuxt-link
          >
          <nuxt-link
            class="nav-list max-md:text-6xl"
            @click="customScrollTo('#works')"
            >works.</nuxt-link
          >
          <nuxt-link
            class="nav-list max-md:text-6xl"
            @click="customScrollTo('#contact')"
            >contact.</nuxt-link
          >
        </div>
      </nav>
      <HamburgerIcon
        data-no-blobity
        class="flex md:hidden"
        @click="toggleOpen"
        :size="40"
        :opened="opened"
      />
    </div>
  </header>
</template>
<script setup>
  import HamburgerIcon from "~/components/HamburgerIcon.vue";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { onMounted, onBeforeUnmount, watch } from "vue";

  gsap.registerPlugin(ScrollToPlugin);

  const opened = ref(false);
  const animating = ref(false);
  const animatingTimeout = ref(null);

  const screenWidth = ref(0);

  watch(screenWidth, (newWidth) => {
    if (opened.value && newWidth > 767) toggleOpen();
  });

  onMounted(() => {
    window.addEventListener("resize", windowResizeFunction);
  });

  onBeforeUnmount(() => {
    removeEventListener("resize", windowResizeFunction);
  });

  function windowResizeFunction(e) {
    screenWidth.value = e.target.innerWidth;
  }

  function customScrollTo(elmId) {
    if (opened.value && screenWidth.value < 768) toggleOpen();
    setTimeout(() => {
      if (!opened.value) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: elmId,
          ease: "power3.inOut",
        });
      }
    }, 1);
  }
  function toggleOpen() {
    if (!animating.value) {
      const timeline = gsap.timeline();
      const listElement = gsap.utils.toArray(".nav-list");
      if (!opened.value) {
        timeline.to("#nav-wrapper", {
          xPercent: 0,
          duration: 0.1,
          opacity: 1,
          display: "flex",
        });
        listElement.forEach((elm) => {
          timeline.fromTo(
            elm,
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              duration: 0.2,
              yPercent: 0,
              opacity: 1,
            }
          );
        });
      } else {
        timeline.to("#nav-wrapper", {
          xPercent: 33.33,
          duration: 0.2,
          opacity: 0,
          display: "none",
          onComplete: () => {
            document.querySelector("#nav-wrapper").removeAttribute("style");
          },
        });
      }
      animating.value = true;
      opened.value = !opened.value;
      animatingTimeout.value = setTimeout(() => {
        animating.value = false;
        clearTimeout(animatingTimeout.value);
      }, 700);
    }
  }
</script>
<style lang=""></style>
