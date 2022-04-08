$('.core-product_owl').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    dots:false,
    nav:true,
    navText: ["<img src='/images/btn-prev.png'>","<img src='/images/btn-next.png'>"],
    responsive:{
        1:{
            items:1,
            nav:true
        },
        960:{
            items:2,
            nav:true
        },
        1200:{
            items:3,
            nav:true,
          
        }
    }
})
$('.product-image_owl').owlCarousel({
    items: 1,
    loop: true,
    center: true,
    dots:false,
    margin: 10,
    callbacks: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
  });
  $('.product-image-small').owlCarousel({
    items: 4,
    loop: true,
    center: false,
    dots:false,
    margin: 10,
    callbacks: true,
    autoplay:true,
    autoplayHoverPause: true,
    statePadding:0,
  });
 