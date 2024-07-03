$(document).ready(function(){
    // tapmenu
    $(function(){
        $(".tapmenu > li >a").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })
})