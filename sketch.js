/* Biodiversity Ecology - Estimating Stream Diversity Model
 * Adapted from Virtual Lab Biology's Stream Diversity Model Simulation
 * Adapted by Sophia Wang
 * 09.30.2024
*/

// CONSTANTS
// levels of pollution
const HIGH = 2;
const MODERATE = 1;
const LOW = 0;
// sampling details
const SAMP_TIME = 60;
let time = 0;
let species = 0;
let abundance = 0;
// window/box sizing ratios
const MAIN_WIDTH = 0.8;
const MAIN_HEIGHT = 0.8;
const BOX_SIZE = 0.08;
const BOX_PAD = 0.0067;
const BOX_YPOS = MAIN_HEIGHT + BOX_PAD;
const BTN_PAD = 0.015;
const BTN_WIDTH = 0.075;
const BTN_HEIGHT = 0.05;
const BTN_XPOS = MAIN_WIDTH + BTN_PAD;
const BTN_FONT_SIZE = '24px';
const TEXT_FONT_SIZE = 24;

// CLASSES
class Organism {
	// constructor
	constructor (name, id, sensitivity) {
		this.name = name;
		this.id = id;
		this.sensitivity = sensitivity;
	}
	// getters
	name () { return this.name; }
	id () { return this.id; }
	sensitivity () { return this.sensitivity; }
}

// SETUP
function setup() {
	// essentials
	const W = windowWidth;
	const H = windowHeight;
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	// buttons
	let btnReset = createButton('Reset');
	btnReset.position(BTN_XPOS * W, BTN_PAD * H)
	btnReset.style('font-size', BTN_FONT_SIZE)
	btnReset.style('height', BTN_HEIGHT * H + 'px')
	btnReset.style('width', BTN_WIDTH * W + 'px')
	let btnGo = createButton('Go');
	btnGo.position(BTN_XPOS * W, (BTN_PAD * 2 + BTN_HEIGHT) * H)
	btnGo.style('font-size', BTN_FONT_SIZE)
	btnGo.style('height', BTN_HEIGHT * H + 'px')
	btnGo.style('width', BTN_WIDTH * W + 'px')
	let btnOpen = createButton('Open Trap');
	btnOpen.position(BTN_XPOS * W, (BTN_PAD * 3 + BTN_HEIGHT * 2) * H)
	btnOpen.style('font-size', BTN_FONT_SIZE)
	btnOpen.style('height', BTN_HEIGHT * H + 'px')
	btnOpen.style('width', BTN_WIDTH * W + 'px')
	
	// text
	textSize(TEXT_FONT_SIZE);
	text('Pollution', BTN_XPOS * W, (BTN_PAD * 4 + BTN_HEIGHT * 4) * H);
	text('Sampling Time', BTN_XPOS * W, (BTN_PAD * 6 + BTN_HEIGHT * 6.5) * H);
	text('Total Species', BTN_XPOS * W, (BTN_PAD * 7 + BTN_HEIGHT * 8.5) * H);
	text('Abundance', BTN_XPOS * W, (BTN_PAD * 8 + BTN_HEIGHT * 10.5) * H);
	
	// dropdowns
	let selPollution = createSelect();
	selPollution.option('Low');
	selPollution.option('Moderate');
	selPollution.option('High');
	selPollution.position(BTN_XPOS * W, (BTN_PAD * 4 + BTN_HEIGHT * 4.5) * H)
	selPollution.style('font-size', BTN_FONT_SIZE/2)
	selPollution.style('height', BTN_HEIGHT * H + 'px')
	selPollution.style('width', BTN_WIDTH * W + 'px')
}

// DRAW
function draw() {
	// essentials
	const W = windowWidth;
	const H = windowHeight;
	background(255);
	
	// sampling time - TBC
	// time += 1;
	// if (time == 60) {
	// 	frameRate(0);
	// }
	
	// side panel indicators
	textSize(TEXT_FONT_SIZE);
	text('Pollution', BTN_XPOS * W, (BTN_PAD * 4 + BTN_HEIGHT * 4) * H);
	text('Sampling Time', BTN_XPOS * W, (BTN_PAD * 6 + BTN_HEIGHT * 6.5) * H);
	text(time + ' minutes', BTN_XPOS * W, (BTN_PAD * 6 + BTN_HEIGHT * 7.5) * H);
	text('Total Species', BTN_XPOS * W, (BTN_PAD * 7 + BTN_HEIGHT * 8.5) * H);
	text(species, BTN_XPOS * W, (BTN_PAD * 7 + BTN_HEIGHT * 9.5) * H);
	text('Abundance', BTN_XPOS * W, (BTN_PAD * 8 + BTN_HEIGHT * 10.5) * H);
	text(abundance, BTN_XPOS * W, (BTN_PAD * 8 + BTN_HEIGHT * 11.5) * H);
}
