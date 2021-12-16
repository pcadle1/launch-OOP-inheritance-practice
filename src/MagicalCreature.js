class MagicalCreature {
  constructor(name) {
    this.name = name
    this.totalMagicEnergy = 100
    this.magicEnergySource = "innate"
  }

  magicSpell() {
    console.log(`${this.name} is preparing for a spell attack and currently has ${this.totalMagicEnergy} spell magic power.`)
    this.totalMagicEnergy -= 20
    console.log(`WOOSH! ${this.name} casts their spell! \n`)
    console.log(`${this.name} now has ${this.totalMagicEnergy} remaining.\n`)
  }

  powerCheck() {
    return ` This creature has ${ this.totalMagicEnergy > 150 ? 'a scary amount of energy!' : 'a modest amount of energy' }`;
  }

  stealMagicEnergy(creature){
    if(this.magicEnergySource === 'learned'){
      this.totalMagicEnergy = 9001
      creature.totalMagicEnergy = 0
    }else if (this.magicEnergySource === 'innate'){
      return 'This creature doesn\'t know how to steal magic energy'
    }
  }
}

export default MagicalCreature
