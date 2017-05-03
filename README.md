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

## Option 1: How to setup dev environment (virtual machine approach):
- Install virtualbox
- Install vagrant
- run 'vagrant up' under project root

* How to start dev server
- start your vm
- ssh to vm using 'vagrant ssh'
- Run 'cd /webroot && npm start'
- Go to localhost:3000 on your pc

## Options 2: How to setup dev environment (develop locally):
- go to project root, 'cd /webroot'
- run 'npm install'
- run 'nodemon'
* How to setup local mongo db: (All these steps will be automated by scripts later)
- Download mongodb from: https://www.mongodb.com/download-center?jmp=nav#community
- Navigate to mongodb folder /bin
- Run ./mongod (now it listens to localhost port 27017)

## How to setup dev environment (develop locally):

## RESTful API:
- GET     /                       login
- POST    /login                  Login with as a new user
- GET     /rooms                  Get all/multiple rooms
