# WereWolves
狼人杀面杀助手

Collaborators please follow these protocols:
1. Fork this repo to your local github and work from there, either create a new branch or just push to forked repo's master).
2. Always pull/sync with this repo's dev branch.
3. Always send pull request to this repo's dev branch
4. We will update master branch regularly or at milestone

Pull Requests:
1. Please add reviewers and don't merge by yourself. ;)
2. Please use option 'Rebase and commit' instead of 'Merge', except changes from dev branch into master.


## How to setup dev environment:
* Install virtualbox
* Install vagrant
* run 'vagrant up' under project root

## How to start dev server
* start your vm
* ssh to vm using 'vagrant ssh'
* Run 'cd /webroot && npm start'
* Go to localhost:3000 on your pc

## Using nodemon to help development
* What is nodemon?
  nodemon is a utility tool that monitors you application files with changes and automatically restarts the
  app when the file is changed. Similar to webpack we use at work. With nodemon, you don't need to run
  npm start everytime you make a change
* How to install?
  - Make sure you have npm installed first (type: 'npm -v' to check)
  - Type 'npm install -g nodemon'
* How to start using?
  - Go to application folder, then cd/webroon (where package.json is), then run 'nodemon'
  - Go to localhost:3000 on your pc
  - Make a change locally and notice nodemon auto restarts

## RESTful API:
GET     /                       login
POST    /login                  Login with as a new user
GET     /rooms                  Get all/multiple rooms
