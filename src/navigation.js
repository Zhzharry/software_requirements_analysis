/** 官网对照链接（外站） */
export const TRAINING_CAMPAIGN_URL = 'https://aiapp.itheima.com/?aiappzly'

/** 站内复刻落地页（与外链同 query，便于对照） */
export const TRAINING_LANDING_TO = '/aiapp?aiappzly'

/** 对标 yun.itheima.com/subject/aiappmap/index.html */
export const SUBJECT_AIAPPMAP_TO = '/subject/aiappmap'

/** 报考大学：北京邮电大学官网（外站直链，不仿站） */
export const COLLEGE_BUPT_URL = 'https://www.bupt.edu.cn/'

/**
 * 主导航「培训课程」悬停面板：5 列网格，顺序对齐白马官网大类入口。
 */
export const trainingMegaMenuItems = [
  { label: 'AI智能应用开发' },
  { label: 'AI大模型开发（Python）' },
  { label: 'AI鸿蒙开发' },
  { label: 'AI嵌入式+机器人开发' },
  { label: 'AI运维' },
  { label: 'AI测试' },
  { label: '跨境电商运营' },
  { label: 'AI设计' },
  { label: 'AI视频创作与直播运营' },
  { label: '微短剧拍摄剪辑' },
  { label: 'AI大数据开发' },
  { label: 'IP短视频带货训练营' },
  { label: '前端开发' },
  { label: 'C/C++' },
  { label: '狂野架构师' },
]

/**
 * 主导航：有 `to` 的项为站内路由（新标签页打开）；无 `to` 为纯文本。
 */
export const mainNavItems = [
  { label: '首页', to: '/' },
  { label: '培训课程', to: null },
  { label: '教研团队', to: '/teacher' },
  /** Java / AI智能应用开发教程聚合页（对标 yun map/22） */
  { label: '免费视频教程', to: '/map/22' },
  { label: '学习路线图', to: SUBJECT_AIAPPMAP_TO },
  { label: '直播公开课', to: '/open' },
  { label: '技术文章', to: '/jishu' },
  { label: '学习工具', to: '/gongju' },
  { label: '报考大学', external: COLLEGE_BUPT_URL },
]
