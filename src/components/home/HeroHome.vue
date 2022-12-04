<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col">
    <!-- header bg -->
    <div class="relative">
      <div>
        <img src="@/assets/images/bg-masthead.jpg" class="w-full max-h-screen contrast-50" />
      </div>
      <!-- title -->
      <div class="absolute top-1/2 -translate-y-1/2 w-full flex flex-col justify-center content-left h-28 xl:h-80 md:h-60 sm:h-40">
        <div class="md:whitespace-nowrap w-full font-bold text-white text-2xl xl:text-7xl md:text-5xl sm:text-3xl">HOW</div>
        <div class="md:whitespace-nowrap font-bold text-white text-2xl xl:text-7xl md:text-5xl sm:text-3xl xl:mt-6 md:mt-3 sm:mt-1 mt-0.5">MORTGAGE RIVAL WORKS</div>
        <div class="xl:w-20 md:w-14 sm:w-8 w-6 xl:h-3 md:h-2 sm:h-1 h-0.5 xl:mt-12 md:mt-8 sm:mt-4 mt-3 bg-white"></div>
      </div>

      <!-- button -->
      <div class="absolute flex flex-row content-left top-1/2 translate-y-14 xl:translate-y-40 md:translate-y-32 sm:translate-y-20">
        <button class="bg-blue-800 border-blue-200 home-btn focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">HomeBuyers</button>

        <div class="md:w-10 w-2 h-1"></div>

        <button class="bg-transparent border-white home-btn focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">For Lenders</button>
      </div>
    </div>
    <!-- content  -->
    <div class="w-full mt-4 md:mt-8 px-4 md:px-8 flex flex-col">
      <SloganLeftItem class="item-mb" />
      <SloganRightItem class="item-mb" />
      <SloganLeftItem class="item-mb" />
    </div>
  </div>
</template>

<style scoped>
.content-left {
  @apply left-6 xl:left-36 md:left-16 sm:left-12;
}

.item-mb {
  @apply mb-5 sm:mb-10 md:mb-28;
}

.home-btn {
  @apply text-white md:font-bold border-2 rounded-full;
  @apply py-1 sm:py-2 md:py-4;
  @apply px-4 sm:px-8 md:px-16;
  @apply text-sm sm:text-base md:text-lg;
}
</style>
