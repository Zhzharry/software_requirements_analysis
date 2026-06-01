import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const base = path.join(__dirname, '..', '各个页面截图')

const pages = [
  { folder: '官网门户首页', path: '/', title: '官网门户首页', view: 'ItheimaPortalView.vue', ref: 'www.itheima.com', desc: '黑马程序员官网门户：学科导航、课程推荐、学员风采等。' },
  { folder: '视频库首页', path: '/yun', title: '视频库首页', view: 'HomePrototype.vue', ref: 'yun.itheima.com', desc: '视频教程库首页：Hero、直播、免费课、学习路线、工具入口等。' },
  { folder: '产品经理教程', path: '/map/96', title: '产品经理教程聚合', view: 'MapPmView.vue', ref: 'yun.itheima.com/map/96.html', desc: '产品经理方向教程地图与课程列表。' },
  { folder: 'Java与AI路线', path: '/map/22', title: 'Java / AI 智能应用路线', view: 'MapJavaView.vue', ref: 'yun.itheima.com/map/22.html', desc: 'JavaEE 与 AI 智能应用开发教程聚合页。' },
  { folder: '师资力量', path: '/teacher', title: '教研团队', view: 'TeacherView.vue', ref: 'www.itheima.com/teacher.html', desc: '师资力量与讲师介绍。' },
  { folder: '全国校区开班', path: '/school', title: '全国校区及开班', view: 'ItheimaSchoolView.vue', ref: 'www.itheima.com/special/hmschool/', desc: '全国校区分布与开班信息。' },
  { folder: '学费价格', path: '/price', title: '学费价格表', view: 'ItheimaPriceView.vue', ref: 'www.itheima.com/pc/module/price/', desc: '培训课程学费与价格说明。' },
  { folder: '就业服务', path: '/service', title: '就业服务', view: 'ItheimaServiceView.vue', ref: 'www.itheima.com/service.html', desc: '就业辅导、面试指导等服务介绍。' },
  { folder: '直播公开课', path: '/open', title: '直播公开课', view: 'OpenLiveView.vue', ref: 'yun.itheima.com/open', desc: '直播公开课列表与预约入口。' },
  { folder: '技术文章列表', path: '/jishu', title: '技术文章', view: 'JishuView.vue', ref: 'yun.itheima.com/jishu', desc: '技术文章列表（产品经理等分类）。' },
  { folder: '技术文章详情', path: '/jishu/452', title: '技术文章详情', view: 'JishuArticleView.vue', ref: 'yun.itheima.com/jishu/452.html', desc: '单篇技术文章正文（示例 ID：452）。' },
  { folder: '学习工具列表', path: '/gongju', title: '学习工具', view: 'GongjuView.vue', ref: 'yun.itheima.com/gongju', desc: '学习工具下载列表（Axure、通义灵码等）。' },
  { folder: '学习工具详情', path: '/gongju/105', title: '学习工具详情', view: 'GongjuDetailView.vue', ref: 'yun.itheima.com/gongju/105.html', desc: '单个工具介绍与相关课程（示例 ID：105 通义灵码）。' },
  { folder: '课程播放页', path: '/course/1002', title: '视频课程播放', view: 'CourseDetailView.vue', ref: 'yun.itheima.com/course/1002.html', desc: '课程目录、播放器区域与推荐（示例 ID：1002）。' },
  { folder: 'AI应用培训落地页', path: '/aiapp', title: 'AI 智能应用培训', view: 'AiappLandingView.vue', ref: 'aiapp.itheima.com', desc: 'AI 智能应用培训专题落地页。' },
  { folder: 'AI学习路线图', path: '/subject/aiappmap', title: 'AI 学习路线图', view: 'SubjectAiappmapView.vue', ref: 'yun.itheima.com/subject/aiappmap/', desc: 'AI 智能应用开发学习路线可视化。' },
]

function mdName(routePath) {
  if (routePath === '/') return '_.md'
  return `_${routePath.slice(1).replace(/\//g, '_')}.md`
}

for (const pg of pages) {
  const dir = path.join(base, pg.folder)
  fs.mkdirSync(dir, { recursive: true })
  const url = `http://localhost:5173${pg.path === '/' ? '/' : pg.path}`
  const body = `# ${pg.path}

## 页面简介

${pg.desc}

## 元信息

| 项 | 值 |
|----|-----|
| 路由 | \`${pg.path}\` |
| 页面标题 | ${pg.title} |
| 视图组件 | \`src/views/${pg.view}\` |
| 对标参考 | ${pg.ref} |
| 本地预览 | [${url}](${url}) |

## 截图清单

请将本页截图保存在**本文件夹**内，建议命名：

| 文件名 | 说明 |
|--------|------|
| \`full.png\` | 整页长截图（含页脚） |
| \`top.png\` | 首屏 / 顶栏区域 |
| \`section-*.png\` | 各主要区块（按需） |

## 嵌入截图

（截图后取消注释并填写实际文件名）

<!--
![整页](./full.png)
![首屏](./top.png)
-->

## 备注

- 配图素材说明见 \`resource/\` 下对应 \`page-XX-*\` 目录内的 \`图片需求说明.md\`。
`
  fs.writeFileSync(path.join(dir, mdName(pg.path)), body, 'utf8')
}

console.log(`Generated ${pages.length} page folders under ${base}`)
