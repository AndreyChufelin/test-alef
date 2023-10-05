import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePersonStore = defineStore('person', () => {
  const personPreview = ref({ name: '', age: null, children: [] })
  const personForm = ref({ name: '', age: null, children: [] })

  function savePreview(payload) {
    personPreview.value = JSON.parse(JSON.stringify(payload))
  }

  return { personPreview, personForm, savePreview }
})
