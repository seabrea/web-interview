
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
