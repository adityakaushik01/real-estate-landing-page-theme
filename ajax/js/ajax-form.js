$('document').ready(function() {

//=======Pageload Form ==========

/* handle form validation */
$("#popupOnload").validate({
    rules: {
        name: {
            required: true,
            minlength: 4
        },
        email: {
            required: true,
            email: true
        },
        mobile:{
            required: true,
            maxlength: 10
        },
    },
    errorElement: "span",
    errorClass: "text-danger",
    messages: {
        email: { email: "please enter a valid email address" },

    },
    submitHandler: submitForm
});
/* handle form submit */
function submitForm() {
    var data = $("#popupOnload").serialize();

    $.ajax({
        type: 'POST',
        url: 'ajax/submit-form.php',
        data: data,
        beforeSend: function() {
            $("#btn-pop-onload").css('cursor', 'progress');
            $("#btn-pop-onload").attr('disabled','true');
            $("#btn-pop-onload").html('<span class="spinner-grow spinner-grow-sm"></span>Sending..');
        },
        success: function(data) {
            if (data.status === 'error') {
                $("#btn-pop-onload").html('Submit');
                $("#btn-pop-onload").css('cursor', 'pointer');
                $("#btn-pop-onload").removeAttr('disabled');

                Swal.fire({
                    icon: 'error',
                    title: "Error",
                    html: data.message,
                }).then(okay => {
                    if (okay) {
                    }
                });

            } else if (data.status === 'success') {
                    $("#btn-pop-onload").html('Successful!');
                    $("#btn-pop-onload").css('cursor', 'pointer');
                    $("#btn-pop-onload").removeAttr('disabled');
                    document.getElementById("popupOnload").reset();
                    $('#onload-form').modal('hide');
                    localStorage.setItem('currentURL', data.redirecturl );
                    localStorage.setItem('pageload', "yes" );
                    Swal.fire({
                        icon: 'success',
                        title: "Success",
                        // html: ""+data.message+"",
                        showConfirmButton: false,
                        timer: 2500
                      });
                    setTimeout(thankYou,2500);
            } else {
               		$("#btn-pop-onload").html('Submit');
                    $("#btn-pop-onload").css('cursor', 'pointer');
                    $("#btn-pop-onload").removeAttr('disabled');
                    Swal.fire({
                        icon: 'error',
                        title: "Error",
                        html: +data.message,
                        timer: 2000
                    }).then(okay => {
                        if (okay) {
                        }
                    });

            }
            function thankYou() {
                window.location.replace("thank-you.html?sendmail=success"); // Removing it as with next form submit you will be adding the div again in your code.
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#btn-pop-onload").html('Submit');
            $("#btn-pop-onload").css('cursor', 'pointer');
            $("#btn-pop-onload").removeAttr('disabled');
            $(".loading").css('display', 'none');
            Swal.fire({
                    icon: 'error',
                    title: "Error",
                    html: textStatus + ' ' + errorThrown,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2000
                });
        } 
    });
    return false;
}


// popupEnq
$("#popupEnq").validate({
    rules: {
        name: {
            required: true,
            minlength: 4
        },
        email: {
            required: true,
            email: true
        },
        mobile:{
            required: true,
            maxlength: 10
        },
    },
    errorElement: "span",
    errorClass: "text-danger",
    messages: {
        email: { email: "please enter a valid email address" },

    },
    submitHandler: submitFormpopupEnq
});
/* handle form submit */

function submitFormpopupEnq() {
    var data = $("#popupEnq").serialize();

    $.ajax({
        type: 'POST',
        url: 'ajax/submit-form.php',
        data: data,
        beforeSend: function() {
            $("#btn-pop").css('cursor', 'progress');
            $("#btn-pop").attr('disabled','true');
            $("#btn-pop").html('<span class="spinner-grow spinner-grow-sm"></span>Sending..');
        },
        success: function(data) {
            if (data.status === 'error') {
                $("#btn-pop").html('Submit');
                $("#btn-pop").css('cursor', 'pointer');
                $("#btn-pop").removeAttr('disabled');

                Swal.fire({
                    icon: 'error',
                    title: "Error",
                    html: data.message,
                }).then(okay => {
                    if (okay) {
                    }
                });

            } else if (data.status === 'success') {
                    $("#btn-pop").html('Successful!');
                    $("#btn-pop").css('cursor', 'pointer');
                    $("#btn-pop").removeAttr('disabled');
                    document.getElementById("popupEnq").reset();
                    $('#enquiry-form').modal('hide');
                    localStorage.setItem('currentURL', data.redirecturl );
                    Swal.fire({
                        icon: 'success',
                        title: "Success",
                        // html: ""+data.message+"",
                        showConfirmButton: false,
                        timer: 2500
                      });
                    setTimeout(thankYou,2500);
            } else {
               		$("#btn-pop").html('Submit');
                    $("#btn-pop").css('cursor', 'pointer');
                    $("#btn-pop").removeAttr('disabled');
                    Swal.fire({
                        icon: 'error',
                        title: "Error",
                        html: +data.message,
                        timer: 2000
                    }).then(okay => {
                        if (okay) {
                        }
                    });

            }
            function thankYou() {
                window.location.replace("thank-you.html?sendmail=success"); // Removing it as with next form submit you will be adding the div again in your code.
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#btn-pop").html('Submit');
            $("#btn-pop").css('cursor', 'pointer');
            $("#btn-pop").removeAttr('disabled');
            $(".loading").css('display', 'none');
            Swal.fire({
                    icon: 'error',
                    title: "Error",
                    html: textStatus + ' ' + errorThrown,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2000
                });
        } 
    });
    return false;
}


});