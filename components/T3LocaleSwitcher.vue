<template>
  <div class="t3-locale-switcher uppercase border-l border-gray-300 pl-2" v-if="locales.length">
    <NuxtLink
      v-for="{ twoLetterIsoCode, link } in locales"
      :key="twoLetterIsoCode"
      :to="link"
      class="ml-2"
      :class="{'font-bold': currentLocale === twoLetterIsoCode}"
    >
      {{ twoLetterIsoCode }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { initialData } = useT3Api()
const { currentLocale } = useT3i18n()
const locales = computed(() => initialData.value?.i18n || [])
</script>
