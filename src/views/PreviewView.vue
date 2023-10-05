<script setup>
import { storeToRefs } from 'pinia'
import { usePersonStore } from '@/stores/person'

const personStore = usePersonStore()
const { personPreview: person } = storeToRefs(personStore)
</script>

<template>
  <main class="preview container">
    <div class="block">
      <h2 class="title">Персональные данные</h2>
      <div class="person" v-if="person.name">
        {{ person.name }}<template v-if="person.age">, {{ person.age }} лет</template>
      </div>
      <div class="person" v-else>Данные не указаны</div>
    </div>
    <div class="block">
      <h2 class="title">Дети</h2>
      <template v-if="person.children.length">
        <div v-for="(child, index) in person.children" :key="index" class="child">
          {{ child.name }}, {{ child.age }} лет
        </div>
      </template>
      <template v-else>Отсутствуют</template>
    </div>
  </main>
</template>

<style scoped>
.preview {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
}
.block {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: flex-start;
}
.person {
  font-size: 16px;
  font-weight: 700;
}
.child {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  background-color: #f1f1f1;
}
</style>
