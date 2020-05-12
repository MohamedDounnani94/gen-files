const _ = require('lodash')
module.exports.fillTemplate = function  (name) {
  const upperFirstName = _.upperFirst(name)
  return `const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies')
chai.use(spies)

describe('read${upperFirstName}', function () {
  before(function () {})
  
  it('', async function () {
    const expected = ''
    expect(expected).to.be.equal(expected)
  })

  after(function (done) {
    done()
  })
})
`
}