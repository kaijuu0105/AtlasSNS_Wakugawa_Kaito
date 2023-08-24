// header アコーディオンメニュー
$('.menu-btn').click(function () {
  $(this).toggleClass('is-open');
  $(this).siblings('.menu').toggleClass('is-open');
});

// $(function () {
//   $('.accordion-btn').click(function () {
//     $(this).toggleClass('active');
//   });
//   $('.accordion-btn ul li a').click(function () {
//     $('.accordion-btn').removeClass('active');
//   });
// });
