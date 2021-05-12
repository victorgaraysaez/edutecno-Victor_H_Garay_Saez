$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        var poundkey=this.hash;
        $("html").animate({
            scrollTop: $(poundkey).offset().top - 86
        },
        800         /* mili seg. */
        );
    });
});