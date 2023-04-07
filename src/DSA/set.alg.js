class Classset {
    constructor(){
        this.collection = [];
    }
    //this will check if an element is in the set collection.
    has(element){
        return (this.collection.indexOf(element) !== -1);
    }
    //tis will return the collection set array.
    value(){
        return this.collection;
    }
    //this will add a value to the set if the value is not already in the set.
    add(value){
        if(!this.has(value)){
            this.collection.push(value);
            return true
        }
        return false;
    }
    //this function will remove an element from the coollection. 
    remove(value){
        if(this.has(value)){
            let index = this.collection.indexOf(value);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }
    //this returns the size of the collection
    size(){
        return this.collection.length;
    }
    // This combines the content of two sets.
    union(otherSet){
        let unionSet = new Classset();
        let firstSet = this.value();
        let otherset = otherSet.value();

        firstSet.forEach(e => unionSet.add(e));
        otherset.forEach(e => unionSet.add(e));

        return unionSet;
    }
    //picks the coomon values in two sets
    intersection(otherset){
        let intersectionSet = new Classset();
        let firstSet = this.value();

        firstSet.forEach(e => {
            if(otherset.has(e)){ 
                intersectionSet.add(e)
            }
    });

        return intersectionSet;
    }
    //returns the uncommon items in the two sets
    difference(otherset){
        let differenceSet = new Classset();
        let firstSet = this.value();

        firstSet.forEach(e => {
            if(!otherset.has(e)){
                differenceSet.add(e);
            }
        })

        return differenceSet;
    }
    //check if a set is completely contianed in another set.
    subset(otherset){
        let firstSet = this.value();
        return firstSet.every(value => otherset.has(value));
    }
}

//testing if two sets are subsets

let setA = new Classset();
let setB = new Classset();

setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
setB.add("e");

let test4Subsetbe = setA.subset(setB);
let test4intecession = setA.intersection(setB).value();

console.log(test4Subsetbe);
console.log(test4intecession);

//Trying out the built in set in Es 6

let setD = new Set();
let setE = new Set();

setD.add("a");
setE.add("a");
setE.add("b");
setE.add("c");
setE.add("d");
setE.add("e");

console.log(setD.values());

setD.delete("a");

console.log(setD.has("a"));
console.log(setD.add("D"));