<template>
  <span>
    {{ time }}
  </span>
</template>
<script setup>
  import { onBeforeUnmount } from "vue";
  const prop = defineProps({
    timezone: {
      type: String,
      required: true,
    },
  });
  const time = ref(null);
  setTime();
  const timeInterval = setInterval(() => {
    setTime();
  }, 1000);

  function setTime() {
    time.value = new Date().toLocaleTimeString("en-US", {
      timeZone: prop.timezone,
    });
  }
  onBeforeUnmount(() => {
    clearInterval(timeInterval);
  });
</script>
<style></style>
