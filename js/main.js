var btn = document.querySelector('.btn');

btn.onclick = function(evt) {
  evt.preventDefault();
  document.querySelector('.learn').style.paddingTop = '0';
}

$(function() {
  $(window).scroll(function() {
    $('#learn .section-title').each(function(){
        var imagePos = $(this).offset().top;
  
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
  });
  $(window).scroll(function() {
    $('.rest-box  .tree').each(function(){
        var imagePos = $(this).offset().top;
  
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    });
  });
})