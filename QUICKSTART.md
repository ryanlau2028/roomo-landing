# 快速开始 - Roomo Studio Landing Page

## 🚀 最快部署方式（5分钟）

### 第1步: 准备图片
将你所有的产品图片放入 `images/` 文件夹
- 参考 `images/IMAGES.md` 查看需要哪些图片

### 第2步: 部署到Vercel

**方法1 - 拖拽上传（最简单）:**
1. 打开 https://vercel.com
2. 登录并选择 "Roomo Studio" team
3. 点击 "Add New" → "Project"
4. 把整个 `roomo-landing` 文件夹拖进去
5. 点击 Deploy
6. ✅ 完成！你会得到一个 `.vercel.app` 链接

**方法2 - 使用CLI:**
```bash
npm i -g vercel
cd roomo-landing
vercel
```

### 第3步: 设置Waitlist收集（可选）

如果需要收集用户邮箱：

1. **创建Google Sheet**
   - 访问 https://sheets.google.com
   - 新建表格: "Roomo Waitlist"
   - 第一行填: `Timestamp | Email | Source`

2. **设置Apps Script**
   - Extensions → Apps Script
   - 粘贴这段代码:
   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     sheet.appendRow([data.timestamp, data.email, data.source]);
     return ContentService.createTextOutput(JSON.stringify({success: true}));
   }
   ```
   - Deploy → New deployment → Web app
   - Who has access: Anyone
   - 复制生成的URL

3. **在Vercel添加环境变量**
   - Vercel项目 → Settings → Environment Variables
   - Name: `GOOGLE_SHEETS_WEBHOOK`
   - Value: (粘贴上面复制的URL)
   - Save并Redeploy

## ✅ 测试

访问你的网站并测试:
- ✓ 图片是否显示
- ✓ YouTube视频能否播放
- ✓ Waitlist表单提交成功
- ✓ Google Sheets收到数据

## 📱 下一步

- 绑定自定义域名（如 roomo.studio）
- 添加Google Analytics
- 准备用户邮件模板
- 分享你的网站！

---

**遇到问题？** 查看 `DEPLOYMENT_CHECKLIST.md` 获取详细故障排查指南。
