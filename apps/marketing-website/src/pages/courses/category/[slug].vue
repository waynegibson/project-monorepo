<script lang="ts" setup>
import { useCourseStore } from '~/stores/courseStore'

const store = useCourseStore()
await store.initialize()

const router = useRoute()
const slug = router.params.slug as string

const result = await store.fetchCourseByCourseCategorySlug(slug)
</script>

<template>
  <div>
    <h1>Course by Category</h1>
    <pre>{{ result }}</pre>
  </div>
</template>
