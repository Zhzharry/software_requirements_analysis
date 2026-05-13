/**
 * 学习工具数据（对标 yun.itheima.com/gongju/*.html）
 */

export const gongjuToolList = [
  { id: '101', name: 'Axure RP 10', tag: '产品经理', desc: 'Axure RP是一款专业的快速原型设计工具。RP则是Rapid Prototyping（快速原型）的缩写。', downloads: '1785人已下载' },
  { id: '105', name: '通义灵码', tag: 'JavaEE', desc: '通义灵码，是阿里云出品的一款基于通义大模型的智能编码辅助工具……', downloads: '367人已下载' },
  { id: '102', name: 'NodeJS', tag: 'HTML&JS+前端', desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境……', downloads: '2698人已下载' },
  { id: '103', name: 'Typora——Markdown 编辑器和阅读器', tag: 'HTML&JS+前端', desc: 'Typora 是一款支持实时预览的 Markdown 文本编辑器……', downloads: '10151人已下载' },
  { id: '104', name: 'Google Chrome', tag: 'HTML&JS+前端', desc: 'Google Chrome 是由 Google 开发的 Web 浏览工具。', downloads: '2690人已下载' },
  { id: '106', name: 'Allpairs', tag: 'JavaEE', desc: '组合测试用例生成工具（示例占位）。', downloads: '—' },
]

const detailById = {
  105: {
    crumbCat: 'JavaEE',
    size: '20.20MB',
    platform: 'Windows/mac',
    toolType: 'AI工具',
    downloadsLine: '367人已下载',
    introParas: [
      '通义灵码，是阿里云出品的一款基于通义大模型的智能编码辅助工具，提供行级/函数级实时续写、自然语言生成代码、单元测试生成、代码注释生成、代码解释、研发智能问答、异常报错排查等能力，并针对阿里云 SDK/OpenAPI 的使用场景调优，助力开发者编码。',
      '支持 Java、Python、Go、JavaScript、TypeScript、C/C++ 等主流语言，同时兼容 Visual Studio Code、JetBrains IDEs 等主流编程工具。',
    ],
    related: [
      { id: '106', title: 'Allpairs' },
      { id: '105', title: '通义灵码' },
    ],
    courses: [
      { title: 'Java入门到起飞，含斯坦福大学练习题+力扣算法题+大厂java面试题', level: '初级', learners: '1071440', score: '5.0分' },
      { title: '全网首发AI+JavaWeb开发入门，Tlias教学管理系统项目实战全套视频教程', level: '初级', learners: '540049', score: '5.0分' },
      { title: 'Java+AI智能辅助编程，Java零基础入门到大牛一套通关', level: '初级', learners: '310729', score: '5.0分' },
      { title: 'MySQL数据库入门到精通，从mysql安装到mysql高级、mysql优化全囊括', level: '中级', learners: '650087', score: '5.0分' },
    ],
  },
  101: {
    crumbCat: '产品经理',
    size: '—',
    platform: 'Windows/mac',
    toolType: '设计工具',
    downloadsLine: '1785人已下载',
    introParas: ['Axure RP 是一款专业的快速原型设计工具（示例详情占位）。'],
    related: [{ id: '105', title: '通义灵码' }],
    courses: [{ title: '产品经理零基础入门到精通', level: '初级', learners: '236994', score: '5.0分' }],
  },
  102: {
    crumbCat: 'HTML&JS+前端',
    size: '—',
    platform: 'Windows/mac/Linux',
    toolType: '运行环境',
    downloadsLine: '2698人已下载',
    introParas: ['Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境（示例详情占位）。'],
    related: [{ id: '105', title: '通义灵码' }],
    courses: [{ title: '前端Web开发HTML5+CSS3+移动web视频教程', level: '初级', learners: '615908', score: '5.0分' }],
  },
  103: {
    crumbCat: 'HTML&JS+前端',
    size: '—',
    platform: 'Windows/mac',
    toolType: '编辑器',
    downloadsLine: '10151人已下载',
    introParas: ['Typora 是一款支持实时预览的 Markdown 文本编辑器（示例详情占位）。'],
    related: [],
    courses: [],
  },
  104: {
    crumbCat: 'HTML&JS+前端',
    size: '—',
    platform: 'Windows/mac',
    toolType: '浏览器',
    downloadsLine: '2690人已下载',
    introParas: ['Google Chrome 是由 Google 开发的 Web 浏览工具（示例详情占位）。'],
    related: [],
    courses: [],
  },
  106: {
    crumbCat: 'JavaEE',
    size: '—',
    platform: 'Windows',
    toolType: '测试工具',
    downloadsLine: '—',
    introParas: ['Allpairs 是一款组合测试用例生成工具（示例占位，详见原站）。'],
    related: [{ id: '105', title: '通义灵码' }],
    courses: [],
  },
}

export function getGongjuTool(id) {
  const base = gongjuToolList.find((t) => t.id === String(id))
  if (!base) return null
  const detail = detailById[String(id)] || {
    crumbCat: base.tag,
    size: '—',
    platform: '—',
    toolType: '工具',
    downloadsLine: base.downloads,
    introParas: [base.desc],
    related: [],
    courses: [],
  }
  return { ...base, ...detail }
}

export function getAllGongjuTools() {
  return gongjuToolList
}
