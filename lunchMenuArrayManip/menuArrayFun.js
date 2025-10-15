const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

addLunchToEnd(lunches, "Apples");

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.");
    return null;
  }
  let a = arr.pop();
  console.log(`${a} removed from the end of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr){
  if(arr.length === 0){
    console.log("No lunches to remove.");
    return null;
  }
  let a = arr.shift();
  console.log(`${a} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr){
 let a = Math.floor(Math.random() * arr.length);
  if(arr.length === 0){
    console.log("No lunches available.");
    return null;
  }
  console.log(`Randomly selected lunch: ${arr[a]}`);
}

function showLunchMenu(arr) {
  if(arr.length === 0) {
    console.log("The menu is empty.");
    return null;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
  return null;

}

showLunchMenu(lunches);






