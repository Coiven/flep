# 稳定版本

## 使用方式

1. __打包单个文件：__ 修改 `garble.js` 中的参数，运行 `npm start` 打包，打包后的文件在 `/dist` 中

2. __打包多个文件：__ 将文件丢到 `/public` 目录下，运行 `npm start public`

## 功能 （v1 版本暂时不可定制）

1. UglifyJS 压缩，减少代码体积
2. 变量名混淆：a -> b
3. object 中的 key 转换为unicode编码
4. 字符串混淆：a.b -> a['b'] -> a[fn(123)]
5. 控制流混淆：switch case
6. 字符串切割：a = 'a123' -> b = 'a1' c = '23' a = b + c




