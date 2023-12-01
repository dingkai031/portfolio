<template>
  <div class="flex min-h-screen flex-col">
    <HeaderLayout class="fixed top-0 w-full" />
    <main class="flex-1">
      <slot> </slot>
    </main>
    <FooterLayout />
  </div>
</template>
<script setup>
  import HeaderLayout from "./HeaderLayout.vue";
  import FooterLayout from "./FooterLayout.vue";
</script>
<style lang=""></style>
