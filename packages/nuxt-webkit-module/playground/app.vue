<script lang="ts" setup>
const clicked = (value: string) => {
  console.log('button: ', value)
}
</script>

<template>
  <div>
    <WebkitButton @submit="clicked">
      Get in touch
    </WebkitButton>
  </div>
</template>
