# ShoppingCart-CodingTest
This repository contains the code written as a part of a coding test for an organisation. The code provisions the users to add their products to a cart, calculate total amount and the sale tax asscociated with it. 

The Components folders includes the scripts and functions written to run the code, whereas the Tests folder includes the test suite to test the code functionality. 

<b>Requirements</b>
- OS: Windows 10 (tested)
- Language: Javascript/nodejs

<b>Installation</b>
- You need to download and install NodeJS, which can be found <a href="https://nodejs.org/en/download/">here</a> You can find the step by step guid on how to install NodeJS <a href = "https://phoenixnap.com/kb/install-node-js-npm-on-windows">here</a>

 -Incase of following error, "Err: cb() never called", delete the package-lock.json file and node-modules folder, and reinstall npm using,
> npm install

 - Incase of babel version mismatch (reuired = 7.x), follow the following commands
> npm uninstall babel-cli -g
> npm uninstall babel-core -g
 -Reinstall babel using these commands,

> npm install @babel/node

> npm install @babel/cli

> npm install @babel/core

- Next, you need to ensure you have jest installed. We can do so with npm or yarn. To do with npm, run the following 

> npm install --save-dev jest

- Once you have done this, go to the terminal and navigate to the folder where the project is located and run:

> npm start
- On a different terminal, run the following command
  
> npm run test

- Successful execution of all test cases should reveal the below snapshot, 

![ScreenShot](/imgs/success.png)

