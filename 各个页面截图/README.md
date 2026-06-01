# 各个页面截图

按站内路由整理：每个页面一个**简介文件夹**，文件夹内放置截图，并有一份以**网页路径**命名的说明 Markdown。

## 命名约定

| 类型 | 规则 | 示例 |
|------|------|------|
| 文件夹 | 对该页的简短中文介绍 | `视频库首页` |
| 说明 `.md` | 路由 path 中 `/` 改为 `_`，根路径 `/` 为 `_.md` | `/yun` → `_yun.md` |
| 截图文件 | 建议 `full.png`（整页）、`top.png`（首屏）等 | 自行补充 |

## 本地预览

```bash
npm run dev
```

默认地址：`http://localhost:5173`，下表「完整 URL」列可直接打开对应页。

## 页面索引

| 文件夹 | 路由 | 说明文件 | 视图 |
|--------|------|----------|------|
| [官网门户首页](./官网门户首页/) | `/` | `_.md` | `ItheimaPortalView.vue` |
| [视频库首页](./视频库首页/) | `/yun` | `_yun.md` | `HomePrototype.vue` |
| [产品经理教程](./产品经理教程/) | `/map/96` | `_map_96.md` | `MapPmView.vue` |
| [Java与AI路线](./Java与AI路线/) | `/map/22` | `_map_22.md` | `MapJavaView.vue` |
| [师资力量](./师资力量/) | `/teacher` | `_teacher.md` | `TeacherView.vue` |
| [全国校区开班](./全国校区开班/) | `/school` | `_school.md` | `ItheimaSchoolView.vue` |
| [学费价格](./学费价格/) | `/price` | `_price.md` | `ItheimaPriceView.vue` |
| [就业服务](./就业服务/) | `/service` | `_service.md` | `ItheimaServiceView.vue` |
| [直播公开课](./直播公开课/) | `/open` | `_open.md` | `OpenLiveView.vue` |
| [技术文章列表](./技术文章列表/) | `/jishu` | `_jishu.md` | `JishuView.vue` |
| [技术文章详情](./技术文章详情/) | `/jishu/452` | `_jishu_452.md` | `JishuArticleView.vue` |
| [学习工具列表](./学习工具列表/) | `/gongju` | `_gongju.md` | `GongjuView.vue` |
| [学习工具详情](./学习工具详情/) | `/gongju/105` | `_gongju_105.md` | `GongjuDetailView.vue` |
| [课程播放页](./课程播放页/) | `/course/1002` | `_course_1002.md` | `CourseDetailView.vue` |
| [AI应用培训落地页](./AI应用培训落地页/) | `/aiapp` | `_aiapp.md` | `AiappLandingView.vue` |
| [AI学习路线图](./AI学习路线图/) | `/subject/aiappmap` | `_subject_aiappmap.md` | `SubjectAiappmapView.vue` |

动态路由（文章 / 工具 / 课程）当前以站内默认示例 ID 建夹，换 ID 截图时请同步改文件夹说明或另建子目录。
