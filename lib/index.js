/**
 * 
 */
	window.onload = function(){
		//页面样式控制内容
//		var bannerHeight = $('.banner_main li').height();
//		$('.banner').height( bannerHeight );
		//病种选择样式控制
		var windowWidth = $(document).width();
		/* if( windowWidth <= 1265 ){
			$('.overseas').addClass('overseas1');
			$('.consult').addClass('consult1');
			$('.my_corsult').css('line-height','80px');
		}else{
			$('.overseas').removeClass('overseas1');
			$('.consult').removeClass('consult1');
			$('.my_corsult').css('line-height','80px');
		}*/
		//客服咨询
		$('.my_corsult span').mouseover(function(){
			$(this).css('background-color','#b72024').text('立即咨询');
		}).mouseout(function(){
			$(this).css('background-color','transparent').text('1对1VIP客服咨询');
		});
		//背景透明度兼容
		$('.four_detail_main').css('opacity','0.7');

		//导航		
		var imgWidth = $('.banner_main img').width(),imgA = 1920;
		if(imgWidth<=imgA){
			$('.banner_main img').css('margin-left',-(imgWidth-windowWidth)/2+'px');
		}else{
			$('.banner_main img').css('margin-left',(windowWidth-imgA)/2+'px');
		}

		$('.head_nav_con li').mouseover(function(){
			var _thisIndex = $(this).index();
			$('.head_nav_conMain li a').css('color','#010101');
			$(this).find('a').css('color','#b72024');
			if( $('.head_nav_conList li').eq(_thisIndex).text() !== '' ){
				$('.head_nav_conList li').eq(_thisIndex).show();
			}
		}).mouseout(function(){
			var _thisIndex = $(this).index();
			$('.head_nav_conMain li a').eq(_thisIndex).css('color','#010101');
			if( $('.head_nav_conList li').eq(_thisIndex).text() !== '' ){
				$('.head_nav_conList li').eq(_thisIndex).hide();
			}
		});
		$('.head_nav_conList li').mouseover(function(){
			var _thisIndex = $(this).index();
			$(this).find('a').css('color','#fff');
			$('.head_nav_conMain li').eq(_thisIndex).find('a').css('color','#b72024');
		});
		//轮播
		//初始化轮播样式
		$('.banner_main li').each(function(){
			$(this).css('left',100*($(this).index())+'%');
		});
		//handler创建
		var hanlderLength = $('.banner_main li').length,
		    str = '<p>';
		for(var i=0; i<hanlderLength; i++){
			str= str + '<span><img src="/wap_new/img/handler.png" height="11" width="11"></span>';
		}
		str = str + '</p>';
		$('.banner_hanlder').append( str );
		$('.banner_hanlder span').eq(0).find('img').attr('src','/wap_new/img/handler_hover.png');
		var i = 1,
		    $bannerMainLi = $('.banner_main li');

		setInterval(function(){
			if( i >= $bannerMainLi.length ){
				i = 0;
			}
			$('.banner_hanlder img').attr('src','/wap_new/img/handler.png');
			$('.banner_hanlder span').eq(i).find('img').attr('src','/wap_new/img/handler_hover.png');
			$('.banner_main').animate({'margin-left':'-'+i*100+'%'},1000);
			i++;
		},3000);

		//对接全球优质资源part_one_con
		var partOneCon = [
  			'1>了解赴美生子政策;<br>2>定制个性化方案;<br>3>辅导签证通过.',
			'1>预定房间;<br>2>可手机视频看房;<br>3>行前海关通关辅导.',
			'1>机场接机入住;<br>2>在美安顿;<br>3>与国内家人报平安.',
			'1>预约产检生产;<br>2>产检接送一条龙;<br>3>临盆陪同服务.',
			'1>月子膳食服务;<br>2>育儿指导;<br>3>宝宝证件办理.',
		]
		$('.part_one_title span').on('click',function(){
			var $this = $(this);
			$this.addClass('part_one_current').siblings().removeClass('part_one_current');
			$('#one_con').html(partOneCon[$this.index()]);
		});

		//我们的服务
		$('.part_two li').mouseover(function() {
			var _thisIndex = $(this).index()+1;
			$(this).addClass('row_bg'+_thisIndex);
			$(this).find('.part_two_row').addClass('row_bg');
			$(this).find('.pt_li'+_thisIndex).addClass('pt_li'+_thisIndex+'hover');
			$(this).find('.part_two_title').css('color','#fff');
			$(this).find('.part_two_con').css('color','#fff');
		}).mouseout(function() {
			var _thisIndex = $(this).index()+1;
			$(this).removeClass('row_bg'+_thisIndex);
			$(this).find('.part_two_row').removeClass('row_bg');
			$(this).find('.pt_li'+_thisIndex).removeClass('pt_li'+_thisIndex+'hover');
			$(this).find('.part_two_title').css('color','#323232');
			$(this).find('.part_two_con').css('color','#010101');
		});

		//six
		$('.p_s_title span').on('click',function(){
			$(this).addClass('p_s_current').siblings().removeClass('p_s_current');
			var _index = $(this).index();
			if( _index === 0 ){
				$('.p_s_con').text('全方位打造春雨国际会员体系。注册春雨国际会员，您即可享受诊前、诊中、诊后全程关怀，亦可进行在线咨询和会员档案管理，让我们随时随地守护您的健康。我们合作海外优质医疗资源，并结合春雨医生国内服务，为您提供全方位的保障。');
				$('.p_s_enter').text('申请加入我们');
			};
			if( _index === 1 ){
				$('.p_s_con').text('作为国内首家通过互联网实现跨境医疗资源整合的公司，春雨国际整合全球供应商，合作海外优质医疗机构，将国际顶级医疗资源聚合线上平台。机构入驻春雨国际平台后，可在平台展示机构信息和机构产品，让更多客户关注和了解，并实现产品、服务的在线预约支付。');
				$('.p_s_enter').text('申请入驻平台');
			}
		});

		//我们的优势
		(function(){
			//文案
			var showText = [
				//01
				{title:'直营品牌保障',
				 content:'洛杉矶老牌直营月子中心，国内外同一服务团队。正规注册公司，安全有保障。'},
				//02
				{title:'一站式定制服务',
				 content:'一条龙服务：前期咨询、定制套餐、办理签证过海关、待产分娩、宝宝证件办理，回国上户口等。'},
				 //03
				{title:'赴美生子诚实签',
				 content:'资深顾问全面评估客人条件，协助办理赴美生子诚实签，通过率高达90%。'},
				 //04
				 {title:'套餐价格多样',
					 content:'提供十多种套餐供客人选择，满足客人的不同需求，更有量身定做私人订制服务。'},
				 //05
				{title:'免费预约服务',
				 content:'洛杉矶权威生产服务，免费帮助客人预约，享受最好的专业资源。'},
				 //06
				 {title:'严保客户隐私',
					 content:'无论是国内咨询，还是国外待产，喜多月子中心会严密保护客人隐私不泄露。'},
			];
			//静态赋值
			$('.pt_left_01 p').text( showText[0].title );
			$('.pt_left_02 p').text( showText[1].title );
			$('.pt_left_03 p').text( showText[2].title );
			$('.pt_left_06 p').text( showText[3].title );
			$('.pt_left_05 p').text( showText[4].title );
			$('.pt_left_04 p').text( showText[5].title );

			function showImg(_ptLeftImg,ptImg,ptImgHover){
				$(_ptLeftImg).mouseover(function(){
					$(this).attr('src',ptImg);
					var conIndex = $(this).attr('data-main')-1;
					$(this).siblings('p').css('color','#cda460');
					$('.pt_datail_title').text( showText[conIndex].title );
					$('.pt_datail_con').text( showText[conIndex].content );
					$('.pt_datail_page').text( (conIndex+1)+'/6' );
				}).mouseout(function(){
					$(this).siblings('p').css('color','#b72024');
					$(this).attr('src',ptImgHover);
				});
			};
			showImg('.pt_left_01 img','/wap_new/img/part3_03hover.png','/wap_new/img/part3_03.png');
			showImg('.pt_left_02 img','/wap_new/img/part3_02hover.png','/wap_new/img/part3_02.png');
			showImg('.pt_left_03 img','/wap_new/img/part3_04hover.png','/wap_new/img/part3_04.png');
			showImg('.pt_left_04 img','/wap_new/img/part3_07hover.png','/wap_new/img/part3_07.png');
			showImg('.pt_left_05 img','/wap_new/img/part3_06hover.png','/wap_new/img/part3_06.png');
			showImg('.pt_left_06 img','/wap_new/img/part3_05hover.png','/wap_new/img/part3_05.png');
		})();

		//明星产品
//		$('.part_four li').mouseenter(function(){
//			$('.four_detail_main').hide();
//			$(this).find('.four_detail_main').show()
//		}).mouseleave(function(event) {
//			$('.four_detail_main').hide();
//		});
//		$('.four_detail_main div').mouseover(function(){
//			$(this).css({'background-color':'#fff','color':'#010101'});
//		}).mouseout(function(){
//			$(this).css({'background-color':'transparent','color':'#fff'});
//		});
		
		//春雨国际平台入驻医院
		$('.part_five li').mouseenter(function(){
			$('.five_detail_main').hide();
			$(this).find('.five_detail_main').show()
		}).mouseleave(function(event) {
			$('.four_detail_main').hide();
		});

		//成功案例
		$('.ps_haddleTop').mouseover(function(){
			$(this).addClass('ps_haddleTopHover');
		}).mouseout(function(){
			$(this).removeClass('ps_haddleTopHover');
		});
		$('.ps_haddleBottom').mouseover(function(){
			$(this).addClass('ps_haddleBottomHover');
		}).mouseout(function(){
			$(this).removeClass('ps_haddleBottomHover');
		});
		//翻页
		var flag = 1,
		    size = $('.ps_right_con li').length/4;
		size%1 === 0 ? size=size : size = size+1;
		$('.ps_haddleBottom').click(function(){
			if(flag >= size){return false};
			var psRightMarginTop = parseInt($('.ps_right_con ul').css('margin-top'))-476;
			$('.ps_right_con ul').animate({'margin-top':psRightMarginTop+'px'},1000);
			flag++;
		});
		$('.ps_haddleTop').click(function(){
			if(flag <= 1){return false};
			var psRightMarginButton = parseInt($('.ps_right_con ul').css('margin-top'))+476;
			$('.ps_right_con ul').animate({'margin-top':psRightMarginButton+'px'},1000);
			flag--;
		});

		//媒体报道
		$('.pf_img img').mouseenter(function(){
			$(this).animate({'width':'110%','height':'110%'},1000);
		}).mouseout(function(){
			$(this).animate({'width':'100%','height':'100%'},1000);
		});

		//新闻消息
		$('.pe_one p').click(function(){
			$(this).addClass('current').siblings().removeClass('current');
		});

		//查看更多
		$('.part_more').mouseenter(function(){
			$(this).css({'background-color':'#b72024','color':'#fff'});
		}).mouseleave(function(){
			$(this).css({'background-color':'transparent','color':'#b72024'});
		});

		//客服咨询
		$('.my_corsult span').mouseover(function(){
			$(this).css('background-color','#b72024').text('立即咨询');
		}).mouseout(function(){
			$(this).css('background-color','transparent').text('1对1VIP客服咨询');
		});	
		$('.my_corsult').css('line-height','80px');
		//字数控制，汉子2个字符长度，英文1个字符长度
		//目前只做了汉子形式的截取
		(function(){
			//工具函数
			function fontSize(str){
			    var realLength = 0, len = str.length, charCode = -1;
			    for (var i = 0; i < len; i++) {
			        charCode = str.charCodeAt(i);
			        if (charCode >= 0 && charCode <= 128) realLength += 1;
			        else realLength += 2;
			    }
			    return realLength;
			};
			//缓存变量
			var _thisSize,$this,_thisText,beforeTest,afterTest;

			$('.part_four_title').each(function(){
				_thisSize = fontSize( $(this).text() );
				$this = $(this);
				_thisText = $(this).text();

				if(_thisSize>30){
					beforeTest = _thisText.substring(0,16);
					afterTest = _thisText.substring(16);
					$this.css('line-height','33px');
					$this.html( '<span>'+beforeTest+'</span><br></span>'+afterTest+'</span>' );
				}else{
					$this.css('line-height','66px');
					$this.html( _thisText );
				};
			});
			$('.part_five_title').each(function(){
				_thisSize = fontSize( $(this).text() );
				$this = $(this);
				_thisText = $(this).text();

				if(_thisSize>30){
					beforeTest = _thisText.substring(0,12);
					afterTest = _thisText.substring(12);
					$this.css({'line-height':'27px','padding-top':'6px','height':'60px'});
					$this.html( '<span>'+beforeTest+'</span><br></span>'+afterTest+'</span>' );
				}else{
					$this.css({'line-height':'66px','padding-top':'0px','height':'66px'});
					$this.html( _thisText );
				};
			});
			$('.ps_right_con li').each(function(){
				_thisSize = fontSize( $(this).find('p').text() );
				$this = $(this).find('p');
				_thisText = $(this).find('p').text();

				if(_thisSize>30){
					beforeTest = _thisText.substring(0,12);
					afterTest = _thisText.substring(12);
					$this.css({'line-height':'25px','padding-top':'12px','height':'62px'});
					$this.html( '<span>'+beforeTest+'</span><br></span>'+afterTest+'</span>' );
				}else{
					$this.css({'line-height':'74px','padding-top':'0','height':'74px'});
					$this.html( _thisText );
				};
			});
		})();
		
//		//成功案例 
//		$('.ps_right_con li').mouseenter(function(){
//			var id = $(this).attr("data-id");
//			toHtml2(id);
//			
//		});
	}
	
	
	function news(){
		$("#news").addClass('current');
		$("#new").removeClass('current');
		$("#success").removeClass('current');
		
		var get = "";
		
		$.ajax({  
	        url:'/newsList.html'+get,  
	        type:'get',  
	        data:"{}",  
	        dataType:'json',  
	        success:function (data) {
	        	//alert("1");
	            if(data != "[null]"){
	    			var jsonData = eval(data);
	    			var html=[];
	    			html = toHtml(jsonData);
	        		
	        		$("#info").html(html.join(""));
	        	}else{
	        		if(flag==false){
	        			$("#info").html("<div class='main_content_middle_more'>没有数据</div>");
	        			flag = true;
	        		}
	        	}
	            
	        }  
	    });
		
	}
	function newList(){
		$("#news").removeClass('current');
		$("#new").addClass('current');
		$("#success").removeClass('current');
		
		var get = "";
		
		$.ajax({  
	        url:'/newList.html'+get,  
	        type:'get',  
	        data:"{}",  
	        dataType:'json',  
	        success:function (data) {
	        	//alert("1");
	            if(data != "[null]"){
	    			var jsonData = eval(data);
	    			var html=[];
	    			html = toHtml(jsonData);
	        		
	        		$("#info").html(html.join(""));
	        	}else{
	        		if(flag==false){
	        			$("#info").html("<div class='main_content_middle_more'>没有数据</div>");
	        			flag = true;
	        		}
	        	}
	            
	        }  
	    });
	}
	function successList(){
		$("#news").removeClass('current');
		$("#new").removeClass('current');
		$("#success").addClass('current');
		
		var get = "";
		
		$.ajax({  
	        url:'/successList.html'+get,  
	        type:'get',  
	        data:"{}",  
	        dataType:'json',  
	        success:function (data) {
	        	//alert("1");
	            if(data != "[null]"){
	    			var jsonData = eval(data);
	    			var html=[];
	    			html = toHtml(jsonData);
	        		
	        		$("#info").html(html.join(""));
	        	}else{
	        		if(flag==false){
	        			$("#info").html("<div class='main_content_middle_more'>没有数据</div>");
	        			flag = true;
	        		}
	        	}
	            
	        }  
	    });
	}
	
	function toHtml(jsonData){
		var html=[];
		if(jsonData!=null){
			html.push("<ul class='pe_two_con'>");
			for(var i=0;i<2;i++){		
				html.push("<li>");
				if(i==0){
					html.push("<img onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" src='"+jsonData[i].pic+"?imageView2/1/w/276/h/156' height='160' width='190' title=\""+jsonData[i].title_web+"\" alt=\""+jsonData[i].title_web+"_春雨国际\"/>");
				}else{
					html.push("<img class='pe_margin' onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" src='"+jsonData[i].pic+"?imageView2/1/w/276/h/156' height='160' width='190' title=\""+jsonData[i].title_web+"\" alt=\""+jsonData[i].title_web+"_春雨国际\"/>");
				}
				html.push("<div class=\"pe_two_main\">");
				html.push("<p onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" class=\"pe_main_title\">"+jsonData[i].title_web+"</p>");
				html.push("<p class=\"pe_main_con\">"+jsonData[i].caption+"</p>");
				html.push("<p onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" class=\"pe_main_more\">更多&nbsp;></p>");
				html.push("</div>");
				html.push("</li>");
			}
			html.push("</ul>");
			
			
			html.push("<ul class='pe_two_con pe_two_conline'>");
			for(var i=2;i<4;i++){	
				html.push("<li>");
				if(i==2){
					html.push("<img onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" src='"+jsonData[i].pic+"?imageView2/1/w/276/h/156' height='160' width='190' title=\""+jsonData[i].title_web+"\" alt=\""+jsonData[i].title_web+"_春雨国际\"/>");
				}else{
					html.push("<img class='pe_margin' onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" src='"+jsonData[i].pic+"?imageView2/1/w/276/h/156' height='160' width='190' title=\""+jsonData[i].title_web+"\" alt=\""+jsonData[i].title_web+"_春雨国际\"/>");
				}
				html.push("<div class=\"pe_two_main\">");
				html.push("<p onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" class=\"pe_main_title\">"+jsonData[i].title_web+"</p>");
				html.push("<p class=\"pe_main_con\">"+jsonData[i].caption+"</p>");
				html.push("<p onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\" class=\"pe_main_more\">更多&nbsp;></p>");
				html.push("</div>");
				html.push("</li>");
			}
			html.push("</ul>");
			
			html.push("<ul class=\"pe_two_con pe_two_conline2\">");
			html.push("<li>");
			html.push("<ul class=\"pe_two_summarize\">");
			for(var i=4;i<10;i++){
				html.push("<li onclick=\"javascript:window.location.href='http://www.cycares.com/info/"+jsonData[i].id+".html'\">");
				if(i%2 == 0){
					html.push("<p>");
				}else{
					html.push("<p class=\"pe_current\">");
				}
				html.push("<span class=\"pe_sum_title\">"+jsonData[i].title_web+"</span>");
				html.push("<span class=\"pe_sum_date\">"+parseDate(jsonData[i].create_time)+"</span>");
				html.push("</p></li>");
				
			}
			html.push("</ul>");
			html.push("</li>");
			html.push("<li>");
			html.push("<ul class=\"pe_two_summarize pe_liMargin\">");
			for(var i=4;i<10;i++){
				if(i%2 == 0){
					html.push("<p>");
				}else{
					html.push("<p class=\"pe_current\">");
				}
				html.push("<span class=\"pe_sum_title\">"+jsonData[i].title_web+"</span>");
				html.push("<span class=\"pe_sum_date\">"+parseDate(jsonData[i].create_time)+"</span>");
				html.push("</p></li>");
			}
			
			html.push("</ul>");
			html.push("</li>");
			html.push("</ul>");
			html.push("</div>");
			html.push("");
			html.push("");
			
		}
		
		return html;
	}
	
	//function list(id1,id2){
	//	var get = "";
	//
	//	get = "?id1="+id1+"&id2="+id2;
	//
	//	$.ajax({
	//        url:'/list.html'+get,
	//        type:'get',
	//        data:"{}",
	//        dataType:'json',
	//        success:function (data) {
	//        	//alert("1");
	//            if(data != "[null]" && data != null){
	//    			var jsonData = eval(data);
	//    			var html=[];
	//    			for(var i=0;i<jsonData.length;i++){
	//    				html.push("<li onclick=\"javascript:window.location.href='http://www.cycares.com/prod/view.html?id="+jsonData[i].id+"'\" class=\"part_one_margin\">");
	//    				html.push("<img src=\""+jsonData[i].pic+"?imageView2/1/w/380/h/215\" height=\"216\" width=\"383\" title=\""+jsonData[i].title+"\" alt=\""+jsonData[i].title+"_春雨国际\" />");
	//    				html.push("<p>"+jsonData[i].title+"</p>");
	//    				html.push("</li>");
	//    			}
	//
	//        		$("#list").html(html.join(""));
	//        	}else{
     //   			$("#list").html("<div class='main_content_middle_more'>没有数据</div>");
	//        	}
	//
	//        }
	//    });
	//}
	
	function toHtml2(id){
		var get = "";
		
		get = "?id="+id;
		
		$.ajax({  
	        url:'/infoDetail.html'+get,  
	        type:'get',  
	        data:"{}",  
	        dataType:'json',  
	        success:function (data) {
	        	//alert("1");
	            if(data != "[null]" && data != null){
	    			var jsonData = eval(data);
	    			var html=[];
	    			for(var i=0;i<jsonData.length;i++){
	    				html.push("<img src=\""+jsonData[i].pic+"?imageView2/1/w/380/h/213\" height=\"267\" width=\"577\" title=\""+jsonData[i].title_web+"\" alt=\""+jsonData[i].title_web+"_春雨国际\" />");
	    				html.push("<p class=\"ps_left_title\">"+jsonData[i].title_web+"</p>");
	    				html.push("<div class=\"ps_left_con\">");
	    				html.push("<p>"+jsonData[i].caption+"</p>");
	    			}
	        		
	        		$("#success_left").html(html.join(""));
	        	}else{
        			$("#success_left").html("<div class='main_content_middle_more'>没有数据</div>");
	        	}
	            
	        }  
	    });
	}
	
	function parseDate(dateTime){
		 var date = new Date(dateTime);
		 //return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+':'+date.getMinutes()+":"+date.getSeconds();
		 return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	}

	function mechatClick(){
		window.open('http://p.qiao.baidu.com/cps2/chatIndex?reqParam=%7B%22from%22%3A1%2C%22sessionid%22%3A%22-100%22%2C%22siteId%22%3A%225181305%22%2C%22tid%22%3A%22-1%22%2C%22userId%22%3A%227491590%22%2C%22ttype%22%3A1%2C%22pageId%22%3A0%7D');
	}

/*
 * angular-loading-bar
 *
 * intercepts XHR requests and creates a loading bar.
 * Based on the excellent nprogress work by rstacruz (more info in readme)
 *
 * (c) 2013 Wes Cruver
 * License: MIT
 */


(function() {

	'use strict';

// Alias the loading bar for various backwards compatibilities since the project has matured:
	angular.module('angular-loading-bar', ['cfp.loadingBarInterceptor']);
	angular.module('chieffancypants.loadingBar', ['cfp.loadingBarInterceptor']);


	/**
	 * loadingBarInterceptor service
	 *
	 * Registers itself as an Angular interceptor and listens for XHR requests.
	 */
	angular.module('cfp.loadingBarInterceptor', ['cfp.loadingBar'])
		.config(['$httpProvider', function ($httpProvider) {

			var interceptor = ['$q', '$cacheFactory', '$timeout', '$rootScope', '$log', 'cfpLoadingBar', function ($q, $cacheFactory, $timeout, $rootScope, $log, cfpLoadingBar) {

				/**
				 * The total number of requests made
				 */
				var reqsTotal = 0;

				/**
				 * The number of requests completed (either successfully or not)
				 */
				var reqsCompleted = 0;

				/**
				 * The amount of time spent fetching before showing the loading bar
				 */
				var latencyThreshold = cfpLoadingBar.latencyThreshold;

				/**
				 * $timeout handle for latencyThreshold
				 */
				var startTimeout;


				/**
				 * calls cfpLoadingBar.complete() which removes the
				 * loading bar from the DOM.
				 */
				function setComplete() {
					$timeout.cancel(startTimeout);
					cfpLoadingBar.complete();
					reqsCompleted = 0;
					reqsTotal = 0;
				}

				/**
				 * Determine if the response has already been cached
				 * @param  {Object}  config the config option from the request
				 * @return {Boolean} retrns true if cached, otherwise false
				 */
				function isCached(config) {
					var cache;
					var defaultCache = $cacheFactory.get('$http');
					var defaults = $httpProvider.defaults;

					// Choose the proper cache source. Borrowed from angular: $http service
					if ((config.cache || defaults.cache) && config.cache !== false &&
						(config.method === 'GET' || config.method === 'JSONP')) {
						cache = angular.isObject(config.cache) ? config.cache
							: angular.isObject(defaults.cache) ? defaults.cache
							: defaultCache;
					}

					var cached = cache !== undefined ?
					cache.get(config.url) !== undefined : false;

					if (config.cached !== undefined && cached !== config.cached) {
						return config.cached;
					}
					config.cached = cached;
					return cached;
				}


				return {
					'request': function(config) {
						// Check to make sure this request hasn't already been cached and that
						// the requester didn't explicitly ask us to ignore this request:
						if (!config.ignoreLoadingBar && !isCached(config)) {
							$rootScope.$broadcast('cfpLoadingBar:loading', {url: config.url});
							if (reqsTotal === 0) {
								startTimeout = $timeout(function() {
									cfpLoadingBar.start();
								}, latencyThreshold);
							}
							reqsTotal++;
							cfpLoadingBar.set(reqsCompleted / reqsTotal);
						}
						return config;
					},

					'response': function(response) {
						if (!response || !response.config) {
							$log.error('Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50');
							return response;
						}

						if (!response.config.ignoreLoadingBar && !isCached(response.config)) {
							reqsCompleted++;
							if (reqsCompleted >= reqsTotal) {
								$rootScope.$broadcast('cfpLoadingBar:loaded', {url: response.config.url, result: response});
								setComplete();
							} else {
								cfpLoadingBar.set(reqsCompleted / reqsTotal);
							}
						}
						return response;
					},

					'responseError': function(rejection) {
						if (!rejection || !rejection.config) {
							$log.error('Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50');
							return $q.reject(rejection);
						}

						if (!rejection.config.ignoreLoadingBar && !isCached(rejection.config)) {
							reqsCompleted++;
							if (reqsCompleted >= reqsTotal) {
								$rootScope.$broadcast('cfpLoadingBar:loaded', {url: rejection.config.url, result: rejection});
								setComplete();
							} else {
								cfpLoadingBar.set(reqsCompleted / reqsTotal);
							}
						}
						return $q.reject(rejection);
					}
				};
			}];

			$httpProvider.interceptors.push(interceptor);
		}]);


	/**
	 * Loading Bar
	 *
	 * This service handles adding and removing the actual element in the DOM.
	 * Generally, best practices for DOM manipulation is to take place in a
	 * directive, but because the element itself is injected in the DOM only upon
	 * XHR requests, and it's likely needed on every view, the best option is to
	 * use a service.
	 */
	angular.module('cfp.loadingBar', [])
		.provider('cfpLoadingBar', function() {

			this.autoIncrement = true;
			this.includeSpinner = true;
			this.includeBar = true;
			this.latencyThreshold = 100;
			this.startSize = 0.02;
			this.parentSelector = 'body';
			this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
			this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';

			this.$get = ['$injector', '$document', '$timeout', '$rootScope', function ($injector, $document, $timeout, $rootScope) {
				var $animate;
				var $parentSelector = this.parentSelector,
					loadingBarContainer = angular.element(this.loadingBarTemplate),
					loadingBar = loadingBarContainer.find('div').eq(0),
					spinner = angular.element(this.spinnerTemplate);

				var incTimeout,
					completeTimeout,
					started = false,
					status = 0;

				var autoIncrement = this.autoIncrement;
				var includeSpinner = this.includeSpinner;
				var includeBar = this.includeBar;
				var startSize = this.startSize;

				/**
				 * Inserts the loading bar element into the dom, and sets it to 2%
				 */
				function _start() {
					if (!$animate) {
						$animate = $injector.get('$animate');
					}

					$timeout.cancel(completeTimeout);

					// do not continually broadcast the started event:
					if (started) {
						return;
					}

					var document = $document[0];
					var parent = document.querySelector ?
							document.querySelector($parentSelector)
							: $document.find($parentSelector)[0]
						;

					if (! parent) {
						parent = document.getElementsByTagName('body')[0];
					}

					var $parent = angular.element(parent);
					var $after = parent.lastChild && angular.element(parent.lastChild);

					$rootScope.$broadcast('cfpLoadingBar:started');
					started = true;

					if (includeBar) {
						$animate.enter(loadingBarContainer, $parent, $after);
					}

					if (includeSpinner) {
						$animate.enter(spinner, $parent, loadingBarContainer);
					}

					_set(startSize);
				}

				/**
				 * Set the loading bar's width to a certain percent.
				 *
				 * @param n any value between 0 and 1
				 */
				function _set(n) {
					if (!started) {
						return;
					}
					var pct = (n * 100) + '%';
					loadingBar.css('width', pct);
					status = n;

					// increment loadingbar to give the illusion that there is always
					// progress but make sure to cancel the previous timeouts so we don't
					// have multiple incs running at the same time.
					if (autoIncrement) {
						$timeout.cancel(incTimeout);
						incTimeout = $timeout(function() {
							_inc();
						}, 250);
					}
				}

				/**
				 * Increments the loading bar by a random amount
				 * but slows down as it progresses
				 */
				function _inc() {
					if (_status() >= 1) {
						return;
					}

					var rnd = 0;

					// TODO: do this mathmatically instead of through conditions

					var stat = _status();
					if (stat >= 0 && stat < 0.25) {
						// Start out between 3 - 6% increments
						rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
					} else if (stat >= 0.25 && stat < 0.65) {
						// increment between 0 - 3%
						rnd = (Math.random() * 3) / 100;
					} else if (stat >= 0.65 && stat < 0.9) {
						// increment between 0 - 2%
						rnd = (Math.random() * 2) / 100;
					} else if (stat >= 0.9 && stat < 0.99) {
						// finally, increment it .5 %
						rnd = 0.005;
					} else {
						// after 99%, don't increment:
						rnd = 0;
					}

					var pct = _status() + rnd;
					_set(pct);
				}

				function _status() {
					return status;
				}

				function _completeAnimation() {
					status = 0;
					started = false;
				}

				function _complete() {
					if (!$animate) {
						$animate = $injector.get('$animate');
					}

					_set(1);
					$timeout.cancel(completeTimeout);

					// Attempt to aggregate any start/complete calls within 500ms:
					completeTimeout = $timeout(function() {
						var promise = $animate.leave(loadingBarContainer, _completeAnimation);
						if (promise && promise.then) {
							promise.then(_completeAnimation);
						}
						$animate.leave(spinner);
						$rootScope.$broadcast('cfpLoadingBar:completed');
					}, 500);
				}

				return {
					start            : _start,
					set              : _set,
					status           : _status,
					inc              : _inc,
					complete         : _complete,
					autoIncrement    : this.autoIncrement,
					includeSpinner   : this.includeSpinner,
					latencyThreshold : this.latencyThreshold,
					parentSelector   : this.parentSelector,
					startSize        : this.startSize
				};


			}];     //
		});       // wtf javascript. srsly
})();       //
