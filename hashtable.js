class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    // _ means method that should only be called by other methods
    _hash(key) {
        let hash = 0

        for (let i = 0; i < key.length; i++) {
            //23 is prime number (you can add any prime number you want)
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
        
    }

    set(key, value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])

        return this        
    }

    get(key) {
        let index = this._hash(key)
        if (this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }               
            }
        }
        return undefined
    }

    keys() {
        let allKeys = []
        for(let i = 0; i <this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }         
            }
        }
        return allKeys
    }

    
}

let myHashTable = new HashTable()

myHashTable.set('lumber', 70)
myHashTable.set('washers', 50)
myHashTable.set('bolts', 1400)




//Find if two arrays have anything in common

let array1 = [1,3,5]
let array2 = [2,4,5]


//O(n^2) least efficent
function itemsInCommon(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true
        }
    }
    return false
}

//O(n)
function itemsInCommon2(arr1, arr2) {
    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
    }
    for(let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true
    }
    return false
}

