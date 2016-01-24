# Building an Angular 2 Website Using Routes

- [Get Started with Angular 2 by Building a Simple Website](http://onehungrymind.com/build-a-simple-website-with-angular-2/) by Lukas Ruebbelke.
- Demonstrates how to build components, configure routes, inject services, and use the `@Input` decorator to bind properties to components.
- Uses systemjs to handle module loading and bootstrapping our application.
- https://github.com/simpulton/angular2-website-routes
- http://onehungrymind.com/build-a-simple-website-with-angular-2/
- http://onehungrymind.com/get-started-angular-2-pt-2-moar-subcomponents/

==

## tsconfig.json
- where we define how we want to compile TypeScript

==

## packages.json

- Define tasks to watch our project, compile our source files and serve them up via a liteweight HTTP server.
- We use `tsc -w` and lite-server to compile and serve our application.
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

## One-way data binding

### String interpolation
```html
<h1>{{title}}</h1>
```

### Capturing [native DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
```html
<button type="submit"
  class="btn"
  (click)="updateMessage(message)">
  Update Message
</button>
```

### Binding to properties
```html
<experiment
  *ngFor="#experiment of experiments"
  [experiment]="experiment">
</experiment>
```

==

## Two-way data binding
- Combine *property binding (component to view)* and *event binding (view to component)* to accomplish two-way data binding.

```html
<input type="text" [(ngModel)]="message" placeholder="Message">
```

```js
//...
@Component({
  selector:    'experiment',
  templateUrl: 'app/experiments/experiment-details/experiment.detail.component.html',
  styles: [...]
})
export class ExperimentDetailComponent {

  // The @Input annotation
  // - declares a data-bound property so that it is automatically updated during change detection.
  @Input() experiment: Experiment;

  //...

} // end ExperimentDetailComponent
```

==

## [CIDER](http://onehungrymind.com/cider-my-checklist-for-creating-angular-2-components/)
- steps to take when creating an Angular2 component

1. Create your class
2. Import your dependencies
3. Decorate your class
4. Enhance with composition
5. Repeat for sub-components

==

## [EditorConfig](http://editorconfig.org/)
- helps developers define and maintain consistent coding styles between different editors and IDEs. 
- a file format for defining coding styles
- a collection of text editor plugins that enable editors to read the file format and adhere to defined styles 
