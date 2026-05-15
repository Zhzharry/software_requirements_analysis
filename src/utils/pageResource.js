/**
 * 各页面配图：将文件放入 resource/page-XX-名称/ 下，文件名与各目录「图片需求说明」表格一致。
 * 支持 .webp / .png / .jpg / .jpeg；新增图片后请重启 dev 服务。
 */
const assetModules = import.meta.glob('../../resource/**/*.{webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** resource 下各页文件夹名（与 resource/page-XX-* 目录一致） */
export const PAGE_DIR = {
  P02: 'page-02-yun-视频库首页',
  P03: 'page-03-map96-产品经理',
  P04: 'page-04-map22-Java路线',
  P05: 'page-05-teacher-师资力量',
  P06: 'page-06-school-开班详情',
  P07: 'page-07-price-学费价格',
  P08: 'page-08-service-就业服务',
  P09: 'page-09-open-直播公开课',
  P10: 'page-10-jishu-技术文章列表',
  P11: 'page-11-jishu-article-文章详情',
  P12: 'page-12-gongju-学习工具',
  P13: 'page-13-gongju-detail-工具详情',
  P14: 'page-14-course-课程详情',
  P15: 'page-15-aiapp-landing-AI应用落地页',
  P16: 'page-16-subject-aiappmap-学习路线图',
}

function assetKey(pageDir, filename) {
  return `../../resource/${pageDir}/${filename}`.replace(/\\/g, '/')
}

/**
 * @param {string} pageDir PAGE_DIR 中的目录名
 * @param {string} filename 含扩展名，如 p02-hero-banner-01.png
 */
export function pageImage(pageDir, filename) {
  const key = assetKey(pageDir, filename)
  if (assetModules[key]) return assetModules[key]
  const base = filename.replace(/\.(webp|png|jpe?g)$/i, '')
  for (const ext of ['webp', 'png', 'jpg', 'jpeg']) {
    const alt = assetModules[assetKey(pageDir, `${base}.${ext}`)]
    if (alt) return alt
  }
  return ''
}

/**
 * 列表项配图：p02-live-01 → index 0；找不到时回退 -01
 * @param {string} pageDir
 * @param {string} namePrefix 如 p02-live（不含序号与扩展名）
 * @param {number} index 从 0 开始
 */
export function pageImageAt(pageDir, namePrefix, index) {
  const n = String(index + 1).padStart(2, '0')
  const hit =
    pageImage(pageDir, `${namePrefix}-${n}.webp`) ||
    pageImage(pageDir, `${namePrefix}-${n}.png`) ||
    pageImage(pageDir, `${namePrefix}-01.webp`) ||
    pageImage(pageDir, `${namePrefix}-01.png`)
  return hit
}

/** 工具/课程等带 id：p12-101-01.webp */
export function pageImageId(pageDir, prefix, id, index = 0) {
  const n = String(index + 1).padStart(2, '0')
  const hit =
    pageImage(pageDir, `${prefix}-${id}-${n}.webp`) ||
    pageImage(pageDir, `${prefix}-${id}-${n}.png`) ||
    pageImage(pageDir, `${prefix}-${id}-01.webp`) ||
    pageImage(pageDir, `${prefix}-${id}-01.png`)
  return hit
}

/** 带 id 与用途段：p13-105-icon-01.webp */
export function pageImageIdPart(pageDir, prefix, id, part) {
  const hit =
    pageImage(pageDir, `${prefix}-${id}-${part}-01.webp`) ||
    pageImage(pageDir, `${prefix}-${id}-${part}-01.png`)
  return hit
}
