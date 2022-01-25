import path from 'path';
import fs from 'fs';
import * as chokidar from 'chokidar';

/*
  Generate a file for registering game objects.

  Example down under.
  -------------------------------------------------------------------------------
  import { register as registerObjectExample } from './gameObjects/ObjectExample'

  registerObjectExample();
  -------------------------------------------------------------------------------
*/

interface GameObjectFile {
  name: string;
  path: string;
  registerName: string;
}

const gameObjectFolder = path.resolve('./src/gameObjects');
const registerFactoryDestination = path.resolve('./src/gameObjectFactory.ts');

const getFileNameWithoutExtension = function (filename: string): string {
  return filename.substring(0, filename.indexOf('.'));
};

const convertFileToGameObjectFile = function (
  filename: string
): GameObjectFile {
  return {
    name: getFileNameWithoutExtension(filename),
    path: './gameObjects',
    registerName: `register${getFileNameWithoutExtension(filename)}`,
  };
};

const createFileContent = function (gameObjectFiles: GameObjectFile[]): string {
  return `${gameObjectFiles
    .map((gameObjectFile) => {
      const { registerName, path, name } = gameObjectFile;
      return `import { register as ${registerName} } from '${path}/${name}';\n`;
    })
    .join('')}
${gameObjectFiles
  .map((gameObjectFile) => {
    return `${gameObjectFile.registerName}();\n`;
  })
  .join('')}`;
};

const writeGameObjectFactory = function (): void {
  const files = fs.readdirSync(gameObjectFolder);
  const gameObjectFiles = files.map(convertFileToGameObjectFile);
  gameObjectFiles.forEach(({ name }) => {
    console.log(`Registering game object ${name} to factory...`);
  });
  const fileContent = createFileContent(gameObjectFiles);
  fs.writeFileSync(registerFactoryDestination, fileContent, {
    encoding: 'utf-8',
  });
  console.log(`Factory created at ${registerFactoryDestination}`);
};

const watchGameObjectFactory = function (): void {
  chokidar.watch(gameObjectFolder).on('all', writeGameObjectFactory);
};

const isWatched = process.argv.some((arg) => arg === '--watch');
if (isWatched) {
  watchGameObjectFactory();
} else {
  writeGameObjectFactory();
}
