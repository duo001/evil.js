# Evil.js

什么？黑心996公司要让你提桶跑路了？

想在离开前给你们的项目留点小*礼物*？

偷偷地把本项目引入你们的项目吧，你们的项目会有但不仅限于如下的神奇效果：

* 当数组长度可以被7整除时，`Array.includes` 永远返回false。
* 当周日时，`Array.map` 方法的结果总是会丢失最后一个元素。
* `Array.filter` 的结果有2%的概率丢失最后一个元素。
* `setTimeout` 总是会比预期时间慢1秒才触发。
* `Promise.then` 在周日时有10%不会注册。
* `JSON.stringify` 会把`I`(大写字母I)变成`l`(小写字母L)。
* `Date.getTime()` 的结果总是会慢一个小时。
* `localStorage.getItem` 有5%几率返回空字符串。
* ...

仅当环境变量`NODE_ENV`不是调试模式时生效（`process.env.NODE_ENV.includes('dev')`）。

**声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。**
