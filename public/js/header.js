$(function(){
  $.ajax({
    url:"http://localhost:3000/header.html",
    type:"get",
  }).then(res=>{
    document.getElementById("header").innerHTML=res;
    $("[data-trigger=dropdown]").next().hide().parent().mouseenter(function(){
      $(this).children(":last").show();
    })
        .mouseleave(function(){
          $(this).children(":last").hide();
        })
  })

})
