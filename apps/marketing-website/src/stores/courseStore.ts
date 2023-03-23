import { acceptHMRUpdate, defineStore } from 'pinia'
import type { CoursePayload } from '~/server/api/courses/index.get'

export const useCourseStore = defineStore('courseStore', () => {
  const isReady = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const courses = ref<CoursePayload[]>()

  /**
   * Initialize the store.
   *
   * @returns
   */
  async function initialize(): Promise<void> {
    if (isReady.value)
      return

    isLoading.value = true

    const { data } = await useFetch<CoursePayload[]>('/api/courses')

    if (data.value) {
      courses.value = data.value

      isReady.value = true
      isLoading.value = false
    }
  }

  /**
   * Find the course by its slug.
   *
   * @param slug
   * @returns
   */
  async function findBySlug(slug: string): Promise<CoursePayload> {
    const record = courses.value?.find(r => r.slug === slug)

    if (!record) {
      throw createError({
        statusCode: 404,
        message: 'No course found.',
      })
    }

    return record
  }

  async function fetchCourseByCourseCategorySlug(slug: string): Promise<any> {
    const { data } = await useFetch<any[]>(`/api/courses/category/${slug}`)

    if (!data) {
      throw createError({
        statusCode: 404,
        message: 'No course found.',
      })
    }

    return data
  }

  return {
    courses,
    initialize,
    findBySlug,
    fetchCourseByCourseCategorySlug,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
