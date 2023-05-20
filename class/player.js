const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory
        console.log(this.currentRoom)
        let item = this.currentRoom.getItemByName(itemName);
        if (item) {
            this.items.push(item);
            console.log(`You took ${item.name}`)
        }
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room

        // const currentRoomItems = this.currentRoom.items;
        // console.log('currentRoomItems', currentRoomItems)
        // const getItem = currentRoomItems.splice(0,1)[0];
        // console.log('getItem', getItem)
        // return this.items.push(getItem)
        let item = this.currentRoom.getItemByName(itemName);
        const currentPlayerItems = this.items;
        if(this.getItemByName(itemName)) {
            splice
        }
        const currentRoomItems = this.currentRoom.items;


        // Yakes
        // const item = this.getItemByItemName(itemName);
        // this.removeItem(item);
        // this.currentRoom.addItem(item);

    }

    addItem(item) {
        this.items
    }

    removeItem(item) {
        const index = this.items.indexOf(item);

    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items
        console.log('player items', this.items)
        if (this.items[0] instanceof Food) {
            console.log('player items', this.items)
            this.items.splice(0)
            // console.log(`Player eats ${itemName}`)
            // this.items.getItemByName(this.name);
        } else {
            console.log(`This is not food!`)
        }
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name
        for (let i = 0 ; i < this.items.length ; i++) {
            let item = this.items[i];
            if (item.name.toLowerCase().startsWith(name)) {
                return this.items.splice(i, 1)[0];
            }
        }
        console.log("Item not found");    }

}

module.exports = {
  Player,
};
