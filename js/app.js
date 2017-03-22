// 这是我们的玩家要躲避的敌人 
var Enemy = function(x,y,speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.width = 101;
    this.height = 83;

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙 
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += this.speed *dt; 
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//是否成功过河
var suc = false;

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 101;
    this.height = 83;
    this.img = 'images/char-boy.png';
    this.star = 'images/Star.png';
    this.selector = 'images/Selector.png';

}

Player.prototype.update = function(){
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.img), this.x, this.y);
}

//成功时的展示
Player.prototype.success = function(){
    //绘制成功提示
    ctx.drawImage(Resources.get(this.selector), 200, 200);   
    ctx.drawImage(Resources.get(this.star), 200, 200);  

    //清空敌人
    allEnemies = [];
}

//鼠标操控
Player.prototype.handleInput = function(e){  

    if (e == "left") { 
        if (this.x > 0) 
            this.x = this.x - 101; 
    }
    else if (e == "right") {
        if (this.x < 404) 
            this.x = this.x + 101; 
    }
    else if(e == "up"){
        if (this.y > 0) 
            this.y = this.y - 83; 

        if(this.y < 80){
            console.log("成功！");
            suc = true; 
        }
    }
    else if(e == "down"){
        if (this.y < 415) 
            this.y = this.y + 83; 
    }
}



// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面


//自动化根据提供的数目构建敌人
var AutoEnemyNum = (function(){

    //随机生成敌人的位置与速度
    //num表示敌人数目
    function enemys(num){ 
        var arr = new Array();
        for(var i=0; i<num; i++){
            arr[i] = new Enemy(-(mathRandom(0,60)*101),mathRandom(1,3)*80,Math.random()*500);
        }

        return arr;
    }

    //产生设定的随机数
    //随机数范围是min~max
    function mathRandom(min,max){
        return parseInt(Math.random()*(max-min+1)+min,10);
    }

    return {
        enemys:enemys
    }

})();


//实例化敌人个数
var allEnemies = AutoEnemyNum.enemys(30);

//实例化玩家
var player = new Player(101*2,83*5); 


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
