$(window).on('scroll touchmove', function () {
  let coloredSections = $('section[data-color]');

  const scrollTop = $(document).scrollTop();

  coloredSections.each(function (sectionIndex, sec) {
    let section = $(sec);
    if (scrollTop >= section.position().top) {
      $('body').css('background', section.attr('data-color'));
    }
  });
});
