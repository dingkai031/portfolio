<template>
  <div
    id="loading-wrapper"
    class="fixed z-[100] flex h-full w-full bg-black"
    ref="loadingWrapper"
  >
    <div class="container mx-auto flex justify-center align-middle">
      <NuxtImg
        class="max-w-sm"
        src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="%23FFFFFF" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>'
      />
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from "vue";
  import { gsap } from "gsap";
  const emit = defineEmits(["loaded"]);
  const loadingWrapper = ref(null);

  onMounted(() => {
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");

    onNuxtReady(() => {
      body.classList.remove("overflow-hidden");
      gsap.to("#loading-wrapper", {
        width: 0,
        height: 0,
        left: "50%",
        top: "50%",
        duration: 1,
      });
      setTimeout(() => {
        emit("loaded");
      }, 1000);
    });
  });
</script>
<style lang="scss"></style>
