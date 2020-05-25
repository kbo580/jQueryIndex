$(function(){
/////////////共通設定////////////
$('.header-nav li').hover(
  function(){
  $('ul:not(:animated)',this).slideDown();
},function(){
  $('.indexSub',this).slideUp();
}
);

$('#top').click(function(){
  $('html,body').animate({'scrollTop':0},300)
});

$('footer .fab').hover(function(){
 $(this).not(":animated").animate({'font-size':'100px'},300)
},function(){
  $(this).animate({'font-size':'50px'},300)
});

///////////////セレクター////////////
$('#cssBtn').click(function(){
$('#css').css('color','red');
});

$('#idBtn').click(function(){
$('.id>#first').css('color','red');
});

$('#shisonBtn').click(function(){
$('.shison>#first strong').css('color','red')
});

$('#groupBtn').click(function(){
$('.group>#first, .group>#third').css('color','red')
});

$('#childrenBtn').click(function(){
$('.children>li > strong').css('color','red')
});

$('#nextBtn').click(function(){
$('.next>#second + li').css('color','red')
});

$('#firstChildBtn').click(function(){
$('.first-child ul>li:first-child' ).css('color','red')
});

$('#lastChildBtn').click(function(){
  $('.first-child ul>li:last-child' ).css('color','blue')
});

$('#kansetuBtn').click(function(){
$('.kansetu> #second~li').css('color','red')
});

$('#hiteiBtn').click(function(){
$('.hitei>li:not(:first-child)').css('color','red')
});

$('#hiteiSecondBtn').click(function(){
$('.hiteiSecond>li:not(#third,#fourth)').css('color','red')
});

$('#emptyBtn').click(function(){
$('.empty>li:empty').css('color','red');
});

$('#nthBtn').click(function(){
$('.nth>li:nth-child(3)').css('color','red');
});
$('#nthOddBtn').click(function(){
$('.nth>li:nth-child(odd)').css('color','green');
});
$('#nthEvenBtn').click(function(){
$('.nth>li:nth-child(even)').css('color','blue');
});
$('#nthmultiBtn').click(function(){
  $('.nth>li:nth-child(4n)').css('color','yellowgreen');
  });
$('#nthResetBtn').click(function(){
$('.nth>li').css('color','#333');
});

$('#nthLastBtn').click(function(){
$('.nth-last-child>li:nth-last-child(3)').css('color','red');
});

$('#nthTypeBtn').click(function(){
$('.nth-of-type>dt:nth-of-type(2)').css('color','red');
});
$('#nthTypeBtn').click(function(){
$('.nth-of-type>dt:first-of-type').css('color','green');
});
$('#nthTypeBtn').click(function(){
$('.nth-of-type>dt:last-of-type').css('color','blue');
});
$('#nthTypeOddBtn').click(function(){
$('.nth-of-type>dt:nth-of-type(odd)').css('color','orange');
});
$('#nthTypeEvenBtn').click(function(){
$('.nth-of-type>dt:nth-of-type(even)').css('color','yellowgreen');
});
$('#nthTypeEvenrisetBtn').click(function(){
$('.nth-of-type>dt').css('color','#333');
});

$('#attrBtn').click(function(){
$('.attr> [id]').css('color','red');
});

$('#sameBtn').click(function(){
$('.same>[id="second"]').css('color','red');
});

$('#diferBtn').click(function(){
$('.difer>[id!="second"]').css('color','red');
});

$('#startBtn').click(function(){
$('.start>[id^="f"]').css('color','red');
});

$('#endBtn').click(function(){
$('.end>[id$="d"]').css('color','red');
});

$('#contBtn').click(function(){
$('.cont>[id*="ir"]').css('color','red');
});

$('#sametimeBtn').click(function(){
$('.sametime>[id*="ir"][id$="t"]').css('color','red');
});

$('#ltBtn').click(function(){
  $('.eq>li:lt(2)').css('color','blue');
});
$('#eqBtn').click(function(){
$('.eq>li:eq(2)').css('color','red');
});
$('#gtBtn').click(function(){
  $('.eq>li:gt(2)').css('color','green');
});
$('#resetBtn').click(function(){
  $('.eq>li').css('color','#333');
});

$('#unqueEvenBtn').click(function(){
$('.evenOdd>li:even').css('color','red');
});
$('#unqueOddBtn').click(function(){
$('.evenOdd>li:odd').css('color','green');
});

$('#unqueFirstBtn').click(function(){
$('.firstLast>li:first').css('color','red');
});

$('#unqueLastBtn').click(function(){
$('.firstLast>li:last').css('color','green');
});

$('#containsBtn').click(function(){
$('.contains>li:contains("サンプル")').css('color','red');
});
$('#hasBtn').click(function(){
$('.contains>li:has("strong")').css('color','blue');
});



$('#childrenBtn').click(function(){
$('.children>li > strong').css('color','red');
});
$('#childrenBtn').click(function(){
$('.children>li > strong').css('color','red');
});

$('#serectorIndex> li a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
 $('html,body').animate({'scrollTop':position},600)
});




///////////////命令////////////
$('#orderIndex> li a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
 $('html,body').animate({'scrollTop':position},600)
});

$('#changeTextBtn').click(function(){
  $('#changeText').text('changed!').css('color','red');
  });

$('#changeTextBtn').click(function(){
  $('#changeText').text('changed!').css('color','red');
});

$('#getTextBtn').click(function(){
  $('#getTextP').text($('#getText').text()).css('color','red');
  });

$('#changeHtmlBtn').click(function(){
$('#changeHtml').html('<strong>変更後</strong>').css('color','red');
});

$('#getHtmlBtn').click(function(){
  $('#getHtmlP').html($('#getHtml').html()).css('color','red');
  });

$('#prependBtn').one('click',function(){
  $('#insert>li:eq(0)').prepend('<strong>prepend</strong>');
});
$('#appendBtn').one('click',function(){
  $('#insert>li:eq(3)').append('<strong>append</strong>');
});
$('#beforeBtn').one('click',function(){
  $('#insert>li:eq(0)').before('<h3>before</h3>');
});
$('#afterBtn').one('click',function(){
  $('#insert>li:eq(3)').after('<h3>after</h3>');
});

$('#prependToBtn').one('click',function(){
  $('#prependTo').prependTo('#insert2>li:eq(0)').css('color','red');
});
$('#appendToBtn').one('click',function(){
  $('#appendTo').appendTo('#insert2>li:eq(3)').css('color','red');
});
$('#insertBeforeBtn').one('click',function(){
  $('#insertBefore').insertBefore('#insert2>li:eq(0)').css('color','red');;
});
$('#insertAfterBtn').one('click',function(){
  $('#insertAfter').insertAfter('#insert2>li:eq(3)').css('color','red');;
});


$('#changeAttrBtn').click(function(){
  $('#changeAttr').attr('href','https://www.yahoo.co.jp/').text("googleへ(実際のリンクはgoogleではなくyahoo!になっている)").css('color','red');
});

$('#wrapBtn').click(function(){
  $('.wrap-wraper>p').wrap('<div class="wrap"></div>');
});
$('#wrapAllBtn').click(function(){
  $('.wrapAll-wraper>p').wrapAll('<div class="wrapAll"></div>');
});

$('#unwrapBtn').click(function(){
  $('.unwrap-wraper>p').unwrap();
});



$('#getAttrBtn').click(function(){
 $('#getAttr').attr('href');
 $('#getAttrInsert').text($('#getAttr').attr('href'));
});


$('#addClassBtn').click(function(){
  $('#attrClass').addClass('attrClass');
});
$('#removeClassBtn').click(function(){
  $('#attrClass').removeClass('attrClass');
});

$('#changeCssBtn').click(function(){
  $('#changeCss').css('color','red');;
});

$('#changeCsssBtn').click(function(){
  $('#changeCsss').css({'color':'red','backgroundColor':'yellow',});
});

$('#getCssBtn').click(function(){
  $('#getCssInsert').text($('#getCssProp').css("color"));
});


$('#hasClassBtn').click(function(){
if($('#hasClass').hasClass('judge')){
  $('#hasClass').text('持ってます!');
}else{
  $('#hasClass').text('持ってません');
}
});

$('#toggleClassBtn').click(function(){
  $('#toggleClass').toggleClass('toggle');
});

$('#parentBtn').click(function(){
  $('.parent-wrapper #sub').parent( ).css("color","red");
});
$('#childrenBtn').click(function(){
  $('.parent-wrapper #sub').children().css("color","blue");
});

$('#nextBtn').click(function(){
  $('.next-wrapper #main>li:eq(1)').next( ).css("color","red");
});
$('#prevBtn').click(function(){
  $('.next-wrapper #sub>li:eq(2)').prev().css("color","blue");
});
$('#siblingsBtn').click(function(){
  $('.siblings-wrapper #sub>li:eq(2)').siblings().css("color","red");
});

$('.indexList>li').click(function(){
  var indexNum = $('.indexList>li').index(this);
 $('#indexList').text(`インデックス番号は${indexNum}です。`);
});

$('.indexList2>button').click(function(){
  var index = $('.indexList2>li').index($('#getIndex'));
  $('#indexList2').text(index);
});

$('#topBtn').click(function(){
$('html,body').scrollTop(0);
});

$('#offsetBtn').click(function(){
var offset = $('#offsetP').offset().top;
$('#offsetText').text(offset);
});


/////////////イベント////////////
$('#eventIndex> li a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
 $('html,body').animate({'scrollTop':position},600)
});

$('#click-btn').click(function(){
  $('#click').html('<h3>&lt;h3>変わりました！&lt;/h3></h3>').css('color','red');
});
$('#img-chang-btn').click(function(){
  $('.cat-1').attr('src','image/ぬこ２.jpg').attr('atr','ぬこ２');
});

$('#img-chang-dblbtn').dblclick(function(){
  $('.cat-3').attr('src','image/ぬこ４.jpg').attr('atr','ぬこ４');
});

$('#mouseup-btn').mousedown(function(){
  $('.cat-5').attr('src','image/ヒョウ１.jpg').attr('atr','ヒョウ１');
});
$('#mouseup-btn').mouseup(function(){
  $('.cat-5').attr('src','image/ぬこ５.jpg').attr('atr','ぬこ５');
});

$('#mouseover-btn').mouseover(function(){
  $('.cat-6').attr('src','image/ぬこ７.jpg').attr('atr','ぬこ７');
}).mouseout(function(){
  $('.cat-6').attr('src','image/ぬこ６.jpg').attr('atr','ぬこ６');

});


$('.box').mouseover(function(){
$(this).animate({fontSize : '24px'}, 500);
}).mouseout(function(){
  $(this).animate({fontSize : '16px'}, 500);
});


  $('.box2').hover(function(){
    $('.in2').animate({fontSize : '24px'}, 500);
  },function(){
    $('.in2').animate({fontSize : '16px'}, 500);
  });

$('.a-click').click(function(){
$('.a-change').attr('src','image/ぬこ９.jpg').attr('alt','ぬこ９');
return false;
});



$('.google-link').click(function(){
   alert('移動しません')
return false;
});

  $('.slide-image>li>a:eq(0)').click(function(){
    $('#slide').attr('src',this).attr('alt',this);
    return false;
  });

  $('.slide-image>li>a:eq(1)').click(function(){
    $('#slide').attr('src',this).attr('alt',this);
    return false;
  });

  $('.slide-image>li>a:eq(2)').click(function(){
    $('#slide').attr('src',this).attr('alt',this);
    return false;
  });

  $('.slide-image>li>a:eq(3)').click(function(){
    $('#slide').attr('src',this).attr('alt',this);
     return false;
  });

$('#colorBtn').click(function(){
  if($(this).text()==('背景色が変わります')){
    $(this).text('押すと戻ります')
    $('.bgcChange').css('backgroundColor','skyblue');
    $('.bgcChange>p').text('変わりました！');
  }else{
    $(this).text('背景色が変わります')
    $('.bgcChange').css('backgroundColor','#fff');
    $('.bgcChange>p').text('背景色が変わります');
  }
});

$('#dblclickLink1').dblclick(function(){
  alert('飛びません');
  return false;
});

$('#dblclickLink2').dblclick(function(){
  alert('飛びません');
}).click(function(){
  return false;
});

$('.mousemove-wrapper').mousemove(function(e){
  $('#offsetX').val(e.offsetX);
  $('#offsetY').val(e.offsetY);
});

$('html').mousemove(function(e){
  $('#clientX').val(e.clientX);
  $('#clientY').val(e.clientY);
});


$('#one-cat').one('mouseover',function(){
  $(this).attr('src','image/ぬこ１２.jpg').attr('alt','ぬこ１２');
}).one('mouseout',function(){
  $(this).attr('src','image/ぬこ１１.jpg').attr('alt','ぬこ１１');
});

$('#one').one('click',function(){
$('#one-change').attr('src','image/rainbow.jpg')
  return false;
});

$('#on').click(function(){
$(this).before('<dd id="new">NEW!!</dd>');
});
$('#on-2').click(function(){
$(this).before('<dd id="new-2">NEW!!</dd>');
});

$('#new').mouseover(function(){
  $(this).css('color','red')
 });


$("dd").on('mouseover', '#new-2',function(){
   $(this).css({'backgroundColor':'red','font-size':'28px','width':'100px','cursor':'pointer',"display":'block'}).click(function(){
    $(this).remove();
   });
  });

  $('#off').click(function(){
    if($('.cat13').attr('src')=='image/ぬこ１３.jpg'){
      $('.cat13').attr('src','image/ぬこ１.jpg');
      return false;
    }else{
      $('.cat13').attr('src','image/ぬこ１３.jpg');
      return false;
    }  
  });

  $('#off-btn').click(function(){
    $('#off').off('click');
  });


/////////////アニメーション////////////
$('#animationIndex> li a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
 $('html,body').animate({'scrollTop':position},600)
});

$('#hide-btn').click(function(){
  $('#show').hide("fast");
});
$('#show-btn').click(function(){
  $('#show').show("slow");
});
$('#toggle-show-btn').click(function(){
  $('#show2').toggle(500);
});
$('#toggle-show-btn2').click(function(){
  $('#show3:not(:animated)').toggle(500);
});

$('#slideup-btn').click(function(){
  $('#slide').slideUp("fast");
});
$('#slidedown-btn').click(function(){
  $('#slide').slideDown("slow");
});
$('#slidetoggle-btn').click(function(){
  $('#slideToggle:not(:animated)').slideToggle("slow");
});

$('#fadein-btn').click(function(){
  $('#fade').fadeIn("slow");
});
$('#fadeout-btn').click(function(){
  $('#fade').fadeOut("fast");
});
$('#fadeto-btn').click(function(){
  $('#fadeto').fadeTo("slow",0.5);
});
$('#fadetoggle-btn').click(function(){
  $('#fadetoggle:not(:animated)').fadeToggle("slow");
});

$('#animation-btn').click(function(){
  $("#anim").animate({
    "margin-left": "500px"
  })
});

$('#animation-btn2').click(function(){
  $("#anim2").animate({
    "margin-left": "500px"
    },1000)
  });

$('#animation-btn3').click(function(){
  $("#anim3").animate({
    "margin-left": "500px"
    },1000,'swing')
  });

$('#animation-btn4').click(function(){
  $("#anim4").animate({
    "margin-left": "500px",
    "width": "50px",
    "height": "50px"
    },1000,'swing',function(){
      $(this).css("background-color","red").animate({
          "width":"200px",
          "height":"200px"
        },1000,function(){
          $(this).fadeOut('slow');
        });
    });
  });

  /////////////フォーム////////////
  $('#formIndex> li a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
   $('html,body').animate({'scrollTop':position},600)
  });

$('#confirm').click(function(){
 $("#idget").val();
$('#name').text($("#idget").val());
});

$('#confirm2').click(function(){
 $("#idget2").val();
$('#name2').text($("#idget2").val());
});

$('#idclear').click(function(){
  $('#name,#name2').text('');
  $('#idget2').val('');
})

$('#confim3').click(function(){
  if($('#password').val()!=$('#password2').val()){
    $('#error-message0').text('パスワードが違います');
  }else{
    $('#error-message0').text('');
  }
});

$('#clear2').click(function(){
$('#password,#password2').val('');
});

$('#focus')
.focus(function(){
$(this).css('backgroundColor','pink');
})
.blur(function(){
$(this).css('backgroundColor','white');
});

$('#focusBlur').val('入力してください').css('color','#ccc');
$('#focusBlur').focus(function(){
  if($(this).val()==('入力してください')){
    $(this).val('').css('color','#333');
  }}).blur(function(){
  if($(this).val()==''){
    $(this).val('入力してください').css('color','#ccc');
  }
  });

  $('#doc').change(function(){
    $('.docText').text($(this).val());
  });
$('#select').change(function(){
  alert('選択されました!');
});

$('#form1').submit(function(){
confirm('送信しますか？');

});
$('#form2').submit(function(){
confirm('送信しますか？');
return false;
});


$('#form3').submit(function(){
  if($('#name3').val()==''&&($('textarea').val()=='')){
   $('#error-message').text('何でもいいから書いてね！！')
   }else if($('#name3').val() ==''){
   $('#error-message').text('名前を書いてね！');
   }else if($('textarea').val() ==''){
   $('#error-message').text('ご意見を書いてね！');
   } else{
   $('#error-message').text('ご協力ありがとうございます！');
   }
  return false;
 });

 $('input[class="checkbox"]').change(function(){
    $(':checked');
    alert('チェックされました')
 });

 $('input[class="checkbox2"]').change(function(){
    if($(this).prop('checked')){
      alert('チェックが入りました');
    }else{
      alert('チェックが外れました');
   };
 });

$('input[name="noodle"]').change(function(){
  var likenoodle = [];
   $('input[name="noodle"]:checked').each(function(){
    likenoodle.push($(this).val());
    $('.favoritnoodle').text(likenoodle)
  });
});



$('input[name="bloodType"]').change(function(){
  var bloodType =$('input[name="bloodType"]:checked').val();
  $('.bloodType').text(`血液型は${bloodType}です`)
});


$('.selecter').change(function(){
  if($(this).val() == "徒歩・自転車"){
     $('#station').prop("disabled",true);
  }else{
    $('#station').prop("disabled",false);
  }
});

$('#check').change(function(){
  if($('#text').prop('disabled')){
    $('#text').prop('disabled',false);
    $('#text').focus();
    $('.error-message2').text('');
   }else{
    $('#text').prop('disabled',true);
     $('.error-message2').text('チェックしてください').css('color','red');
    }
});

});

