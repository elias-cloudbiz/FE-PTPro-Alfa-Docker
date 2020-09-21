# Prerequisites


### Module description
***Sellerprofile*** is the main seller profile page with tabbed properties and modules.

***Clientprofile*** is the user/client profile page with minimal properties and modules. 

## Important (Development practice)
The developer should follow strictly defined practices

 1. **Naming convention** - Follow strict naming conventions at all time! *This part is closely reviewed.*  
 2. **Reusabillity** -  Should follow a clear and resuable writing practice.
 3. **Simple code** - Simplyify the code if possible, do not over complication a simple code.
 4. **Commenting** - In some cases it is required to comment the method and the function. 

 ## Commits 

1. All commits must be done in a single none-master branch.  After inspection they will be automatically merged.
2. Do not push docker images is only meant for pull and local use.

## Structure seller
* sellerprofile/
	* fields/ ***all fields a part of the main seller profile***
		* all fields components 
	* profile.service.ts ***contains data API for seller profile components and fields***
	* component files ***all component files***

* clientprofile/
	* component files ***main component (empty initial)***

* profiles.module.ts ***profiles modules and routing***

## Clarifications
### For any question feel free to ask.
