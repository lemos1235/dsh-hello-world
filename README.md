# Hello world 示例 · DSH 插件 demo

一个最小的 DeepSeek Harness UI 插件：在左侧栏增加一个面板入口，点击后于主面板显示 Hello world 页面。
源码用 TypeScript 写在 `src/` 下，由 `tsdown` 构建成 Host 半部与浏览器半部（与 `dsh-noteboard` 等插件的工程结构一致）。

## 结构

```
dsh-hello-world/
├── src/
│   ├── index.ts               # Host 半部（本 demo 不做事）
│   └── client/                # 浏览器半部
│       ├── index.tsx          # apply/inject：注册侧边栏入口与 main 面板
│       ├── PanelPage.tsx      # 面板页面（Hello world + 点击计数）
│       ├── PanelIcon.tsx      # 侧边栏图标
│       ├── locale.ts          # 命名空间、槽位 id、中英词典
│       ├── styles.ts          # 只用主题 token 的样式表
│       └── types.ts           # 用到的 Client 上下文与 props 类型
├── tsdown.config.ts           # 双产物构建配置
├── tsconfig.json
├── cordis.patch.yml           # 向 profile 插入 Host 插件行
├── locale/{en,zh}.json        # 插件管理器里的标题与描述
├── icon.svg
└── lib/, client.js            # 构建产物（已 gitignore）
```

| 产物 | 说明 |
|---|---|
| `lib/index.mjs` | Host 半部，ESM；由 patch 插入的 Loader 行加载 |
| `client.js` | 浏览器半部：`window.__ModuleLoader__.load({ id, factory })` 包装的 CJS bundle |

`client.js` 特意输出在包根而不是 `lib/`：已安装 bundle 的 `./client` 导出路径保持不变，`pnpm build` 后刷新页面即可加载新代码，不必重装。

## 开发

```bash
pnpm install      # 安装 tsdown / typescript / @types/react
pnpm build        # 构建 lib/index.mjs 与 client.js
pnpm typecheck    # tsc --noEmit
```

改 `src/client/PanelPage.tsx` 里的文案后 `pnpm build`，刷新页面即可看到效果。

## 关键点

- 侧边栏入口的 `id` 与主面板的 `key` 必须是同一个值（这里是 `hello-world`）：点击入口时 shell 用这个 id 选中对应的 `main` 面板。
- 入口的 `label` 用 `() => t('panel.title')` 形式，切换语言时无需重新注册即可更新。
- 页面样式只用主题 token（`--dsw-alias-*`），自动跟随浅色/深色主题。
- 所有注册都挂在插件 Fiber 上：禁用 bundle 时入口、页面、样式一起移除。

## 安装

```bash
# 或让插件管理器安装本地目录：
# plugin_manager install_bundle /Users/lg/.dsh/plugins/dsh-hello-world
dsh plugin --profile desktop add link:/Users/lg/.dsh/plugins/dsh-hello-world
```

装完刷新页面，左侧栏底部（Plugins、Schedules 之后）会出现气泡图标，点击即可打开。
