# 部署前检查清单

在部署到Vercel之前，请确保完成以下步骤：

## ✅ 必须完成的步骤

### 1. 文件准备
- [ ] 所有图片已放入 `images/` 文件夹
- [ ] 检查图片文件名是否正确（参考 `images/IMAGES.md`）
- [ ] YouTube视频ID已设置为 `W6u7U-N9sxo`

### 2. Google Sheets设置（Waitlist功能）
- [ ] 创建了Google Sheet
- [ ] 设置了Apps Script
- [ ] 部署了Web App并获取URL
- [ ] 准备在Vercel设置环境变量 `GOOGLE_SHEETS_WEBHOOK`

### 3. Vercel账号
- [ ] 已注册Vercel账号
- [ ] 已创建或加入 "Roomo Studio" team

## 📋 部署步骤

### 选项A: 使用Vercel CLI
```bash
# 1. 安装CLI（如果还没安装）
npm i -g vercel

# 2. 在项目目录执行
cd roomo-landing
vercel

# 3. 首次部署选择：
# - Setup and deploy: Yes
# - Which scope: Roomo Studio
# - Link to existing project: No
# - Project name: roomo-landing
# - In which directory: ./
# - Override settings: No

# 4. 设置环境变量
vercel env add GOOGLE_SHEETS_WEBHOOK
# 粘贴你的Google Sheets webhook URL

# 5. 重新部署以应用环境变量
vercel --prod
```

### 选项B: 网页部署
1. 访问 https://vercel.com/new
2. 选择 "Roomo Studio" team
3. 拖拽整个 `roomo-landing` 文件夹
4. 等待部署完成
5. 进入 Settings → Environment Variables
6. 添加 `GOOGLE_SHEETS_WEBHOOK`
7. Redeploy

## 🧪 部署后测试

- [ ] 访问部署后的URL
- [ ] 检查所有图片是否正常显示
- [ ] 点击YouTube播放按钮测试视频
- [ ] 测试Waitlist表单提交
- [ ] 检查Google Sheets是否收到数据
- [ ] 测试在手机端的显示效果
- [ ] 检查所有导航链接和Modal弹窗

## 🔧 常见问题

### 图片不显示
- 检查 `images/` 文件夹是否正确上传
- 确认文件名大小写匹配
- 在浏览器开发者工具查看404错误

### Waitlist提交失败
- 检查环境变量是否设置
- 确认Google Apps Script设置为 "Anyone" 可访问
- 查看Vercel Function日志

### YouTube视频不播放
- 确认视频未设置为私密
- 检查浏览器控制台错误信息

## 📊 监控和分析（可选）

考虑添加：
- Google Analytics
- Vercel Analytics（内置）
- Hotjar（用户行为分析）

## 🚀 上线后的工作

- [ ] 在社交媒体分享链接
- [ ] 设置Google Search Console
- [ ] 监控Waitlist增长情况
- [ ] 准备向用户发送确认邮件
- [ ] 定期检查Google Sheets数据

---

**准备好了？开始部署吧！** 🎉
