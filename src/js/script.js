let owl = $('.owl-carousel');

owl.owlCarousel({
    items: 4,
    margin: 25,
    dotsContainer: "#dots"
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});