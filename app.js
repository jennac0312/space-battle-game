// // A game round would look like this:
    // You attack the first alien ship
    // If the ship survives, it attacks you
    // If you survive, you attack the ship again
    // If it survives, it attacks you again ... etc
    // If you destroy the ship, you have the option to attack the next ship or to retreat
    // If you retreat, the game is over, perhaps leaving the game open for further developments or options
    // You win the game if you destroy all of the aliens
    // You lose the game if you are destroyed


// Ship Properties
    // hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
    // firepower is the amount of damage done to the hull of the target with a successful hit
    // accuracy is the chance between 0 and 1 that the ship will hit its target

    // Your spaceship, the USS Assembly should have the following properties:
        // hull - 20
        // firepower - 5
        // accuracy - .7
        
    // The alien ships should each have the following ranged properties determined randomly:
        // hull - between 3and 6
        // firepower - between 2and 4
        // accuracy - between .6and .8



// start with ACTORS
    // player ... just 1 player so no class needed

    const p1 = {
        name: 'USS Assembly',
        hp: 20,
        firepower: 5,
        accuracy: .7
    }

    console.log(p1)


    class Alien{
        constructor(name){
            this.name = name,
            this.hp = getRandomNumber(3, 6),
            this.firepower = getRandomNumber(2, 4),
            this.accuracy = getRandomNumber(6, 8) / 10
        }
    }
    
    

// global scoped getRandomNumber
    // noticing i cant get the max range.... 
const getRandomNumber = (min,max) => {
    return Math.floor( Math.random() * (max - min) + min )
}

const alien1 = new Alien('alien 1')
const alien2 = new Alien('alien 2')
console.log(alien1)
console.log(alien2)



// nah
// class Ship{
//     constructor(name){
//         this.name = name,
//         this.hp = hp,
//         this.firepower = firepower,
//         this.accuracy = accuracy
//     }
// }


// class Player extends Ship{
//     constructor(name){
//         super(name)
//     }
// }

// const player1 = new Player('USS ASSEMBLY')

// console.log(player1)
