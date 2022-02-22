<template>
  <input
    :type="type ? type : 'text'"
    :value="value"
    @input="input"
  />
</template>

<script>
export default {
  name: 'ToDoInput',
  props: {
    type: { type: String, require: false },
    value: { require: false },
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
