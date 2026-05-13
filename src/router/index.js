import { createRouter, createWebHistory } from 'vue-router'
import ItheimaPortalView from '../views/ItheimaPortalView.vue'
import HomePrototype from '../views/HomePrototype.vue'
import MapPmView from '../views/MapPmView.vue'
import MapJavaView from '../views/MapJavaView.vue'
import TeacherView from '../views/TeacherView.vue'
import ItheimaSchoolView from '../views/ItheimaSchoolView.vue'
import ItheimaPriceView from '../views/ItheimaPriceView.vue'
import ItheimaServiceView from '../views/ItheimaServiceView.vue'
import OpenLiveView from '../views/OpenLiveView.vue'
import JishuView from '../views/JishuView.vue'
import JishuArticleView from '../views/JishuArticleView.vue'
import GongjuView from '../views/GongjuView.vue'
import GongjuDetailView from '../views/GongjuDetailView.vue'
import CourseDetailView from '../views/CourseDetailView.vue'
import AiappLandingView from '../views/AiappLandingView.vue'
import SubjectAiappmapView from '../views/SubjectAiappmapView.vue'

const routes = [
  /** 对应 www.itheima.com 官网首页（结构原型，非视频库页） */
  { path: '/', name: 'portal', component: ItheimaPortalView },
  /** 对应 yun.itheima.com 视频库首页（原 HomePrototype） */
  { path: '/yun', name: 'videoLibrary', component: HomePrototype },
  /** 对应 yun.itheima.com/map/96.html 产品经理教程聚合（结构原型） */
  { path: '/map/96', name: 'mapPm', component: MapPmView },
  /** 对应 yun.itheima.com/map/22.html Java / AI智能应用开发教程聚合（结构原型） */
  { path: '/map/22', name: 'mapJava', component: MapJavaView },
  /** 对应 www.itheima.com/teacher.html 教研团队（结构原型） */
  { path: '/teacher', name: 'teacher', component: TeacherView },
  /** 对应 www.itheima.com/special/hmschool/index.shtml 全国校区及开班分布（结构原型） */
  { path: '/school', name: 'school', component: ItheimaSchoolView },
  /** 对应 www.itheima.com/pc/module/price/index.html 学费价格表（结构原型） */
  { path: '/price', name: 'price', component: ItheimaPriceView },
  /** 对应 www.itheima.com/service.html 就业服务（结构原型） */
  { path: '/service', name: 'service', component: ItheimaServiceView },
  /** 对应 yun.itheima.com/open 直播公开课列表（结构原型） */
  { path: '/open', name: 'open', component: OpenLiveView },
  /** 对应 yun.itheima.com/jishu 技术文章（结构原型） */
  { path: '/jishu', name: 'jishu', component: JishuView },
  /** 对应 yun.itheima.com/jishu/*.html 文章详情 */
  { path: '/jishu/:id', name: 'jishuArticle', component: JishuArticleView },
  /** 对应 yun.itheima.com/gongju 学习工具（结构原型） */
  { path: '/gongju', name: 'gongju', component: GongjuView },
  /** 对应 yun.itheima.com/gongju/*.html 工具详情 */
  { path: '/gongju/:id', name: 'gongjuDetail', component: GongjuDetailView },
  /** 对应 yun.itheima.com/course/*.html 视频课程播放页（站内复刻） */
  { path: '/course/:id', name: 'courseDetail', component: CourseDetailView },
  /** 对应 aiapp.itheima.com/?aiappzly AI智能应用培训落地页（站内视觉复刻） */
  { path: '/aiapp', name: 'aiappLanding', component: AiappLandingView },
  /** 对应 yun.itheima.com/subject/aiappmap/index.html AI智能应用开发学习路线图 */
  { path: '/subject/aiappmap', name: 'subjectAiappmap', component: SubjectAiappmapView },
  { path: '/subject/aiappmap/index.html', redirect: '/subject/aiappmap' },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
