$(document).ready(function() {

    $(document).on("keyup blur", ".animate-label", function() {

        if($(this).val() != ""){

            $(this).addClass('active');

        }else{

            $(this).removeClass('active');

        }

    });

});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});