window.addEventListener("keydown", function (e) {
	// space and arrow keys
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);

function init() {
	gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px;"></div>`;
	player.el = document.querySelector(`.player`);
}

let gameZone = document.querySelector(`.game-zone`),
	fps = 1000 / 60,
	player = {
		sprites: {
			top: `img/plane-top.png`,
			right: `img/plane-right.png`,
			bottom: `img/plane-bottom.png`,
			left: `img/plane-left.png`,
			crash: `img/crash.png`,
		},
		el: false,
		x: 360,
		y: 550,
		step: 5,
		run: false,
		radius: 31,
		w: 80,
		side: 1, // 1 - top, 2 - right, 3 - bottom, 4 - left 
		frequency: 0.01,
	},
	ints = {
		run: false,
	};

function intervals() {
	ints.run = setInterval(() => {

		clock(minSec);

		let playerPos = document.querySelector(`.player`);
		if (player.run) {
			switch (player.side) {
				case 1: // top
					if (player.y > 0) {
						player.y -= player.step;
						playerPos.style.top = `${player.y}px`;
					}
					else {
						playerPos.style.backgroundImage = `url(${player.sprites.crash})`;
						clearInterval(ints.run);
						document.removeEventListener('keydown', listener);
						restart();
					}
					break;
				case 3: // bottom
					if (player.y < 720) {
						player.y += player.step;
						playerPos.style.top = `${player.y}px`;
					}
					else {
						playerPos.style.backgroundImage = `url(${player.sprites.crash})`;
						clearInterval(ints.run);
						document.removeEventListener('keydown', listener);
						restart();
					}
					break;
				case 2: // right
					if (player.x < 720) {
						player.x += player.step;
						playerPos.style.left = `${player.x}px`;
					}
					else {
						playerPos.style.backgroundImage = `url(${player.sprites.crash})`;
						clearInterval(ints.run);
						document.removeEventListener('keydown', listener);
						restart();
					}
					break;
				case 4: // left 
					if (player.x > 0) {
						player.x -= player.step;
						playerPos.style.left = `${player.x}px`;
					}
					else {
						playerPos.style.backgroundImage = `url(${player.sprites.crash})`;
						clearInterval(ints.run);
						document.removeEventListener('keydown', listener);
						restart();
					}
					break;
			}
		}

		if (gun1Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun1Top);
				gun1Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun1Top);
		}

		if (gun2Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun2Top);
				gun2Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun2Top);
		}

		if (gun3Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun3Top);
				gun3Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun3Top);
		}

		if (gun4Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun4Top);
				gun4Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun4Top);
		}

		if (gun5Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun5Top);
				gun5Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun5Top);
		}

		if (gun6Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun6Top);
				gun6Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun6Top);
		}

		if (gun7Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun7Top);
				gun7Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun7Top);
		}

		if (gun8Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun8Top);
				gun8Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun8Top);
		}

		if (gun9Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun9Top);
				gun9Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun9Top);
		}

		if (gun10Top.gunCheckShot === false) {
			if (Math.random() < player.frequency) {
				gunTopCreateBul(gun10Top);
				gun10Top.gunCheckShot = true;
			}
		}
		else {
			gunTopShot(gun10Top);
		}
	}, fps);
}

let listener = (e) => {
	let playerPos = document.querySelector(`.player`)
	switch (e.keyCode) {
		case 38: // top 
			playerPos.style.backgroundImage = `url(${player.sprites.top})`;
			player.run = true;
			player.side = 1;
			break;
		case 40: // bottom
			playerPos.style.backgroundImage = `url(${player.sprites.bottom})`;
			player.run = true;
			player.side = 3;
			break;
		case 39: // right
			playerPos.style.backgroundImage = `url(${player.sprites.right})`;
			player.run = true;
			player.side = 2;
			break;
		case 37: // left
			playerPos.style.backgroundImage = `url(${player.sprites.left})`;
			player.run = true;
			player.side = 4;
			break;
	}
}

function controllers() {
	document.addEventListener(`keydown`, listener);
}

function GunMaker(x, y, side, id) {
	this.x = x,
		this.y = y,
		this.w = 26,
		this.h = 33,
		this.i = 0,
		this.bullets = [],
		this.gunCheckShot = false,
		this.id = id,
		this.el = false;
}

const gun1Top = new GunMaker(30, 0, 3, '1Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun1Top.x}px; top: ${gun1Top.y}px;"></div>`;

const gun2Top = new GunMaker(110, 0, 3, '2Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun2Top.x}px; top: ${gun2Top.y}px;"></div>`;

const gun3Top = new GunMaker(190, 0, 3, '3Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun3Top.x}px; top: ${gun3Top.y}px;"></div>`;

const gun4Top = new GunMaker(270, 0, 3, '4Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun4Top.x}px; top: ${gun4Top.y}px;"></div>`;

const gun5Top = new GunMaker(350, 0, 3, '5Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun5Top.x}px; top: ${gun5Top.y}px;"></div>`;

const gun6Top = new GunMaker(430, 0, 3, '6Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun6Top.x}px; top: ${gun6Top.y}px;"></div>`;

const gun7Top = new GunMaker(510, 0, 3, '7Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun7Top.x}px; top: ${gun7Top.y}px;"></div>`;

const gun8Top = new GunMaker(590, 0, 3, '8Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun8Top.x}px; top: ${gun8Top.y}px;"></div>`;

const gun9Top = new GunMaker(670, 0, 3, '9Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun9Top.x}px; top: ${gun9Top.y}px;"></div>`;

const gun10Top = new GunMaker(750, 0, 3, '10Top');
gameZone.innerHTML += `<div class="gun" style="left: ${gun10Top.x}px; top: ${gun10Top.y}px;"></div>`;

function BulletMaker(x, y, step) {
	this.x = x,
		this.y = y,
		this.w = 16,
		this.radius = 6,
		this.step = step,
		this.el = false;
}
let bulletSpeed = { val: 4 };

function gunTopCreateBul(gun) {
	gameZone.innerHTML += `<div class="bullet" id="bul${gun.id}${gun.i}" style="left: ${gun.x + 6}px; top: ${gun.y + 25}px;"></div>`;
	let buferForBullet = new BulletMaker(gun.x + 6, gun.y + 25, bulletSpeed.val);
	gun.bullets.push(buferForBullet);
	gun.i++;
}

function gunTopShot(gun) {
	gun.i--;
	gun.bullets[gun.i].el = document.getElementById(`bul${gun.id}${gun.i}`);
	if (gun.bullets[gun.i].y < 784) {
		gun.bullets[gun.i].y += gun.bullets[gun.i].step;
		gun.bullets[gun.i].el.style.top = `${gun.bullets[gun.i].y}px`;

		let dx = (gun.bullets[gun.i].x + gun.bullets[gun.i].w / 2) - (player.x + player.w / 2);
		let dy = (gun.bullets[gun.i].y + gun.bullets[gun.i].w / 2) - (player.y + player.w / 2);
		let distance = Math.sqrt(dx * dx + dy * dy);
		if (distance < gun.bullets[gun.i].radius + player.radius) {
			// collision detected!
			let playerPos = document.querySelector(`.player`);
			playerPos.style.backgroundImage = `url(${player.sprites.crash})`;
			clearInterval(ints.run);
			document.removeEventListener('keydown', listener);
			restart();
		}
		gun.i++;
	}
	else {
		gun.bullets[gun.i].el.remove();
		gun.gunCheckShot = false;
		gun.i++;
	}
}

function game() {
	init();
	intervals();
	controllers();
}

let startGame, controlStartGame = true;
startGame = document.getElementsByClassName("startGame_button");
startGame[0].addEventListener('click', () => {
	if (controlStartGame === true) {
		game();
		controlStartGame = false;
	}
	else return;
});

let minSec = {
	i: 0,
	m: 0,
	s: 0,
	ex: "",
};
let timer = document.getElementById('timer');

function clock(minSec) {
	minSec.i++;
	if (minSec.i % 60 === 0) {
		minSec.s += 1;
		if (minSec.s === 60) {
			minSec.s = 0;
			minSec.m += 1;

			bulletSpeed.val += 0.5;
			player.frequency += 0.01;
		}
		else if (minSec.s === 10) {
			bulletSpeed.val += 0.5;
			player.frequency += 0.01;
		}
		else if (minSec.s === 20) {
			bulletSpeed.val += 0.5;
			player.frequency += 0.01;
		}
		else if (minSec.s === 30) {
			bulletSpeed.val += 0.5;
			player.frequency += 0.01;
		}
		else if (minSec.s === 40) {
			bulletSpeed.val += 0.5;
			player.frequency += 0.01;
		}
		else if (minSec.s === 50) {
			bulletSpeed.val += 0.5;
			player.frequency += 0.01;
		}
	}
	if (minSec.m < 10) {
		if (minSec.s < 10) {
			minSec.ex = '0' + minSec.m + ':' + '0' + minSec.s;
		}
		else {
			minSec.ex = '0' + minSec.m + ':' + minSec.s;
		}
	}
	else {
		if (minSec.s < 10) {
			minSec.ex = minSec.m + ':' + '0' + minSec.s;
		}
		else {
			minSec.ex = minSec.m + ':' + minSec.s;
		}
	}
	timer.textContent = minSec.ex;
}

function restart() {
	let restartButton = document.getElementById(`restartButton`);
	restartButton.innerHTML += `<a class="startGame_button" id="restart">Restart</a>`;
	restartButton.addEventListener('click', () => {
		window.location.reload();
	});
}