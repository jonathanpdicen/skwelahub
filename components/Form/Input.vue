<template>
  <input
    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :type="type"
    :value="modelValue"
    @input="handleInput"
    >
</template>
<script setup lang="ts">
export interface Props {
  modelValue: any
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: () => 'text'
})

const emit = defineEmits<{
  'update:modelValue': [value: any]
}>()

const handleInput = (e: any) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
