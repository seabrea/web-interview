const urls =
  "https://oss.homeee.com/miniresource/images/service/fuwu021_x1.jpg,https://oss.homeee.com/miniresource/images/service/fuwu022_x1.jpg,https://oss.homeee.com/miniresource/images/service/fuwu023_x1.jpg,https://oss.homeee.com/miniresource/images/service/fuwu024_x1.jpg,https://oss.homeee.com/miniresource/images/service/fuwu025_x1.jpg".split(
    ","
  );

const asyncAddImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      document.getElementById("root").appendChild(image);
      resolve();
    };
    image.onerror = () => {
      console.error("图片加载失败", url);
    };
  });
};

const loadList = (list) => {
  if (list.length === 0) return;
  let index = 0;

  const loadImages = (url) => {
    asyncAddImage(url).then(() => {
      index++;
      if (index < list.length) {
        loadImages(list[index]);
      }
    });
  };

  loadImages(list[index]);
};

loadList(urls);
