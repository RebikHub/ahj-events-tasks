export default class Task {
  constructor() {
    this.point = null;
    this.goblins = null;
    this.randomNumber = null;
    this.gameField = null;
  }

  renderApp() {
    this.gameField = document.getElementById('game');
    const points = document.createElement('div');
    const goblin = document.createElement('div');
    goblin.classList.add('goblin', 'points');
    points.classList.add('points', 'points');
    this.gameField.insertAdjacentElement('afterend', points);
    points.insertAdjacentElement('afterend', goblin);

    for (let i = 1; i < 17; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('game-cell');
      this.gameField.appendChild(cell);
    }
  }

}
