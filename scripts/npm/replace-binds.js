/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const fs = require('fs');
const { execSync } = require('child_process');

const BIND_REGEX = /this\.([A-Za-z0-9]*)[\s]*=[\s]*this.(.*)\.bind\(this\)/;
const FUNCTION_REGEX = /([\s]*)([A-Za-z0-9]*)[\s]*\((.*)\)[\s]*\{/;

const replaceBinds = file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    // look for bind lines, and extract names of functions
    let result = data;
    const lines = result.split('\n');
    const functionsToReplace = [];
    lines.forEach(l => {
      if (l.match(BIND_REGEX)) {
        const matches = l.match(BIND_REGEX);
        functionsToReplace.push(matches[1]);
        console.log(`replacing ${l} with EMPTY_STRING`);
        result = result.replace(`${l}\n`, '');
      }
    });
    // console.log(functionsToReplace);

    lines.forEach(l => {
      if (l.match(FUNCTION_REGEX)) {
        const matches = l.match(FUNCTION_REGEX);
        const precedingWhiteSpace = matches[1];
        const functionName = matches[2];
        const functionArgs = matches[3];
        // console.log(`FUNCTION NAME "${functionName}"`);
        if (functionsToReplace.includes(functionName)) {
          console.log(
            `${functionName}\t${functionsToReplace.includes(functionName)}`,
          );
        }
        if (!functionsToReplace.includes(functionName)) {
          return null;
        }

        const newLineValue = `${precedingWhiteSpace}${functionName} = (${functionArgs}) => {`;
        console.log(`replacing ${l} with ${newLineValue}`);
        result = result.replace(l, newLineValue);
      }
    });
    fs.writeFile(file, result, 'utf8', err2 => {
      if (err2) return console.log(err2);
    });
    return null;
  });
};

let jsFiles = execSync('find . -name "*.js" | grep -v node_modules')
  .toString()
  .split('\n');
jsFiles = jsFiles.filter(s => s !== '');

jsFiles.forEach(jf => {
  replaceBinds(jf);
});
