

/**
 * 单例模式 一个类只提供一个实例和一个访问它的全局接口
 * 
 * 
 * 常见应用场景：状态管理工具（Vuex、ngrx、Redux)、windows(任务管理器,垃圾回收器等)、全局缓存、网站计数器等
 * 
 */

/**
 * 饿汉模式 初始化就创建
 * 
 * 懒汉模式 调用时创建（目前不会）
 */
// class Single {
//   constructor(name) {
//     this.name = name || 'test';
//     if (!Single.instance) {
//       Single.instance = this;
//     }
//     return Single.instance;
//   }

//   getName () {
//     console.log('name', this.name);
//   }
// }

// const p1 = new Single('1232');
// const p2 = new Single('李四的');
// const p5 = new Single('李四的1');
// const p6 = new Single('李四的2');
// console.log('p1===p2 :>> ', p1 === p2);
// console.log('p5===p2 :>> ', p5 === p2);
// p1.getName();
// p2.getName();

// /**
//  * 新ES 版的单例模式
//  */
// const singletonify = (className) => {
//   return new Proxy(className.prototype.constructor, {
//     instance: null,
//     construct: (target, argumentsList) => {
//       if (!this.instance) {
//         this.instance = new target(...argumentsList);
//       }
//       return this.instance;
//     }
//   })
// }

class People {
  constructor(name) {
    this.name = name;
  }

  getName () {
    console.log('name', this.name);
  }
}


// const People3 = singletonify(People);
// const p3 = new People3('maple');
// const p4 = new People3('uzi');
// console.log('p3===p4 :>> ', p3 === p4);
// p3.getName();
// p4.getName();


// function singletonify2 (className) {
//   return new Proxy(className.prototype.constructor, {
//     instance: null,
//     construct: (target, args) => {
//       if (!this.instance) {
//         this.instance = new target(...args);
//       }
//       return this.instance;
//     }
//   })
// }
// const NewPeople = singletonify2(People);
// const p8 = new NewPeople('🐖');
// const p7 = new NewPeople('人类');
// console.log('p7===p8 :>> ', p7 === p8);
// p7.getName();
// p8.getName();




class Single2 {

  constructor(name) {
    this.name = name;
    if (!Single2.instance) {
      Single2.instance = this;
    }
    return Single2.instance;
  }

  getName () {
    console.log('this.name :>> ', this.name);
    // return this.name;
  }
}

const ProxySingle = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, args) => {
      if (!this.instance) {
        this.instance = new target(...args)
      }
      return this.instance;
    }
  })
}

const p = ProxySingle(People);
const p11 = new p('小学生')
const p12 = new p('大学生')
console.log('p11===p12 :>> ', p11 === p12);
console.log('p11.getName() :>> ', p11.getName());
console.log('p12.getName() :>> ', p12.getName());
console.log('----------------------------------------------------------');


const p13 = new Single2('初中生');
const p14 = new Single2('高中生');
console.log('p13===p14 :>> ', p13 === p14);
console.log('p13.getName() :>> ', p13.getName());
console.log('p14.getName() :>> ', p14.getName());
