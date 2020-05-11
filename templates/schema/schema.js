const _ = require('lodash')
module.exports.fillTemplate = function  (name) {
  const upperFirstName = _.upperFirst(name)
  const lowerName = _.toLower(name)
  return`const { gql } = require('apollo-server')
module.exports = function () {
  return {
    typeDefs: gql\`
      extend type Query {
        ${lowerName} (input: ${upperFirstName}Input): [${upperFirstName}]
      }
      extend type Mutation {
        createOrUpdate${upperFirstName}(data: ${upperFirstName}Input): ${upperFirstName}
      }

      type ${upperFirstName} {
      }
    \`,
    resolvers: {
      Query: {
        ${lowerName}: async (root, params, req) => {
        },
      },
      Mutation: {
        createOrUpdate${upperFirstName}: async (root, { data }, { scope }) => {
          
        }
      }
    }
  }
}
`
}