<template>
  <div class="col-span-1" :class="props.classes">
    <div>
      <NuxtLink
        no-underline-effect
        target="_blank"
        :href="props.link"
        class="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <video class="w-screen max-w-full" autoplay muted loop>
          <source
            v-for="(video, index) in videos"
            :key="index"
            :src="video.link"
            :type="video.type"
          />
        </video>
      </NuxtLink>
      <div class="mt-4">
        <div class="mb-3 flex space-x-2">
          <p
            class="border-secondary-600 text-secondary-600 text-body-4 flex items-center justify-center rounded-full border bg-transparent px-2 py-1 text-xs md:px-4 2xl:text-xl"
          >
            {{ props.yearStarted }}
          </p>
          <p
            class="border-secondary-600 text-secondary-600 text-body-4 flex items-center justify-center rounded-full border bg-transparent px-2 py-1 text-xs md:px-4 2xl:text-xl"
          >
            {{ outputTags }}
          </p>
        </div>
        <div class="2xl:space-y-3">
          <h3
            class="text-works-title text-primary-200 flex items-center font-medium uppercase 2xl:text-5xl"
          >
            {{ props.projectName }}
            <Icon
              class="ml-1 md:ml-3"
              size="1em"
              name="ri:external-link-fill"
            />
          </h3>
          <p
            class="text-body-2 text-primary-400 font-light capitalize 2xl:text-4xl"
          >
            {{ props.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed } from "vue";
  const props = defineProps({
    videos: Array,
    yearStarted: Number,
    projectName: String,
    tags: Array,
    category: String,
    link: String,
    classes: String,
    imgAltName: String,
  });

  const outputTags = computed(() => {
    return props.tags.join(" • ");
  });
</script>
<style lang=""></style>
