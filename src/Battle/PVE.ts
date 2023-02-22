import Fighter, { SimpleFighter } from '../Fighter';
import { battle } from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _arrayMonster: Array<Fighter | SimpleFighter>;

  constructor(player: Fighter, arrayMonster: Array<Fighter | SimpleFighter>) {
    super(player);
    this._player = player;
    this._arrayMonster = arrayMonster;
  }

  fight(): number {
    this._arrayMonster.forEach((monster) => {
      battle(this.player, monster);
    });
    return super.fight();
  }
}