
/**
 * 1、先生成一个乱序数组
 * 2、用canvas画布画出此乱序数组所有元素对应的极坐标对应的点
 * 3、对乱序数组进行排序
 * 4、排序过程中不断清空画布，并重画数组所有元素对应的极坐标对应的点
 * 5、直到排序完成，终止画布操作
 */

/**
 * 正方形小点类
 */
class Rect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 4;
    this.height = 4;
  }

  drawer () {
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, 4, 4)
    ctx.closePath();
  }
}


/**
 * 画图笔 准备
 */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
// console.log('ctx :>> ', ctx);
ctx.fillStyle = 'white';
ctx.translate(450, 450);

const number = 180;
const time = 2
/**
 * 数据准备
 */
let nums;
const Cosandsin = new Map();

function once () {
  for (let i = 0; i < 360; i++) {
    const angle = i / 180 * Math.PI;
    const cosandsin = { cos: Math.cos(angle), sin: Math.sin(angle) };
    // Cosandsin.push(cosandsin);
    Cosandsin.set(i, cosandsin)
  }
}

function initData () {
  nums = [];
  for (let i = 0; i < 4; i++) {
    // 生成一个 0 - 179的有序数组
    const arr = [...Array(number).keys()] // Array.keys()可以学一下，很有用
    const res = []
    while (arr.length) {
      // 打乱
      const randomIndex = Math.random() * arr.length - 1
      res.push(arr.splice(randomIndex, 1)[0])
    }
    nums = [...nums, ...res]
  }
}



function drawerAll (array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //清空画布
      ctx.clearRect(-450, -450, 900, 900) // 清空画布
      const rects = [];
      array.forEach((res, i) => {
        const { cos, sin } = Cosandsin.get(Math.floor(i / time));
        const x = res * cos;
        const y = res * sin;
        rects.push(new Rect(x, y));
      })
      rects.forEach(rect => { rect.drawer(); });
      resolve('draw success')
    }, 10);
  })

}


function startSort () {
  // bubbleSort(nums);

  const sort = new CalculateMap();
  // sort.bubbleSort(nums, drawerAll); //冒泡
  // sort.selectionSort(nums, drawerAll); // 选择
  sort.insertionSort(nums, drawerAll); // 插入
}

// 乱序
function unsort () {
  initData();
  drawerAll(nums);
}

once();
initData();
drawerAll(nums);






