/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* global __dirname */

const {
  generateTemplateFiles,
  generateTemplateFilesBatch,
} = require('generate-template-files');
const path = require('path');

const templateFolder = path.resolve(__dirname, '..', 'templates');
const gameObjectsFolder = path.resolve(
  __dirname,
  '..',
  'client',
  'src',
  'gameObjects'
);
const typesFolder = path.resolve(__dirname, '..', 'client', '@types');

generateTemplateFiles([
  {
    option: 'Game Object',
    defaultCase: '(pascalCase)',
    stringReplacers: [
      {
        question: 'Enter a name of the game object',
        slot: '__name__',
      },
    ],
    entry: {
      folderPath: path.resolve(templateFolder, 'gameObjects', '__name__.ts'),
    },
    output: {
      path: path.resolve(gameObjectsFolder, '__name__.ts'),
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
      generateTemplateFilesBatch([
        {
          option: 'd.ts',
          defaultCase: '(pascalCase)',
          dynamicReplacers: [
            {
              slot: '__name__',
              slotValue: results.stringReplacers[0].slotValue,
            },
          ],
          entry: {
            folderPath: path.resolve(templateFolder, 'd.ts', '__name__.d.ts'),
          },
          output: {
            path: path.resolve(typesFolder, '__name__.d.ts'),
            pathAndFileNameDefaultCase: '(pascalCase)',
          },
        },
      ]);
    },
  },
  {
    option: 'Game Scene',
    defaultCase: '(pascalCase)',
    stringReplacers: [
      {
        question: 'Enter a name of the game scene',
        slot: '__name__',
      },
    ],
    entry: {
      folderPath: path.resolve(templateFolder, 'gameScene', '__name__.ts'),
    },
    output: {
      path: path.resolve(gameSceneFolder, '__name__.ts'),
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
]);
