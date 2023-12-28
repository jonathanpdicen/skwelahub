<template>
  <button
    class="text-white font-medium rounded text-sm uppercase px-5 py-2.5 text-center"
    :type="type"
    :class="[transparent ? 'bg-transparent border border-white' : 'bg-primary', {'w-full' : full}]"
    >
    <slot />
  </button>
</template>
<script setup lang="ts">
defineProps({
  type: {
    type: String as () => 'submit' | 'button',
    default: () => 'submit',
  },
  transparent: {
    type: Boolean,
    default: () => false,
  },
  full: {
    type: Boolean,
    default: () => false,
  }
})
</script>
