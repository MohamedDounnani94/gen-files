const _ = require('lodash')
module.exports.fillTemplate = function  (name) {
  const upperFirstName = _.upperFirst(name)
  const lowerName = _.toLower(name)
  return`import queries from '~/queries'

import { make } from 'vuex-pathify'

const defaultState = () => {
  return {
    list: [],
    params: {},
    pagination: {}
  }
}

export default {
  namespaced: true,
  state() {
    return defaultState()
  },
  mutations: {
    ...make.mutations(defaultState())
  },
  actions: {
    ...make.actions(defaultState()),
    async resetState({ commit }) {
      // must do nothing
    },
    async fetch({ state, commit }) {
      const response = await queries.read${upperFirstName}()

      commit('SET_LIST', response.data.${lowerName})
      return response.data.${lowerName}
    }
  },
  getters: {
    ...make.getters(defaultState())
  }
}
`
}