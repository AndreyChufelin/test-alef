<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePersonStore } from '@/stores/person'
import ChildInput from '../components/ChildInput.vue'
import VueInput from '../components/VueInput.vue'
import IconPlus from '../components/icons/IconPlus.vue'

const personStore = usePersonStore()
const {personForm: person} = storeToRefs(personStore)

const hasMaxChildren = computed(() => person.value.children.length < 5)

function addChild() {
  if (hasMaxChildren.value) {
    person.value.children.push({ name: '', age: null })
  }
}

function save() {
  personStore.savePreview(person.value)
}
</script>

<template>
  <main class="container">
    <form class="form" @submit.prevent>
      <div class="main">
        <h2 class="title">Персональные данные</h2>
        <div class="inputs">
          <VueInput v-model="person.name">Имя</VueInput>
          <VueInput v-model="person.age" type="number">Возраст</VueInput>
        </div>
      </div>
      <div class="children">
        <div class="children__title">
          <h2 class="title">Дети (макс. 5)</h2>
          <button v-if="hasMaxChildren" @click="addChild" class="add__children">
            <IconPlus />Добавить ребенка
          </button>
        </div>
        <div class="inputs">
          <div v-for="(child, index) in person.children" :key="index">
            <ChildInput
              v-model:name="person.children[index].name"
              v-model:age="person.children[index].age"
              @delete="person.children.splice(index, 1)"
            />
          </div>
        </div>
      </div>
      <div class="form__toolbar">
        <button class="button" type="submit" @click="save">Сохранить</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.main {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.inputs {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.children {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.children__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add__children {
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid #01a7fd;
  color: #01a7fd;
}
</style>
