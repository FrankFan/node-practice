# node.js 学习记录
---

## 安装
官网下载安装 http://nodejs.org/

## 运行
```bash
$ node test.js
$ node script.js
```

## REPL

```bash
$ node
$ a
$ var a
$ a + 5
$ a = 5
$ a + 5
$ a = a +5
$ b = 1
$ b++
$ b
$ b++
$ b
$ ++b
$ os = require('os')
{ endianness: [Function],
  hostname: [Function],
  loadavg: [Function],
  uptime: [Function],
  freemem: [Function],
  totalmem: [Function],
  cpus: [Function],
  type: [Function],
  release: [Function],
  networkInterfaces: [Function],
  arch: [Function],
  platform: [Function],
  tmpdir: [Function],
  tmpDir: [Function],
  getNetworkInterfaces: [Function: deprecated],
  EOL: '\r\n' }
$ os.type()
$ os.platform()
$ global
$ function hello(name) { return name + ' world';}
```

退出`REPL`的方法：
- twice `Ctrl + C `
- once `Ctrl + D `
- `process.exit()`


## NPM

```bash
$ sudo npm install -g node-dev
$ node-dev script.js
# 修改源文件后可以及时刷新，不用重新编译，提高效率

$ npm install name # 安装npm包
$ npm install # 根据package.json依赖安装包
$ npm serch | grep name # 查找npm包
$ npm update # 更新npm包
$ npm prune  # 清理不需要的npm依赖包 
$ npm install -g npm # 升级npm
```



## 发布 npm 包


## 模块化 


## node.js