import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static numberCreatedArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.numberCreatedArchetypeInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.numberCreatedArchetypeInstances;
  }
}