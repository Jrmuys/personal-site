# My Portfolio Site

This project is a fully custom portfolio and personal site for myself. The whole site was designed and implemented by me. The goal was to make a site that I could show people about my work as well as getting more familiar with the React JavaScript framework.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Design

The website was designed using the free UI design software [Figma](http://figma.com). The goal of the design was to create something cool looking that clearly showed my portfolio and skills while showing my interests like code, space, and design. The overall look and feel of the design is inspired visual studio code’s look and the layout is inspired but different to other portfolio projects I have seen on the internet.

The fonts used for this project is [Inter](https://github.com/rsms/inter) and [Consolas](https://docs.microsoft.com/en-us/typography/font-list/consolas).

![](C:\Users\jrmuy\Documents\GitHub\personal-site\assets\iMac - 1.png)

Figma design for the first section of the website.

<img src="C:\Users\jrmuy\Documents\GitHub\personal-site\assets\iMac - 2.png" style="zoom:70%;" />

Figma design for the skills cards.

## Implementation

For this project, I chose to write it in React. I chose this because most of my projects are in Angular and I wanted some experience in the also popular framework of React. This was to test how quickly I could adapt to a new tool and language (jsx) as I hasn’t used React since sophomore year of college.

All of the styles used for the website are made by myself with CSS based on what I designed in the Figma.

### Orbit Animation

The orbit animation on the right of the home page is the part that took the most work by itself. The animation uses a custom `<canvas>` element component that changes the rendered image based on the percentage of the scroll height. The canvas also preloads the images to improve the performance when scrolling.

## Running the Project

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
