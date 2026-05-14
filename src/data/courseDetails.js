/**
 * 视频课程详情（对标 yun.itheima.com/course/1002.html）
 */

export const DEFAULT_COURSE_ID = '1002'

/** 列表/卡片统一跳转的站内课程页（复刻 1002） */
export const COURSE_PLAYER_PATH = `/course/${DEFAULT_COURSE_ID}`

const syllabus1002 = [
  '第1节 - Java入门-01-Java学习介绍',
  '第2节 - Java入门-02-人机交互-图形化界面的小故事',
  '第3节 - Java入门-03-打开CMD',
  '第4节 - Java入门-04-常见的CMD命令',
  '第5节 - Java入门-05-练习-利用CMD打开QQ并配置环境变量',
  '第6节 - Java入门-06-Java概述和学习方法',
  '第7节 - Java入门-07-Java学习-JDK下载和安装',
  '第8节 - Java入门-08-Java学习-HelloWorld小案例',
  '第9节 - Java入门-09-Java学习-常见小问题',
  '第10节 - Java入门-10-Java学习-环境变量',
  '第11节 - Java入门-11-Java学习-Notepad',
  '第12节 - Java入门-12-Java学习-Java语言的发展',
  '第13节 - Java入门-13-Java学习-Java能干什么',
  '第14节 - Java入门-14-Java学习-Java为什么这么火',
  '第15节 - Java入门-15-Java学习-Java跨平台的原理',
  '第16节 - Java入门-16-JDK和JRE',
  '第17节 - Java基础概念-01-注释',
  '第18节 - Java基础概念-02-关键字',
  '第19节 - Java基础概念-03-字面量',
  '第20节 - Java基础概念-04-变量-基本用法',
]

const course1002 = {
  id: '1002',
  title: 'Java入门到起飞，含斯坦福大学练习题+力扣算法题+大厂java面试题',
  titleSuffix: '初级教程',
  crumb: ['视频教程', 'JavaEE'],
  updatedAt: '2022.04.27',
  learnCount: '107W+',
  resourceTiles: [
    { label: '视频教程', tone: 'blue' },
    { label: '技术解析', tone: 'red' },
    { label: '配套源码', tone: 'green' },
    { label: '学习工具', tone: 'orange' },
    { label: '学习笔记', tone: 'purple' },
  ],
  notice:
    'Java基础的天花板教程，面向0基础同学，有手就行。从0开始，到进阶，最后起飞，层层递进。课程中会讲解很多编程思想，以及我是如何从0开始去分析一个问题，并把代码写出来的。拒绝一听就懂，一学就废。……',
  introBlocks: [
    { label: '课程介绍：', text: 'Java基础的天花板教程，面向0基础同学，有手就行。从0开始，到进阶，最后起飞，层层递进。课程中会讲解很多编程思想，以及我是如何从0开始去分析一个问题，并把代码写出来的。拒绝一听就懂，一学就废。' },
    { label: '适用人群：', text: '有手就行' },
    {
      label: '课程内容：',
      text: '包含：Java基础语法，面向对象，常见API，集合、IO、多线程、网络编程、源码分析、JVM虚拟机、数据结构、算法、JDK5~18的新特性。',
    },
    {
      label: '讲解方式：',
      text: '课程从0开始到进阶，最后起飞。让你真的懂得如何分析一个需求，并写出代码。而不是一听就懂，一写就废。为后面继续学习web、框架、项目打下扎实的基础。',
    },
    {
      label: '课程亮点：',
      text: '1.面向0基础同学，有手就行。\n2.从0开始，到进阶，最后起飞，层层递进。\n3.各种练习侧重于分析型讲解，让同学真的掌握从0分析问题的能力。\n4.课程中的部分综合项目案例选取于美国斯坦福大学Java练习，力扣算法题，大厂面试题。\n5.阶段综合项目贴合企业开发，从分析需求文档的开始，让同学们知道如何从0开始编写项目。\n6.采取ppt讲解，把很多需要自己脑补的东西以图形化、图表化的形式展示出来。\n7.在第二阶段中会有大量的源码分析，JVM虚拟机，数据结构、算法，并利用NIO手写一个非阻塞的tomcat服务器。',
    },
  ],
  syllabus: syllabus1002,
  comments: [
    { user: 'Cole', text: '课程资源：https://pan.baidu.com/s/1z2nnkoJZ2Sn6MxTETkuapw&pwd=9987', likes: 4, date: '2025-10-09 16:50' },
    { user: '璇', text: '第125节课之后还有课吗', likes: 0, date: '2024-03-05 20:50', reply: '有的，全套课程可以关注公众号：白马程序员，回复：领取资源01……' },
  ],
  relatedCourses: [
    { title: 'Java入门到起飞，含斯坦福大学练习题+力扣算法题+大厂java面试题', level: '初级', learners: '1071530' },
    { title: '前端Web开发HTML5+CSS3+移动web视频教程，前端web入门首选白马程序员', level: '初级', learners: '616689' },
    { title: '全网首发AI+JavaWeb开发入门，Tlias教学管理系统项目实战全套视频教程', level: '初级', learners: '540137' },
    { title: 'Java+AI智能辅助编程，Java零基础入门到大牛一套通关', level: '初级', learners: '310761' },
    { title: '鸿蒙HarmonyOS4.0应用开发从入门到实战', level: '初级', learners: '131129' },
  ],
}

export function getCourseDetail(id) {
  if (String(id) === '1002') return course1002
  return null
}
