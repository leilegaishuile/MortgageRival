<script setup lang="ts"></script>

<template>
  <footer class="w-full">
    <div class="w-full flex flex-col">
      <div class="bg-gray-200 py-2 sm:py-5 w-full flex flex-row items-center justify-between home-px">
        <span class="text-gray-800 max-lg:hidden text-3xl font-bold">MortgageRival</span>

        <!-- TODO 图标替换 -->
        <div class="lg:absolute lg:my-auto lg:left-1/2 lg:-translate-x-1/2 max-lg:flex-shrink-0">
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

        <!-- TODO 链接跳转 -->
        <div class="flex-grow">
          <!-- menu list -->
          <ul class="flex flex-row flex-wrap justify-end items-center sm:text-lg text-sm text-gray-700 hover:text-gray-900 font-sans">
            <li>
              <RouterLink to="/" class="px-1 sm:px-3 md:px-5 mr-2 md:mr-5 underline underline-offset-1"> Terms of Service </RouterLink>
            </li>
            <li>
              <RouterLink to="/" class="px-1 sm:px-3 md:px-5 mr-2 md:mr-5 underline underline-offset-1"> Privacy Policy </RouterLink>
            </li>
            <li>
              <RouterLink to="/" class="px-1 sm:px-3 md:px-5 underline underline-offset-1"> Help </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-black w-full flex flex-row justify-center items-center py-1 sm:py-3 text-gray-400 text-sm">
        <p class="whitespace-nowrap">Copyright © 2023-Now MortgageRival</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
