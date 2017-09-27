function main (str1, str2) {
  return new Date(str1).getTime() - new Date(str2).getTime()
}
var a = main('2015-03-01', '2016-03-09')
console.log(a)
