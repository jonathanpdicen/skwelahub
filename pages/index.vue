<template>
  <div class="flex w-full h-screen items-center justify-center">
    <div class="max-w-screen-lg w-full overflow-hidden rounded">
      <div class="flex w-full min-h-[600px] h-full bg-white rounded-lg">
        <div class="flex items-center w-1/2 bg-primary">
          <div class="flex w-full max-w-xs mx-auto pr-16">
            <div class="text-white text-center mb-4">
              <AppLogo />
            </div>
          </div>
        </div>
        <div class="flex w-1/2">
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

const form = reactive({
  account_id: '',
  password: ''
})
</script>
