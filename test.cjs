const argon = require('argon2')

async function main () {
  const hash = await argon.hash('password')
  console.log(hash)
}

main()