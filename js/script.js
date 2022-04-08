$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
$("#menu-icon").on("click", function(){
$("nav").slideToggle();
$(this).toggleClass("active");
});
//search header
$('.btn-search').click(function()
{
$(".form").slideToggle()
})
// back to top
var btn = $('#backtotop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$('.tab-article').click(function()
{
$(".item-tab").slideToggle()
})
// show menu mobile
$(".btn-megamenu").click(function(){
  $(".mega-dropdown").slideToggle();
})