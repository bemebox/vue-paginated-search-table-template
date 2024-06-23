<script lang="ts">
import { defineComponent } from 'vue'
import TableTitleBar from '@/components/TableTitleBar.vue'
import TableContent from '@/components/TableContent.vue'
import TablePaginationBar from '@/components/TablePaginationBar.vue'

export default defineComponent({
  name: 'PaginatedTableView',
  components: {
    TableTitleBar,
    TableContent,
    TablePaginationBar
  }
})
</script>

<template>
  <div class="p-4">
    <TableTitleBar />
    <TableContent />
    <TablePaginationBar />
  </div>
</template>
