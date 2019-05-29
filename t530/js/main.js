window.onload = function() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {} else if (u.indexOf('iPhone') > -1) {
        $(window).on('scroll.elasticity',
        function(e) {
            e.preventDefault();
        }).on('touchmove.elasticity',
        function(e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {}
    loading();
}
var date_start;
var date_end;
date_start = getNowFormatDate();
var loading_img_url = ["./image/fm.png"];
function loading() {
    var numbers = 0;
    var length = loading_img_url.length;
    for (var i = 0; i < length; i++) {
        var img = new Image();
        img.src = loading_img_url[i];
        img.onerror = function() {
            numbers += (1 / length) * 100;
        }
        img.onload = function() {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            console.log(numbers);
            if (Math.round(numbers) == 100) {
                date_end = getNowFormatDate();
                var loading_time = date_end - date_start;
                $(function progressbar() {
                    $('.shade').hide();
                    // var tagHtml = "";
                    // for (var i = 1; i <= 6; i++) {
                    //     if (i == 1) {
                    //         tagHtml += ' <div id="first" style="background:url(image/00' + (i < 10 ? '0' + i: i) + '.png) center top no-repeat;background-size:100%"></div>';
                    //     } else if (i == 6) {
                    //         tagHtml += ' <div id="end" style="background:url(image/00' + (i < 10 ? '0' + i: i) + '.png) center top no-repeat;background-size:100%"></div>';
                    //     } else {
                    //         tagHtml += ' <div style="background:url(image/00' + (i < 10 ? '0' + i: i) + '.png) center top no-repeat;background-size:100%"></div>';
                    //     }
                    // }
                    // $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function() {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });
                    $('.flipbook').turn({
                        width: w,
                        height: h,
                        elevation: 50,
                        display: 'single',
                        gradients: true,
                        autoCenter: true,
                        when: {
                            // turning: function(e, page, view) {
                            //     if (page == 1) {
                            //         $(".btnImg").css("display", "none");
                            //         $(".mark").css("display", "block");
                            //     } else {
                            //         $(".btnImg").css("display", "block");
                            //         $(".mark").css("display", "none");
                            //     }
                            //     if (page == 41) {
                            //         $(".nextPage").css("display", "none");
                            //     } else {
                            //         $(".nextPage").css("display", "block");
                            //     }
                            // },
                            // turned: function(e, page, view) {
                            //     console.log(page);
                            //     var total = $(".flipbook").turn("pages");
                            //     if (page == 1) {
                            //         $(".return").css("display", "none");
                            //         $(".btnImg").css("display", "none");
                            //     } else {
                            //         $(".return").css("display", "block");
                            //         $(".btnImg").css("display", "block");
                            //     }
                            //     if (page == 2) {
                            //         $(".catalog").css("display", "block");
                            //     } else {
                            //         $(".catalog").css("display", "none");
                            //     }
                            // }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['js/turn.js'],
                    complete: loadApp
                });
            };
        }
    }
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + "" + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
}