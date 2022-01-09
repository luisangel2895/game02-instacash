# GAME 02 - Gilded Rose REquirements Specification

In yhis I a refactor the code in Ts, with the best development practices, such as typing all variables, functions, with the specification if methods or properties are public or private, and with respectfull about the code that the owner wants to conserve.

## Tecnologies

For this project i only use Ts v 4.5

## Main methods

The project have 2 classes , the class Item with the structure:

```js
class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quantity: number
  ) {}
}
```

And the class of the store called GildedRose with the structure:

```js
export class GildedRose {
  constructor(public items: Item[]) {}
  }

```

Into this class i've created 2 methods, 1 method public calld updateQuality, this methods is the method that we will use to update all the item into the array of Item that received this class, this method have this structure:

```js
public updateQuality(): Item[] {
```

And to avoid create a spaguetti code I separete the function to update quality into the private methods into the class because its a only methods that we used into the class

```js
private updateItemQuality(
    nameItem: string,
    currentQuality: number,
    sellItem: number
  ): number {}
```

## Description of project

In little words, the project is a store thata update each of their products every day, this update change the date of expiration of the products so change the quality along the time.
There are product that conserve its quality, others grow down faster than others, and other grow up along the time.

# Run the project

As i said this project is developed in pure Typescript, so we only need to run tsc in the project, this create a transpile js file, and finally we can run this js thanks to node.js

First we need to install the dependencies of Typescript

```js
npm i
```

After that we run tsc and put in mode watch with the comands

```js
npx tsc -w
```

Thank to this now we have in the folder the file "glided-rose.js", and finally now we can run this file by node.js

```js
node glided-rose.js
```
