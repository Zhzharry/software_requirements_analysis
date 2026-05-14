<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <h4 class="footer__h">帮助中心</h4>
        <p class="footer__p">请输入文本</p>
      </div>
      <div>
        <h4 class="footer__h">交流合作</h4>
        <p class="footer__p">请输入文本</p>
      </div>
      <div>
        <h4 class="footer__h">站内地图</h4>
        <p class="footer__p">请输入文本</p>
      </div>
      <div>
        <h4 class="footer__h">学员培训</h4>
        <p class="footer__p">请输入文本</p>
      </div>
    </div>
    <div class="container footer__bottom">
      <p>传智教育、白马程序员免费视频教程、公开课资源下载平台</p>
      <p>苏ICP备16007882号-1 苏公网安备32132202000574号</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2b2b2b;
  color: #aaa;
  padding: 32px 0 20px;
  font-size: 13px;
  margin-top: 8px;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #444;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.footer__h {
  color: #ddd;
  margin-bottom: 8px;
  font-size: 14px;
}

.footer__p {
  margin: 0;
  line-height: 1.6;
}

.footer__bottom {
  padding-top: 16px;
  text-align: center;
  font-size: 12px;
  color: #777;
}

.footer__bottom p + p {
  margin-top: 6px;
}
</style>
