Magical creatures of all sorts have strange magical powers. But keeping track of which to write silly ballads about and which ones to fear is difficult to track. Let's use prototypical inheritance to experiment creating magical creature sub-classes to keep an accurate guide for magical creatures!

### Getting Started
```no-highlight
et get magical-creature-inheritance-js
cd magical-creature-inheritance-js
```

### Instructions

The `src` folder provided contains the files we will need to edit to get our magical academy app working. The `main.js` is the file we will be running to run the rest of the app from. Review the  `MagicalCreature` class. We will be creating two different types of creatures that will inherit from this class, `Sorcerer` and `Elf`. We also highly recommend tackling the bonus static method section of this exercise.

A new `MagicalCreature` object takes a string of `name` as an argument. By default, it's `totalMagicEnergy` and `magicEnergySource` are set to default values of `100` and `innate` respectively. The `MagicalCreature` class also has an instance method, `magicSpell`. Performing a spell drains 20 `totalMagicEnergy` from that creature, and is subtracted from their total `totalMagicEnergy` property.


### Part 1: Creating Elves

Elves are innately magical creatures, and often have arcane spells that rely on the energy natural to the environment.

* Define an `Elf` in the `Elf.js` file. Ensure that the prototype of an `Elf` is a `MagicalCreature` using the `extends` keyword
* Define the constructor for your `Elf`. An `Elf` requires two parameters in order to be instantiated, `name` (string) and `elfType` (string). Make sure to use `super` keyword here use the definition for `name` and `totalMagicEnergy` defined in `MagicalCreature`.
* If an elf is instantiated with an `elfType` of "dark", then it's `totalMagicEnergy` level should be set to 200 instead of the default 100. Otherwise, all other elves of other elfTypes should inherit their `totalMagicEnergy` from their prototype!

In the `src/main.js` file, be sure to import the `MagicalCreature` class. Then make sure to import the `Elf` class.

* Instantiate three objects, a `MagicalCreature` object stored in the variable `magicalCreature1`, and two `Elf` objects in variables `darkElf` and `woodElf` respectively.
* The `darkElf`'s `elfType` should be "dark", and the `woodElf`'s elf type should be (you guessed it) `wood`.

Using `console.log` or `debugger`, run the code and ensure that your `darkElf`'s `totalMagicEnergy` energy is 200, and that your `woodElf` and `magicalCreature1` have a `totalMagicEnergy` of 100.

Try running the `powerCheck` method on each of these objects as well. One of them should have an output of "This creature has a scary amount of energy!" and the other two should have and output of "This creature has a modest amount of energy". Make sure to save this objects for part 2!

```js
const magicalCreature1 = new MagicalCreature("Bob the Magic One")
// MagicalCreature{name: "Bob the Magic One, totalMagicEnergy: 100, magicEnergySource: "innate"}
magicalCreature1.powerCheck()
// "This creature has a modest amount of energy"
const woodElf = new Elf("Birchroot", "wood")
// Sorcerer{name: "Birchroot, totalMagicEnergy: 100, magicEnergySource: "innate"}
woodElf.powerCheck()
// "This creature has a modest amount of energy"

const darkElf = new Elf("Evil Susan", "dark")
// Sorcerer{name: "Evil Susan, totalMagicEnergy: 200, magicEnergySource: "innate"}
darkElf.powerCheck()
// "This creature has a scary amount of energy!"
```

### Part 2: Creating Sorcerers

Let's also define a magical creature that only becomes magical with good study habits: a sorcerer!

* In the `src` folder, create a file named `Sorcerer.js`. This Sorcerer class should inherit from `MagicalCreature` using prototypical inheritance.
* When a new `Sorcerer` is created, it's default `magicalEnergySource` should be `learned` instead of `innate`. Otherwise, use the super keyword to ensure a sorcerer object has all of the default properties that a `magicalCreature` would have. Add the following to the `main.js` and ensure that it returns the same output!

```js
  const pothosTheSorcerer = new Sorcerer("Pothos the Wise")
// Sorcerer{name: "Pothos the Wise"", totalMagicEnergy: 100, magicEnergySource: "learned"}
```

Define a new method on the `MagicalCreature` class called `stealMagicEnergy`. 

* The `stealMagicEnergy` method should set the `totalMagicEnergy` of the creature calling it to 9001 *if* that creature's `magicEnergySource` is `learned`. 
* `stealMagicEnergy` should instead return the string "This creature doesn't know how to steal magic energy" if that creature's magic `magicEnergySource` is `innate`.

Ensure that the `stealMagicEnergy` method works for an instance of the Elf and Sorcerer classes. Your sorcerer's energy should now be over 9000! 

```js 
pothosTheSorcerer.stealMagicEnergy()
pothosTheSorcerer.powerCheck()
// "This creature has a scary amount of energy!"

woodElf.powerCheck()
// "This creature has a modest amount of energy"
```

### Bonus 

Update the `stealMagicEnergy` method to accept an argument of a any type of magical creature object (whose class can be either Sorcerer, MagicalCreature or Elf). When called, `stealMagicEnergy` has the same functionality that it did before, but also reduces the `totalMagicEnergy` of the passed in creature to zero. 

```js 
woodElf.totalMagicEnergy 
// 100

pothosTheSorcerer.stealMagicEnergy(woodElf)

woodElf.totalMagicEnergy
// 0
```