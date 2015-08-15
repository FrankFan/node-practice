# node.js 学习记录
---

## 安装
略

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
$ sudo npm install node-dev
$ node-dev script.js
# 修改源文件后可以及时刷新，不用重新编译，提高效率
```

