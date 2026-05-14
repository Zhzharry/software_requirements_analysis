# resource — 按网页整理的配图目录

本目录为**素材归档与命名说明**，与 `src/views` 中 **16 个页面级路由**一一对应；另含 **`00-shared-global-ui`** 存放多页共用的顶栏 Logo、头像等。

| 文件夹 | 路由 | 视图文件 |
|--------|------|----------|
| `00-shared-global-ui` | （多页共用） | `SiteHeader.vue`、`ItheimaWwwPageChrome.vue` |
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
| `page-12-gongju-学习工具列表` | `/gongju` | `GongjuView.vue` |
| `page-13-gongju-detail-工具详情` | `/gongju/:id` | `GongjuDetailView.vue` |
| `page-14-course-detail-课程播放` | `/course/:id` | `CourseDetailView.vue` |
| `page-15-aiapp-AI培训落地` | `/aiapp` | `AiappLandingView.vue` |
| `page-16-subject-aiappmap-学习路线图` | `/subject/aiappmap` | `SubjectAiappmapView.vue` |

每个子文件夹内的 **`图片需求说明.md`** 含表格：用途、规格、**命名规范**、与 `PlaceholderImage` 的对应关系。

**已有文件**：根下 `logo.png` 可作为品牌母版，导出到 `p00-*` / `p16-*` 等尺寸使用。
