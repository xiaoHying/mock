# 简介

mock 模拟接口数据

# 目录结构

```
├── index.js              # 模拟接口数据配置
├── .gitignore            # 不需要提交的文件
└── package.json          # package.json
```

# 安装

```
# 克隆项目
git clone (项目地址)

# 进入项目目录
cd mock

# 安装依赖
npm install
npm install nodemon -g

# 切换淘宝源，解决 npm 下载速度慢的问题
# npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run mock
```

# 使用方法

### index.js 修改

```
app.use(function (req, res, next) {
    // 配置跨域
    res.header("Access-Control-Allow-Origin", "前端页面地址http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Credentials','true')
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
```

### 页面中调用

```
const axios = require('axios')
axios.get('http://localhost:9999/list')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
```
