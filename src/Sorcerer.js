import MagicalCreature from "./MagicalCreature.js"

class Sorcerer extends MagicalCreature{
    constructor(name){
        super(name)
        this.magicEnergySource = 'learned'
    }
}
export default Sorcerer