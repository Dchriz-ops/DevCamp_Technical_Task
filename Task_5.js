var str = "im a string";
var i = 0, strLength = str.length;
for(i; i < strLength; i++) {
 str = str.replace(" ", "%20");
}
console.log(str);