export const galaxyTypes = [
  {
    id: 'spiral',
    title: '螺旋星系',
    en: 'Spiral Galaxy',
    description: '最具标志性的星系形态，拥有明亮的旋臂从中心核球向外延伸。恒星、气体和尘埃沿旋臂分布，形成壮观的螺旋图案。银河系即属此类。',
    features: ['旋臂结构', '活跃的恒星形成', '包含大量气体和尘埃'],
    color: '#2997ff',
    image: '/nasa/whirlpool.jpg',
  },
  {
    id: 'elliptical',
    title: '椭圆星系',
    en: 'Elliptical Galaxy',
    description: '呈椭圆形或圆形，缺少明显的旋臂结构。恒星运动随机，气体和尘埃稀少，恒星形成活动较低，多为年老恒星。',
    features: ['椭球形状', '年老恒星为主', '气体尘埃稀少'],
    color: '#8e8e93',
    image: '/nasa/sombrero.jpg',
  },
  {
    id: 'irregular',
    title: '不规则星系',
    en: 'Irregular Galaxy',
    description: '没有规则的形状，通常由星系碰撞或引力扰动造成。富含气体和尘埃，恒星形成活动剧烈，呈现出混沌而美丽的外观。',
    features: ['不规则形态', '剧烈恒星形成', '多由引力扰动造成'],
    color: '#ff9f0a',
    image: '/nasa/lmc.jpg',
  },
]

export const planets = [
  { name: '水星', en: 'Mercury', color: '#b0b0b0', size: 0.4, distance: 4, speed: 4.0 },
  { name: '金星', en: 'Venus', color: '#e8cda0', size: 0.7, distance: 6, speed: 3.0 },
  { name: '地球', en: 'Earth', color: '#4da6ff', size: 0.75, distance: 8, speed: 2.5 },
  { name: '火星', en: 'Mars', color: '#d45d3e', size: 0.55, distance: 10, speed: 2.0 },
  { name: '木星', en: 'Jupiter', color: '#d4b896', size: 1.5, distance: 13, speed: 1.4 },
  { name: '土星', en: 'Saturn', color: '#ead6a6', size: 1.2, distance: 16, speed: 1.1, ring: true },
  { name: '天王星', en: 'Uranus', color: '#8fd4d4', size: 0.9, distance: 19, speed: 0.8 },
  { name: '海王星', en: 'Neptune', color: '#4b70dd', size: 0.85, distance: 22, speed: 0.6 },
]

export const famousGalaxies = [
  {
    name: '仙女座星系',
    en: 'Andromeda (M31)',
    description: '距银河系最近的大型螺旋星系，约250万光年。正以每秒110公里的速度靠近银河系，预计40亿年后两者将发生碰撞合并。',
    distance: '250万光年',
    type: '螺旋星系',
    image: '/nasa/andromeda.jpg',
  },
  {
    name: '涡状星系',
    en: 'Whirlpool (M51)',
    description: '位于猎犬座的经典螺旋星系，距地球约2300万光年。与伴星系NGC 5195的引力互动使其旋臂结构异常清晰。',
    distance: '2300万光年',
    type: '螺旋星系',
    image: '/nasa/whirlpool.jpg',
  },
  {
    name: '草帽星系',
    en: 'Sombrero (M104)',
    description: '位于室女座，距地球约2800万光年。明亮的核球与暗色尘埃带形成草帽般的外观，兼具螺旋和椭圆星系特征。',
    distance: '2800万光年',
    type: '螺旋/椭圆',
    image: '/nasa/sombrero.jpg',
  },
  {
    name: '车轮星系',
    en: 'Cartwheel Galaxy',
    description: '位于玉夫座，距地球约5亿光年。由一次星系碰撞产生的环状结构，外环充满炽热的年轻恒星。',
    distance: '5亿光年',
    type: '环状星系',
    image: '/nasa/cartwheel.jpg',
  },
  {
    name: '大麦哲伦云',
    en: 'Large Magellanic Cloud',
    description: '银河系最大的卫星星系，距地球约16万光年。不规则星系，在南半球肉眼可见，是恒星形成研究的重要目标。',
    distance: '16万光年',
    type: '不规则星系',
    image: '/nasa/lmc.jpg',
  },
]

export const milkyWayStats = [
  { label: '直径', value: 100000, suffix: '光年', en: 'Diameter' },
  { label: '恒星数量', value: 2000, suffix: '亿+', en: 'Stars' },
  { label: '年龄', value: 136, suffix: '亿年', en: 'Age' },
  { label: '中心黑洞质量', value: 430, suffix: '万 M☉', en: 'Sgr A* Mass' },
]
