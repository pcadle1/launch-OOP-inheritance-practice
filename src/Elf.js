import MagicalCreature from "./MagicalCreature.js"

class Elf extends MagicalCreature{
    constructor(name, elfType){
        super(name)
        this.elfType = elfType
        if(elfType === 'dark'){
            this.totalMagicEnergy = 200
        }
    }
}

export default Elf
