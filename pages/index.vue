<template>
  <main-layout>
    <section
      class="flex min-h-screen flex-col items-end px-8 pb-6 max-md:justify-between"
    >
      <div
        class="relative flex w-full flex-1 flex-col justify-center gap-8 text-center"
      >
        <NuxtImg
          class="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover object-center max-md:aspect-[9/16] max-md:h-[80%] md:aspect-video md:w-[50%]"
          src="/img/hero-background.jpg"
        />
        <div class="text-4xl font-bold uppercase antialiased md:text-6xl">
          <h1>Hey, I'm Yovan</h1>
        </div>
        <div class="text-4xl font-bold uppercase antialiased md:text-6xl">
          <h1 class="text-transparent" style="-webkit-text-stroke: 3px black">
            Hey, I'm Yovan
          </h1>
        </div>
        <div class="text-4xl font-bold uppercase antialiased md:text-6xl">
          <h1>Hey, I'm Yovan</h1>
        </div>
      </div>
      <div class="w-full">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:p-5">
          <div class="flex items-center max-md:order-2">
            <p class="text-xl md:text-2xl">
              Translating ideas into a product ready for consumer use.
            </p>
          </div>
          <div>
            <div class="md:text-end">
              <p class="text-xl tracking-widest md:mb-6 md:text-2xl">I'm a</p>
              <h1 class="text-3xl font-bold md:mb-6 md:text-5xl">Full-stack</h1>
              <h1 class="text-3xl font-bold md:mb-6 md:text-5xl">
                Web Developer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex min-h-screen px-8 pb-6"></section>
  </main-layout>
</template>
<script setup>
  import MainLayout from "@/layouts/MainLayout.vue";
  import useBlobity from "blobity/lib/vue/useBlobity";

  useBlobity({
    licenseKey: "opensource",
    kineticMorphing: false,
    color: "rgb(0, 0, 0)",
    opacity: 0.3,
    dotSize: 9,
    dotColor: "#000000",
    focusableElements: "",
    magnetic: false,
    fontColor: "#ffffff",
    zIndex: 30,
  });
</script>
<style lang=""></style>
