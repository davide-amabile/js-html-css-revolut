

$(document).ready(function(){
  $("li.open").hover(
   function(){
    $(this).find(".menu_transp").toggleClass("hide");
  });
});
