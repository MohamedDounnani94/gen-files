const _ = require('lodash')
module.exports.fillTemplate = function  (name) {
  const upperFirstName = _.upperFirst(name)
  const snackName = _.snakeCase(name)
  return `<template>
  <div>
    {{title}}}
  </div>
</template>

<script>
export default {
  name: '${snackName}',
  props: {},
  data() {
    return {
      title: '${upperFirstName}'
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
`
}