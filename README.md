GitHubSearcher
=============

This is an example about how to build a small SPA with AngularJS that consume the GitHub API to search repositories and view user information.

This Repository uses http://julitogtu.com and made some changes in the code to show 
contributor image and follow the contributor.

**To run the code in local host first step is to keep the github personal token in node serverapp.js file otherwise you will see the below error after running node serverapp.js after cloning the repo.

Error:

  throw new Error("OAuth2 authentication requires a token or key & secret to be set");
                
Error: OAuth2 authentication requires a token or key & secret to be set
    at module.exports.__dirname.authenticate (/home/vjayanth/task/Github-Search-Using-github-api/node_modules/github/lib/index.js:359:23)
    at Object.<anonymous> (/home/vjayanth/task/Github-Search-Using-github-api/serverapp.js:15:8)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:418:7)
    at startup (bootstrap_node.js:139:9)


steps to follow to run in the local host 
1. clone the repo from git hub.
2. Get inside the Directory using command line and run npm install.
3. paste github personal access token in serverapp.js
4. Run node serverapp.js to start the server.
5. App will be running at localhost:3000.
