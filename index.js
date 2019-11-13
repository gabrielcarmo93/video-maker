const readline = require('readline-sync')
const robots = {
  text: require('./robots/text'),
  input: require('./robots/user-input'),
  state: require('./robots/state'),
  image: require('./robots/image'),
}

async function start() {
  // robots.input()
  // await robots.text()
  await robots.image()

  // const content = robots.state.load()
  // console.dir(content, { depth: null })
}

start()