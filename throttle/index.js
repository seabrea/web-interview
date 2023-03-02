console.log("start");

const throttle = (func) => {
  let timer = null;

  return function () {
    if (timer) return;

    timer = setTimeout(() => {
      func.call(this);
      timer = null;
    }, 500);
  };
};

const task = throttle(() => {
  console.log("click");
});

const onClickButton = () => {
  task();
};
