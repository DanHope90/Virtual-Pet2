const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Ziggy')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Ziggy');
      expect(pet.name).toEqual('Ziggy')
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Ziggy');
      expect(pet.age).toEqual(0);
    });

    it('has initial hunger of 0', () => {
      const pet = new Pet('Ziggy')
      expect(pet.hunger).toEqual(0);
    });

    it('has initial fitness of 10', () => {
      const pet = new Pet('Ziggy')
      expect(pet.fitness).toEqual(10);
    });

  });
  
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Ziggy');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
      const pet = new Pet('Ziggy');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });

    it('decrease fitness by 3', () => {
      const pet = new Pet('Ziggy');
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Ziggy');
      pet.age = 30;
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
    });

  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Ziggy');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8)
      });

    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('Ziggy');
      pet.fitness = 7;
      pet.walk();
      expect(pet.fitness).toEqual(10)
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Ziggy');
      pet.age = 30;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')
    });
    });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('Ziggy');
      pet.hunger = 6;
      pet.feed();
      expect(pet.hunger).toEqual(3);
    });

    it('decreases hunger to minimum of 0', () => {
      const pet = new Pet('Ziggy');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
      });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Ziggy');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')
      });
    });

    describe('checkup', () => {
      it("returns 'I need a walk' if the pets fitness is 3 or less ", () => {
        const pet = new Pet('Ziggy');
        pet.fitness = 3;
        expect(pet.checkUp()).toEqual('I need a walk');
      });
      it("returns 'I need to eat' if hunger is 5 or more", () => {
        const pet = new Pet('Ziggy');
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I need to eat');
      });
      it("returns 'I am hungry AND I need a walk' if hunger is 5 or more and fitness is 3 or less", () => {
        const pet = new Pet('Ziggy');
        pet.hunger = 5;
        pet.fitness = 3;
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
      });
      it('returns "I feel great" if hunger is below 5 and fitness above 3', () => {
        const pet = new Pet('Ziggy');
        pet.hunger = 4;
        pet.fitness = 4;
        expect(pet.checkUp()).toEqual('I feel great')
      });
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Ziggy');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
      });
    });
  