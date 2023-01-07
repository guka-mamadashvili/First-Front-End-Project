// Hide Buttons on  page
$(".ext1").hide()
$(".ext2").hide()

$(".page1").hide()
$(".page2").hide()

// Mid 1 Div
$(".mid1").click(function(){

    $(".mid1").animate({

        width: "600px",
        height: "600px",
        "margin-top": "-90px",

    })

    $(".mid2").hide()

    $(".ext1").show()

        $(".page1").show()


})

// Exit Mid 1

$(".ext1").click(function(){

    $(".ext1").hide()

    $(".mid2").show()

    $(".mid1").animate({

        width: "400px",
        height: "400px",
        
    })

    $(".page1").hide()

})

// Mid 2 Div

$(".mid2").click(function(){

    $(".mid2").animate({

        width: "600px",
        height: "600px",
        "margin-top": "-90px",

    })

    $(".mid1").hide()

    $(".ext2").show()

    $(".page2").show()

})

// Exit Mid 2

$(".ext2").click(function(){

    $(".ext2").hide()

    $(".mid1").show()

    $(".mid2").animate({

        width: "400px",
        height: "400px",
        
    })

    $(".page2").hide()

})