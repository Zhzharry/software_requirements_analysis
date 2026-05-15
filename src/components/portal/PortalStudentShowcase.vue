<template>
  <div class="pss" aria-hidden="true">
    <svg class="pss__svg" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pssBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0f7ff" />
          <stop offset="100%" stop-color="#ffe8e8" />
        </linearGradient>
        <linearGradient id="pssCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f5f9fc" />
        </linearGradient>
      </defs>
      <rect width="1200" height="320" fill="url(#pssBg)" />
      <!-- 装饰圆 -->
      <circle cx="100" cy="60" r="40" fill="#c8161d" opacity="0.06" />
      <circle cx="1100" cy="260" r="80" fill="#1565c0" opacity="0.06" />
      <circle cx="600" cy="160" r="120" fill="#fff" opacity="0.5" />

      <!-- 学员卡片 1 -->
      <g transform="translate(80, 72)">
        <rect width="200" height="176" rx="12" fill="url(#pssCard)" stroke="#e8eef5" stroke-width="1" />
        <circle cx="48" cy="52" r="28" fill="#ffc9c9" stroke="#c8161d" stroke-width="2" />
        <circle cx="48" cy="48" r="10" fill="#fff" opacity="0.6" />
        <rect x="90" y="32" width="88" height="10" rx="5" fill="#e0e0e0" />
        <rect x="90" y="50" width="64" height="8" rx="4" fill="#f0f0f0" />
        <rect x="24" y="100" width="152" height="8" rx="4" fill="#f5f5f5" />
        <rect x="24" y="116" width="120" height="8" rx="4" fill="#f5f5f5" />
        <rect x="24" y="140" width="80" height="20" rx="10" fill="#c8161d" opacity="0.15" />
        <text x="40" y="154" fill="#c8161d" font-size="11" font-weight="700" font-family="sans-serif">已就业</text>
      </g>

      <!-- 学员卡片 2 -->
      <g transform="translate(320, 48)">
        <rect width="220" height="200" rx="12" fill="url(#pssCard)" stroke="#c8161d" stroke-width="2" opacity="0.95" />
        <circle cx="60" cy="58" r="32" fill="#ffe8e8" stroke="#c8161d" stroke-width="2" />
        <polygon points="60,38 68,54 52,54" fill="#c8161d" opacity="0.3" />
        <rect x="104" y="36" width="96" height="12" rx="6" fill="#c8161d" opacity="0.2" />
        <rect x="104" y="56" width="72" height="8" rx="4" fill="#e8e8e8" />
        <path d="M32 120h156M32 140h120M32 160h96" stroke="#eee" stroke-width="8" stroke-linecap="round" />
        <rect x="32" y="168" width="100" height="24" rx="12" fill="#c8161d" />
        <text x="52" y="184" fill="#fff" font-size="12" font-weight="700" font-family="sans-serif">逆袭成功</text>
      </g>

      <!-- 中心数据 -->
      <g transform="translate(580, 80)">
        <rect width="200" height="160" rx="16" fill="#c8161d" />
        <text x="100" y="72" fill="#fff" font-size="42" font-weight="800" text-anchor="middle" font-family="sans-serif">30万+</text>
        <text x="100" y="108" fill="#fff" font-size="16" opacity="0.9" text-anchor="middle" font-family="sans-serif">学员实现高起点就业</text>
        <circle cx="40" cy="130" r="6" fill="#fff" opacity="0.4" />
        <circle cx="100" cy="130" r="6" fill="#fff" />
        <circle cx="160" cy="130" r="6" fill="#fff" opacity="0.4" />
      </g>

      <!-- 学员卡片 3 -->
      <g transform="translate(820, 72)">
        <rect width="200" height="176" rx="12" fill="url(#pssCard)" stroke="#e8eef5" stroke-width="1" />
        <circle cx="152" cy="52" r="28" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" />
        <rect x="24" y="32" width="88" height="10" rx="5" fill="#e0e0e0" />
        <rect x="24" y="50" width="64" height="8" rx="4" fill="#f0f0f0" />
        <rect x="24" y="100" width="152" height="8" rx="4" fill="#f5f5f5" />
        <rect x="24" y="116" width="120" height="8" rx="4" fill="#f5f5f5" />
        <path d="M24 148h40l8 20h56l8-20h40" fill="none" stroke="#4caf50" stroke-width="2" stroke-linejoin="round" />
        <circle cx="100" cy="158" r="4" fill="#4caf50" />
      </g>

      <!-- 底部趋势线 -->
      <path d="M0 280 Q300 240 600 260 T1200 250 L1200 320 L0 320 Z" fill="#fff" opacity="0.7" />
      <path d="M60 270 L200 250 L380 265 L560 235 L740 255 L920 240 L1140 260" fill="none" stroke="#c8161d" stroke-width="2" opacity="0.25" stroke-linecap="round" />
    </svg>
  </div>
</template>


<style scoped>
.pss {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 8px 28px rgba(15, 40, 80, 0.06);
}

.pss__svg {
  display: block;
  width: 100%;
  height: auto;
  min-height: 200px;
}
</style>
