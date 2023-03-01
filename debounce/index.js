/**
 * 防抖
 *
 * 表示在多次触发（一定时间内）中只执行最后一次
 */

console.log("start");

const debounce = (func) => {
  let timer = null;

  return function () {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.call(this);
    }, 500);
  };
};

const task = debounce(() => {
  console.log("click");
});

const onClickButton = () => {
  task();
};
