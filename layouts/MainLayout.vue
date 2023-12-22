<template>
  <div class="min-h-screen">
    <HeaderLayout class="fixed top-0 w-full" />
    <main class="mx-auto max-w-[1580px] flex-1 pb-8">
      <slot> </slot>
    </main>
    <FooterLayout />
  </div>
</template>
<script setup>
  import HeaderLayout from "./HeaderLayout.vue";
  import FooterLayout from "./FooterLayout.vue";
  import Blobity from "blobity";
  import { onMounted } from "vue";

  onMounted(() => {
    const options = {
      licenseKey: "opensource",
      kineticMorphing: false,
      color: "rgb(0, 0, 0)",
      opacity: 0.4,
      dotSize: 6,
      dotColor: "#000000",
      focusableElements: ".tooltips-blobity",
      magnetic: false,
      fontColor: "#ffffff",
      zIndex: 50,
      size: 30,
      fontSize: 15,
    };
    new Blobity(options);
  });
</script>
<style lang=""></style>
