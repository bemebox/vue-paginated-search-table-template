<script lang="ts">
import { defineComponent } from 'vue'
import PaginatedTable from '@/components/PaginatedTable.vue'

export default defineComponent({
  name: 'SearchView',
  components: {
    PaginatedTable
  }
})
</script>

<template>
  <div class="min-h-screen p-4">
    <PaginatedTable />
  </div>
</template>
