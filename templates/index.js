const backend = require('./backend')
const frontend = require('./frontend')
module.exports = {
  graphql_schema: { name: backend.graphql_schema, ex: 'js' },
  vuex_store: { name: frontend.vuex_store, ex: 'js' },
  vue_component: {name: frontend.vue_component, ex: 'vue' },
}