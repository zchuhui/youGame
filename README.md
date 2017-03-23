


## 游戏概述:

这是一款模仿街机的**过河小游戏**，玩家从下发出发，避开敌人（害虫）到达小河即可获胜。当被敌人碰到时，将死亡并回到起点从新开始。

## 游戏截图：

![image](https://img1.doubanio.com/view/status/median/public/079977f0890ea78.jpg);


## 游戏操作：

通过键盘的`上-下-左-右`键即可操作角色走向，到达小河即可。

## 开发技术：

- Canvas
- JS 类、闭包

## 开发思路：
把游戏角色的图片绘制到Canvas画布上，然后通过 `requestAnimationFrame`  不断的对画布进行绘制产生动画效果。 
然后通过遍历敌人与玩家的坐标，判断是否碰撞，来得到游戏的效果。
敌人的起点与速度随机，玩家的操作用键盘的`up`/`down`/`left`/`right`键来操作。


## 项目结构：

```
├──  youGame
|    ├──  css         
|    ├──  images
|    ├──  js
|    |    ├──  app.js          //主js文件，负责构建玩家与敌人等操作
|    |    ├──  engine.js       //游戏引擎文件，提供了游戏循环绘制功能
|    |    ├──  resourcess.js   //图片加载文件，缓存要用到的图片
|    ├──  index.html           //页面入口
|    ├──  README.md            //你现在看的文档

```





