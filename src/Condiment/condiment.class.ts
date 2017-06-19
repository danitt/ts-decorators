import { Beverage } from './../Beverage/beverage.class'

export class Condiment extends Beverage {
  private isCondiment: boolean = true
  
  constructor(description, cost) {
    super(description, cost)
  }

}
