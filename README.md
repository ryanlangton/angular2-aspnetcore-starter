# Angular 2 + ASP.NET Core Starter Template

This starter pack gives you a basic website template.

#### Frameworks

  - [Angular 2] Beta
  - [ASP.NET] Core 1.0
  - [npm] (dev dependencies)
  - [jspm] (client package management)
  - [Bootstrap]

#### Demonstrates

   - Angular2 routing (see [routes.config.js])
   - Angular2 Components
   - Angular2 Service/Observable (see [about.service.ts])
   - Typescript (see [App folder])
   - ASP.NET Core API (see [AboutController])
   - Deep linking (see [SpaMiddleware.cs])
   - gulp/npm build (see [gulpfile.js])

#### Not implemented

   - Data persistence
   - Authentication
   - Testing frameworks for client and server side code.

#### How to use

You must have [NODE.JS] installed to run the client build.  
Run "npm install" in the Angular2AspNetCoreStarter folder, and then run "jspm install".
To build the app files, run the default gulp task.  I recommend running the watch tasks to update any changes automatically.

All client source files should be edited in the *\App* folder.  Do not edit anything in the *\wwwroot\app* folder as this folder is cleaned and replaced with every build.  The static files in *\wwwroot* (index.html, config.js, etc) may be edited.

Any questions or comments feel free to submit here or drop me a line [@rlangton76].

   [routes.config.js]: <https://github.com/ryanlangton/angular2-aspnetcore-starter/blob/master/Angular2AspNetCoreStarter/App/routes.config.ts>
   [about.service.ts]: <https://github.com/ryanlangton/angular2-aspnetcore-starter/blob/master/Angular2AspNetCoreStarter/App/about/about.service.ts>
   [App folder]: <https://github.com/ryanlangton/angular2-aspnetcore-starter/tree/master/Angular2AspNetCoreStarter/App>
   [AboutController]: <https://github.com/ryanlangton/angular2-aspnetcore-starter/blob/master/Angular2AspNetCoreStarter/Controllers/AboutController.cs>
   [gulpfile.js]: <https://github.com/ryanlangton/angular2-aspnetcore-starter/blob/master/Angular2AspNetCoreStarter/gulpfile.js>
   [@rlangton76]: <https://twitter.com/rlangton76>
   [NODE.JS]: <https://nodejs.org/en/download/>
   [SpaMiddleware.cs]: <https://github.com/ryanlangton/angular2-aspnetcore-starter/blob/master/Angular2AspNetCoreStarter/SpaMiddleware.cs>
   [Bootstrap]: <http://getbootstrap.com/>
   [jspm]: <http://jspm.io/>
   [Angular 2]: <https://angular.io/>
   [npm]: <https://www.npmjs.com/>
   [ASP.NET]: <http://www.asp.net/>