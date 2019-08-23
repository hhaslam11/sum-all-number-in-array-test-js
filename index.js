const sumItems = (arr) => {
  
  //return 0 if the array is empty
  if (!arr.length) return 0;
  
  /*
   * Takes the array, removes the first element, and
   * sets it to currentItem
   * arr = [1, 2, 3] ---> [2, 3]
   * currentItem = 1
   */
  const currentItem = arr.shift();
  
  if (Array.isArray(currentItem)) {

    /*
     * if currentItem is another array,
     * Ex. [2, 3]
     *
     * sumItems(currentItems) + sumItems(arr)
     * or
     * sumItems([2, 3]) + sumItems([1, 2, 3]);
     */
    return sumItems(currentItem) + sumItems(arr);
  }
  
  //if currentItem isnt an array, then return currentItem + the rest of the array
  return currentItem + sumItems(arr);
};

module.exports = sumItems;