var Site = {
    Setup: function () {
        $('.cvv').on('focus', function () {
            Site.CardRotate(true);
        });
        $('.cvv').on('blur', function () {
            Site.CardRotate(false);
        });

        // todo F5 -re CardUpdate ha eltér defaulttól
        // todo digits, date

        $('#bank-card-owner').on('keyup', function () {
           Site.CardUpdate('name', $(this).val());
        });
        $('#bank-card-cvv').on('keyup', function () {
            Site.CardUpdate('cvv', $(this).val());
        });
        $('#number, #name, #date').on('click', function () {
            Site.InputFocus($(this).data('input'));
            // info cvv-nek nincs értelme, mert csak akkor látszik ha van amúgy is focusa
        });
    },
    CardRotate: function (set) {
        $('.flip-card').toggleClass('turn', set);
    },
    CardUpdate: function (type, data) {
        // todo digits, date
        if (data == '') {
            $('#' + type).text($('#' + type).data('default'));
        } else {
            $('#' + type).text(data);
        }
    },
    InputFocus: function (el) {
        $('#bank-card-' + el).focus();
    }
};

// todo submit loader

$(window).on('load', function(){
    Site.Setup();
});
