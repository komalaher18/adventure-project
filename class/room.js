class Room {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.exits = {};
        this.items = [];
    }

    printRoom() {
        console.clear();
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.items.length > 0) {
            console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        }
        console.log(this.getExitsString());
        console.log("");
    }

    getExits() {
        return Object.keys(this.exits);
    }

    getExitsString() {
        return `Exits: ${this.getExits().join(", ")}`
    }

    connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    getRoomInDirection(direction) {
        return this.exits[direction];
    }

    getItemByName(name) {
        // return this.items.find((item) => item.name === name);
        for(let i = 0; i < this.name.length; i++){
            let item = this.items[i];
            if(item.name = name){
                return this.items.splice(i, 1)[0];
            }
        }
        console.log("item not found ");
    }

    removeItem(item) {
        const index = this.items.index(item);
        this.items.splice(i, 1)
    }
}
// const item =  new Room.getItemByName()
// console.log(item)
module.exports = {
  Room,
};
