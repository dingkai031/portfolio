<template>
  <div
    id="loading-wrapper"
    class="fixed z-[100] flex h-full w-full bg-black"
    ref="loadingWrapper"
  >
    <div class="container mx-auto flex items-center justify-center">
      <GlitchComponent :text="percentage" id="glitch-component" />
      <RandomTextEffectComponent
        v-if="showWelcomeText"
        class="text-3xl opacity-0"
        id="random-component"
      />
    </div>
  </div>
</template>
<script setup>
  import { onMounted, computed } from "vue";
  import GlitchComponent from "./GlitchComponent.vue";
  import RandomTextEffectComponent from "./RandomTextEffectComponent.vue";
  import { gsap } from "gsap";

  const percentNumber = ref(0);
  const percentage = computed(() => `${percentNumber.value}%`);

  const emit = defineEmits(["loaded"]);
  const loadingWrapper = ref(null);
  const showWelcomeText = ref(false);

  onMounted(async () => {
    const loaderTl = gsap.timeline();
    await loadingInterval();
    onNuxtReady(() => {
      loaderTl.to("#glitch-component", {
        opacity: 0,
        duration: 0.3,
        delay: 0.7,
        yPercent: 10,
        display: "none",
        onComplete: () => {
          showWelcomeText.value = true;
          const randomComponentTimeout = setTimeout(() => {
            clearTimeout(randomComponentTimeout);
            loaderTl.to("#random-component", {
              opacity: 1,
              display: "block",
            });
            loaderTl.to("#random-component", {
              opacity: 0,
              duration: 0.3,
              delay: 5,
              yPercent: 10,
            });
            loaderTl.to("#loading-wrapper", {
              yPercent: -100,
              onComplete: () => {
                const body = document.querySelector("body");
                body.classList.remove("overflow-hidden");
              },
            });
          }, 1);
        },
      });

      // setTimeout(() => {
      //   emit("loaded");
      // }, 1000);
    });
    function loadingInterval() {
      return new Promise((resolve) => {
        const loadingInterval = setInterval(() => {
          if (percentNumber.value === 100) {
            clearInterval(loadingInterval);
            resolve();
          } else {
            percentNumber.value = percentNumber.value + 1;
          }
        }, 20);
      });
    }
  });
</script>
<style lang="scss"></style>
