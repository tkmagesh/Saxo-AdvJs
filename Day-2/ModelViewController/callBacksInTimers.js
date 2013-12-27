function delayCallbacksWrongWay(){
for(var i=0;i<10;i++)
  setTimeout(function(){
    fn(i);
  },i * 1000)
 }

function delayCallbacksRightWay(){
  for(var i=0;i<10;i++)
  setTimeout((function(index){
     return function(){
       fn(index);
    }
  })(i),i * 1000)
}