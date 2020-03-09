// Add Counter
const list1 = [1,2,3,4,5];

function addCounter(list1, item){
  list1.push(item);
  return list1;
}

console.log("result",addCounter(list1,6))

console.log("Old list1",list1);

// Avoiding Mutations

const list2 = [1,2,3,4,5];

function addCounterIm(list2, item){
  return [...list2,item];
}

console.log("result",addCounterIm(list2,6))

console.log("Old list2",list2);