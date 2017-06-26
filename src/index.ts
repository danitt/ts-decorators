// Beveridges
import { Espresso } from './Beverage/espresso.class'
import { Tea } from './Beverage/tea.class'

// Condiments
import { Mocha } from './Condiment/mocha.class'
import { Whip } from './Condiment/whip.class'

console.log(`\n# Ordering an Espresso with double mocha, whipped cream`)
const drink1 = new Espresso()
drink1.addCondiments(new Mocha, new Whip)
drink1.addCondiments(new Mocha)

console.log(`\n# Attempting to add an invalid condiment`)
drink1.addCondiments(new Espresso)

console.log(`\n# Getting final condiment list & price:
  DRINK: ${drink1.getDescription()}
  CONDIMENTS: ${drink1.getCondiments().map(condiment => condiment.description).join(', ')}
  PRICE: ${drink1.getTotal()}`)

console.log(`\n# Ordering a Tea`)
const drink2 = new Tea()

console.log('\n# Preparing recipes')
drink1.prepareRecipe()
console.log()
drink2.prepareRecipe()
