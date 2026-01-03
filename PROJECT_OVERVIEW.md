# Roomo Studio Landing Page - 部署包

## 📦 包含内容

```
roomo-landing/
├── index.html                  ✅ 已修正YouTube ID (W6u7U-N9sxo)
├── api/
│   └── waitlist.js            ✅ Waitlist API (支持Google Sheets)
├── images/                     ⚠️  需要你添加所有图片
│   └── IMAGES.md              📋 图片清单
├── vercel.json                ✅ Vercel配置
├── .gitignore                 ✅ Git忽略文件
├── README.md                  📖 详细说明文档
├── QUICKSTART.md              🚀 快速开始指南
└── DEPLOYMENT_CHECKLIST.md    ✅ 部署检查清单
```

## 🎯 已完成的修改

1. ✅ YouTube视频ID已设置为: `W6u7U-N9sxo`
2. ✅ Waitlist API已创建（支持Google Sheets存储）
3. ✅ Vercel配置已优化
4. ✅ 提供完整的部署文档

## ⚠️ 你需要做的

### 必须项:
1. **添加图片** - 将所有产品图片放入 `images/` 文件夹
   - 查看 `images/IMAGES.md` 了解需要哪些图片
   
2. **部署到Vercel**
   - 最简单: 拖拽整个文件夹到 vercel.com
   - 或使用CLI: `vercel`

### 可选项:
3. **设置Waitlist收集**
   - 创建Google Sheet
   - 设置Apps Script webhook
   - 在Vercel添加环境变量
   - 详细步骤见 `README.md`

## 🚀 快速部署（5分钟）

1. 准备好所有图片
2. 访问 https://vercel.com
3. 选择 "Roomo Studio" team
4. 拖拽 `roomo-landing` 文件夹
5. 点击 Deploy
6. 完成！

详细步骤请看 `QUICKSTART.md`

## 📞 域名建议

- Landing page: `roomo.studio`
- 工具端: `app.roomo.studio` (你现有的express-js-on-vercel项目)

## 🔗 有用的链接

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google Sheets](https://sheets.google.com)
- [Google Apps Script](https://script.google.com)

---

**准备好了就开始部署吧！** 有问题查看README或DEPLOYMENT_CHECKLIST文档。
