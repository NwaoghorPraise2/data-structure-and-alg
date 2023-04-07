/* 0(1) algorithms is a linear algothms ... For Example: Trying to access an element from an array by its index... 
... 0(n) is a linear time operation that applie the alogorithms that do n in thw waorst case seniorio'

Write a peice of code that will access elements from an array named n by its index.
*/


let n = ['3', '4', '5', '6'];

let generate  = (n) => {
console.log(`Array Lenght is O(${n.length})..`);
for (let i = 0; i < n.length; i++){
    console.log(`${n[i]}\n`);
};
}

generate(n);


/*****************
 * 0(n^2)
 * 
 * this is called Quadrictic time or Squared Big 0 notation.
 * This implemts seletion sort algorithms
*****************/

let list = [2, 6, 8, 5];

let seletionSort = (list) => {
    for (let i = 0; i < list.length; i++){
            let increase = list[i]; 
            console.log(increase);
        for (let j = i; j < list.length; j++){
            console.log(`#${j}`)
        }
    }
};

seletionSort(list);

/*############################################################*/ 