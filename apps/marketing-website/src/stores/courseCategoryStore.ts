import { acceptHMRUpdate, defineStore } from 'pinia'
import useIconX from '~/composables/useIconX'
import type { CourseCategoryPayload } from '~/server/api/course-categories/index.get'

export const useCourseCategoryStore = defineStore('courseCategoryStore', () => {
  const isReady = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const courseCategories = ref<CourseCategoryPayload[]>()

  /**
   * Initialize the store.
   *
   * @returns
   */
  async function initialize(): Promise<void> {
    if (isReady.value)
      return

    isLoading.value = true

    const { data } = await useFetch<CourseCategoryPayload[]>('/api/course-categories')

    if (data.value) {
      courseCategories.value = data.value

      isReady.value = true
      isLoading.value = false
    }
  }
  const getCourseCategories = computed((): any[] => {
    const categories = courseCategories.value

    if (!categories?.length) {
      throw createError({
        statusCode: 404,
        message: 'No course category records found.',
      })
    }

    const results = categories.map((category: CourseCategoryPayload) => {
      return {
        ...category,
        link: {
          href: category.link.href,
          icon: useIconX(category.link.icon),
        },
      }
    })

    return results
  })

  return {
    initialize,
    courseCategories,
    getCourseCategories,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCourseCategoryStore, import.meta.hot))
