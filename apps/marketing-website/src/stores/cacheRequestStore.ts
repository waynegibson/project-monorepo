import { acceptHMRUpdate, defineStore } from 'pinia'
import type { CoursePayload } from '~/server/api/courses/index.get'

export const useCacheRequestStore = defineStore('cacheRequestStore', () => {
  // const isReady = ref<boolean>(false)
  // const isLoading = ref<boolean>(false)
  // const courses = ref<CoursePayload[]>()

  const today = new Date().toISOString().slice(0, 10)
  const currentDate = ref(today)

  watch(currentDate, fetchCourses)

  const {
    data: courses,
    error,
    isLoading,
    isReady,
  } = useCachedRequest(currentDate, getter)

  async function getter() {
    const { data } = await useFetch<CoursePayload[]>('/api/courses')

    if (data.value)
      return data.value
  }

  async function fetchCourses() {
    error.value = undefined
    isLoading.value = true

    const { data } = await useFetch<CoursePayload[]>('/api/courses')

    if (data.value) {
      courses.value = data.value

      isReady.value = true
      isLoading.value = false
    }
  }

  return {
    error,
    isLoading,
    isReady,
    courses,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCacheRequestStore, import.meta.hot))
