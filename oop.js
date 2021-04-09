// Implement everything from the PRTOTOTYPES HOMEWORK using ES6 Classes

class GenshinImpactCharacter {
    constructor(weapon, vision, rarity) {
        this.weapon = weapon;
        this.vision = vision;
        this.rarity = rarity;
    }

    getConstellationNumber() {
        return Math.ceil(Math.random() * 6);
    }

    getFriendshipLevel() {
        return Math.ceil(Math.random() * 10)
    }
}

class FemaleCharacter extends GenshinImpactCharacter {
    constructor(weapon, vision, rarity) {
        super(weapon, vision, rarity);
        this.gender = 'female';
    }
}

class MaleCharacter extends GenshinImpactCharacter {
    constructor(weapon, vision, rarity) {
        super(weapon, vision, rarity);
        this.gender = 'male';
    }
}

console.log(MaleCharacter.prototype);
console.log(FemaleCharacter.prototype);

console.log(ganyu);
console.log(`Method inherited from GenshinImpactCharacter class getConstellationNumber() for Ganyu: ${ganyu.getConstellationNumber()}`);
console.log(`Method inherited from GenshinImpactCharacter class getFriendshipLevel() for Ganyu: ${ganyu.getFriendshipLevel()}`);
console.log(diluc);
console.log(`Method inherited from GenshinImpactCharacter class getConstellationNumber() for Diluc: ${diluc.getConstellationNumber()}`);
console.log(`Method inherited from GenshinImpactCharacter class getFriendshipLevel() for Diluc: ${diluc.getFriendshipLevel()}`);
