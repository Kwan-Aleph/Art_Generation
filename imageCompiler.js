import { writeFileSync } from 'fs';
import pkg from 'canvas';
const { createCanvas, loadImage } = pkg;

const WIDTH = 512;
const HEIGHT = 512;
const LAYERS_NAMES = ['Background', 'People', 'Face', 'Outfit', 'Accessories'];
const BUILD_SEQUENCE = ['11111', '11112'];
const TOTAL_SUPPLY = BUILD_SEQUENCE.length;

const draw = async (i) => {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const context = canvas.getContext('2d');
  const seq = BUILD_SEQUENCE[i].split('');
  console.log('seq', seq);
  const img1 = await loadImage(`./layers/${LAYERS_NAMES[0]}/${seq[0]}.png`);
  const img2 = await loadImage(`./layers/${LAYERS_NAMES[1]}/${seq[1]}.png`);
  const img3 = await loadImage(`./layers/${LAYERS_NAMES[2]}/${seq[2]}.png`);
  const img4 = await loadImage(`./layers/${LAYERS_NAMES[3]}/${seq[3]}.png`);
  const img5 = await loadImage(`./layers/${LAYERS_NAMES[4]}/${seq[4]}.png`);

  context.drawImage(img1, 0, 0, WIDTH, HEIGHT);
  context.drawImage(img2, 0, 0, WIDTH, HEIGHT);
  context.drawImage(img3, 0, 0, WIDTH, HEIGHT);
  context.drawImage(img4, 0, 0, WIDTH, HEIGHT);
  context.drawImage(img5, 0, 0, WIDTH, HEIGHT);

  const buffer = canvas.toBuffer('image/png');
  writeFileSync(`./build/images/${i + 1}.png`, buffer);
};

const drawAll = async () => {
  for (let i = 0; i < TOTAL_SUPPLY; i++) {
    await draw(i);
  }
};

// draw();
drawAll();
