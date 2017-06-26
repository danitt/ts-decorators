import { Beverage } from './beverage.class'

export class Tea extends Beverage {
  constructor() {
    super('Tea', 50)
  }
  brew = () => console.log('• Steeping the tea')
  applyCondiments = () => console.log('• Adding Lemon')
}

