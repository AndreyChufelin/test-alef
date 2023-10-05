<script setup>
import VueInput from '../components/VueInput.vue'

defineProps(['age','name'])
defineEmits(['update:age','update:name', 'delete'])
</script>

<template>
  <div class="children-input">
    <div class="inputs">
      <VueInput :modelValue="name" @input="$emit('update:name',$event.target.value)" class="inputs__input">Имя</VueInput>
      <VueInput :modelValue="age" type="number" @input="$emit('update:age',$event.target.value)" class="inputs__input">Возраст</VueInput>
    </div>
    <button @click="$emit('delete')" class="delete-button">Удалить</button>
  </div>
</template>

<style scoped>
.children-input {
  display: flex;
  column-gap: 18px;
}
.inputs {
  display: flex;
  flex: 1;
  column-gap: 18px;
}
.inputs__input {
  flex: 1;
}

.delete-button {
  color: #01a7fd;
}
</style>
