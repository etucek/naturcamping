<template>
  <div>
    <NuxtRouteAnnouncer />
    <TheHeader
      v-if="navigation"
      :navigation="navigation"
    />
    <slot />
    <main class="prose max-w-none">
      <div class="container mx-auto flex flex-col px-6 py-8">
        <NuxtPage />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { initialData } = useT3Api()
const navigation = computed(() => {
  return initialData.value?.navigation?.[0].children
})
</script>
