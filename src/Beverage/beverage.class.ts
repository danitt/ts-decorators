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

  constructor(
    protected description: string = 'Unknown Beverage',
    protected cost: number
  ) {}

  getDescription = () => this.description
  getCondiments = () => this.condiments
  getTotal = () => this.condiments.reduce( (sum, condiment) => sum + condiment.cost, this.cost)

  @validateCondiments
  addCondiments(...condiments: Beverage[]) { this.condiments = this.condiments.concat(condiments) }
}
