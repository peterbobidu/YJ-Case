# Personal Portfolio

这是一个基于 React、Vite 和 Tailwind CSS 搭建的个人作品集网站初版。

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

项目已经内置 GitHub Pages 工作流，推送到 GitHub 后即可自动发布。

1. 在 GitHub 创建一个新仓库
2. 把这个本地项目推到该仓库的 `main` 分支
3. 在 GitHub 仓库设置里打开 `Pages`
4. `Build and deployment` 选择 `GitHub Actions`
5. 之后每次推送到 `main`，站点都会自动更新

工作流文件：

- `.github/workflows/deploy-pages.yml`

GitHub Pages 启用后，常见访问地址会是：

- `https://<你的用户名>.github.io/<仓库名>/`

## 你接下来主要改这几个地方

- `src/App.tsx`
  替换你的名字、简介、项目名称、项目说明、技能、邮箱和社交链接。
- `src/index.css`
  调整全局配色、字体和背景气质。

## 推荐下一步

1. 把 `Your Name` 改成你的名字或品牌名。
2. 把 3 个示例项目替换成你的真实作品。
3. 给每个项目补封面图和外链。
4. 部署到 Vercel。
