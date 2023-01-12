const fs = require('fs');


// Stores a list of grocery items, including their names, quantities, and prices

const prompt = require("prompt-sync")({ sigint: true });
const path = './groceryList.json'

class GroceryItem  {
    constructor () {
        // prompts user input for item name, quantity, and price
        this.name = prompt("Enter item name to add to list: ");
        console.log(`You entered: ${this.name}.`);
        this.quantity = prompt(`Enter quantity of ${this.name}  `);
        console.log(`You entered: ${this.quantity} ${this.name}`);
        this.price = prompt(`Enter price for ${this.name}  `);
        console.log(`You entered: $${this.price} for ${this.name}`);
    }

    
}
GroceryItem.prototype.toString = function groceryItemToString() {
    return `${this.quantity} ${this.name}(s) , $${this.price} each`
}

function addItems() {
    run = true
    do {    
        groceryList.push(new GroceryItem())
        go = prompt("Add new items to list (y/n): ");
        if (go == "n" || go === "N") {
            
            run = false
            // allow the user to save the list to a file before exiting the application
            save = prompt("Would you like to save the list to a file before exiting (y/n): ")

            if (save === "y" || save === "Y") {
                const data = JSON.stringify(groceryList)
                fs.writeFileSync(path, data)           
            }
        }          
    } while (run === true)
}
groceryList = []

// read the saved file when it starts 
// See if the file exists
try {
  if (fs.existsSync(path)) {
    //file exists
    groceryList = (JSON.parse(fs.readFileSync(path, 'utf-8')))
  }
} catch(err) {
  console.error(err)
}

// (if it exists) keep adding to that list

addItems() 

