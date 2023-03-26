<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCacheRequestStore } from '~/stores/cacheRequestStore'

const store = useCacheRequestStore()
const { courses, isLoading, isReady, error } = storeToRefs(store)
</script>

<template>
  <div class="m-20 px-6">
    <template v-if="isLoading">
      Loading ....
    </template>
    <template v-else>
      <pre>{{ courses }}</pre>
    </template>
  </div>
</template>
