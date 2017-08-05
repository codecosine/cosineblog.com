/**
 * 游戏内容主方块储存以及一些方法
 */
function cosineCube(){
    var orginNum = [2, 4];
    var bol = orginNum[Math.floor(Math.random()*orginNum.length)];
    this.num = bol;
}
cosineCube.prototype = {
    constructor: cosineCube,
    isBigger: function(){
        console.log('isbigger:'+this.num)
    }
}
var cubes = [];
for(var i=0; i<5 ; i++){
    var cube = new cosineCube();
    cube.isBigger();
    cubes.push(cube)
}
// /**
//  * 主流程
//  * 键盘监听
//  */
// document.onkeydown = function(e){
// 	//按↑键
// 	if(e && e.keyCode==38){                          
// 		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
// 		for(var h=0;h<4;h++){                          //↑:列间无计算判定,行间有计算判定,外层循环为列:首先是第0列,从第0列0行,到,第0列1行,依次类推,故列为外循环
// 			for(var r=0;r<4;r++){                      //内循环为行,这里要进行计算判定,其实可以直接从r=1开始，因为不用对main[0][0]进行任何的判定与操作
// 				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
// 					continue;
// 				} else{
// 				    var o = r;                         //一个临时储存r的变量
// 					while(o!=0){                       //循环:只要这个格子的上面依旧有格子,令数字进行如下的2种判定
// 						if(isEmpty(main[o-1][h])){     //1.如果这个格子上面的格子是空格,令上面的格子获取本格子的数字,本格子则置为空格
// 						    main[o-1][h] = main[o][h];
// 						    main[o][h] = "&nbsp";
// 							o--;                       //o自减1,while循环将继续进行
// 						    continue;
// 					    }
// 						if(main[o-1][h]==main[o][h]){  //2.如果这个格子上面的格子是数字,判定本格子与上格子中的数字是否相等
// 							main[o-1][h] += main[o][h];//2.1如果相等,则将两个格子相加
// 						    main[o][h] = "&nbsp";
// 							o--;                       //o自减1,while循环将继续进行
// 						    continue;
// 						} else{                        //2.2如果不相等,则while循环终止!!!
// 						    break;
// 					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果上面不再存在格子,则循环终止.
// 					                                   //                                       2.如果上面的格子是数字,且与本格的数字不相等,则循环终止
// 					}
// 				}
// 			}
// 		}
// 		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
// 			createNumber();
// 			refreshMain();
// 		} else{
// 			upkey = arrayEqual(main,cArray);
// 			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
// 				document.getElementById("content").innerHTML = "你输了";
// 				document.onkeydown = function(){}
// 			}
// 		}
// 		gameWin();                                     //每次结束时进行胜利判定
// 	}
// 	if( e && e.keyCode==40){//按↓键
// 		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
// 		for(var h=0;h<4;h++){                          //↓:列间无计算判定,行间有计算判定,外层循环为列:首先是第0列,从第0列3行,到,第0列2行,依次类推,故列为外循环
// 			for(var r=3;r>=0;r--){                     //内循环为行,这里要进行计算判定
// 				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
// 					continue;
// 				} else{
// 				    var o = r;                         //一个临时储存r的变量
// 					while(o!=3){                       //循环:只要这个格子的下面依旧有格子,令数字进行如下的2种判定
// 						if(isEmpty(main[o+1][h])){     //1.如果这个格子下面的格子是空格,令下面的格子获取本格子的数字,本格子则置为空格
// 						    main[o+1][h] = main[o][h];
// 						    main[o][h] = "&nbsp";
// 							o++;                       //o自加1,while循环将继续进行
// 						    continue;
// 					    }
// 						if(main[o+1][h]==main[o][h]){  //2.如果这个格子下面的格子是数字,判定本格子与下格子中的数字是否相等
// 							main[o+1][h] += main[o][h];//2.1如果相等,则将两个格子相加
// 						    main[o][h] = "&nbsp";
// 							o++;                       //o自加1,while循环将继续进行
// 						    continue;
// 						} else{                        //2.2如果不相等,则while循环终止!!!
// 						    break;
// 					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果上面不再存在格子,则循环终止.
// 					                                   //                                     2.如果下面的格子是数字,且与本格的数字不相等,则循环终止
// 					}
// 				}
// 			}
// 		}
// 		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
// 			createNumber();
// 			refreshMain();
// 		} else{
// 			downkey = arrayEqual(main,cArray);
// 			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
// 				document.getElementById("content").innerHTML = "你输了";
// 				document.onkeydown = function(){}
// 			}
// 		}
// 		gameWin();                                     //每次结束时进行胜利判定
// 	}
// 	if( e && e.keyCode==37){//按←键
// 		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
// 		for(var r=0;r<4;r++){                          //←:行间无计算判定,列间有计算判定,外层循环为行:首先是第0行,从第0行0列,到,第0行1列,依次类推,故行为外循环
// 			for(var h=0;h<4;h++){                      //内循环为列,这里要进行计算判定
// 				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
// 					continue;
// 				} else{
// 				    var o = h;                         //一个临时储存h的变量
// 					while(o!=0){                       //循环:只要这个格子的左边依旧有格子,令数字进行如下的2种判定
// 						if(isEmpty(main[r][o-1])){     //1.如果这个格子左边的格子是空格,令左边的格子获取本格子的数字,本格子则置为空格
// 						    main[r][o-1] = main[r][o];
// 						    main[r][o] = "&nbsp";
// 							o--;                       //o自减1,while循环将继续进行
// 						    continue;
// 					    }
// 						if(main[r][o-1]==main[r][o]){  //2.如果这个格子左边的格子是数字,判定本格子与左格子中的数字是否相等
// 							main[r][o-1] += main[r][o];//2.1如果相等,则将两个格子相加
// 						    main[r][o] = "&nbsp";
// 							o--;                       //o自减1,while循环将继续进行
// 						    continue;
// 						} else{                        //2.2如果不相等,则while循环终止!!!
// 						    break;
// 					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果左边不再存在格子,则循环终止.
// 					                                   //                                     2.如果左边的格子是数字,且与本格的数字不相等,则循环终止
// 					}
// 				}
// 			}
// 		}
// 		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
// 			createNumber();
// 			refreshMain();
// 		} else{
// 			leftkey = arrayEqual(main,cArray);
// 			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
// 				document.getElementById("content").innerHTML = "你输了";
// 				document.onkeydown = function(){}
// 			}
// 		}
// 		gameWin(); 
// 	}
// 	if( e && e.keyCode==39){//按→键
// 		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
// 		for(var r=0;r<4;r++){                          //→:行间无计算判定,列间有计算判定,外层循环为行:首先是第0行,从第0行3列,到,第0行2列,依次类推,故行为外循环
// 			for(var h=0;h<4;h++){                      //内循环为列,这里要进行计算判定
// 				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
// 					continue;
// 				} else{
// 				    var o = h;                         //一个临时储存h的变量
// 					while(o!=3){                       //循环:只要这个格子的右边依旧有格子,令数字进行如下的2种判定
// 						if(isEmpty(main[r][o+1])){     //1.如果这个格子右边的格子是空格,令右边的格子获取本格子的数字,本格子则置为空格
// 						    main[r][o+1] = main[r][o];
// 						    main[r][o] = "&nbsp";
// 							o++;                       //o自加1,while循环将继续进行
// 						    continue;
// 					    }
// 						if(main[r][o+1]==main[r][o]){  //2.如果这个格子右边的格子是数字,判定本格子与右格子中的数字是否相等
// 							main[r][o+1] += main[r][o];//2.1如果相等,则将两个格子相加
// 						    main[r][o] = "&nbsp";
// 							o++;                       //o自加1,while循环将继续进行
// 						    continue;
// 						} else{                        //2.2如果不相等,则while循环终止!!!
// 						    break;
// 					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果右边不再存在格子,则循环终止.
// 					                                   //                                     2.如果右边的格子是数字,且与本格的数字不相等,则循环终止
// 					}
// 				}
// 			}
// 		}
// 		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
// 			createNumber();
// 			refreshMain();
// 		} else{
// 			rightkey = arrayEqual(main,cArray);
// 			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
// 				document.getElementById("content").innerHTML = "你输了";
// 				document.onkeydown = function(){}
// 			}
// 		}
// 		gameWin();
// 	}

// }
// /**
//  * 方向上的计算判定
//  * 这个时候要思考这个4*4的二维数组用什么方式储存比较好
//  * 
//  */
// function calExist(){

// }
/**
 * 触发的数字相加
 */
 function change(num1,num2){
    if(num1 === num2){
        return num1 + num2
    }
    return null
 }