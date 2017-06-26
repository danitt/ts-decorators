import { Beverage } from './beverage.class'

export class Espresso extends Beverage {
  constructor() {
    super('Espresso', 199)
  }
  brew = () => console.log('• Dripping Coffee through filter')
  applyCondiments = () => console.log('• Adding Sugar and Milk')
}

