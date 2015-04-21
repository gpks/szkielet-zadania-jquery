var i = 0;
var col = ['salmon', "greenyellow", "fuchsia"];


$('button').click(function(){
  var count = 0;
  $("p").each(function(){
    $(this).css({color: col[(i+count)%3]});
    count++;
  });
  i++;
});