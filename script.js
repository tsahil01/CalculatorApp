$( document ).ready(function() {
    var a = "";
    $(".btn").click(function(){
        var buttonText = $(this).text();

        if(buttonText != "="){
            if(buttonText === "C"){
                location.reload(true);
            } else{
                a += buttonText;
                $(".heading").text(a);
            }
        }
        else if(buttonText === "="){
            result = eval(a);
            $(".heading").text(result);
            a = str(result);
        }
    });
});