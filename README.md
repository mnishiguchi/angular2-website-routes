# Building an Angular 2 Website Using Routes

- [Get Started with Angular 2 by Building a Simple Website](http://onehungrymind.com/build-a-simple-website-with-angular-2/) by Lukas Ruebbelke.
- Demonstrates how to build components, configure routes, inject services, and use the `@Input` decorator to bind properties to components.
- https://github.com/simpulton/angular2-website-routes
- http://onehungrymind.com/build-a-simple-website-with-angular-2/
- http://simpulton.github.io/angular2-website-routes/

==

## packages.json

- Define tasks to watch our project, compile our source files and serve them up via a liteweight HTTP server.
    + The `-w` flag: shorthand for `–watch`
    + The `start` task kicks off our compiler while spinning up our web server via `npm run lite`
- Call `npm start` when we are ready to compile and serve our application.

```json
    //...
    "scripts": {
      "tsc": "tsc",
      "tsc:w": "tsc -w",
      "lite": "lite-server",
      "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
    }
    //...
```

==

## How to run

```bash
npm start
```

==

