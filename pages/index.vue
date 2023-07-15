<i18n locale="en" src="./lang/en/home/index.json"></i18n>
<i18n locale="th" src="./lang/th/home/index.json"></i18n>

<script setup>
const { t, locale } = useI18n();
</script>

<template>
  <div class="mt-20">{{ t('title') }}</div>
</template>
