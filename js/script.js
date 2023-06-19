/*================タイトルのテキストの動き===================*/
// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");
  
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//   particlesJS("particles-js",{
// 	"particles":{
// 		"number":{
			"value":38,//この数値を変更すると幾何学模様の数が増減できる
		// 	"density":{
		// 		"enable":true,
		// 		"value_area":800
		// 	}
		// },
		// "color":{
			"value":"#ffffff"//色
		// },
		// "shape":{
			"type":"polygon",//形状はpolygonを指定
	// 		"stroke":{
	// 			"width":0,
	// 		},
	// "polygon":{
		"nb_sides":3//多角形の角の数
	// },
	// "image":{
	// 	"width":190,
	// 	"height":100
	// }
	// },
	// 	"opacity":{
	// 	"value":0.664994832269074,
	// 	"random":false,
	// 	"anim":{
	// 		"enable":true,
	// 		"speed":2.2722661797524872,
	// 		"opacity_min":0.08115236356258881,
	// 		"sync":false
	// 	}
	// 	},
	// 	"size":{
	// 		"value":3,
	// 		"random":true,
	// 		"anim":{
	// 			"enable":false,
	// 			"speed":40,
	// 			"size_min":0.1,
	// 			"sync":false
	// 		}
	// 	},
	// 	"line_linked":{
	// 		"enable":true,
	// 		"distance":150,
	// 		"color":"#ffffff",
	// 		"opacity":0.6,
	// 		"width":1
	// 	},
	// 	"move":{
	// 		"enable":true,
			"speed":6,//この数値を小さくするとゆっくりな動きになる
			"direction":"none",//方向指定なし
			"random":false,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
// 			"attract":{
// 				"enable":false,
// 				"rotateX":600,
// 				"rotateY":961.4383117143238
// 			}
// 		}
// 	},
// 	"interactivity":{
// 		"detect_on":"canvas",
// 		"events":{
// 			"onhover":{
// 				"enable":false,
// 				"mode":"repulse"
// 			},
// 	"onclick":{
// 		"enable":false
// 	},
// 	"resize":true
// 		}
// 	},
// 	"retina_detect":true
// });

// function clickBtn5() {
//     const ta3 = document.getElementById("textarea3").value;
//     document.getElementById("span3").textContent = ta3;
//   }

function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
	}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述