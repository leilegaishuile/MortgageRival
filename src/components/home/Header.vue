<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core';

const showTop = ref(false);
const showMenu = ref(false);
const { y } = useWindowScroll();
watch(y, (newValue: number) => {
  if (newValue > 30) {
    showTop.value = true;
  } else {
    showTop.value = false;
  }
});

const { width } = useWindowSize();

watch(width, (newValue: number) => {
  if (newValue >= 1024) {
    showMenu.value = false;
  }
});

function menuClick() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <header class="fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out" :class="{ 'header-bg': showTop || showMenu }">
    <div class="w-full home-px flex flex-wrap items-center justify-between py-2 md:py-5">
      <!--TODO logo  -->
      <div class="flex-shrink-0 mr-4">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
              <stop stop-color="#4FD1C5" offset="0%" />
              <stop stop-color="#81E6D9" offset="25.871%" />
              <stop stop-color="#338CF5" offset="100%" />
            </radialGradient>
          </defs>
          <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
        </svg>
      </div>
      <!-- nav -->

      <!-- menu btn -->
      <div class="block lg:hidden">
        <button class="li-white flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" @click="menuClick">
          <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <!--TODO 跳转 menu list -->
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto max-lg:mt-2 max-sm:mt-1 bg-transparent z-20" :class="[showMenu ? '' : 'max-lg:hidden']">
        <ul class="lg:flex flex-wrap flex-1 items-center justify-end font-sans">
          <li class="pr-16 mr-8 md:mr-10 h-6">
            <RouterLink to="/">
              <p class="w-full li-white">Sign Up for Free</p>
            </RouterLink>
          </li>
          <li class="pr-8 mr-5 md:mr-10 h-6">
            <RouterLink to="/">
              <p class="w-full li-white">Login</p>
            </RouterLink>
          </li>
          <li class="pr-8 lg:pl-8 h-6">
            <RouterLink to="/" class="li-white">
              <p class="w-full li-white">Help</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-bg {
  @apply bg-black opacity-70;
}

.li-white {
  @apply hover:text-gray-200 text-white whitespace-nowrap;
}
</style>
