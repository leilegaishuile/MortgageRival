<script setup lang="ts">
const props = defineProps({
  img: String,
  describe: String,
});
</script>

<template>
  <div>
    <div class="flex flex-row items-center relative w-full max-md:hidden">
      <!-- content img -->
      <div class="w-1/2 relative" style="padding-top: 50%">
        <img src="@/assets/images/bg-masthead.jpg" class="absolute top-0 left-0 w-full h-full rounded-3xl" />
      </div>

      <div class="absolute w-p55 z-10 right-0">
        <div class="relative">
          <div class="absolute h-16 w-16 bg-blue-800 -mt-5 right-6 top-0 rounded-2xl"></div>
          <div class="w-full h-80 shadow-axl bg-white z-10 rounded-3xl"></div>
        </div>
      </div>
    </div>

    <SloganTopItem />
  </div>
</template>

<style scoped></style>
