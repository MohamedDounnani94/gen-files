const backend = require('./backend')
const frontend = require('./frontend')
module.exports = {
  schema: backend.schema,
  vuex_store: frontend.vuex_store
}