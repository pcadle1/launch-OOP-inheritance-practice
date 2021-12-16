import Elf from "./Elf.js"
import MagicalCreature from "./MagicalCreature.js"
import Sorcerer from "./Sorcerer.js"

const magicalCreature1 = new MagicalCreature('wizard')
const darkElf = new Elf('Joe', 'dark')
const woodElf = new Elf('buddy', 'wood')
const pothosTheSorcerer = new Sorcerer("Pothos the Wise")


console.log(woodElf.totalMagicEnergy)
pothosTheSorcerer.stealMagicEnergy(woodElf)
console.log(woodElf.totalMagicEnergy)
