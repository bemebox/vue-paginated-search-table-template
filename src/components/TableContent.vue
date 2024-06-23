<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TableTitleBar',
  setup() {
    const items = ref([
      { id: 1, name: 'Name 1', locality: 'Locality 1', country: 'Country 1' },
      { id: 2, name: 'Name 2', locality: 'Locality 2', country: 'Country 2' },
      { id: 3, name: 'Name 3', locality: 'Locality 3', country: 'Country 3' }
    ])

    const editItem = (key: number) => {
      // Handle edit logic here
      alert('edit ' + key)
    }

    const deleteItem = (key: number) => {
      // Handle delete logic here
      alert('delete ' + key)
    }

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
      <div v-for="item in items" :key="item.id" class="p-4 border-b border-secondary">
        <div class="grid grid-cols-4 gap-x-4">
          <div class="col-span-1">{{ item.name }}</div>
          <div class="col-span-1">{{ item.locality }}</div>
          <div class="col-span-1">{{ item.country }}</div>
          <div class="col-span-1">
            <font-awesome-icon
              @click="editItem(item.id)"
              icon="pen"
              class="text-tertiary hover:text-tertiary-dark mr-5 cursor-pointer"
            />
            <font-awesome-icon
              @click="deleteItem(item.id)"
              icon="trash"
              class="text-tertiary hover:text-tertiary-dark mr-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
