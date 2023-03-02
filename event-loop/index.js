/**
 * Event Loop
 *
 * JS 事件轮询机制
 *
 */

console.log('最后结果: 1 3 4 5 3');

console.log("1");

setTimeout(() => console.log("2"));

function task() {
  return new Promise((resolve) => {
    console.log('3');
    resolve();
  });
}

task().then(() => console.log("5"));

console.log("4");
