var main = new Array(4);       //建立一个4*4的二维数组，用来储存数据
for(var x=0;x<4;x++){          //数组的第一个下标代表行
	main[x] = new Array(4);    //数组的第二个下标代表列
	for(var y=0;y<4;y++){
		main[x][y] = "&nbsp";  //如果一个位置上没有数，它就是一个空格字符
	}
}
//用于判断失败条件的4个0-1变量,当4个变量均为1时,游戏失败
var upkey = false;
var downkey = false;
var leftkey = false;
var rightkey = false;
main[0][0] = 1024;
main[1][0] = 1024;
refreshMain();


document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];//键盘接受事件,百度抄的
	
	if( e && e.keyCode==38){                           //按↑键
		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
		for(var h=0;h<4;h++){                          //↑:列间无计算判定,行间有计算判定,外层循环为列:首先是第0列,从第0列0行,到,第0列1行,依次类推,故列为外循环
			for(var r=0;r<4;r++){                      //内循环为行,这里要进行计算判定,其实可以直接从r=1开始，因为不用对main[0][0]进行任何的判定与操作
				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
					continue;
				} else{
				    var o = r;                         //一个临时储存r的变量
					while(o!=0){                       //循环:只要这个格子的上面依旧有格子,令数字进行如下的2种判定
						if(isEmpty(main[o-1][h])){     //1.如果这个格子上面的格子是空格,令上面的格子获取本格子的数字,本格子则置为空格
						    main[o-1][h] = main[o][h];
						    main[o][h] = "&nbsp";
							o--;                       //o自减1,while循环将继续进行
						    continue;
					    }
						if(main[o-1][h]==main[o][h]){  //2.如果这个格子上面的格子是数字,判定本格子与上格子中的数字是否相等
							main[o-1][h] += main[o][h];//2.1如果相等,则将两个格子相加
						    main[o][h] = "&nbsp";
							o--;                       //o自减1,while循环将继续进行
						    continue;
						} else{                        //2.2如果不相等,则while循环终止!!!
						    break;
					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果上面不再存在格子,则循环终止.
					                                   //                                       2.如果上面的格子是数字,且与本格的数字不相等,则循环终止
					}
				}
			}
		}
		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
			createNumber();
			refreshMain();
		} else{
			upkey = arrayEqual(main,cArray);
			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
				document.getElementById("content").innerHTML = "你输了";
				document.onkeydown = function(){}
			}
		}
		gameWin();                                     //每次结束时进行胜利判定
	}
	if( e && e.keyCode==40){//按↓键
		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
		for(var h=0;h<4;h++){                          //↓:列间无计算判定,行间有计算判定,外层循环为列:首先是第0列,从第0列3行,到,第0列2行,依次类推,故列为外循环
			for(var r=3;r>=0;r--){                     //内循环为行,这里要进行计算判定
				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
					continue;
				} else{
				    var o = r;                         //一个临时储存r的变量
					while(o!=3){                       //循环:只要这个格子的下面依旧有格子,令数字进行如下的2种判定
						if(isEmpty(main[o+1][h])){     //1.如果这个格子下面的格子是空格,令下面的格子获取本格子的数字,本格子则置为空格
						    main[o+1][h] = main[o][h];
						    main[o][h] = "&nbsp";
							o++;                       //o自加1,while循环将继续进行
						    continue;
					    }
						if(main[o+1][h]==main[o][h]){  //2.如果这个格子下面的格子是数字,判定本格子与下格子中的数字是否相等
							main[o+1][h] += main[o][h];//2.1如果相等,则将两个格子相加
						    main[o][h] = "&nbsp";
							o++;                       //o自加1,while循环将继续进行
						    continue;
						} else{                        //2.2如果不相等,则while循环终止!!!
						    break;
					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果上面不再存在格子,则循环终止.
					                                   //                                     2.如果下面的格子是数字,且与本格的数字不相等,则循环终止
					}
				}
			}
		}
		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
			createNumber();
			refreshMain();
		} else{
			downkey = arrayEqual(main,cArray);
			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
				document.getElementById("content").innerHTML = "你输了";
				document.onkeydown = function(){}
			}
		}
		gameWin();                                     //每次结束时进行胜利判定
	}
	if( e && e.keyCode==37){//按←键
		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
		for(var r=0;r<4;r++){                          //←:行间无计算判定,列间有计算判定,外层循环为行:首先是第0行,从第0行0列,到,第0行1列,依次类推,故行为外循环
			for(var h=0;h<4;h++){                      //内循环为列,这里要进行计算判定
				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
					continue;
				} else{
				    var o = h;                         //一个临时储存h的变量
					while(o!=0){                       //循环:只要这个格子的左边依旧有格子,令数字进行如下的2种判定
						if(isEmpty(main[r][o-1])){     //1.如果这个格子左边的格子是空格,令左边的格子获取本格子的数字,本格子则置为空格
						    main[r][o-1] = main[r][o];
						    main[r][o] = "&nbsp";
							o--;                       //o自减1,while循环将继续进行
						    continue;
					    }
						if(main[r][o-1]==main[r][o]){  //2.如果这个格子左边的格子是数字,判定本格子与左格子中的数字是否相等
							main[r][o-1] += main[r][o];//2.1如果相等,则将两个格子相加
						    main[r][o] = "&nbsp";
							o--;                       //o自减1,while循环将继续进行
						    continue;
						} else{                        //2.2如果不相等,则while循环终止!!!
						    break;
					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果左边不再存在格子,则循环终止.
					                                   //                                     2.如果左边的格子是数字,且与本格的数字不相等,则循环终止
					}
				}
			}
		}
		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
			createNumber();
			refreshMain();
		} else{
			leftkey = arrayEqual(main,cArray);
			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
				document.getElementById("content").innerHTML = "你输了";
				document.onkeydown = function(){}
			}
		}
		gameWin(); 
	}
	if( e && e.keyCode==39){//按→键
		var cArray = copyArray(main);                  //复制main数组,用于判定失败条件
		for(var r=0;r<4;r++){                          //→:行间无计算判定,列间有计算判定,外层循环为行:首先是第0行,从第0行3列,到,第0行2列,依次类推,故行为外循环
			for(var h=0;h<4;h++){                      //内循环为列,这里要进行计算判定
				if(isEmpty(main[r][h])){               //如果这个格子是空格,那么直接跳过,开始下一个格子的循环
					continue;
				} else{
				    var o = h;                         //一个临时储存h的变量
					while(o!=3){                       //循环:只要这个格子的右边依旧有格子,令数字进行如下的2种判定
						if(isEmpty(main[r][o+1])){     //1.如果这个格子右边的格子是空格,令右边的格子获取本格子的数字,本格子则置为空格
						    main[r][o+1] = main[r][o];
						    main[r][o] = "&nbsp";
							o++;                       //o自加1,while循环将继续进行
						    continue;
					    }
						if(main[r][o+1]==main[r][o]){  //2.如果这个格子右边的格子是数字,判定本格子与右格子中的数字是否相等
							main[r][o+1] += main[r][o];//2.1如果相等,则将两个格子相加
						    main[r][o] = "&nbsp";
							o++;                       //o自加1,while循环将继续进行
						    continue;
						} else{                        //2.2如果不相等,则while循环终止!!!
						    break;
					    }                              //while循环总结:该while循环有两种终止方式1.while循环自带的判定,如果右边不再存在格子,则循环终止.
					                                   //                                     2.如果右边的格子是数字,且与本格的数字不相等,则循环终止
					}
				}
			}
		}
		if(emptyExist()){                              //如果依旧存在空格,则随机生成数字,并且更新显示
			createNumber();
			refreshMain();
		} else{
			rightkey = arrayEqual(main,cArray);
			if(upkey==true&&downkey==true&&leftkey==true&&rightkey==true){//当4个布尔型均为true时,判断游戏失败
				document.getElementById("content").innerHTML = "你输了";
				document.onkeydown = function(){}
			}
		}
		gameWin();
	}

}


function isEmpty(n){//判断是否为空的地方较多,因此包装成一个函数吧
	return n=="&nbsp";
}


function emptyExist(){//判断main中是否还存在空格,如果存在则返回true,如果不存在则返回false
	for(var x=0;x<4;x++){
		for(var y=0;y<4;y++){
			if(isEmpty(main[x][y])){
				return true;
			}
		}
	}
	return false;
}



function createNumber(){                       //在一次按键事件结束之后,要在剩余的空白区域中的一个随机位置上生成一个2
	while(true){                               //循环将一直进行,直到循环内部自己终止
		var rdtr = Math.floor(Math.random()*4);//取一个0~4的随机数,向下取整,故最终结果为0,1,2,3
		var rdth = Math.floor(Math.random()*4);//同上
		if(isEmpty(main[rdtr][rdth])){         //如果随机取到的这个位置上是空格,则赋予2,并跳出循环,否则将一直循环
			main[rdtr][rdth] = Math.floor(Math.random()*2)*2+2;//随机产生2 or 4
			break;                             //所以在执行该函数之前,需要对整个main[][]进行判定,是否全部为有数字,如果有数字,不能执行这个函数
		}
	}	
}


function refreshMain(){                     //在每次按键结束的最后,要将更新后的main的数据展示到table
	for(var x=0;x<4;x++){
		for(var y=0;y<4;y++){
			var sxy = String(x)+String(y);  //将xy转变成字符串,然后相加,用于ById
			document.getElementById(sxy).innerHTML = main[x][y];
		}
	}
}

function copyArray(array){//复制2维数组,用于判定失败条件:上下左右均按过之后,main依旧没有任何变化,则为失败
	var copyArray = new Array(array.length);
	for(var x=0;x<array.length;x++){
		copyArray[x] = new Array(array[x].length);
		for(var y=0;y<array[x].length;y++){
			copyArray[x][y]=array[x][y];
		}
	}
	return copyArray;
}

function arrayEqual(array1,array2){                   //判断两个数组是否完全相等,用于判定失败条件
	if(array1.length!=array2.length){                 //两个数组的1维长度不一样,返回false
		return false;
	} else{
		for(var x=0;x<array1.length;x++){
			if(array1[x].length!=array2[x].length){ //只要有任意对应的2维长度不一样,返回false
				return false;
			} else{
				for(var y=0;y<array1[x].length;y++){
					if(array1[x][y]!=array2[x][y]){   //只要有任意一处的数据不一样,返回false
						return false;
					}
				}
			}
		}
	}
	return true;                                      //历经重重考验,证明了你们俩兄弟完全相等
}
/*
function gameOver(bool,array1,array2){//游戏结束判断,
	bool = arrayEqual(array1,array2);//bool传入对应的4个按键对应的布尔型的变量,当两个数组相等时,将bool置1,不等时又置0
	bool = 1;
	document.getElementById("content").innerHTML += upkey+downkey+leftkey+rightkey;
	if(upkey&&downkey&&leftkey&&rightkey){//当4个布尔型均为true时,判断游戏失败
		document.getElementById("content").innerHTML = "你输了";
		document.onkeydown = function(){}
	}
}
*/
function gameWin(){//胜利判定
	for(var x=0;x<4;x++){//反正就是遍历数组啦
		for(var y=0;y<4;y++){
			if(main[x][y]==2048){//只要有一个格子是2048,那就胜利啦
				document.getElementById("content").innerHTML = "你赢了";
				document.onkeydown = function(){}
				return;
			}
		}
	}
}