<template>
  <span>
    {{ currentTime }}
  </span>
</template>

<script setup>
  import { ref, onBeforeUnmount, onMounted } from "vue";

  const props = defineProps({
    timezone: {
      type: String,
      required: true,
    },
  });

  const currentTime = ref(null);
  let timeInterval;

  onMounted(() => {
    timeInterval = setInterval(() => {
      currentTime.value = getFormattedTime();
    }, 1000);
    function getFormattedTime() {
      return new Date().toLocaleTimeString("en-US", {
        timeZone: props.timezone,
      });
    }
  });

  onBeforeUnmount(() => {
    clearInterval(timeInterval);
  });
</script>

<style></style>
