// Takes an array in shape: 
// [{ thing: 'heads', weight: 95 }, { thing: 'tails', weight: 5 }]
// thing can be anthing, ie object or func etc.
// weights must equal 100

function weightedDice (things) {
  var rand = Math.round(Math.random() * 100)
  var cumulative = 0
  var properWeightThings = things.map(t => {
    cumulative = cumulative + t.weight
    return { thing: t.thing, weight: cumulative }
  })
  var ans = null
  var i = 0
  while (!ans) {
    var thing = properWeightThings[i].thing
    var weight = properWeightThings[i].weight
    if (rand <= weight) {
      ans = thing
    }
    i++
  }
  return ans
}

module.exports = weightedDice
