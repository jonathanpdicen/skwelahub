<template>
  <div class="relative">
    <div class="text-center mb-8">
      <h2 class="text-lg font-sans font-bold mb-2">
        Log in to Your Account
      </h2>
      <span class="text-base">
        Kickstart your learning experience by signing in to your student/teacher account.
      </span>
    </div>
    <form>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="student-id"
          >
          ID
        </label>
        <FormInput v-model="form.account_id" />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
          >
          Password
        </label>
        <FormInput
          v-model="form.password"
          type="password"
          />
        <p class="text-red-500 text-xs italic">
          Please choose a password.
        </p>
      </div>
      <BaseButton full>
        Log in
      </BaseButton>
    </form>
  </div>
</template>
<script setup>
const form = reactive({
  account_id: '',
  password: ''
})
</script>
