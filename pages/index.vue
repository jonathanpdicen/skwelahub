<template>
  <div class="flex w-full h-screen items-center justify-center">
    <div class="max-w-screen-lg w-full overflow-hidden rounded">
      <div class="flex w-full min-h-[600px] h-full bg-white rounded-lg">
        <div class="w-1/2 flex items-center bg-primary">
          <div class="flex w-full max-w-xs mx-auto pr-16">
            <div class="text-white text-center mb-4">
              <AppLogo />
            </div>
          </div>
        </div>
        <div class="w-1/2 flex">
          <div
            class="flex items-center w-full h-full relative
            before:z-10
            before:absolute
            before:inline-block
            before:w-[130%]
            before:top-[-2px]
            before:left-[-60px]
            before:right-0
            before:bottom-[-2px]
            before:transform
            before:-skew-x-10
            before:bg-white
            "
            >
            <div class="w-full max-w-sm mx-auto z-20 pr-16">
              <AuthLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
</script>
