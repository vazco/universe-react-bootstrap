<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe React Bootstrap
</h1>

&nbsp;

ReactBootstrap project wrapped for Meteor using Universe. For available components and more info go to original docs at [react-bootstrap.github.io](https://react-bootstrap.github.io/)

### Installation

Simply add this as a Meteor package:

    meteor add universe:react-bootstrap

This package will register SystemJS module named `bootstrap` and additioannly set a global `ReactBootstrap`

### Usage

#### With Universe Modules

Import components inside `*.import.jsx` files:

    import BS from 'bootstrap';
    
    <BS.Button /> // React component
    
or import just required components:

    import { Button } from 'bootstrap';
    
    <Button /> // React component
    
For more info go to [universe:modules](https://github.com/vazco/universe-modules/) documentation

#### As a global

This package additionally export `ReactBootstrap` as a global, so you can write inside any .jsx file:

    let { Button } = ReactBootstrap;
    
    <Button /> // React component

or
    
    <ReactBootstrap.Button /> // React component

----

### License

> This package is part of Universe, a framework based on [Meteor platform](http://meteor.com) maintained by [Vazco](http://www.vazco.eu).
> It works as standalone Meteor package, but you can get much more features when using the whole system.

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe React Bootstrap is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
