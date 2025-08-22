export class Ship {
  constructor(length, name) {
		this.length = length;
		this.hits = 0;
		this.sunk = false;
		this.name = name;
  }
  
	hit() {
		this.hits = this.hits + 1;
	}

	checkIfSunk() {
		if (this.hits >= this.length) {
			this.sunk = true;
			alert(`${this.name} has fallen`)
		}
	}
}

