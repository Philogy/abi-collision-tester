function hasCollisions(contracts) {
  const foundSelectors = {}
  const collisions = new Set()

  contracts.forEach(({ name, interfce }) => {
    interfce.fragments.forEach((fragment) => {
      if (fragment.type !== 'function') return
      const selector = interfce.getSighash(fragment)
      const currentSelector = foundSelectors[selector]
      const finding = {
        name,
        mutability: fragment.stateMutability,
        func: fragment.format()
      }
      if (currentSelector === undefined) {
        foundSelectors[selector] = [finding]
      } else {
        foundSelectors[selector].push(finding)
        collisions.add(selector)
      }
    })
  })
  const strangeCollisions = []
  collisions.forEach((collidedSelector) => {
    const found = foundSelectors[collidedSelector]
    console.log(`${collidedSelector}:`, found)
    if (!found.map(({ func }) => func).every((func) => func === found[0].func)) {
      strangeCollisions.push(found)
    }
  })
  if (strangeCollisions.length > 0) {
    strangeCollisions.forEach((strangeCollision) =>
      console.log('strangeCollision: ', strangeCollision)
    )
    console.log(`special collisions: ${strangeCollisions.length}`)
  } else {
    console.log('no strange collisions')
  }
  console.log(`collision count: ${collisions.size}`)
}

module.exports = { hasCollisions }
