[![github.com/marcom16](https://avatars2.githubusercontent.com/u/25273655?v=4&s=120)](https://github.com/marcom16/)

### Getting Started

There are two methods for getting started with this repo.

#### Install -> Put on your terminal:
```sh
> npm install --save ValidateIt
```

#### Usage -> 
```js
const ValidateIt = require('ValidateIt')
 // ValidateIt(Type, String or Data) => return True or False
 
 ValidateIt("name", /*Name*/),
 ValidateIt("fullName", /*Full Name*/),
 ValidateIt("email", /*Email*/),
 ValidateIt("password", /*Password*/),
 ValidateIt("phone", /*Phone Number*/),
 ValidateIt("zipCode", /*US Zip Code*/),
 ValidateIt("image", /*dataImg*/),
 ValidateIt("doc", /*dataDoc*/)
```


#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```sh
> git clone https://github.com/marcom16/ValidateIt.git
> cd ValidateIt
> npm install
> npm start
```

#### Not Familiar with Git?
Then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```sh
> npm install
> npm start
```

#### Are there old dependecies?
npm-check-updates is a command-line tool that allows you to upgrade your package.json or bower.json dependencies to the latest versions, regardless of existing version constraints. 
#### github: https://github.com/tjunnone/npm-check-updates

```sh
> npm install -g npm-check-updates

 express           4.12.x  →   4.13.x
 multer            ^0.1.8  →   ^1.0.1
 react-bootstrap  ^0.22.6  →  ^0.24.0
 react-a11y        ^0.1.1  →   ^0.2.6
 webpack          ~1.9.10  →  ~1.10.5

Run with -u to upgrade your package.json

> ncu -u
```
