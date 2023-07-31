const products = [
  {
    name: "Samsung Galaxy Z Fold5",
    price: 24999000,
    url: "https://www.tokopedia.com/samsung/samsung-galaxy-z-fold5-12-512gb-smartphone-free-upgrade-from-256gb-cream?extParam=ivf%3Dfalse&src=topads",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/24/c58df3eb-01ed-4a65-9957-139db63d87c7.jpg",
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    price: 2089000,
    url: "https://www.tokopedia.com/samsung/samsung-galaxy-buds2-pro-bora-purple",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/15/abefb794-ce97-4534-a32b-c7839f6c8b02.jpg",
  },
  {
    name: "Apple iPhone 13",
    price: 11699000,
    url: "https://www.tokopedia.com/cmpphone/apple-iphone-13-128gb-grs-resmi-ibox-indonesia-midnight?extParam=ivf%3Dfalse&src=topads",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/13/819f37fd-cff6-4212-ae58-5618ac2b5e07.jpg",
  },
  {
    name: "Apple iPhone 14",
    price: 11699000,
    url: "https://www.tokopedia.com/cmpphone/apple-iphone-14-grs-resmi-ibox-indonesia-midnight-128gb",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/7/17241d7f-c141-4ebe-b568-b338fef02770.jpg",
  },
  {
    name: "POCO F4 GT",
    price: 7499000,
    url: "https://www.tokopedia.com/xiaomi/xiaomi-official-poco-f4-gt-12-256gb-stealth-black",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/11/ac953ea8-d679-4f72-bcb9-2f6c0320a9e8.png",
  },
  {
    name: "POCO X5 5G",
    price: 3099000,
    url: "https://www.tokopedia.com/xiaomi/xiaomi-official-poco-x5-5g-snapdragon-695-5g-layar-120hz-amoled-6-67-black-6-128gb",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/9/45b9cfe9-2fd4-4a2a-bd20-6010961048cc.jpg",
  },
  {
    name: "OPPO Find N2 Flip",
    price: 14999000,
    url: "https://www.tokopedia.com/oppo/oppo-find-n2-flip-8gb-256gb-smartphone-garansi-resmi-hitam?extParam=ivf%3Dfalse%26src%3Dsearch",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/8/af55d001-e0b2-4f27-9f27-cfd036f93736.jpg",
  },
  {
    name: "OPPO A78",
    price: 3599000,
    url: "https://www.tokopedia.com/oppo/oppo-a78-8gb-8gb-256gb-smartphone-garansi-resmi-hitam",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/22/ee5c7b20-9d03-41ab-b70c-4dbad9e3ffbc.jpg",
  },
];

const videos = [
  {
    id: 0,
    title: "Samsung Galaxy Unpacked",
    url: "https://www.youtube.com/shorts/GiMDQuT9_oU",
    thumbnailUrl: "https://i.ytimg.com/vi/GiMDQuT9_oU/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDKvPpPnDeom5KBGL2eGLmLZ_gPAw",
    viewerCount: 123,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "John Doe",
        comment: "Great video!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Love the new Samsung devices!",
        timestamp: "28072023",
      },
      {
        userName: "Michael Smith",
        comment: "Wow, impressive presentation!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    id: 1,
    title: "Introducing Samsung's Latest Innovation",
    url: "https://www.youtube.com/shorts/9sb4t44V3pk",
    thumbnailUrl: "https://i.ytimg.com/vi/9sb4t44V3pk/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDwvB1yTIAYXApEoDDKulaBLSdrdQ",
    viewerCount: 456,
    shop: {
      name: "Samsung Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Emily Johnson",
        comment: "When will it be available?",
        timestamp: "28072023",
      },
      {
        userName: "Robert Brown",
        comment: "The design is sleek and modern!",
        timestamp: "28072023",
      },
      {
        userName: "Jennifer Lee",
        comment: "I can't wait to get my hands on it!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    id: 2,
    title: "Apple's Special Event",
    url: "https://www.youtube.com/shorts/Pnhc32OVE48",
    thumbnailUrl: "https://i.ytimg.com/vi/Pnhc32OVE48/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCHrl266b4yMdir0CHeXbcAxJNjjw",
    viewerCount: 789,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "The new iPhone looks amazing!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "I'm loving the new colors!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "Great job, Apple!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    id: 3,
    title: "Unveiling the Latest Apple Product",
    url: "https://www.youtube.com/shorts/yeOd-7vvZus",
    thumbnailUrl: "https://i.ytimg.com/vi/yeOd-7vvZus/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAjwCUdRNeRsbcHbzzxQnpXk9XOpg",
    viewerCount: 321,
    shop: {
      name: "Apple Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "This is revolutionary!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "When will it be released?",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "I need to upgrade my phone now!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    id: 4,
    title: "Poco's New Flagship Device",
    url: "https://www.youtube.com/shorts/77Z7oA_E6H8",
    thumbnailUrl: "https://i.ytimg.com/vi/77Z7oA_E6H8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAkeS9FhppjD4FOa5Glq4662AMcjQ",
    viewerCount: 654,
    shop: {
      name: "Poco Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "William Wilson",
        comment: "Poco never disappoints!",
        timestamp: "28072023",
      },
      {
        userName: "Jessica Martinez",
        comment: "The price is tempting!",
        timestamp: "28072023",
      },
      {
        userName: "David Anderson",
        comment: "I wonder if it's water-resistant?",
        timestamp: "28072023",
      },
    ],
    products: []
  },
  {
    id: 5,
    title: "Oppo's Latest Smartphone Launch",
    url: "https://www.youtube.com/shorts/6Xh4gxwRKhQ",
    thumbnailUrl: "https://i.ytimg.com/vi/6Xh4gxwRKhQ/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCMBI3WknWqs_5AQjjLBUcsm5Ng0Q",
    viewerCount: 987,
    shop: {
      name: "Oppo Official Store",
      isOfficial: true,
    },
    comments: [
      {
        userName: "Sarah Davis",
        comment: "The design is sleek!",
        timestamp: "28072023",
      },
      {
        userName: "John Doe",
        comment: "I hope it has a good camera!",
        timestamp: "28072023",
      },
      {
        userName: "Jane Doe",
        comment: "Oppo never fails to innovate!",
        timestamp: "28072023",
      },
    ],
    products: []
  },
];


export {products, videos}