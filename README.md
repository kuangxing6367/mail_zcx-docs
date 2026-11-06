# ZC Mail Service · 文档站

[mail.zgric.top](https://mail.zgric.top/) 的源文件仓库。VitePress 构建，GitHub Pages 托管。

| 项 | 值 |
|---|---|
| 站点 | https://mail.zgric.top/ |
| 主仓库 | https://github.com/kuangxing6367/mail_zcx （服务本体，PHP） |
| 本仓库 | 只放文档与站点构建配置，不含服务代码 |

**为什么拆开**：文档站是纯静态站，主仓库是 PHP 服务。拆开后文档改动不必触发服务仓库的 CI，
主仓库也可以把 `docs/` 当快照引用。

---

## 本地预览

```bash
npm ci
npm run docs:dev      # http://localhost:5173
npm run docs:build    # 产物在 .vitepress/dist
```

## 目录

```
*.md                  文档正文（唯一事实来源）
.vitepress/config.mts 站点配置：导航、侧栏、base
public/CNAME          自定义域名 → mail.zgric.top
.github/workflows     Pages 构建与部署
```

## 约定

- 内容准确优先于措辞。**没验证过的行为不写成事实**，宁可标注"未验证"。
- 接口、事件、配置默认值发生变化时，同步更新 `API.md` / `plugins.md` / `contract.md`。
- 提交格式 `docs: 摘要`，一个提交一件事。
- 站点根路径由 `public/CNAME` 决定；换域名要同时改 CNAME 与文档里的绝对链接。

## 许可

[WTFPL](LICENSE) © zc team —— 想怎么用怎么用。
