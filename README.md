# Roomo Studio Landing Page

## 项目结构
```
roomo-landing/
├── index.html          # 主页面
├── api/
│   └── waitlist.js     # Waitlist API
├── images/             # 所有图片资源（需要你自己添加）
│   ├── hero-preview.png
│   ├── ecosystem-build.png
│   ├── ecosystem-share.png
│   ├── ecosystem-remix.png
│   ├── ecosystem-shop.png
│   ├── case1-before.png
│   ├── case1-after.png
│   ├── case1-layout.png
│   ├── case1-render.png
│   └── ... (case2-6的所有图片)
└── README.md
```

## 快速部署到Vercel

### 方法1: 使用Vercel CLI（推荐）

1. 安装Vercel CLI
```bash
npm i -g vercel
```

2. 在项目目录部署
```bash
cd roomo-landing
vercel
```

3. 按提示操作：
   - 选择 "Roomo Studio" team
   - 项目名称：roomo-landing
   - 确认设置

### 方法2: 通过网页拖拽

1. 访问 https://vercel.com/new
2. 登录后点击 "Add New" → "Project"
3. 把整个 roomo-landing 文件夹拖拽到页面上
4. 点击 Deploy

## 设置Waitlist收集（使用Google Sheets）

### 步骤1: 创建Google Sheets

1. 打开 https://sheets.google.com
2. 创建新表格，命名为 "Roomo Waitlist"
3. 第一行添加标题：`Timestamp | Email | Source`

### 步骤2: 创建Google Apps Script

1. 在表格中：Extensions → Apps Script
2. 删除默认代码，粘贴以下内容：

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // 添加新行
    sheet.appendRow([
      data.timestamp,
      data.email,
      data.source
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. 点击 "Deploy" → "New deployment"
4. 类型选择 "Web app"
5. 设置：
   - Execute as: Me
   - Who has access: Anyone
6. 点击 "Deploy"
7. **复制 Web app URL**（形如 https://script.google.com/macros/s/...）

### 步骤3: 在Vercel设置环境变量

1. 进入Vercel项目 Dashboard
2. Settings → Environment Variables
3. 添加：
   - Name: `GOOGLE_SHEETS_WEBHOOK`
   - Value: （粘贴上面复制的Web app URL）
4. 保存并重新部署

## 测试

部署完成后：
1. 访问你的网站
2. 滚动到 waitlist 部分
3. 输入邮箱提交
4. 检查 Google Sheets 是否收到数据

## 域名设置（可选）

### 绑定自定义域名

1. Vercel Dashboard → Settings → Domains
2. 添加你的域名（如 roomo.studio）
3. 按提示在域名提供商处添加DNS记录

### 建议域名配置
- `roomo.studio` → Landing page（这个项目）
- `app.roomo.studio` → 工具端（express-js-on-vercel项目）

## 所需图片清单

确保 `images/` 文件夹包含以下所有图片：

### Hero Section
- hero-preview.png

### Ecosystem Section
- ecosystem-build.png
- ecosystem-share.png
- ecosystem-remix.png
- ecosystem-shop.png

### Case Studies (每个case需要4张图)
- case1-before.png, case1-after.png, case1-layout.png, case1-render.png
- case2-before.png, case2-after.png, case2-layout.png, case2-render.png
- case3-before.png, case3-after.png, case3-layout.png, case3-render.png
- case4-before.png, case4-after.png, case4-layout.png, case4-render.png
- case5-before.png, case5-after.png, case5-layout.png, case5-render.png
- case6-before.png, case6-after.png, case6-layout.png, case6-render.png

## 故障排查

### Waitlist提交失败
1. 检查浏览器控制台是否有错误
2. 确认 Google Sheets webhook URL 是否正确
3. 确认 Apps Script 部署时选择了 "Anyone" 访问权限

### 图片不显示
1. 检查图片路径是否正确
2. 确认所有图片都已上传到 `images/` 文件夹
3. 检查图片文件名大小写是否匹配

### YouTube视频不播放
- 已设置为视频ID: W6u7U-N9sxo
- 确认该视频未设置为私密

## 联系方式

如有问题，可以：
1. 检查Vercel部署日志
2. 查看浏览器开发者工具的Console
3. 检查Network标签页的API请求
