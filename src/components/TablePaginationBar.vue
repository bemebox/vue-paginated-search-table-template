<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TablePaginationBar',
  setup() {
    const currentPage = computed(() => 1)
    const totalPages = computed(() => 2)

    const firstPage = () => {
      // Handle first page logic here
    }

    const previousPage = () => {
      // Handle previous page logic here
    }

    const setPage = (pageNumber: number) => {
      // Handle next page logic here
      alert('set page ' + pageNumber)
    }

    const nextPage = () => {
      // Handle next page logic here
      alert('next page ')
    }

    const lastPage = () => {
      // Handle last page logic here
      alert('last page ')
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
  <div class="mx-auto text-primary">
    <nav class="w-full flex justify-center bg-secondary">
      <ul class="list-style-none flex p-2">
        <li @click="firstPage" class="px-1">
          <font-awesome-icon
            icon="arrow-right-to-bracket"
            class="relative block rounded-full border border-text-dark bg-transparent px-2.5 py-2.5 text-white text-sm rotate-180"
            title="First Page"
          />
        </li>
        <li @click="previousPage" class="px-1">
          <font-awesome-icon
            icon="arrow-left"
            class="relative block rounded-full border border-text-dark bg-transparent px-2.5 py-2.5 text-white text-sm"
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
            class="relative block rounded-full border border-tertiary-dark bg-transparent px-2.5 py-2.5 text-tertiary-dark text-sm cursor-pointer text-surface transition duration-300 hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent"
            title="Next Page"
          />
        </li>
        <li @click="lastPage" class="px-1">
          <font-awesome-icon
            icon="arrow-right-to-bracket"
            class="relative block rounded-full border border-tertiary-dark bg-transparent px-2.5 py-2.5 text-tertiary-dark text-sm cursor-pointer text-surface transition duration-300 hover:bg-tertiary-dark hover:text-text-dark hover:border-transparent"
            title="Last Page"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>
