<template>
  <div class="col-span-1" :class="outputClass">
    <div>
      <NuxtLink
        target="_blank"
        :href="props.link"
        class="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
        ><NuxtImg
          class="min-h-[600] w-screen min-w-[800] duration-700 ease-in-out group-hover:scale-105"
          :src="props.imgDirectory"
          :alt="props.imgAltName"
      /></NuxtLink>
      <div class="mt-4">
        <div class="mb-3 flex space-x-2">
          <p
            class="border-secondary-600 text-secondary-600 text-body-4 flex items-center justify-center rounded-full border bg-transparent px-4 py-1 2xl:text-3xl"
          >
            {{ props.yearStarted }}
          </p>
          <p
            class="border-secondary-600 text-secondary-600 text-body-4 flex items-center justify-center rounded-full border bg-transparent px-4 py-1 2xl:text-3xl"
          >
            {{ outputTags }}
          </p>
        </div>
        <div class="2xl:space-y-3">
          <h3
            class="text-works-title text-primary-200 font-medium uppercase 2xl:text-5xl"
          >
            {{ props.projectName }}
          </h3>
          <p class="text-body-2 text-primary-400 font-light 2xl:text-4xl">
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
    imgDirectory: String,
    yearStarted: Number,
    projectName: String,
    tags: Array,
    category: String,
    link: String,
    classes: Array,
    imgAltName: String,
  });

  const outputTags = computed(() => {
    return props.tags.join(" • ");
  });
  const outputClass = computed(() => {
    return props.classes.join(" ");
  });
</script>
<style lang=""></style>
