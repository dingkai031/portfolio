<template>
  <main-layout class="overflow-hidden">
    <section
      class="flex min-h-screen flex-col items-end px-8 pb-6 max-md:justify-between"
    >
      <div
        class="relative flex w-full flex-1 flex-col justify-center gap-8 text-center"
      >
        <NuxtImg
          class="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover object-center max-md:aspect-[9/16] max-md:h-[80%] md:aspect-video md:w-[50%]"
          src="/img/hero-background.jpg"
          alt="white cloth"
        />
        <div class="text-4xl font-bold uppercase antialiased md:text-6xl">
          <h1>Hey, I'm Yovan</h1>
        </div>
        <div class="text-4xl font-bold uppercase antialiased md:text-6xl">
          <h1 class="text-transparent" style="-webkit-text-stroke: 2px black">
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
    <section class="flex min-h-screen px-8" id="about">
      <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        <NuxtImg
          src="/img/about-me.jpg"
          class="max-h-60 w-full rounded-md object-cover md:max-h-screen md:object-center"
        />
        <div
          class="flex items-center overflow-hidden border-2 border-black p-8"
        >
          <div id="about-1" class="w-">
            <h2 class="mb-3 font-bold md:text-5xl">About Yovan</h2>
            <p class="mb-3 md:text-2xl">
              Oh, you've got to meet Yovan! He's an incredible full-stack web
              developer with two years of solid experience in PHP and
              JavaScript. His thing is creating these amazing websites that are
              not only super responsive but also right on trend with the latest
              technologies. They're always on top of the game, bringing fresh
              and innovative ideas to the table. Seriously, their dedication to
              making user-friendly online experiences is next level—they're like
              the go-to person if you want your website to stand out and shine!
            </p>
          </div>
          <div id="about-2">
            <h2 class="mb-3 font-bold md:text-5xl">About him</h2>
            <p class="mb-3 md:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              facilis nobis quas molestiae repellendus optio ipsum assumenda,
              totam ex est, id quidem. Ut suscipit tempora debitis expedita ab
              esse cum quasi corporis consequatur quod, omnis alias aliquam aut
              cumque labore rem illum facilis quo veniam nemo non minus quos!
              Molestias a reprehenderit harum iusto reiciendis deserunt dolorum
              officia.
            </p>
            <p class="mb-3 md:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              facilis nobis quas molestiae repellendus optio ipsum assumenda,
              totam ex est, id quidem. Ut suscipit tempora debitis expedita ab
              esse cum quasi corporis consequatur quod, omnis alias aliquam aut
              cumque labore rem illum facilis quo veniam nemo non minus quos!
              Molestias a reprehenderit harum iusto reiciendis deserunt dolorum
              officia.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>
<script setup>
  import MainLayout from "@/layouts/MainLayout.vue";
  import Blobity from "blobity";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });
  const gsapTl = gsap.timeline();

  onMounted(() => {
    console.log(window.innerWidth);

    const options = {
      licenseKey: "opensource",
      kineticMorphing: false,
      color: "rgb(0, 0, 0)",
      opacity: 0.4,
      dotSize: 9,
      dotColor: "#000000",
      focusableElements: "no-focus",
      magnetic: false,
      fontColor: "#ffffff",
      zIndex: 50,
    };
    new Blobity(options);
    gsapTl
      .fromTo(
        "#about-1",
        { opacity: 1, xPercent: 0 },
        { opacity: 0, xPercent: -50, display: "none" }
      )
      .fromTo(
        "#about-2",
        { opacity: 0, display: "none" },
        { opacity: 1, display: "block" }
      );

    ScrollTrigger.create({
      animation: gsapTl,
      trigger: "#about",
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: true,
      anticipatePin: 1,
    });
  });
</script>
<style lang=""></style>
