# resource — 按网页整理的配图目录

本目录为**素材归档与命名说明**，与 `src/views` 中 **16 个页面级路由**一一对应；另含 **`00-shared-global-ui`** 存放多页共用的顶栏 Logo、首页装饰等。

## 使用方式

1. 将图片放入对应 `page-XX-*` 文件夹，文件名与各目录内 **`图片需求说明.md`** 表格一致。
2. 支持 `.webp`、`.png`、`.jpg`、`.jpeg`；列表项可只放 `-01`，其余序号由 `pageImageAt` 回退到 `-01`。
3. 代码入口：`src/utils/pageResource.js` + `src/components/PageResourceImg.vue`。**新增或改名后请重启 `npm run dev`**，再执行 `npm run build` 验证。
4. 未放入的文件在页面上显示灰色「请插入图片」占位。

> **注意**：存在少量历史重复文件夹（如 `page-12-gongju-学习工具列表`、`page-14-course-detail-课程播放`、`page-15-aiapp-AI培训落地`），**请以 `pageResource.js` 中 `PAGE_DIR` 所列目录名为准**。

## 路由与文件夹对照

| 文件夹 | 路由 | 视图 |
|--------|------|------|
| `00-shared-global-ui` | （多页共用） | `brand.js` / 门户等 |
| `page-01-portal-首页` | `/` | `ItheimaPortalView.vue` |
| `page-02-yun-视频库首页` | `/yun` | `HomePrototype.vue` |
| `page-03-map96-产品经理` | `/map/96` | `MapPmView.vue` |
| `page-04-map22-Java路线` | `/map/22` | `MapJavaView.vue` |
| `page-05-teacher-师资力量` | `/teacher` | `TeacherView.vue` |
| `page-06-school-开班详情` | `/school` | `ItheimaSchoolView.vue` |
| `page-07-price-学费价格` | `/price` | `ItheimaPriceView.vue` |
| `page-08-service-就业服务` | `/service` | `ItheimaServiceView.vue` |
| `page-09-open-直播公开课` | `/open` | `OpenLiveView.vue` |
| `page-10-jishu-技术文章列表` | `/jishu` | `JishuView.vue` |
| `page-11-jishu-article-文章详情` | `/jishu/:id` | `JishuArticleView.vue` |
| `page-12-gongju-学习工具` | `/gongju` | `GongjuView.vue` |
| `page-13-gongju-detail-工具详情` | `/gongju/:id` | `GongjuDetailView.vue` |
| `page-14-course-课程详情` | `/course/:id` | `CourseDetailView.vue` |
| `page-15-aiapp-landing-AI应用落地页` | `/aiapp` | `AiappLandingView.vue` |
| `page-16-subject-aiappmap-学习路线图` | `/subject/aiappmap` | `SubjectAiappmapView.vue` |

## 共用资源（`00-shared-global-ui`）

| 文件名 | 用途 |
|--------|------|
| `logo.png` | 全站 Logo（`src/assets/brand.js`） |
| `home_shark.png` | 门户首页 Hero 背景装饰 |
| `students.png` | 门户「学员风采」区块 |

## 页面 02–16 文件名速查

### page-02 `/yun`

`p02-hero-banner-01` · `p02-float-01`~`03` · `p02-promo-01`~`04` · `p02-live-01`~`08` · `p02-free-01`~`06` · `p02-road-01`~`09` · `p02-tool-ico-01`~`04` · `p02-review-av-01`~`04`

### page-03 `/map/96`

`p03-top-banner-01` · `p03-side-logo-01` · `p03-course-01`（可 02、03…）

### page-04 `/map/22`

`p04-card-01`（可 02、03…）

### page-05 `/teacher`

`p05-hero-01` · `p05-teacher-01`~`06`

### page-06 `/school`

`p06-hero-01`

### page-07 `/price`

`p07-banner-01`（可选横幅，已接入）

### page-08 `/service`

`p08-top-banner-01` · `p08-section-01` · `p08-aside-01`

### page-09 `/open`

`p09-live-01`~`08`

### page-10 `/jishu`

`p10-article-01`（可 02…）

### page-11 `/jishu/:id`

`p11-default-course-01` · `p11-{文章id}-course-01`（如 `p11-452-course-01`）

### page-12 `/gongju`

`p12-{工具id}-01`（101、105、102、103、104、106）

### page-13 `/gongju/:id`

`p13-{id}-icon-01` · `p13-{id}-course-01`

### page-14 `/course/:id`

`p14-{课程id}-cover-01` · `p14-{id}-qrcode-01` · `p14-{id}-related-01`

### page-15 `/aiapp`

`p15-hero-01`（行业区与双轨区为页内 SVG 示意，无需素材）

### page-16 `/subject/aiappmap`

`p16-head-logo-01` / `p16-head-logo` / `p16-logo` / `logo`（任选其一，可选；无则 `BrandLogo`）

各页详细说明见子目录 **`图片需求说明.md`**。
