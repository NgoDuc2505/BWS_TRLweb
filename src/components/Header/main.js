$(document).ready(function() {
    var typingTimer;
    var doneTypingInterval = 500;
    var inputSearch = $(".search-block-container.full-page .search-block input[type=search]");
    var searchResultDiv = $(".search-block-container.full-page .search-block .search-results");
    inputSearch.on("keyup", function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });
    inputSearch.on("keydown", function() {
        clearTimeout(typingTimer);
    });
    function doneTyping() {
        var searchParams = "searchrlive=" + inputSearch.val() + '&lang=' + vismeBlogParams.lang;
        $.ajax({
            type: "GET",
            url: "https://google.com/search/search-ajax/",
            data: searchParams,
            beforeSend: function() {
                $(searchResultDiv).empty();
                $(searchResultDiv).append('<center><img src="https://www.visme.co/wp-content/themes/visme/images/ajax-loader.gif"  id="ajax-loader-details" style="width:32px !important;" /></center>');
            },
            success: function(data) {
                $(searchResultDiv).empty();
                $(searchResultDiv).append(data);
                setTimeout(function() {
                    var imgvalue1 = $(".search-block-container.full-page .search-block .search-results .col-lg-4:nth-child(1) .block-img img").height();
                    var imgvalue2 = $(".search-block-container.full-page .search-block .search-results .col-lg-4:nth-child(2) .block-img img").height();
                    var imgvalue3 = $(".search-block-container.full-page .search-block .search-results .col-lg-4:nth-child(3) .block-img img").height();
                    var imgHeight = Math.min(imgvalue1, imgvalue2, imgvalue3);
                    $(".search-block-container.full-page .search-block .search-results .block-img").css("height", imgHeight + "px");
                }, 300);
            },
        });
    }
    $(window).resize(function() {
        var imgvalue1 = $(".search-block-container.full-page .search-block .search-results .col-lg-4:nth-child(1) .block-img img").height();
        var imgvalue2 = $(".search-block-container.full-page .search-block .search-results .col-lg-4:nth-child(2) .block-img img").height();
        var imgvalue3 = $(".search-block-container.full-page .search-block .search-results .col-lg-4:nth-child(3) .block-img img").height();
        var imgHeight = Math.min(imgvalue1, imgvalue2, imgvalue3);
        $(".search-block-container.full-page .search-block .search-results .block-img").css("height", imgHeight + "px");
    });
    $(".search-load-more").click(function() {
        var inputSearchPageVal = $(".searchvalueajax").val();
        var inputSearchPageNumverVal = $(".searchpagenumbervalueajax").val();
        var searchPageBlock = ".search-page-results .search-columns";
        var searchPageParams = "searchrpage=" + inputSearchPageVal + "&pagen=" + inputSearchPageNumverVal + "&lang=" + vismeBlogParams.lang;
        $.ajax({
            type: "GET",
            url: "https://google.com/search/search-ajax/",
            data: searchPageParams,
            beforeSend: function() {
                $(searchPageBlock).append('<div style="width: 100%; text-align: center;" class="loader-search"><img src="https://www.visme.co/wp-content/themes/visme/images/ajax-loader.gif"  id="ajax-loader-details" style="width:32px !important;" /></div>');
            },
            success: function(data) {
                $(searchPageBlock).append(data);
                $(".searchpagenumbervalueajax").get(0).value++;
                $(".loader-search").remove();
            },
        });
        console.log(inputSearchPageVal);
    });
    $(".search-button").click(function() {
        $(".search-block-container").show();
        setTimeout(function() {
            $(".search-block-container .search-block").addClass("is_displayed");
        }, 1);
    });
    $(".search-block-container.full-page .search-close-icon").click(function() {
        $(".search-block-container .search-block").removeClass("is_displayed");
        setTimeout(function() {
            $(".search-block-container").hide();
        }, 200);
    });
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $(".search-block-container .search-block").removeClass("is_displayed");
            setTimeout(function() {
                $(".search-block-container").hide();
            }, 200);
        }
    });
    $(".design2018 .post-page .content img").first().hide();
    $("span.tip").append("<img class='lighthub' src='https://blog.visme.co/wp-content/themes/blog/img/lightbulb.svg'>");
    $(".content div.tip").append("<img class='lighthub' src='https://blog.visme.co/wp-content/themes/blog/img/lightbulb.svg'>");
    $(".bar .menu_wake").click(function() {
        if ($(".bar").hasClass("dropdown-active")) {
            $(".bar").removeClass("dropdown-active");
        } else {
            $(".bar").addClass("dropdown-active");
        }
    });
    $(window).scroll(function() {
        var middle = ($(document).height() * 20) / 100;
        if ($(document).scrollTop() > middle) {
            $(".share-home").fadeIn();
        }
    });
    $(window).scroll(function() {
        var showShare = ($(document).height() * 2) / 100;
        if ($(document).scrollTop() > showShare) {
            $(".addthis-smartlayers-desktop").fadeIn();
        } else {
            $(".addthis-smartlayers-desktop").fadeOut();
        }
    });
    $(function() {
        $(".cta-img-slider img:gt(0)").hide();
        setInterval(function() {
            $(".cta-img-slider :first-child").fadeOut(2000).next("img").fadeIn(2000).end().appendTo(".cta-img-slider");
        }, 5000);
    });
    $(".glow").css({
        height: $(".simply .first img.made").height() - 15 + "px"
    });
    if ($(window).width() > 620) {
        $(window).scroll(function() {
            var scrolledpx = parseInt($("body").scrollTop());
            var mainheight = 0;
            if ($(window).scrollTop() > mainheight) {
                $(".navbar.sink").css({
                    height: "65px",
                    position: "fixed",
                    "z-index": "1000000000000000",
                });
                $(".glow").css("top", "80" - scrolledpx + "px");
                $(".sink ul.header-top li.action").css("height", "52px");
            } else {
                $(".navbar.sink").css({
                    height: "80px",
                    position: "initial",
                });
                $(".sink ul.header-top li.action").css("height", "67px");
                $(".glow").css("top", "80" + "px");
            }
        });
    }
    $("span.tip").parent("h2").addClass("mcf");
    $(".wake-inner.top").click(function() {
        if ($(".container.much").hasClass("dropdown-active")) {
            $(".container.much").removeClass("dropdown-active");
        } else {
            $(".container.much").addClass("dropdown-active");
        }
    });
    $(".simple .wake-inner.top").click(function() {
        if ($(".container-fluid.simple").hasClass("dropdown-active")) {
            $(".container-fluid.simple").removeClass("dropdown-active");
        } else {
            $(".container-fluid.simple").addClass("dropdown-active");
        }
    });
    $("body").click(function() {
        $(".bar").removeClass("dropdown-active");
        $(".container.much").removeClass("dropdown-active");
    });
    $(".wake-inner.top").click(function(event) {
        event.stopPropagation();
    });
    $(".bar .menu_wake").click(function(event) {
        event.stopPropagation();
    });
    $(".download-literature .wpcf7-form").submit(function() {
        var error = false;
        var email = $('.download-literature .wpcf7-form input[type="email"]')[0].value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "" || !re.test(email)) {
            $('.download-literature .wpcf7-form input[type="email"]').css("background-color", "#FCC2B9");
            $('.download-literature .wpcf7-form input[type="email"]').css("border", "2px solid #F00");
            error = true;
        } else {
            $('.download-literature .wpcf7-form input[type="email"]').css("background-color", "#DDDDDD");
            $('.download-literature .wpcf7-form input[type="email"]').css("border-width", "0px");
            $(".download-literature .col-xs-12.contact-title").addClass("maybe");
        }
    });
    if ($(".download-literature-container")[0]) {
        $(".download-literature").appendTo(".download-literature-container");
        $(".download-literature").show();
        var textfariss = $(".download-literature .box1 span").html();
        $(".download-literature .wpcf7-submit").val(textfariss);
    }
    $(".download-literature .box1").click(function() {
        $(this).hide();
        $(".download-literature .box2").show();
    });
    if ($(window).width() < 500) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $(".f-contact-layer").fadeIn("slow");
            } else {
                $(".f-contact-layer").fadeOut("slow");
            }
        });
    }
});
function scrollTo(hash) {
    if (hash != "0") {
        $(document.body).animate({
            scrollTop: $(hash).offset().top,
        }, 800);
    }
}
if ($(window).width() > 768) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $("header .header-first-row").addClass("sticky-menu");
            $("header .header-icon").css("display", "none");
        } else {
            $("header .header-first-row").removeClass("sticky-menu");
            $("header .header-icon").css("display", "block");
        }
    });
}
var pwidget_config = {
    defaults: {
        services: {
            twitter: {
                via: "vismeapp"
            }
        },
    },
};
$(document).ready(function() {
    $(".article_qlinks a").on("click", function(event) {
        console.log(this.hash);
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 50,
            }, 1200, function() {
                window.location.hash = hash;
            });
        }
    });
});
$(document).ready(function() {
    if (document.cookie.indexOf("newsletter_close") > -1) {} else {
        createCookie("newsletter_close", "no", 5);
    }
    $(".newsletter-cartoon-outer .close-icon").click(function() {
        $(".newsletter-cartoon-outer").hide().addClass("closed");
        createCookie("newsletter_close", "yes", 1);
    });
    $(".newsletter-lion-outer .close-icon").click(function() {
        $(".newsletter-lion-outer").hide().addClass("closed");
        createCookie("newsletter_close", "yes", 1);
    });
    $("#close-news").click(function() {
        $("#newsletter-square").hide().addClass("closed");
    });
    eraseCookie("newsletter_fullscreen");
    if (readCookie("newsletter_close") == "no") {
        $("body").mouseleave(function() {
            var middle = ($(document).height() * 5) / 100;
            if ($(document).scrollTop() > middle) {
                $(".newsletter-lion-outer").fadeIn().addClass("animate");
            }
        });
    }
    $(window).scroll(function() {
        var middle = ($(document).height() * 35) / 100;
        if ($(document).scrollTop() > middle && !$("#newsletter-square").hasClass("closed")) {
            $("#newsletter-square").fadeIn();
        }
        if ($(document).scrollTop() < middle && !$("#newsletter-square").hasClass("closed")) {
            $("#newsletter-square").fadeOut();
        }
    });
    $(".newsletter-lion-outer .wpcf7-form").submit(function() {
        var error = false;
        var email = $('.newsletter-lion-outer .wpcf7-form input[type="email"]')[0].value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email);
        if (email == "" || !re.test(email)) {
            $('.newsletter-lion-outer .wpcf7-form input[type="email"]').css("background-color", "#FCC2B9");
            $('.newsletter-lion-outer .wpcf7-form input[type="email"]').css("border", "2px solid #F00");
            error = true;
        } else {
            $('.newsletter-lion-outer .wpcf7-form input[type="email"]').css("background-color", "transparent");
            $('.newsletter-lion-outer .wpcf7-form input[type="email"]').css("border", "1px solid #000000");
            createCookie("newsletter_close", "yes", 1);
            window.location.href = "https://blog.visme.co/blog-subscriber/";
        }
    });
    $(".single-sidebar .box-info .wpcf7-form").submit(function() {
        var error = false;
        var email = $('.single-sidebar .box-info .wpcf7-form input[type="email"]')[0].value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email);
        if (email == "" || !re.test(email)) {
            $('.single-sidebar .box-info .wpcf7-form input[type="email"]').css("background-color", "#FCC2B9");
            $('.single-sidebar .box-info .wpcf7-form input[type="email"]').css("border", "2px solid #F00");
            error = true;
        } else {
            $('.single-sidebar .box-info .wpcf7-form input[type="email"]').css("background-color", "transparent");
            $('.single-sidebar .box-info .wpcf7-form input[type="email"]').css("border", "1px solid #000000");
            window.location.href = "https://blog.visme.co/blog-subscriber/";
        }
    });
    $(".email_conversion_container .wpcf7-form").submit(function() {
        var error = false;
        var email = $('.email_conversion_container .wpcf7-form input[type="email"]')[0].value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email);
        if (email == "" || !re.test(email)) {
            $(".email_conversion_container .ajax-loader").hide();
            console.log("error email");
            $('.email_conversion_container .wpcf7-form input[type="email"]').css("background-color", "#FCC2B9");
            $('.email_conversion_container .wpcf7-form input[type="email"]').css("border", "2px solid #F00");
            error = true;
        } else {
            $(".email_conversion_container h4").text("Done!");
            $(".email_conversion_container h5").text("We’ll send you great tips and helpful design resources in the near future.").css("margin-bottom", "36px");
            $(".email_conversion_container p").hide();
        }
    });
    $(".newsletter-cartoon-outer .wpcf7-form").submit(function() {
        var error = false;
        var email = $('.newsletter-cartoon-outer .wpcf7-form input[type="email"]')[0].value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email);
        if (email == "" || !re.test(email)) {
            $('.newsletter-cartoon-outer .wpcf7-form input[type="email"]').css("background-color", "#FCC2B9");
            $('.newsletter-cartoon-outer .wpcf7-form input[type="email"]').css("border", "2px solid #F00");
            error = true;
        } else {
            $('.newsletter-cartoon-outer .wpcf7-form input[type="email"]').css("background-color", "transparent");
            $('.newsletter-cartoon-outer .wpcf7-form input[type="email"]').css("border", "1px solid #ffffff");
        }
    });
    if ($(window).width() > 767) {}
    if ($(".single-sidebar")[0]) {
        $(window).scroll(function() {
            $.fn.isInViewport = function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                return elementBottom > viewportTop && elementTop < viewportBottom;
            }
            ;
            var pointReached = ($(document).height() * 13) / 100;
            if ($(document).scrollTop() > 2618) {
                if (!$(".single-sidebar").hasClass("fixed")) {
                    $(".single-sidebar").addClass("fixed");
                }
            } else if ($(document).scrollTop() < 2618 && $(".single-sidebar").hasClass("fixed")) {
                $(".single-sidebar").removeClass("fixed").removeAttr("style");
            }
            if ($(".block-visme-cta").isInViewport() || $(".comments-section").isInViewport() || $("footer").isInViewport()) {
                if ($(".single-sidebar").hasClass("wasinviewport")) {} else {
                    $(".single-sidebar").hide();
                    $(".single-sidebar").addClass("wasinviewport");
                }
            } else {
                $(".single-sidebar").fadeIn(300).removeClass("wasinviewport");
            }
        });
    }
});
$(".footer-21-v1 .footer-container .menus-container h5").click(function() {
    if (!window.matchMedia('(max-width: 991px)').matches)
        return;
    if ($(this).parent().hasClass("open")) {
        $(this).parent().removeClass("open");
        $(this).parent().find("ul").hide();
    } else {
        $(".footer-21-v1 .footer-container .menus-container ul").hide();
        $(".footer-21-v1 .footer-container .menus-container").removeClass("open");
        $(this).parent().addClass("open");
        $(this).parent().find("ul").show();
    }
});
$(".footer-21-v1 .footer-container h6.more").click(function() {
    if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".footer-21-v1 .footer-container .block-menus-container .menus-container ul .more-list").slideUp("slow");
        $(this).text($(this).attr('data-open') ? $(this).attr('data-open') : "MORE TO CREATE");
    } else {
        $(this).addClass("open");
        $(".footer-21-v1 .footer-container .block-menus-container .menus-container ul .more-list").slideDown("slow");
        $(this).text($(this).attr('data-close') ? $(this).attr('data-close') : "COLLAPSE");
    }
});
if ($(".footer-dropdown-language")[0]) {
    $(".footer-dropdown-language .dropdown").click(function() {
        $(".footer-dropdown-language").toggleClass("active");
    });
    $(document).mouseup(function(e) {
        var container = $(".footer-dropdown-language");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("active");
        }
    });
}
function visme_debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this
          , args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    }
    ;
}
;