function validPassword(password) {
var wordCheck = 'adebayo odurinde' ;
var expCounts = {};
var maxKey = '';
for(var i = 0; i < wordCheck.length; i++)
{
    var item = wordCheck[i];
    if(!expCounts[item]){
     expCounts[item] = 0;
    }
    expCounts[item]++;
    if(maxKey == '' || expCounts[item] > expCounts[maxKey]){
        maxKey = item;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);