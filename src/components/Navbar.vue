<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function onHome() {
  router.push('/')
}
</script>

<template>
  <div class="md:flex md:items-center md:justify-between mt-4">
    <div class="min-w-0 flex-1">
      <h2
        @click="onHome"
        class="text-2xl font-bold leading-7 text-primary sm:truncate sm:text-3xl sm:tracking-tight cursor-pointer"
      >
        <font-awesome-icon icon="table" class="text-primary mr-3" />
        <a href="#" @click="onHome" class="text-primary">Paginated Table Template</a>
      </h2>
    </div>
  </div>
</template>
