///question 4
let findItem = (array = [], item) => {
  let ans = { index: -1, item: item };
  for (let i in array) {
    if (array[i] == item) ans.index = i;
  }
  return ans;
};
