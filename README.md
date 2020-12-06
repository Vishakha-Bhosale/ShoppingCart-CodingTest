# Coding Test - Shopping Cart
This repository contains the code written as a part of a coding test for an organisation. The code provisions the users to add their products to a cart, calculate the total amount and the sales tax associated with it. 

The actual implementation of the individual functions alongwith utility scripts can be found at "src/Component". "Tests" folder includes the test suite to test the code functionality. 

<b>Requirements</b>
- OS: Windows 10 (tested)
- Language: Javascript/nodejs

<b>Installation</b>
1. You need to download and install NodeJS (found <a href="https://nodejs.org/en/download/">here</a>). A step by step guide to install NodeJS can be found <a href = "https://phoenixnap.com/kb/install-node-js-npm-on-windows">here</a>.

 - In case of the following error, "Err: cb() never called", delete the package-lock.json file and "node-modules" folder, and reinstall "npm" using,
 > npm install

 - In case of babel version mismatch (required = 7.x), follow the following commands,
 > npm uninstall babel-cli -g

 > npm uninstall babel-core -g

  - Re-install babel using these commands,

  > npm install @babel/node

  > npm install @babel/cli

  > npm install @babel/core

2. Next, you need to ensure you have "jest" installed. We can do so with npm or yarn. To do with npm, run the following,

> npm install --save-dev jest

3. Once you have done this, go to the terminal and navigate to the root folder and execute,

> npm start
- On a different terminal run the following command, 
  
> npm run test

4. Successful execution of all test cases should result as shown below, 

![ScreenShot](/imgs/success.png)

