
<img src="https://skyinformatics.biz/images/PTPro.png" width="200" height="75" alt="initial logo"/>

## About
PTPro is containerized sales-driven interactive platform aims is to create a hybrid-community platform in a type branch, that both is process-innovative and scalable in a competitive market. 

The project is primary maintained by [skyinformatics.biz][1] team and its contributors. 

## Technology stack
Project is built on top of [Angular.io](Angular.io) and [Laravel.com](Laravel.com). 

## Initialization

Run: `compose-build.sh` or `docker-compose up` to start the container live environment. To work with other modules, check out the following repositories.

## Prerequisites

* **Angular.io (Latest)**
  * Object-oriented MVVM (Model-View-View-Model)
* **Typescript, JavaScript, Basic knowledge:**
  * Be able to write simple variables, classes and functions related to GUI. (Support can be provided if needed)
* Graphic design with HTML / CSS including Bootstrap v3 / 4, Angular Material and Font Awesome v4.7+.
* **Git and Github**
  * Ability to use GIT and work their own branch. Code snippets are evaluated on push and receiving feedback if desired. Possibility of merging with the 'master' branch.
* **Docker and Compose**
  * Provides a local developer environment directly with the platform without any additional configuration or installation.
* **Text editor / IDE**
  * Only requirement is text editor but can be by IDE such as Visual Studio Code.

## Important (Development practice)
The developer should follow strictly defined practices

 1. **Naming convention** - Must follow strict naming conventions. *This part is closely reviewed.*  
 2. **Reusabillity** -  Should follow a clear and reusable writing practice.
 3. **Simple code** - Simplify the code if possible, do not over complication a simple code.
 4. **Commenting** - In some cases it is required to comment the snippet or method so it easier to handle for dev-next. 

## Sub-structure
* ./
	* Angular main project files

* src/
	* theme/
	    * Contains header and bottom of the project GUI
	* Contains the rest of the modules and providers.

* webconfig.ts
    Some default configurations of the project
* app.modules.ts
    * imports all angular modules including material and polyfills
* app.components 
    * The root GUI, ts of the project folder

### Modules
FE-PTPro (Frontend Graphical Interface) built on primary Angular.io and is split into categorical modules that can be run independently using docker containers. Each module contains detailed technical description. 
 1. **[Application](https://github.com/Skyinformatics-biz/FE-PTPro-Application-Module)** - Application internal functions.
 2. **[Communication](https://github.com/Skyinformatics-biz/FE-PTPro-Communication-Module)** - Platform messaging/com module interface.
 3. **[Profiles](https://github.com/Skyinformatics-biz/FE-PTPro-Profiles-Module)** - Platform members and dynamic profile pages.
 4. **[Public](https://github.com/Skyinformatics-biz/FE-PTPro-Public-Module)** - Public pages for platform visitors.
 5. **[Providers](https://github.com/Skyinformatics-biz/FE-PTPro-Providers-Module)** - Provider/service classes for all application modules.
 6. **[Secure](https://github.com/Skyinformatics-biz/FE-PTPro-Secure-Module)** - Authorized pages for platform members.
 7. **[Payment](https://github.com/Skyinformatics-biz/FE-PTPro-Payment-Module)** - Application/platform Subscription Interface.

## Commits 

1. All commits should be done in separate branch, use conventional naming.
    * Sample naming: {taskname/operation} / {name}_branch.

### System deployment diagram
<img src="https://skyinformatics.biz/images/PTProSystem.png" width="750" height="600" alt="system diagram"/>


## Contribution
All contributors are individually credited for participating in development of the project architecture and is at will, manually a part of the growth, development and scaling operations. 

## License
Copyright 2020, PTPro.Fit Brand is property of Skyinformatics.biz including its brand association. Containers are deployed under MIT License for recreation, development and research.
 
### Modules
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNTE2OTc3NTAsLTcwODMyODM4OCw2OD
E0MDA5MjgsLTE3NjE4MDg4NTEsMTE0NDgzMDQ1Miw2MjQzMzY3
NjgsLTExOTE0MDE3MzksLTE1NDQ3NjE0NDEsMTU1NjE3MDg5Ni
wzMDA5NDM5MDUsLTEwMzAzNzcyNDgsMTUxMzI2NDEyNiwtMTM2
NzU0MzQ5OCwtMTE0NTc1NDQzOCwxNjc4MTYwOTUyLDkyNTE0Mj
YzOCwtMTA1MDU4Mzg1MCwtMTQzNDM5NjEwLDIwODg3NTAwMyw1
MDE0NDg2OV19
-->

  [1]: skyinformatics.biz
