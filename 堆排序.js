let arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];

console.log(arr);
// 堆排序
heapSort(arr);
console.log(arr);


function heapSort(arr) {
  for (let i = parseInt(arr.length/2); i >=0; i--) {
    heapAdjust(arr, i, arr.length);
  }

  for (let i = arr.length-1; i > 0; i--) {
    
    swap(arr, 0, i);
    heapAdjust(arr, 0, i);
    
  }
}

/**
 * 构建堆的过程
 * @param arr 需要排序的数组
 * @param i 需要构建堆的根节点的序号
 * @param n 数组的长度
*/
function heapAdjust(arr, i, n) {
  let c,p;
  for (p = arr[i]; getLeftChild(i) < n; i = c) {
    c = getLeftChild(i);
    if (c != n-1 && arr[c+1] > arr[c]) {
      c++;
    }

    if (arr[c] > p) {
      arr[i] = arr[c];
    } else {
      break;  // 是最大堆就跳出
    }
  }
  arr[i] = p;
}

function swap(arr, p, q) {
  let temp = arr[p];
  arr[p]   = arr[q];
  arr[q]   = temp;
}

function getLeftChild(i) {
  return 2*i + 1;
}
