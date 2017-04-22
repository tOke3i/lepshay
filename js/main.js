
$( function() {
    $( "#tabs" ).tabs();
} );

var currnetTabContentTrTdLength;
$(document).ready(function(){
    function detectlong(){
        currnetTabContentTrTdLength = $('li[aria-hidden="false"] .table-td-line').length;
        $('li[aria-hidden="false"]').addClass('active-tab-content');
        if(currnetTabContentTrTdLength > 5){
            $('.long-table-dots').show();
            $('.long-table-dots span').on('click', function(){
                $('.dot').removeClass('active-dot');
                $(this).addClass('active-dot');
            })
        }else{
            $('.long-table-dots').hide();
        }
    }

    $('.tabs-item').on('click',detectlong);
    detectlong();


    $('.long-table-dots .dot-first').on('click', function(){
        $('.active-tab-content .table-td-line:nth-child(n+6)').hide();
        $('.active-tab-content .table-td-line:nth-child(-n+6)').css({
            'display':'table-row'
        })

    });
    $('.long-table-dots .dot-second').on('click', function(){
        $('.active-tab-content .table-td-line:nth-child(-n+6)').hide();
        $('.active-tab-content .table-td-line:nth-child(n+7)').css('display','table-row');


    });
})
