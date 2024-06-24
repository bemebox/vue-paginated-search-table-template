<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCircuitStore } from '@/stores/circuitstore'

export default defineComponent({
  name: 'TablePaginationBar',
  setup() {
    const circuitStore = useCircuitStore()
    const currentPage = computed(() => circuitStore.currentPage)
    const totalPages = computed(() => circuitStore.totalPages)

    const firstPage = () => {
      if (currentPage.value > 1) {
        circuitStore.getPageData(1)
      }
    }

    const previousPage = () => {
      if (currentPage.value > 1) {
        circuitStore.getPageData(currentPage.value - 1)
      }
    }

    const setPage = (pageNumber: number) => {
      circuitStore.getPageData(pageNumber)
    }

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        circuitStore.getPageData(currentPage.value + 1)
      }
    }

    const lastPage = () => {
      if (currentPage.value < totalPages.value) {
        circuitStore.getPageData(totalPages.value)
      }
    }

    return {
      currentPage,
      totalPages,
      firstPage,
      previousPage,
      setPage,
      nextPage,
      lastPage
    }
  }
})
</script>

<template>
  <div v-if="totalPages > 0" class="mx-auto text-primary">
    <nav class="w-full flex justify-center bg-secondary">
      <ul class="list-style-none flex p-2">
        <li @click="firstPage" class="px-1">
          <font-awesome-icon
            icon="arrow-right-to-bracket"
            :class="{
              'cursor-default text-secondary-light border-secondary-light': 1 === currentPage,
              'cursor-pointer border border-tertiary-dark text-tertiary-dark hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent':
                1 !== currentPage
            }"
            class="relative block rounded-full border bg-transparent px-2.5 py-2.5 text-sm rotate-180"
            title="First Page"
          />
        </li>
        <li @click="previousPage" class="px-1">
          <font-awesome-icon
            icon="arrow-left"
            :class="{
              'cursor-default text-secondary-light border-secondary-light': 1 === currentPage,
              'cursor-pointer border border-tertiary-dark text-tertiary-dark hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent':
                1 !== currentPage
            }"
            class="relative block rounded-full border bg-transparent px-2.5 py-2.5 text-sm"
            title="Previous Page"
          />
        </li>
        <li v-for="page in totalPages" :key="page" class="px-1">
          <a
            @click="setPage(page)"
            :class="{
              'cursor-default bg-tertiary-dark border border-tertiary-dark text-text-dark outline-none':
                page === currentPage,
              'cursor-pointer border border-tertiary-dark text-tertiary-dark hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent':
                page !== currentPage
            }"
            class="relative rounded-full block px-3 py-1.5 p-3 text-sm text-surface transition duration-300"
            >{{ page }}</a
          >
        </li>
        <li @click="nextPage" class="px-1">
          <font-awesome-icon
            icon="arrow-right"
            :class="{
              'cursor-default text-secondary-light border-secondary-light':
                totalPages === currentPage,
              'cursor-pointer border border-tertiary-dark text-tertiary-dark hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent':
                totalPages !== currentPage
            }"
            class="relative block rounded-full border bg-transparent px-2.5 py-2.5 text-sm"
            title="Next Page"
          />
        </li>
        <li @click="lastPage" class="px-1">
          <font-awesome-icon
            icon="arrow-right-to-bracket"
            :class="{
              'cursor-default text-secondary-light border-secondary-light':
                totalPages === currentPage,
              'cursor-pointer border border-tertiary-dark text-tertiary-dark hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent':
                totalPages !== currentPage
            }"
            class="relative block rounded-full border bg-transparent px-2.5 py-2.5 text-sm"
            title="Last Page"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>
