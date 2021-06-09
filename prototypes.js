// Choose a topic/theme that you’re interested in.
// For example Movies, Cars, Music, Sports etc.
// (Don’t use the examples from the slides)

// Implement the below prototypal inheritance diagram using the topic you chose
// Create some instances with the child constructor functions and call the prototype methods

function GenshinImpactCharacter(weapon, vision, rarity) {
    this.weapon = weapon;
    this.vision = vision;
    this.rarity = rarity;
    this.getConstellationNumber = function () {
        return Math.ceil(Math.random() * 6);
    }
    this.getFriendshipLevel = function () {
        return Math.ceil(Math.random() * 10)
    }
}

function FemaleCharacter(weapon, vision, rarity) {
    GenshinImpactCharacter.call(this, weapon, vision, rarity)
    this.gender = 'female'
}

FemaleCharacter.prototype = Object.create(GenshinImpactCharacter.prototype)

function MaleCharacter(weapon, vision, rarity) {
    GenshinImpactCharacter.call(this, weapon, vision, rarity);
    this.gender = 'male';
}

MaleCharacter.prototype = Object.create(GenshinImpactCharacter.prototype)

// The MDN documentation related to the Inheritance topic says that not setting constructor of the
// inherited function to itself may lead to some troubles. Therefore, I added the code below:

    // Object.defineProperty(MaleCharacter.prototype, 'constructor', {
    //     value: MaleCharacter,
    //     enumerable: false,
    //     writable: true });
    //
    // Object.defineProperty(FemaleCharacter.prototype, 'constructor', {
    //     value: FemaleCharacter,
    //     enumerable: false,
    //     writable: true });

// Anyways, there are no mentions about the troubles it may cause, and my code with this part commented out works just fine.
// What is the point of setting constructor this way?

const ganyu = new FemaleCharacter('Bow', 'Cryo', 5);
console.log(ganyu);
const diluc = new MaleCharacter('Claymore', 'Pyro', 5);
console.log(diluc);