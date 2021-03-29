var Site = {
    Setup: function () {
        Site.Validate();

        $('.cvv').on('focus', function () {
            Site.CardRotate(true);
        });
        $('.cvv').on('blur', function () {
            Site.CardRotate(false);
        });

        // todo F5 -re CardUpdate ha eltér default-tól
        // todo digits, date CardUpdate

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
    Validate: function () {
        $('#form form').validate({
            rules: {
                bankcardnum: {
                    required: true
                },
                bankcardowner: {
                    required: true,
                    maxlength: 128
                },
                validyear: {
                    required: true
                },
                validmonth: {
                    required: true
                },
                cvv: {
                    required: true,
                    maxlength: 3,
                    minlength: 3,
                    digits: true
                },
                phone: {
                    required: true
                }
            },
            submitHandler: function (form) {
                console.log('ok');
                $('#bank-card-submit').val($('#bank-card-submit').data('loading'));
                // var postData = $(this).serializeArray();
                // var formURL = $(this).attr("action");
                /*
                $.ajax({
                    type: "POST",
                    url: formURL,
                    data: postData,
                    success:function(data, textStatus, jqXHR) {
                        //
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        //
                    }
                });
                */
            }
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


// todo card num és phone maskolás
// todo maskolás tisztitítása valid submitnál
// todo date picker
// todo további validációk. card, phone, date
// todo bank card anim

$(window).on('load', function(){
    Site.Setup();
});
