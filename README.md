This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# Triangulars
**Triangularity** is a property of numbers in some sequence
where the value of a number corresponds to the position of another number,
the value of which corresponds to the position of the third number in the sequence
and the value of the third number corresponds to the position of the first one.
Such a sequence is called *Triangular Sequence* or **Triangular**.

Considering the sequence with the following numbers: [2, 9, 5, 1, 7, 9, 3]<br>
*five*, *seven* and *three* form `Triangular Sequence` as the number at the position five indicates to the number
at the position seven indicating to the number at the position three, i.e. five.


## Task
Implement a function **triangulars**, given a sequence of numbers, counts the *Triangular Sequences*

### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **triangulars branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
```
