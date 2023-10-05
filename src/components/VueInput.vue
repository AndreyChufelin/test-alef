<script setup>
const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: 'text' }
})
const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  if (props.type === 'number') {
    event.target.value = event.target.value.replace(/^0/g, '').replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
  }

  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <label class="label">
    <slot></slot>
    <input type="text" class="input" :value="modelValue" @input="onInput" />
  </label>
</template>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  font-size: 13px;
  line-height: normal;
  color: #1111117a;
}
.input {
  outline: none;
  padding: 8px 0;
  font-size: 14px;
}
</style>
