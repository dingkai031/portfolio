<template>
  <LoadingIndicator @loaded="isPageLoaded" />
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
        <div
          class="background-title overflow-hidden text-4xl font-bold uppercase antialiased md:text-6xl"
        >
          <h1>Hey, I'm Yovan</h1>
        </div>
        <div
          class="background-title overflow-hidden text-4xl font-bold uppercase antialiased md:text-6xl"
        >
          <h1 class="text-transparent" style="-webkit-text-stroke: 2px black">
            Hey, I'm Yovan
          </h1>
        </div>
        <div
          class="background-title overflow-hidden text-4xl font-bold uppercase antialiased md:text-6xl"
        >
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
              <h1 class="text-3xl font-bold md:text-5xl">Web Developer</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="header-spacing px-4 pt-8 md:min-h-screen" id="about">
      <div class="grid- grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        <div class="max-md:order-2">
          <NuxtImg
            src="/img/about-me.jpg"
            class="max-h-52 w-full rounded-md object-cover md:max-h-[calc(100vh-76px)] md:object-center"
          />
        </div>
        <div class="flex max-md:order-1">
          <div
            class="relative grid w-full overflow-hidden border-2 border-black p-4 lg:h-full lg:p-8"
            id="main-about-wrapper"
          >
            <div id="about-1">
              <h2 class="mb-3 text-xl font-bold md:text-3xl xl:text-5xl">
                About Yovan
              </h2>
              <p class="mb-3 md:text-lg xl:text-2xl">
                Oh, you've got to meet Yovan! He's an incredible full-stack web
                developer with two years of solid experience in PHP and
                JavaScript. His thing is creating these amazing websites that
                are not only super responsive but also right on trend with the
                latest technologies.
              </p>
              <p class="md:text-lg xl:text-2xl">
                Yovan is always on top of the game, bringing fresh and
                innovative ideas to the table. Seriously, his dedication to
                making user-friendly online experiences is next level—he is like
                the go-to person if you want your website to stand out and
                shine!
              </p>
            </div>
            <div id="about-2">
              <h2 class="mb-3 text-xl font-bold md:text-3xl xl:text-5xl">
                Yovan's expertises
              </h2>
              <p class="mb-3 md:text-lg xl:text-2xl">
                He craft captivating interfaces with HTML, CSS, and JavaScript.
                His mastery in PHP, Node.js, and databases ensures robust
                architectures. As a full-stack developer, he seamlessly merge
                frontend finesse with backend functionality, delivering
                innovative solutions. He's expert in the following field :
              </p>
              <ul
                class="list-inside list-disc space-y-1 md:text-lg xl:text-2xl"
              >
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Full-stack Development</li>
              </ul>
            </div>
            <div id="about-3">
              <h2 class="mb-3 text-xl font-bold md:text-3xl xl:text-5xl">
                Yovan's digital toolbox
              </h2>
              <div class="mb-6">
                <p class="mb-3 md:text-lg xl:text-2xl">
                  When it comes to digital tools, Yovan is the maestro—whether
                  it's navigating through the intricacies of JavaScript
                  development, effortlessly crafting stunning and responsive
                  interfaces with:
                </p>
                <ul class="mb-3 flex flex-wrap gap-3">
                  <li v-for="tool in frontEndDigitalToolbox">
                    <Icon
                      class="tooltips-blobity h-6 w-6 text-black transition-colors duration-300 ease-in-out lg:h-10 lg:w-10"
                      :class="tool.class"
                      :name="tool.iconName"
                      :data-blobity-tooltip="tool.name"
                    />
                  </li>
                </ul>
              </div>
              <p class="mb-3 md:text-lg xl:text-2xl">
                He is also expert in crafting scalable server-side applications
                using:
              </p>
              <ul class="flex flex-wrap gap-3">
                <li v-for="tool in backEndDigitalToolbox">
                  <Icon
                    class="tooltips-blobity h-6 w-6 text-black transition-colors duration-300 ease-in-out lg:h-10 lg:w-10"
                    :class="tool.class"
                    :name="tool.iconName"
                    :data-blobity-tooltip="tool.name"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="header-spacing px-4 pt-8 md:min-h-screen" id="works">
      <h2 class="mb-6 text-center text-xl font-bold md:text-3xl xl:text-5xl">
        Yovan's works (WORK IN PROGGRESS)
      </h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="header-spacing px-4 pt-8 md:min-h-screen" id="contact">
      <h2
        class="mb-6 text-center text-xl font-bold md:mb-10 md:text-3xl xl:text-5xl"
      >
        Yovan's Contact
      </h2>
      <div class="flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div class="col-span-4">
          <div class="mb-6">
            <p
              class="text-heading-contact max-w-lg font-semibold leading-tight 2xl:max-w-3xl 2xl:text-7xl"
            >
              Have an awesome idea?
            </p>
            <p
              class="text-heading-contact max-w-lg font-semibold leading-tight 2xl:max-w-3xl 2xl:text-7xl"
            >
              Let's bring it to life.
            </p>
          </div>
          <form @submit.prevent="console.log('submit')" novalidate>
            <input type="hidden" name="form-name" value="contact" />
            <div class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div class="relative z-0">
                <input
                  required=""
                  type="text"
                  id="name"
                  name="name"
                  class="border-accent-100 peer block w-full appearance-none border-b border-black bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                /><label
                  for="name"
                  class="text-body-3 2xl:text-body-2 text-secondary-600 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >Your name</label
                >
              </div>
              <div class="relative z-0">
                <input
                  required=""
                  type="text"
                  name="email"
                  id="email"
                  class="border-accent-100 peer block w-full appearance-none border-b border-black bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                /><label
                  for="email"
                  class="2xl:text-body-2 text-secondary-600 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >Your email</label
                >
              </div>
              <div class="relative z-0 sm:col-span-2">
                <textarea
                  required=""
                  id="message"
                  name="message"
                  rows="5"
                  class="border-accent-100 peer block w-full appearance-none border-b border-black bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea
                ><label
                  for="message"
                  class="text-body-3 2xl:text-body-2 text-secondary-600 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >Your message</label
                >
              </div>
            </div>
            <CustomButton class="mt-10" text="Send Message" type="submit" />
          </form>
        </div>
        <div
          class="text-accent-300 col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1"
        >
          <div class="space-y-3">
            <h4 class="text-body-1 font-semibold 2xl:text-4xl">
              Contact Details
            </h4>
            <div class="text-body-2 flex flex-col space-y-3 2xl:text-3xl">
              <a
                no-underline-effect
                :href="`mailto:${email}`"
                class="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
                ><span>{{ email }}</span
                ><span
                  class="bg-secondary-600 absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full duration-300 ease-in-out group-hover:w-full"
                ></span
              ></a>
            </div>
          </div>
          <div class="space-y-3">
            <h4 class="text-body-1 font-semibold 2xl:text-4xl">
              My Digital Spaces
            </h4>
            <div class="text-body-2 space-y-3 2xl:text-3xl">
              <nuxt-link
                class="group flex items-center space-x-2"
                no-underline-effect
                v-for="(social, index) in socials"
                :key="index"
                :to="social.link"
                target="_blank"
              >
                <Icon :name="social.logo" />
                <div class="relative">
                  <span class="underline-effect">{{ social.name }}</span
                  ><span
                    class="bg-secondary-600 absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full duration-300 ease-in-out group-hover:w-full"
                  ></span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="space-y-3">
            <h4 class="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div class="text-body-2 space-y-2 2xl:text-3xl">
              <p>
                {{ location }}<br /><TimeComponent
                  class="tracking-wider"
                  :timezone="timezone"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>
<script setup>
  import { onMounted } from "vue";
  import MainLayout from "@/layouts/MainLayout.vue";
  import LoadingIndicator from "@/components/LoadingIndicator.vue";
  import CustomButton from "@/components/ButtonComponent.vue";
  import TimeComponent from "@/components/TimeComponent.vue";
  import pageDatas from "@/mixins/siteDatas.ts";

  import Lenis from "@studio-freight/lenis";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  const { email, socials, timezone, location } = pageDatas;

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });
  const gsapTl = gsap.timeline();
  gsap.ticker.lagSmoothing(0);

  onMounted(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsapTl
      .to("#about-1", {
        opacity: 0,
        xPercent: -100,
      })
      .from("#about-2", {
        opacity: 0,
        xPercent: 100,
      })
      .to("#about-2", {
        opacity: 0,
        xPercent: -100,
      })
      .from("#about-3", {
        opacity: 0,
        xPercent: 100,
      });
    ScrollTrigger.create({
      animation: gsapTl,
      trigger: "#about",
      start: "top top",
      pin: true,
      scrub: true,
      pinSpacing: true,
      snap: [0, 0.5, 1],
    });
  });

  const frontEndDigitalToolbox = [
    {
      iconName: "devicon-plain:bootstrap",
      name: "Bootstrap 5",
      class: "hover:text-[#7e13f8]",
    },
    {
      iconName: "mdi:tailwind",
      name: "Tailwindcss",
      class: "hover:text-[#19b2b9]",
    },
    {
      iconName: "mdi:vuejs",
      name: "Vue 3",
      class: "hover:text-[#41b883]",
    },
    {
      iconName: "mdi:nuxt",
      name: "Nuxt 3",
      class: "hover:text-[#41b883]",
    },
    {
      iconName: "devicon-plain:postcss",
      name: "Postcss",
      class: "hover:text-[#c33331]",
    },
    {
      iconName: "mdi:babel",
      name: "BabelJS",
      class: "hover:text-[#c3aa40]",
    },
    {
      iconName: "cib:greensock",
      name: "GSAP",
      class: "hover:text-[#8ec846]",
    },
  ];

  const backEndDigitalToolbox = [
    {
      iconName: "mdi:nodejs",
      name: "NodeJs",
      class: "hover:text-[#83cd29]",
    },
    {
      iconName: "skill-icons:expressjs-light",
      name: "ExpressJs",
      class: "",
    },
    {
      iconName: "mdi:aws",
      name: "AWS Cloud",
      class: "hover:text-[#ff9900]",
    },
    {
      iconName: "mdi:language-php",
      name: "PHP",
      class: "hover:text-[#6181b6]",
    },
    {
      iconName: "teenyicons:mongodb-solid",
      name: "MongoDB",
      class: "hover:text-[#01ec64]",
    },
    {
      iconName: "tabler:brand-mysql",
      name: "MySQL",
      class: "hover:text-[#00738d]",
    },
    {
      iconName: "logos:jwt-icon",
      name: "JWT",
      class: "",
    },
  ];

  function isPageLoaded() {
    const bgTitles = gsap.utils.toArray(".background-title h1");
    bgTitles.forEach((bgTitle) => {
      gsap.fromTo(
        bgTitle,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          delay: 0.5,
          ease: "steps(9)",
        }
      );
    });
  }
</script>
<style lang="scss">
  #main-about-wrapper {
    > * {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  @media only screen and (max-width: 1535px) {
    .text-heading-contact {
      font-size: clamp(2rem, 5vw, 2.75rem);
    }
  }
</style>
