<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useCircuitStore } from '@/stores/circuitstore'

export default defineComponent({
  name: 'TableTitleBar',
  setup() {
    const circuitStore = useCircuitStore()
    const items = computed(() => circuitStore.circuits)

    const editItem = (key: string) => {
      // Handle edit logic here
      alert('edit ' + key)
    }

    const deleteItem = (key: string) => {
      // Handle delete logic here
      alert('delete ' + key)
    }

    // call the getAll method when the component is opened
    onMounted(() => {
      circuitStore.getPageData(1)
    })

    return {
      items,
      editItem,
      deleteItem
    }
  }
})
</script>

<template>
  <div class="overflow-x-auto">
    <div class="min-w-full border border-secondary rounded-lg">
      <div class="grid grid-cols-4 gap-x-4 p-4 bg-secondary text-text-dark">
        <div class="col-span-1 font-semibold">Name</div>
        <div class="col-span-1 font-semibold">Locality</div>
        <div class="col-span-1 font-semibold">Country</div>
        <div class="col-span-1 font-semibold">Actions</div>
      </div>
      <div v-for="item in items" :key="item.circuitId" class="p-4 border-b border-secondary">
        <div class="grid grid-cols-4 gap-x-4">
          <div class="col-span-1">{{ item.circuitName }}</div>
          <div class="col-span-1">{{ item.location.locality }}</div>
          <div class="col-span-1">{{ item.location.country }}</div>
          <div class="col-span-1">
            <font-awesome-icon
              @click="editItem(item.circuitId)"
              icon="pen"
              class="text-tertiary hover:text-tertiary-dark mr-5 cursor-pointer"
            />
            <font-awesome-icon
              @click="deleteItem(item.circuitId)"
              icon="trash"
              class="text-tertiary hover:text-tertiary-dark mr-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
