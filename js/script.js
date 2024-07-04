$(document).ready(function(){
    // sunmenu 전체가 보여지는 코드
    // $(".navi > li").mouseover(function(){
    //     $(".submenu").stop().slideDown(500)
    // }).mouseout(function(){
    //     $(".submenu").stop().slideUp(500)
    // })
    // navi에 해당하는 submenu가 나오는 코드
    $(".navi > li").mouseover(function(){
        // console.logo(this);
        $(this).find(".submenu").stop().slideDown(500)
    })
    $(".navi > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500)
    })
// 이미지슬라이드 기능
setInterval(function(){
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft : -1200});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft : -2400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft : 0});
    $(".slidelist").delay(2000);

})
    // tapmenu
    $(function(){
        $(".tapmenu > li >a").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })
    // modal popup
    $(".popup").click(function(){
    $(".modal").addClass("active")
    })
    // modal close
    $(".close").click(function(){
    $(".modal").removeClass("active")
    })
})