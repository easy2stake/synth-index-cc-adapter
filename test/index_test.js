const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  const jobID = '278c97ffadb54a5bbb93cfec5f7b5503'

  context('when using default parameters', () => {
    const req = {
      id: jobID,
      data: {}
    }

    it('returns data to the node', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isNotEmpty(data.data)
        console.log(JSON.stringify(data, null, 1))
        done()
      })
    })
  })

  context('when defining a parameter', () => {
    const req = {
      id: jobID,
      data: {
        asset: 'sCEX'
      }
    }

    it('returns data to the node', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isNotEmpty(data.data)
        console.log(JSON.stringify(data, null, 1))
        done()
      })
    })
  })
})
