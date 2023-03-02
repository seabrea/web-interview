/**
 * 防抖
 *
 * 表示在多次触发中只执行最后一次
 * 
 * 常用在点击事件等场景中
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
