$(() => {
    $( function() {
        $("#datepicker").datepicker();
    } );

    $('.show_form_validation').on('click', function () {
        $('.modal_show').css('display', 'block');
    });

    $('.close').on('click', function () {
        $('.modal_show').css({'display' : ''});
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal_show, body').css({'display' : '', 'opacity' : '' });
        }
    });



    $('.btn_send').hover(
        function () {
            $(this).addClass('btn_trans');
        },
        function () {
            $(this).removeClass('btn_trans');
        }
    );
    jQuery.validator.addMethod("noSpace", function(value, element) {
        return value == '' || value.trim().length != 0;
    }, "No space please and don't leave it empty");
    jQuery.validator.addMethod("customEmail", function(value, element) {
        return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }, "Please enter valid email address!");
    $.validator.addMethod( "alphanumeric", function( value, element ) {
        return this.optional( element ) || /^\w+$/i.test( value );
    }, "Letters, numbers, and underscores only please" );

    $("#formValidation").validate({
        rules:{
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true
            },
            confirm: {
                required: true,
                equalTo: '#password'
            },
            profession: {
                required: true
            },
            school: {
                required: true
            },
            currentgrade: {
                required: true
            },
            online_search: {
                required: true
            }
        },
        messages: {
            firstname:{
                required: "Please enter your firstname",
                minlength: 'Firstname at least 2 characters'
            },
            lastname:{
                required: "Please enter your lastname",
                minlength: 'Lastname at least 2 characters'
            },
            email: {
                required: 'Please enter email!',
                email: 'Please enter valid email!'
            },
            password: {
                required: 'Please enter password!'
            },
            confirm: {
                required: 'Please enter confirm password!',
                equalTo: 'Please enter same password!'
            },
            online_search: {
                required: true
            }
            },

        submitHandler: function (form) {
            $.ajax({
                url: 'create.php',
                method: 'post',
                dataType: 'html',
                data: $("#formValidation").serialize(),
                success: function (data) {
                    alert(data);
                    console.log(data);
                    $(".modal_show").hide();
                    // if (data.status === "ok") {
                    //     let type = 'success';
                    //     Lobibox.notify(type, {
                    //         msg: "Усі дані успішно збережені"
                    //     });
                    // }
                }
            });
        }
    });
});