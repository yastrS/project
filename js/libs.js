// ClearForm
function clearForm(form) {$(':input', form).each(function() {var type = this.type;var tag = this.tagName.toLowerCase();if (type == 'text' || type == 'password' || tag == 'textarea') $(this).val('');else if (type == 'checkbox' || type == 'radio') this.checked = false;else if (tag == 'select') this.selectedIndex = -1;});};
// MaskedInput
!function(a){function b(){var a=document.createElement("input"),b="onpaste";return a.setAttribute(b,""),"function"==typeof a[b]?"paste":"input"}var h,c=b()+".mask",d=navigator.userAgent,e=/iphone/i.test(d),f=/chrome/i.test(d),g=/android/i.test(d);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(b,d){var i,j,k,l,m,n;return!b&&this.length>0?(i=a(this[0]),i.data(a.mask.dataName)()):(d=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},d),j=a.mask.definitions,k=[],l=n=b.length,m=null,a.each(b.split(""),function(a,b){"?"==b?(n--,l=a):j[b]?(k.push(new RegExp(j[b])),null===m&&(m=k.length-1)):k.push(null)}),this.trigger("unmask").each(function(){function r(a){for(;++a<n&&!k[a];);return a}function s(a){for(;--a>=0&&!k[a];);return a}function t(a,b){var c,e;if(!(0>a)){for(c=a,e=r(b);n>c;c++)if(k[c]){if(!(n>e&&k[c].test(o[e])))break;o[c]=o[e],o[e]=d.placeholder,e=r(e)}z(),i.caret(Math.max(m,a))}}function u(a){var b,c,e,f;for(b=a,c=d.placeholder;n>b;b++)if(k[b]){if(e=r(b),f=o[b],o[b]=c,!(n>e&&k[e].test(f)))break;c=f}}function v(){A(),i.val()!=q&&i.change()}function w(a){var c,d,f,b=a.which;8===b||46===b||e&&127===b?(c=i.caret(),d=c.begin,f=c.end,0===f-d&&(d=46!==b?s(d):f=r(d-1),f=46===b?r(f):f),y(d,f),t(d,f-1),a.preventDefault()):13===b?v.call(this,a):27===b&&(i.val(q),i.caret(0,A()),a.preventDefault())}function x(b){var f,h,j,c=b.which,e=i.caret();if(0==c){if(e.begin>=n)return i.val(i.val().substr(0,n)),b.preventDefault(),!1;e.begin==e.end&&(c=i.val().charCodeAt(e.begin-1),e.begin--,e.end--)}if(!(b.ctrlKey||b.altKey||b.metaKey||32>c)&&c&&13!==c){if(0!==e.end-e.begin&&(y(e.begin,e.end),t(e.begin,e.end-1)),f=r(e.begin-1),n>f&&(h=String.fromCharCode(c),k[f].test(h))){if(u(f),o[f]=h,z(),j=r(f),g){var l=function(){a.proxy(a.fn.caret,i,j)()};setTimeout(l,0)}else i.caret(j);d.completed&&j>=n&&d.completed.call(i)}b.preventDefault()}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)k[c]&&(o[c]=d.placeholder)}function z(){i.val(o.join(""))}function A(a){var e,f,g,b=i.val(),c=-1;for(e=0,g=0;n>e;e++)if(k[e]){for(o[e]=d.placeholder;g++<b.length;)if(f=b.charAt(g-1),k[e].test(f)){o[e]=f,c=e;break}if(g>b.length)break}else o[e]===b.charAt(g)&&e!==l&&(g++,c=e);return a?z():l>c+1?d.autoclear||o.join("")===p?(i.val()&&i.val(""),y(0,n)):z():(z(),i.val(i.val().substring(0,c+1))),l?e:m}var i=a(this),o=a.map(b.split(""),function(a){return"?"!=a?j[a]?d.placeholder:a:void 0}),p=o.join(""),q=i.val();i.data(a.mask.dataName,function(){return a.map(o,function(a,b){return k[b]&&a!=d.placeholder?a:null}).join("")}),i.attr("readonly")||i.one("unmask",function(){i.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){clearTimeout(h);var a;q=i.val(),a=A(),h=setTimeout(function(){z(),a==b.replace("?","").length?i.caret(0,a):i.caret(a)},10)}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on(c,function(){setTimeout(function(){var a=A(!0);i.caret(a),d.completed&&a==i.val().length&&d.completed.call(i)},0)}),f&&g&&i.on("keyup.mask",x),A()}))}})}(jQuery);

// таймер до конца недели
// Date.prototype.daysInMonth = function() {
//   return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
// };
//   var date = new Date(),
//   days_for_weekend = 8-(date.getDay()), 
//   day = date.getDate()+days_for_weekend, 
//   month = date.getMonth()+1, 
//   year = date.getFullYear();
//   daysInMonth = date.daysInMonth();
//   if(date.getDay()==0){var day = date.getDate()+1;}
//   if(day>daysInMonth){
//   	var day = parseInt(day)-parseInt(daysInMonth);
//   	var month = parseInt(month)+1;
//   }
// $("#countdown_dashboard").countDown({
//   targetDate: {'day': day,'month': month,'year': year,'hour': 0,'min': 0,'sec': 0},omitWeeks: true
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

  $('#menu a').click(function() {
    var isOpera = !!window.opera;
    if (isOpera) {
      var top = 'html';
    } else {
      var top = 'html, body';
    }
    var id = $(this).attr('href').replace('#', '');
    var offset = $('#' + id).offset().top - 62;
    $(top).animate({
      scrollTop: offset
    }, 1000);
    return false;
  });

  $("input[name=phone]").mask("+375-99-9999999");

  $("a[href=#popup]").magnificPopup({
    "type": 'inline',
    "mainClass": 'mfp-fade',
    "overflowY": "scroll",
    "callbacks": {
      "open": function() {
        $(".fix").css("left", "-8.5px");
      },
      "close": function() {
        $(".fix").css("left", "0");
      }
    }
  });

  $("form").submit(function() {
    var form_id = $(this);
    var str = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "sendmail.php",
      data: str,
      success: function(msg) {
        if (msg == 'OK') {
          $('#popup').magnificPopup('close');
          clearForm(form_id);
          setTimeout(function() {
            $.magnificPopup.open({
              type: 'ajax',
              items: {
                src: 'thk.html'
              },
              "mainClass": 'mfp-fade',
              "overflowY": "scroll",
              "callbacks": {
                "open": function() {
                  $(".fix").css("left", "-8.5px");
                },
                "close": function() {
                  $(".fix").css("left", "0");
                }
              }
            });
          }, 500);
        } else {
          alert(msg);
        }
      }
    });
    return false;
  });



  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if(!isMobile.any()){

    $('.scroll-animate').each(function() {
      var block = $(this);
      $(window).scroll(function() {
        var top = block.offset().top;
        var bottom = block.height() + top;
        top = top - $(window).height() + 450;
        var scroll_top = $(this).scrollTop();
        if ((scroll_top > top) && (scroll_top < bottom)) {
          if (!block.hasClass('animate')) {
            block.addClass('animate');
            block.trigger('animateIn');
          }
        }
      });
    });

    function count(em) {
      var count = parseInt($(em).attr('data-number'));
      var block = $(em);
      var timeout = null;
      var step = 1;
      var ret = "";
      timeout = setInterval(function() {
        if (step == 20) {
          block.text(count.toString());
          clearInterval(timeout);
          ret = "end";
        } else {
          var cnt = (Math.floor(count * step / 20)).toString();
          block.text(cnt);
          step++;
        }
      }, 75);
    }

    $('#').on('animateIn', function() {
      count(".digit em");

      var inter = 0;
      $(this).find('.animation').each(function() {
        var block = $(this);
        setTimeout(function() {
          block.addClass('fadeIn');
        }, inter * 200);
        inter++;
      });
    });

    $('#').on('animateIn', function() {
      var inter = 0;
      $(this).find('.animation').each(function() {
        var block = $(this);
        setTimeout(function() {
          block.addClass('fadeInLeft');
        }, inter * 200);
        inter++;
      });
    });

    $('head').append('<link rel="stylesheet" href="css/animations.css">');

  }



});