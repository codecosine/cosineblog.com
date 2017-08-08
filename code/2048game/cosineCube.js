/**
 * 游戏内容主方块储存以及一些方法
 */
function cosineCube(num,row,col){
    this.num = num || 0;
    this.row = row || -1;
    this.col = col || -1;
}
function numCreate(){
    var orginNum = [2, 4];
    return orginNum[Math.floor(Math.random()*orginNum.length)];
}
cosineCube.prototype = {
    constructor: cosineCube,
    sayProperty: function(){
        console.log('num**'+this.num + '>>>row***col:'+this.row+'***'+this.col)
    }
}
// /**
//  * ES 6 class语法
//  */
// export default class cosineCube{
//     constructor(num,row,col){
//          this.num = num || 0;
//          this.row = row || -1;
//          this.col = col || -1;
//     }
//     sayProperty(){
//         console.log('num**'+this.num + '>>>row***col:'+this.row+'***'+this.col)
//     }
// }