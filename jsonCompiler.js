import { writeFileSync, existsSync, rmdirSync, mkdirSync } from 'fs';

// CONSTANT
const buildDir = `./build/json`;
const CID = 'QmVcKC5jyhqAc9yLXHiRN3GuboqR1DWFdFZjeu5kJpbjSF';
const NUMBER_OF_TIMES = 1;

const getCID = (id) => {
  return `ipfs://${CID}/${id}.png`;
};

const getJsonPlaceholderData = (id) => {
  return {
    name: `Alephian #${id}`,
    description: 'Celebrate IWD with Aleph!',
    image: getCID(id),
  };
};

const runFileSync = (id) => {
  try {
    writeFileSync(
      `./build/json/${id}`,
      JSON.stringify(getJsonPlaceholderData(id), null, 2),
      'utf8',
    );
    // console.log('Data successfully saved to disk');
  } catch (error) {
    console.log('An error has occurred ', error);
  }
};

const createJsonFile = () => {
  if (existsSync(buildDir)) {
    rmdirSync(buildDir, { recursive: true });
  }
  mkdirSync(buildDir);

  for (let i = 0; i < NUMBER_OF_TIMES; i++) {
    runFileSync(i + 1);
  }
  console.log(`${NUMBER_OF_TIMES} files successfully saved to disk`);
};

createJsonFile();
