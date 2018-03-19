//script to load the loading screen on load of the page
$(function () {

    $("#icon_menu").css("display", "none");
    $("#jumbotronText").css("display", "none");
    $("#loader").css("display", "none");

    $("#loader").fadeIn("fast", function () {

        $("#loader").fadeOut(6000, function () {

            $("#jumbotronText").fadeIn(3000);
            $("#icon_menu").fadeIn(5000);

        });

    });

    //function that handles the star sizing and placement
    getSetSizePosition();

});

/**********************************************************************************************************************
Star image animation in sky in jumbotron
**********************************************************************************************************************/

function getRandomWidth() {
    var width = Math.floor((Math.random() * 5) + 2);
    return width;
}

function getRandomPosition() {

    var position = Math.floor((Math.random() * 100) + 30);
    return position;

}

//function called on page load 
var counter = 1;
function getSetSizePosition() {

    if (counter < 50) {
        counter++;
        $("#star").css("width", getRandomWidth() + "px");
        $("#star").offset({ left: getRandomPosition(), top: getRandomPosition() });
        window.setTimeout(getSetSizePosition, 500);
    };
};


/**********************************************************************************************************************
Icon Div MOUSEOVER Event Handers
**********************************************************************************************************************/

//Skills Icon
$("#skills").mouseover(function () {
    transformIconDiv("#skills", "#skills_png", "#skills_words");
});

//Wrench Icon
$("#wrench").mouseover(function () {
    transformIconDiv("#wrench", "#wrench_png", "#wrench_words");
});

//Diplom Icon
$("#diploma").mouseover(function () {
    transformIconDiv("#diploma", "#diploma_png", "#diploma_words");
});

//function called to change icon div to label text with mouse over
function transformIconDiv(iconDivID, iconPngID, iconLabelID) {

    //get div dimensions
    var divHeight = $(iconDivID).css("height");
    var divWidth = $(iconDivID).css("width");
    //assign div dimensions to div - keeps div same size when icon png fades out
    $(iconDivID).css("height", divHeight);
    $(iconDivID).css("width", divWidth);

    //fade out the icon image and fade in the icon label text
    $(iconPngID).fadeOut("fast", function () {
        $(iconLabelID).fadeIn("fast");
    });
}

/**********************************************************************************************************************
Icon Div MOUSELEAVE Event Handers
**********************************************************************************************************************/

//Skills div
$("#skills").mouseleave(function () {
    revertIconDiv("#skills_label", "#skills_png");
});

//Wrench div
$("#wrench").mouseleave(function () {
    revertIconDiv("#wrench_label", "#wrench_png");
});

//Diplomaa div
$("#diploma").mouseleave(function () {
    revertIconDiv("#diploma_label", "#diploma_png");
});

//function called when the mouse leaves icon divs to show icon again
function revertIconDiv(iconLabelID, iconPngID) {
    $(iconLabelID).css("display", "none");
    $(iconPngID).fadeIn("fast");
}


/**********************************************************************************************************************
Icon Div CLICK Event Handers
**********************************************************************************************************************/
//Skills icon
$("#skills").click(function () {
        
    $("#icon_menu").slideUp("slow", function () {

        $("#cover").fadeOut("fast", function () {
            $("#skills_content").fadeIn("slow");
        });
    });

});
//=========================================================================================================================

//TODO: create a generic function to call when back button clicked that slides up all _content and fades icon menu back in
$("#back_btn").click(function () {

    $("#skills_content").slideUp("slow", function () {
        $("#cover").fadeIn("slow");
        $("#icon_menu").fadeIn(2000, function () {
        });
    });
});
//=========================================================================================================================


/**************************************************************************************************************************/
/**************************************************************************************************************************/
//CHART.js SCRIPT
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["C# .NET", "Javascript/CSS/HTML", "ETL: Data Integrations", "T-SQL: SSRS, SSAS, SSIS", "BI Architecture", "Systems/Business Analysis"],
        datasets: [{
            label: 'Skill',
            data: [10, 10, 10, 10, 10, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

    }
});

