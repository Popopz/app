s5177388, Matthew Murphy
##Note on features:
- I could not connect Angular to Node.js this time.
However, the Node functions for using MongoDB do work, it’s just that for whatever reason Angular cannot interact with functions, and instead gives out 404 errors, even though a connection has been made to Node.
Aka, Angular → Node -/→ Angular. Meaning Angular can talk to Node, but Angular does not accept the response afterwards, so Node cannot talk to Angular.

- As always, massive security issues with no Hashing of passwords, etc.

##Git:
Just like the first Milestone, I used Visual Studio Code’s Git Functions. Whenever I completed a difficult task, I would save it using the Git Tab, and name it appropriately. Each name was chosen quickly, and focuses on any major issues, and I generally skip minor bugfixes. The issue with using Visual Studio Code’s Git, is that it doesn’t regularly save to an online service, like GitHub. However, it is trivially easy to upload the git to GitHub using Visual Studio Code.

##Data structures:
Using the Mongoose plugin, data can be modeled using Mongoose Schemas. Similarly to assignment one, I decided to split the database into two sections, group and users. 

For the Group this was used:
const groupSchema = new mongoose.Schema({
        groupName: String,
        channel: [String],
        assis: [String],
        users: [String]
 });
The Channels, list of Assis users, and normal Users can be numerous in a single Group.

For the User this was used:

const userSchema = new mongoose.Schema({
        userName: String,
        email: String,
        role: [String]
    });
A user may have multiple Roles, but their Email and userName must be consistent. Note, that the password is literally stored inside a string, and so without a Hash function, then a massive security risk is present.

##REST API:
The REST API, is made using Express. Each Express route, is meant to take make a callback of a Response and Request. The Routes are connected to a subsequent function that runs a Mongoose query. If the Mongoose Query is successful, then the changes will be saved to MongoDB. 

Note each route, requires a /api infront of it.
createGroup(groupName) Creates a group, as long as the groupName isn’t already taken.
createChannel(groupName, channelName) Creates a channel, in the group, as long as channelName isn’t taken.
removeGroup(groupName) Removes the first group with a matching groupName
removeChannel(groupName, channelName) Removes the first channel with a matching channelName, if it is in groupName.
addUserToGroup(groupName, userName) Appends the user to the matching group.
addAssisToGroup(groupName, userName) Appends the Assis User to the matching group.
removeUserToGroup(groupName, userName) Removes the first user with the matching name from the group.
removeAssisToGroup(groupName, userName) Removes the first Assis that matches from the group.
createRole(userName, role) Appends the role to the matching user.
deleteRole(userName, role) Removes the first matching role from the user.
removeUser(userName) Deletes information about the user, from the user portion of the database.
updateUser(prevUserName, userName, email) Updates the user’s Name and Email, to the one provided.
readAllUsers() Reads all information from users.
createNewUser(userName, email) Creates a user with subsequent userName and Email.
readAllGroups() Reads all information from groups.

##Angular Architecture:
The Angular client-side holds 4 Components. Chat, is the client for sockets.io, and deals exclusively with that. Eventually the Chat will be ported into Groups. Group holds information about groups, and displays forms for modification. Login allows the user to login, they will not be able to view other components without first logging in. Users displays information about Users, and provides forms for modification. There are 2 models, one for Group and another for Users. Each model simply exports their subsequent class. There are 2 services, the socket service deals with information parsing with sockets.io, and the CRUDService, deals with parsing information to the Node.js server.

*For more information visit the original version of Telecord here: https://github.com/Popopz/TeleCord








#The following is Auto-Generated!



# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
