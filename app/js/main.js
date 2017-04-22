$(function () {

    var activeIndex = $('.active-tab').index(),
        contentlis = $('.main-table__content-list li'),
        tabslis = $('.tabs-item');

    // Show content of active tab on loads
    contentlis.eq(activeIndex).css('display', 'flex').addClass('active-tab-content');;

    $('.tabs-item').on('click', function (e) {
        console.log('clicked');
        var current = $(e.currentTarget),
            index = current.index();
        tabslis.removeClass('active-tab');
        current.addClass('active-tab');
        contentlis.hide().eq(index).css('display', 'flex').addClass('active-tab-content');
    });

});
var currnetTabContentTrTdLength
$(document).ready(function(){
     currnetTabContentTrTdLength = $('.active-tab-content .table-td-line').length;
    if(currnetTabContentTrTdLength >5){
        $('.long-table-dots').show();
        $('.long-table-dots span').on('click', function(){
            $('.dot').removeClass('active-dot');
            $(this).addClass('active-dot');
        })
    }


    $('.long-table-dots .dot-first').on('click', function(){
        $('.active-tab-content .table-td-line:nth-child(n+6)').hide();
        $('.active-tab-content .table-td-line:nth-child(-n+6)').css({
            'display':'table-row'
        })
        console.log('clicccccckkkkk')
    });
    $('.long-table-dots .dot-second').on('click', function(){
        $('.active-tab-content .table-td-line:nth-child(-n+6)').hide();
        $('.active-tab-content .table-td-line:nth-child(n+7)').css('display','table-row');

        console.log('clicccccckkkkk')
    });
})