$(function(){
  var $divLift=$("#index>div:nth-child(5)");
  $(window).scroll(function(){
    var $fs=$("#index>div");
    var $f1=$fs.eq(1);
    //console.log($f1);
    var scrollTop=$("html,body").scrollTop();
    var offsetTop=$f1.offset().top;

    if(innerHeight/2+scrollTop>offsetTop){
      $divLift.removeClass("d-none");
    }else{
      $divLift.addClass("d-none");
    }
    $fs.each((i,f)=>{
      if(i>0){
        i=i-1;
        offsetTop=$(f).offset().top;
        if(innerHeight/2+scrollTop>offsetTop){
          $divLift.children(`:eq(${i})`)
              .addClass("btn-secondary")
              .siblings()
              .removeClass("btn-secondary");
        }
      }
    });
  });

    $divLift.on("click","button",function(){
      var i=$(this).index()+2;
      //console.log($(`#index>div:nth-child(${i})`));
      var offsetTop=$(`#index>div:nth-child(${i})`).offset().top;
      $("html").animate({
        scrollTop:offsetTop
      },500);
    })

});