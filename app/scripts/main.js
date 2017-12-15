$(window).on('scroll touchmove', function () {

  if ($('.menu-btn:checked').length === 0) {

    let coloredSections = $('section[data-color]');

    const scrollTop = $(document).scrollTop() + $(window).height()/2;

    coloredSections.each(function (sectionIndex, sec) {
      let section = $(sec);
      if (scrollTop >= section.position().top) {
        $('.page-wrap').css('background', section.attr('data-color'));
      }
    });
  }
});

$('.menu-btn').click(function () {
  ($('.page-wrap').toggleClass('noscroll')) ;
})
