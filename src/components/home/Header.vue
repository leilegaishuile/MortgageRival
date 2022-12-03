<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
watch(y, (newValue: number) => {
  console.log(`[Header] ${newValue}`);
});
</script>

<template>
  <header class="fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out">
    <div class="w-full px-6 sm:px-10 flex items-center justify-between h-16 md:h-20">
      <!-- logo -->
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
      <nav class="flex flex-grow">
        <div class="flex flex-grow justify-end items-center">
          <!-- menu btn -->
          <div class="block lg:hidden">
            <button class="flex items-center p-1 text-white hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <!-- menu list -->
          <ul class="flex flex-wrap items-center max-lg:hidden">
            <li>
              <RouterLink to="/" class="px-5 mr-5 md:mr-10 text-white text-lg font-sans hover:text-gray-200"> Sign Up for Free </RouterLink>
            </li>
            <li>
              <RouterLink to="/" class="px-5 mr-5 md:mr-10 text-white text-lg font-sans hover:text-gray-200"> Login </RouterLink>
            </li>
            <li>
              <RouterLink to="/" class="px-5 text-white text-lg font-sans hover:text-gray-200"> Help </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
