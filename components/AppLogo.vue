<template>
  <figure>
    <img
      src="/images/logo.png"
      :class="`w-${logoSize}`"
      alt="logo"
      >
  </figure>
</template>
<script setup lang="ts">
export interface Props {
  size?: string | number,
}

const props = withDefaults(defineProps<Props>(), {
  size: 'full'
})

const logoSize = computed<string | number>(() => props.size)
</script>
