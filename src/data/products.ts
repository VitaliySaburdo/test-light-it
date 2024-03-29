export const products = [
  {
    id: "1",
    title: "iphone",
    image: "https://content1.rozetka.com.ua/goods/images/big/364824496.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eum rem dolores repellat explicabo atque aperiam cum! Sequi, velit.",
  },
  {
    id: "2",
    title: "xiaomi",
    image: "https://content1.rozetka.com.ua/goods/images/big/396585652.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eum rem dolores repellat explicabo atque aperiam cum! Sequi, velit.",
  },
  {
    id: "3",
    title: "samsung",
    image: "https://content2.rozetka.com.ua/goods/images/big/398085659.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eum rem dolores repellat explicabo atque aperiam cum! Sequi, velit.",
  },
  {
    id: "4",
    title: "huawei",
    image: "https://content1.rozetka.com.ua/goods/images/big/332552110.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eum rem dolores repellat explicabo atque aperiam cum! Sequi, velit.",
  },
  {
    id: "5",
    title: "one plus",
    image: "https://content1.rozetka.com.ua/goods/images/big/370333176.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eum rem dolores repellat explicabo atque aperiam cum! Sequi, velit.",
  },
];

export const getProductById = (productId: string) => {
  return products.find((product) => product.id === productId);
};