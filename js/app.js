$(function(){
	var firstsection=function(index){
        move('.bg1').duration('0.7s').ease('in').y(-450).set('opacity',1).end();
        move('.bg2').y(-377).end();
        move('.mail').y(40).end();
        move('.hgroup').scale(1).set('opacity',1).end();
	}
	var secondsection=function(index){
		move('.bg21').set('opacity',1).set('left','90%').end();
		move('.bg22').set('opacity',1).set('left','6%').end();
		move('.bg23').y(-380).end();
		move('.section strong').scale(1).set('opacity',1).x(-200).end();
		move('.section h3').duration('0.5s').scale(1).set('opacity',1).end();
	}
	var threesection=function(index){
		move('.bg31').set('opacity',1).end();
		move('.bg32').set('opacity',1).end();
		move('.bg33').duration('1s').set('opacity',1).x(-800).end();
		move('.section3 strong').scale(1).set('opacity',1).x(-180).end();
		move('.section3 h3').scale(1).y(0).x(-20).set('opacity',1).end();
		move('.p3').set('opacity',1).set('left','115%').end();
	}
	var foursection=function(index){
		move('.bg41').y(-480).end();
		move('.bg42').duration('2s').y(-560).end();
		move('.bg43').duration('1s').y(-560).end();
		move('.section4 strong').scale(1).set('opacity',1).x(-180).end();
		move('.section4 h3').scale(1).y(0).x(-20).set('opacity',1).end();
		move('.p1').set('opacity',1).set('left','48%').end();
	}
	var fivesection=function(index){
		move('.bg51').set('margin-left','-551px').set('opacity',1).y(45).duration('0.7s').end();
		move('.bg52').set('margin-left','-253px').set('opacity',1).y(45).duration('0.7s').end();
		move('.bg53').set('margin-left','45px').set('opacity',1).y(45).duration('0.7s').end();
		move('.bg54').set('margin-left','345px').set('opacity',1).y(45).duration('0.7s').end();
		move('.section5 strong').duration('0.7s').scale(1).set('opacity',1).x(-190).end();
		move('.section5 h3').duration('0.7s').scale(1).set('opacity',1).end();
	}
	var sixsection=function(index){
		move('.bg61').set('top','0px').duration('0.7s').end();
		move('.bg62').set('left','50%').set('opacity',1).end();
		move('.txt6').set('left','50%').set('opacity',1).end();
		move('.section6 strong').duration('0.7s').scale(1).set('opacity',1).x(-200).end();
		move('.section6 h3').duration('0.7s').scale(1).set('opacity',1).end();
	}
	var sevensection=function(index){
		move('.bg71').set('bottom',"250px").duration('0.7s').set('opacity',1).end();
		move('.bg72').set('bottom',"350px").duration('0.9s').set('opacity',1).end();
		move('.txt7').set('bottom',"420px").duration('1.1s').set('opacity',1).end();
		move('.section7 strong').duration('0.7s').scale(1).set('margin-left','-280px').set('opacity',1).x(-200).end();
		move('.section7 h3').duration('1s').scale(1).set('opacity',1).end();
	}
	var eightsection=function(index){
		move('.bg82').duration('0.7s').set('margin-left','-280px').set('opacity',1).set('bottom','260px').end();
		move('.bg83').duration('1s').set('margin-left','-430px').set('opacity',1).set('bottom','380px').end();
		move('.bg84').duration('1.2s').set('margin-left','-510px').set('opacity',1).set('bottom','420px').end();
		move('.section8 strong').duration('0.7s').set('opacity',1).scale(1).x(-220).end();
		move('.section8 h3').duration('0.7s').set('opacity',1).scale(1).end();
		move('.section8 .p8').set('opacity',1).duration('1.2s').scale(1).end();
	}
	var ninesection=function(indxe){
		move('.bg91').duration('0.7s').set('margin-left','-570px').set('opacity',1).y(30).end();
		move('.bg92').duration('0.8s').set('opacity',1).y(30).end();
		move('.bg93').duration('0.7s').set('margin-left','230px').set('opacity',1).y(30).end();
		move('.section9 strong').duration('0.7s').set('opacity',1).scale(1).x(-220).end();
		move('.section9 h3').duration('0.7s').set('opacity',1).scale(1).end();
	}
	var tensection=function(index){
		move('.bg101').y(-300).end();
		move('.bg102').set('opacity',1).duration('0.7s').scale(1).end();
		move('.bg103').set('opacity',1).duration('0.7s').scale(1).end();
		move('.section10 .go').set('top','25%').duration('1.2s').set('opacity',1).end();
	}
	$('#fullpage').fullpage({
		sectionsColor:["#765676",'#763273','#892234','#837458','#958430','#348495','#293844','#239488'],
		controlArrows:true,
		verticalCententered:false,
		resize:true,
		navigation:true,
		navigationTooltips:['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
		anchors:['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10'],
		lockAnchors:true,
		afterLoad:function(link,index){
			switch(link){
				case 's1':firstsection(index);
				break;
				case 's2':secondsection(index);
				break;
				case 's3':threesection(index);
				break;
				case 's4':foursection(index);
				break;
				case 's5':fivesection(index);
				break;
				case 's6':sixsection(index);
				break;
				case 's7':sevensection(index);
				break;
				case 's8':eightsection(index);
				break;
				case 's9':ninesection(index);
				break;
				case 's10':tensection(index);
				break;
			}
		},
		onLeave:function(index,dindex){
			if(index==1){
				move('.bg1').y(0).end();
				move('.bg2').y(0).end();
				move('.mail').y(0).end();
				move('.hgroup').scale(0).set('opacity',0).end();
			}
			if(index==2){
				move('.bg21').set('opacity',0).set('left','50%').end();
				move('.bg22').set('opacity',0).set('left','50%').end();
				move('.bg23').y(0).end();
				move('.section strong').scale(0).set('opacity',0).x(0).end();
				move('.section h3').scale(0).y(0).set('opacity',0).end();
			}
			if(index==3){
				move('.bg31').set('opacity',0).end();
				move('.bg32').set('opacity',0).end();
				move('.bg33').set('opacity',1).x(0).end();
				move('.section3 strong').scale(0.5).set('opacity',0).x(0).end();
				move('.section3 h3').scale(0.5).y(0).x(0).set('opacity',0).end();
				move('.p3').set('opacity',0).set('left','50%').end();
			}
			if(index==4){
				move('.bg41').y(0).end();
				move('.bg42').duration('2s').y(0).end();
				move('.bg43').duration('1s').y(0).end();
				move('.section4 strong').scale(0.5).set('opacity',0).x(0).end();
				move('.section4 h3').scale(0.5).y(0).x(0).set('opacity',0).end();
				move('.p1').set('opacity',0).set('left','0').end();
			}
			if(index==5){
				move('.bg51').set('margin-left','-851px').set('opacity',0).y(45).duration('0.7s').end();
				move('.bg52').set('margin-left','-403px').set('opacity',0).y(45).duration('0.7s').end();
				move('.bg53').set('margin-left','195px').set('opacity',0).y(45).duration('0.7s').end();
				move('.bg54').set('margin-left','645px').set('opacity',0).y(45).duration('0.7s').end();
				move('.section5 strong').duration('0.7s').scale(0.5).set('opacity',0).x(0).end();
				move('.section5 h3').duration('0.7s').scale(0.5).set('opacity',0).end();
			}
			if(index==6){
				move('.bg61').set('top','-454px').duration('0.7s').end();
				move('.bg62').set('left','10%').set('opacity',0).end();
				move('.txt6').set('left','90%').set('opacity',0).end();
				move('.section6 strong').duration('0.7s').scale(0.5).set('opacity',0).x(0).end();
				move('.section6 h3').duration('0.7s').scale(0.5).set('opacity',0).end();
			}
			if(index==7){
				move('.bg71').y(0).set('opacity',0).end();
				move('.bg72').y(0).set('opacity',0).end();
				move('.txt7').y(0).set('opacity',0).end();
				move('.section7 strong').scale(0).x(0).set('opacity',0).end();
				move('.section7 h3').scale(0).set('opacity',0).end();
			}
			if(index==8){
				move('.bg82').duration('0.7s').set('margin-left','-180px').set('opacity',0).set('bottom','160px').end();
				move('.bg83').duration('1s').set('margin-left','-330px').set('opacity',0).set('bottom','280px').end();
				move('.bg84').duration('1.2s').set('margin-left','-410px').set('opacity',0).set('bottom','320px').end();
				move('.section8 strong').duration('0.7s').set('opacity',0).scale(0).x(0).end();
				move('.section8 h3').duration('0.7s').set('opacity',0).scale(0).end();
				move('.p8').set('opacity',0).scale(0).duration('1s').end();
			}
			if(index==9){
				move('.bg91').duration('0.7s').set('margin-left','-970px').set('opacity',0).y(0).end();
				move('.bg92').duration('0.8s').set('opacity',0).y(0).end();
				move('.bg93').duration('0.7s').set('margin-left','630px').set('opacity',0).y(0).end();
				move('.section9 strong').duration('0.7s').set('opacity',0).scale(0.5).x(0).end();
				move('.section9 h3').duration('0.7s').set('opacity',0).scale(0.5).end();
			}
			if(index==10){
				move('.bg101').y(0).end();
				move('.bg102').set('opacity',0).duration('0.7s').scale(0.5).end();
				move('.bg103').set('opacity',0).duration('0.7s').scale(0.5).end();
				move('.section10 .go').set('top','55%').duration('1.2s').set('opacity',0).end();
			}
		}
	})
	$('.right').css({'color':'#eee','font-size':'12px'});
	$('.right li a span').css({'background':'#333'})
})