# Connecting PXT micro:bit to Adafruit.io
How to reproduce a working connection between PXT and Adafruit.io:
1. Download this repository
2. Install all dependencies using ```npm install --save ```
3. Generate the javascript client of the io-api following the directions from: https://github.com/adafruit/io-api
4. Copy the generated folder into the node_modules/pxt-core/webapp/public/ directory.
5. Move the 'superagent' folder from the node_modules folder into the node_modules/pxt-core/webapp/public/ directory. If there is no superagent folder, go to the root directory and run ```npm install superagent --save```
6. Copy the following code into the index.html file in the /pxt-core/public/ directory before the script tag for main.js (the last one)
    ```
    <script type="text/javascript" src="/blb/superagent/superagent.js"></script>
    <script type="text/javascript" src="/blb/javascript-client/src/ApiClient.js"></script>
    <script type ="text/javascript" src = "/blb/javascript-client/src/api/DataApi.js"></script>
    ```
7. From the root directory, go into sim/state/adafruit.ts, and change "your-key-here" to be your API key, and change "your-username-here" to be your username.
8. Run ```pxt serve``` from the root directory.
9. In the list of packages, click Advanced, and then scroll to the bottom to click "Add Package". 
10. Add the "filesystem" package. 
11. You may use the blocks now! Enjoy!

For an overview of the project: https://drive.google.com/file/d/1OpOUK-1gwfNHCJ1gciLCzOVaBKD-W09Q/view?usp=sharing


---------------
# micro:bit target for PXT

This target allows you to program a [BBC micro:bit](https://microbit.org/) using 
PXT ([Microsoft Programming Experience Toolkit](https://github.com/Microsoft/pxt)).

* [Try it live](https://makecode.microbit.org)

[![Build Status](https://travis-ci.org/Microsoft/pxt-microbit.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-microbit)

## Issue tracking

Please add an issue if you discover an (unreported) bug.

## Local server

The local server lets you to run the editor and serve the documentation from your own computer.

### Setup   
This section explains how to setup your development environment for pxt-microbit, whether that be to run a copy locally or to make source changes.    
Note that pxt-microbit can not be run without its main depandancy, [pxt](https://github.com/Microsoft/pxt). Below explains how to setup both.      

The following commands perform a one-time setup after synching the repo on your machine.
* Note for any editing of the .cpp files, Yotta must be installed. Do do so, follow the instructions on [their site](http://docs.yottabuild.org/).
* Install node.js 8.9.4 or higher.
* Install requirements for [pxt](https://github.com/Microsoft/pxt). Note the v0 branch must be used for pxt-microbit (add ``sudo`` for Mac/Linux shells).
```
npm install -g jake
npm install -g typings
```

* [Clone the pxt repository](https://help.github.com/articles/cloning-a-repository/) and set it to the v0 branch.
```
git clone https://github.com/microsoft/pxt
cd pxt
git checkout v0
```

* Install the pxt dependencies.
```
npm install
typings install
jake
cd ../
```

* [Clone this repo](https://help.github.com/articles/cloning-a-repository/) to your computer.
```
git clone https://github.com/microsoft/pxt-microbit
cd pxt-microbit
```
* install the PXT command line (add ``sudo`` for Mac/Linux shells).
```
npm install -g pxt
```
* install the dependencies
```
npm install

```

* Link pxt-microbit back to base pxt repo.
```
npm link ../pxt
```
Note the above command assumes the folder structure of   
```
       makecode
          |
  -----------------
  |               |
 pxt        pxt-microbit
 ```

### Running

Run this command from inside pxt-microbit to open a local web server (add ``sudo`` for Mac/Linux shells)
```
pxt serve --cloud
```
If the local server opens in the wrong browser, make sure to copy the URL containing the local token. 
Otherwise, the editor will not be able to load the projects.

If you need modify the `.cpp` files (and have installed yotta), enable yotta compilation by removing the ```--cloud``` flag (add ``sudo`` for Mac/Linux shells):
```
pxt serve
```

### Updates

To update your PXT version and make sure you're running the latest tools, run (add ``sudo`` for Mac/Linux shells):
```
pxt update
```

More instructions are at https://github.com/Microsoft/pxt#running-a-target-from-localhost

## Repos 

The pxt-microbit target depends on several other repos. The main ones are:
- https://github.com/Microsoft/pxt, the PXT framework
- https://github.com/lancaster-university/microbit, basic wrapper around the DAL
- https://github.com/lancaster-university/microbit-dal

## History

See the [MakeCode blog](https://makecode.com/blog).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
