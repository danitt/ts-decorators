// Beveridges
import { Espresso } from './Beverage/espresso.class'
import { HouseBlend } from './Beverage/houseBlend.class'

// Condiments
import { Mocha } from './Condiment/mocha.class'
import { Whip } from './Condiment/whip.class'

console.log(`\n Ordering an Espresso with double mocha, whipped cream`)
const drink1 = new Espresso()
drink1.addCondiments(new Mocha, new Whip)
drink1.addCondiments(new Mocha)
console.log(`\n Attempting to add an invalid condiment`)
drink1.addCondiments(new Espresso)
console.log(`
  \n Getting final condiment list & price:
  DRINK: ${drink1.getDescription()}
  CONDIMENTS: ${drink1.getCondiments().map(condiment => condiment.description).join(', ')}
  PRICE: ${drink1.getTotal()}
  `)
