export const products = [
  {
    id: 1,
    name: '智能运动手表',
    price: 1299,
    category: '数码',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    description: '支持心率监测、GPS 跟踪、健康提醒，适合日常运动与睡眠管理。',
    stock: 28
  },
  {
    id: 2,
    name: '无线蓝牙耳机',
    price: 899,
    category: '数码',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    description: '降噪效果出色，支持长时间通话与运动场景，适合办公和出行。',
    stock: 35
  },
  {
    id: 3,
    name: '轻薄笔记本电脑',
    price: 4599,
    category: '办公',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
    description: '搭载高性能处理器，轻巧便携，适合编程、办公和学习使用。',
    stock: 18
  },
  {
    id: 4,
    name: '智能家居灯带',
    price: 399,
    category: '家居',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    description: '支持多种场景模式，智能联动，营造温馨居家氛围。',
    stock: 42
  },
  {
    id: 5,
    name: '高端保温杯',
    price: 199,
    category: '生活',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    description: '双层不锈钢材质，保温保冷效果稳定，适合日常通勤使用。',
    stock: 52
  },
  {
    id: 6,
    name: '户外登山背包',
    price: 599,
    category: '运动',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: '大容量设计，防泼水，适合旅行、徒步和日常出行。',
    stock: 21
  }
]

export const forumPosts = [
  {
    id: 101,
    title: '有哪些适合上班族的效率工具推荐？',
    author: '小白用户A',
    time: '2小时前',
    tag: '生活技巧',
    likes: 128,
    summary: '分享一些实用的效率工具和使用习惯，帮助大家更好地管理时间。',
    comments: [
      { user: '用户B', content: '推荐一个待办清单工具，确实很适合每日规划。' },
      { user: '用户C', content: '我觉得时间块管理特别有用，真的能提高效率。' }
    ]
  },
  {
    id: 102,
    title: '智能家居入门：从灯带和插座开始',
    author: '科技主播',
    time: '昨天',
    tag: '数码生活',
    likes: 245,
    summary: '智能家居不一定要一口气全装，先从小功能入手更容易落地。',
    comments: [
      { user: '用户D', content: '我刚开始装了一套灯带，体验还不错。' },
      { user: '用户E', content: '插座和开关是最实用的入口。' }
    ]
  },
  {
    id: 103,
    title: '2025 年值得入手的办公装备清单',
    author: '办公达人',
    time: '3天前',
    tag: '办公学习',
    likes: 186,
    summary: '从键盘、显示器到笔记本，提高办公效率的好设备推荐。',
    comments: [
      { user: '用户F', content: '我很认可这个清单，显示器和键盘确实很重要。' }
    ]
  }
]
