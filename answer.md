
## 1). ⼴告的可⻅率

1. Active View由哪⼏个因素决定？  
(a) 屏幕上的可见空间内展示的具体广告部分  
(b) 该广告部分保持可见的时间长短。

2. Active View(⼴告可⻅率)和Impression(⼴告展示) 这两个指标有什么区别？  
Active View(⼴告可⻅率)确定用户是否实际查看了展示，Impression(⼴告展示)至少有一个广告已开始下载到用户设备时，就计为一次展示。

3. 对于⼀个主要⾯向移动设备的⽹站(90%以上⽤户使⽤⼿机访问)，可能提⾼⼴告的可⻅率有哪些⽅法?  
- 在首屏放置 320x100 广告单元
- 在非首屏位置使用针对移动设备进行了优化的 300x250 广告单元
- 缩短移动网页加载时间  
参考自 Google AdSense 文档 [https://support.google.com/adsense/answer/6357180?hl=zh-Hans](https://support.google.com/adsense/answer/6357180?hl=zh-Hans)

## 2). ⽹⻚性能指标

1. LCP指标是指什么？健康的LCP指标是⼀个什么样的标准？  
最大内容绘制 (LCP) 指标会根据页面首次开始加载的时间点来报告可视区域内可见的最大图像或文本块完成渲染的相对时间。  
健康的LCP指标标准：网站应该努力将最大内容绘制控制在2.5 秒或以内。测量阈值为页面加载的 75%，该阈值同时适用于移动和桌面设备。

2. 除了LCP⽂中还提到了那些指标，请列出3个，并解释他们的不⾜之处。  
旧指标：window 的 load 或者 DOMContentLoaded 事件，缺点：并不实际反应用户看见页面内容  
新指标：首次内容绘制 First Contentful Paint (FCP) ，缺点：只会捕获加载体验最开始的部分，如果某个页面显示的是一段启动画面或加载指示，那么这些时刻与用户的关联性并不大。  
新指标：首次有效绘制 First Meaningful Paint (FMP) 和速度指数 Speed Index (SI) ，缺点：复杂、难以解释，而且常常出错，也就意味着这些指标仍然无法识别出页面主要内容加载完毕的时间点。  
参考自 Google 文档 [https://web.dev/lcp/](https://web.dev/lcp/)

3. 根据⽂中对LCP的描述，在开发Web⽹站时，有哪些提⾼LCP的措施？  
   1. 减少资源加载延迟（Eliminate resource load delay）
      - 预加载重要资源，比如预加载 LCP 图片 <link rel="preload" fetchpriority="high" as="image" href="/path/to/hero-image.webp" type="image/webp"> 
      - img 标签添加属性 fetchpriority="high"
   2. 减少元素加载延迟（Eliminate element render delay）
      - 移除不必要的 CSS 样式
      - 压缩和使用尽量少的样式
      - 使用服务端渲染（SSR），元素会和 HTML 一起返回而不是通过 Javascript 渲染出来
   3. 减少资源加载时间（Reduce resource load time）
      - 减小资源体积，压缩图片、Javascript 等资源文件
      - 使用 WebP 等更新的图片格式
      - 资源文件放 CDN 存储
      - 使用响应式图像
      - 设置资源缓存
   4. 优化 TTFP 时间 （Reduce time to first byte）
      - 使用预渲染（SSG） 

参考链接 [https://web.dev/lcp/#how-to-improve-lcp](https://web.dev/lcp/#how-to-improve-lcp)  
参考链接 [https://web.dev/optimize-lcp/](https://web.dev/optimize-lcp/)

## 3). tidy.js

Github 代码链接 [https://github.com/OXXD/exam202209](https://github.com/OXXD/exam202209)