///Question 5
replaceByItem = (array = [], currentItem, newItem) => {
  for (let i in array) {
    if (array[i] == currentItem) {
      array[i] = newItem;
      break;
    }
  }
  return array;
};

let fruits = ["Apple", "Orange", "Plum"];
