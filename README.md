# Weighted Dice

A simple function which will return a "random" answer based on weighted inputs.

---

## Usage

`npm i weighteddice`

```javascript
import weightedDice from 'weighteddice'

const die = [
  { thing: 'a', weight: 50 },
  { thing: 'b', weight: 50 }
]

const ans = weightedDice(die) // ans has a 50% chance of being 'a' and a 50% chance of being 'b'

// ---

const die2 = [
  { thing: 'red', weight: 20 },
  { thing: 'blue', weight: 70 },
  { thing: 'green', weight: 10 },
]

const ans2 = weightedDice(die2) // ans2 has a 20% chance of being 'red', a 70% chance of being 'blue' and a 10% chance of being 'green'
```

Key points:
- `thing` can be anything. A string, number, array, object, you name it.
- the weights must be integers
- the weights must add up to 100

---

## Contributing

Simply ping me a pull request or raise an issue. It's such a small function that there's no real rules around this. Thanks.