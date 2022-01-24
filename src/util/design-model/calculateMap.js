class CalculateMap {
  // 冒泡排序
  async bubbleSort (array, callback) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
      await callback(arr);
    }
    return array;
  }

  /**
   * 选择排序
   * 找到最小的记录下来 逐步替换
   */
  async selectionSort (arr, callback) {
    const len = arr.length;
    let minIndex = 0;
    let temp = -Infinity;
    for (let i = 0; i < len - 1; i++) {
      minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
        await callback(arr);
      }
    }
    return arr;
  }

  /**
   * 插入排序
   * 从第二个元素开始和前面的比较  后者比左边的小则向前移动
   */
  async insertionSort (arr, callback) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      let val = arr[i];
      let j = i - 1;
      while (j > -1 && arr[j] > val) {
        arr[j + 1] = arr[j];
        j--
      }
      arr[j + 1] = val;
      await callback(arr);
    }
    return arr;
  }

  /**
   * 基数排序
   * 从最低位数开始比较 一直到最高位
   * @params maxDigit 最高位数
   */
  async radixSort (arr, maxDigit, callback) {
    var mod = 10;
    var dev = 1;
    var counter = [];
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
      for (var j = 0; j < arr.length; j++) {
        var bucket = parseInt((arr[j] % mod) / dev);
        if (counter[bucket] == null) {
          counter[bucket] = [];
        }
        counter[bucket].push(arr[j]);
      }
      var pos = 0;
      for (var j = 0; j < counter.length; j++) {
        var value = null;
        if (counter[j] != null) {
          while ((value = counter[j].shift()) != null) {
            arr[pos++] = value;
            await callback(arr);
          }
        }
      }
    }
    return arr;
  }
}