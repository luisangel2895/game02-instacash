"use strict";
// OK I WONT TOUCH IT -> but for me the best way to declate this class is:
// export class Item {
//   constructor(
//     public name: string,
//     public sellIn: number,
//     public quantity: number
//   ) {}
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
exports.Item = Item;
// Use map method into the array of Items
class GildedRose {
    constructor(items) {
        this.items = items;
    }
    updateQuality() {
        return this.items.map((item) => {
            item.sellIn -= 1;
            item.quality = this.updateItemQuality(item.name, item.quality, item.sellIn);
            return item;
        });
    }
    // Create a private function into the class to calculate the new quality for each item
    updateItemQuality(nameItem, currentQuality, sellItem) {
        if (nameItem === "Sulfuras") {
            return 80;
        }
        if (currentQuality <= 0 || currentQuality >= 50) {
            return currentQuality;
        }
        switch (nameItem) {
            case "Aged Brie":
                return ++currentQuality;
            case "Backstage passes":
                if (sellItem < 0) {
                    return 0;
                }
                else if (sellItem < 5) {
                    return (currentQuality += 3);
                }
                else if (sellItem < 10) {
                    return (currentQuality += 2);
                }
                else {
                    return ++currentQuality;
                }
            case "Conjured":
                if (sellItem < 0) {
                    return currentQuality - 4 >= 0 ? (currentQuality -= 4) : 0;
                }
                return currentQuality - 2 >= 0 ? (currentQuality -= 2) : 0;
            default:
                if (sellItem <= 0) {
                    return currentQuality - 2 >= 0 ? (currentQuality -= 2) : 0;
                }
                return --currentQuality;
        }
    }
}
exports.GildedRose = GildedRose;
// TEST -> All works perfect
const item1 = new Item("car", 10, 8);
const item2 = new Item("computer", -2, 15);
const item3 = new Item("Aged Brie", 10, 48);
const item4 = new Item("Sulfuras", 10, 10);
const item5 = new Item("Backstage passes", 8, 10);
const item6 = new Item("Conjured", 2, 16);
const products = new GildedRose([item1, item2, item3, item4, item5, item6]);
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
console.log(products.updateQuality());
