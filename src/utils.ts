import Fighter, { SimpleFighter } from './Fighter';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

function attackPlayer(player1:Fighter, player2:Fighter | SimpleFighter) {
  const attack = getRandomInt(1, 10);
  return attack % 2 === 0 ? player1.attack(player2) : player2.attack(player1);
}

export function battle(player1:Fighter, player2:Fighter | SimpleFighter) {
  while (player1.lifePoints > 0 && player2.lifePoints > 0) {
    attackPlayer(player1, player2);
  }
}

export default getRandomInt;
