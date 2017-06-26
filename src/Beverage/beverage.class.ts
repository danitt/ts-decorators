function validateCondiments(target, name, descriptor) {
  const oldDescriptor = descriptor.value
  target.value = function(...condiments) {
    const invalidCondiments = condiments.filter(condiment => !condiment.isCondiment)
      .map(condiment => condiment.getDescription())
    const validCondiments = condiments.filter(condiment => condiment.isCondiment)
    if (invalidCondiments.length) console.warn(`Prevented adding invalid condiments:`, invalidCondiments)
    return oldDescriptor.apply(this, validCondiments)
  }
  return target
}

export abstract class Beverage {

  private condiments: any[] = []
  abstract brew: Function
  abstract applyCondiments: Function

  constructor(
    protected description: string = 'Unknown Beverage',
    protected cost: number
  ) {}

  readonly prepareRecipe = () => {
    console.log(`++ Preparing ${this.description}`)
    this.boilWater()
    this.brew() // abstract
    this.pourInCup()
    this.applyCondiments() // abstract
  }

  private readonly boilWater = () => console.log('• Boiling Water')
  private readonly pourInCup = () => console.log('• Pouring into cup')


  getDescription = () => this.description
  getCondiments = () => this.condiments
  getTotal = () => this.condiments.reduce( (sum, condiment) => sum + condiment.cost, this.cost)

  @validateCondiments
  addCondiments(...condiments: Beverage[]) { this.condiments = this.condiments.concat(condiments) }
}
