<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableTitleBar',
  setup() {
    const createNew = () => {
      // Handle creation logic here
      alert('create new')
    }

    return {
      createNew
    }
  }
})
</script>

<template>
  <div class="flex justify-between mb-2">
    <div>
      <h2 class="text-xl font-semibold text-primary">Table Title</h2>
    </div>
    <div class="text-right">
      <button
        class="px-3 py-1 bg-tertiary text-text-dark rounded-lg hover:bg-tertiary-dark focus:outline-none"
        @click="createNew"
      >
        New
      </button>
    </div>
  </div>
</template>
