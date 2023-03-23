<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCourseCategoryStore } from '~/stores/courseCategoryStore'

const store = useCourseCategoryStore()
await store.initialize()

const { getCourseCategories: categories } = storeToRefs(store)
</script>

<template>
  <div class="m-20 px-6">
    <h1 class="text-3xl text-gray-900">
      Course Categories
    </h1>
    <div class="mt-5">
      <ul v-for="category in categories" :key="category.slug" class="py-2">
        <li class="">
          <NuxtLink :to="category.link.href" class="text-base text-gray-600 font-medium">
            {{ category.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
