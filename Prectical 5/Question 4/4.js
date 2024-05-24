let data = [10, 20, 30, 40, 50, 60];

let index = data.indexOf(40);
console.log("Index of 40:", index);


let shiftedData = data.shift();
console.log("Shifted Element:", shiftedData);
console.log("After shift:", data);

data.unshift(5, 15);
console.log("After Unshift:", data);

