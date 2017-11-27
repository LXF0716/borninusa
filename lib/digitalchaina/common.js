var windowWith,windowHeight;
var footerstaute = true;
var ismobistaute = false;
var browser={ 
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        var sUserAgent = navigator.userAgent;
        return {
        trident: u.indexOf('Trident') > -1,
        presto: u.indexOf('Presto') > -1, 
        isChrome: u.indexOf("chrome") > -1, 
        isSafari: !u.indexOf("chrome") > -1 && (/webkit|khtml/).test(u),
        isSafari3: !u.indexOf("chrome") > -1 && (/webkit|khtml/).test(u) && u.indexOf('webkit/5') != -1,
        webKit: u.indexOf('AppleWebKit') > -1, 
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        iPhone: u.indexOf('iPhone') > -1, 
        iPad: u.indexOf('iPad') > -1,
        iWinPhone: u.indexOf('Windows Phone') > -1
        };
    }()
}
if(browser.versions.mobile || browser.versions.iWinPhone){
    ismobistaute = true;
} 

;(function($){
	$(function(){
		getWindowSize();
		//点击手机导航效果
		$(".mobirightNav").on('click',function(){
			if(!$(this).hasClass('current')){
				$(this).addClass('current');
				$(".navfixmask").fadeIn(400);
				$(".bodymain").animate({'left':'-210px'},400);
				$(".mobi_navfixed").show().animate({'right':'0'},400);	
			}
		});
		
		$(".navfixmask").on('click',function(){
			$('.mobirightNav').removeClass('current');
			$(".navfixmask").fadeOut(400);
			$(".bodymain").animate({'left':'0'},400);
			$(".mobi_navfixed").animate({'right':'-210px'},400,function(){
				$(".mobi_navfixed").hide();
			});
		});
		
		$(".twonav").on('click',function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
				$(this).closest('.same').siblings('div').fadeOut(400);
			}else{
				$(this).addClass('current');
				$(this).closest('.same').siblings('div').fadeIn(400);
			}
		});
		
		
		$(".innner .btnfooter").on('click',function(){
			if($(this).hasClass('current')){
				$(".innner .innerCon").fadeIn(300);
				$(".innner .btnfooter").removeClass('current');
			}else{
				$(".innner .innerCon").fadeOut(300);
				$(".innner .btnfooter").addClass('current');
			}
			
		});
		
		//mobi底部二维码
		$(".mobi-code").on('click',function(){
			$(".erweimaPop").fadeIn(300);
		});
		$(".erweimaPop .mask").on('click',function(){
			$(".erweimaPop").fadeOut(300);
		});
		
		//输入框聚焦 失焦
		 $("input[class*=input]").each(function(){  
	       var oldValue=$(this).val();  
	       
	       $(this).focus(function(){     
	        if($(this).val()==oldValue){
	            $(this).val('');
	            }    
	       })
	       .blur(function(){
	        if($(this).val()==""){
	            $(this).val(oldValue)
	            } 
	       })      
	    });
		
		$(".cwzbCont .tableClass tr:even").addClass("even");
		$(".cwzbCont .tableClass tr:odd").addClass("odd");
		
		$(".dqbgCont .box .list li:last-child,.itststgnList li:last-child,.itststjlList li:last-child").addClass("noline");
		
		$(".ywbjcptxList li .TopTitle").on('click',function(){
			if($(this).hasClass("current")){
				$(this).removeClass("current"); 
				$(this).parent("li").find(".Content").slideUp(300);
			}else{
				$(this).addClass("current"); 
				$(this).parent("li").find(".Content").slideDown(300);
			}
		});
		
		jQuery(".hzhb_scrollBox .picScroll").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:5,scroll:5,trigger:"click"});
		
		
    
	})
	
	
})(jQuery);

function getWindowSize(){
	 windowWith = $(window).width();
	 windowHeight = $(window).height();
}


var tabs = function(tab, con){
    tab.click(function(){ var indx = tab.index(this);
        tab.removeClass('current');
        $(this).addClass('current');
        con.hide();
        con.eq(indx).show();
    })    
}


