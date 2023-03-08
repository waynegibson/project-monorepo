<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
})

const clicked = (value: string) => {
  console.log('button: ', value)
}
</script>

<template>
  <div>
    <WebkitButton class="rounded-md text-white" @submit="clicked">
      Get in touch
    </WebkitButton>
  </div>
</template>
