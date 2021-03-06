const auth = require('./auth.json')
const drive = require('../drive.js')({
  refresh: () => { throw new Error('GAH! I should write this code!') },
  access_token: auth.access_token
})

drive.changes({ maxNodes: 3 }, (data) => {
  // this is fired multiple times as it streams the responses
  console.log('--------')
  console.log(data)
})
.then(() => {
  // called when the response has completed
})
.catch(console.error)
