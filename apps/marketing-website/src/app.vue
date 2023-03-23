<script lang="ts" setup>
import { meta } from '~/common/head-meta.config'

useHead({
  titleTemplate: meta.titleTemplate,
  htmlAttrs: meta.htmlAttrs,
  bodyAttrs: meta.bodyAttrs,
  meta: meta.meta,
  link: meta.link,
  noscript: meta.noscript,
})
</script>

<template>
  <Html lang="en">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
