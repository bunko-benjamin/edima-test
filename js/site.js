var Site = {
    Setup: function () {
        $('.cvv').on('focus', function () {
            Site.CardRotate(true);
        });
        $('.cvv').on('blur', function () {
            Site.CardRotate(false);
        });
    },
    CardRotate: function (set) {
        $('.flip-card').toggleClass('turn', set);
    },
    CardUpdate: function (type, data) {

    }
};

$(window).on('load', function(){
    Site.Setup();
});
