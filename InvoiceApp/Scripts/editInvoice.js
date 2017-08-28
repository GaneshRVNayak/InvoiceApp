
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function () {

    if (getParameterByName('preview') === "True") {
        $('.name').attr('readonly', 'readonly');
        $('.name').attr('disabled', 'disabled');
        $('.email').attr('readonly', 'readonly');
        $('.email').attr('disabled', 'disabled');
        $('.duedate').attr('readonly', 'readonly');
        $('.duedate').attr('disabled', 'disabled');

        $('.remRow').attr('style', 'display:none');
        $('.addRow').attr('style', 'display:none');
        $('.editInvoice').attr('style', 'display:none');
        $('.totalPreview').attr('style', 'display:block');

        calculateTotal();

        $('h1').text('Preview Invoice');

        $('.description').each(function (index) {
            $(this).attr('readonly', 'readonly');
            $(this).attr('disabled', 'disabled');
        });

        $('.amount').each(function (index) {
            $(this).attr('readonly', 'readonly');
            $(this).attr('disabled', 'disabled');
        });
    }

    $(".addRow").click(function () {

        var rowCount = $('.invoiceRow').length;
        $("#invoiceList").append('<div class="invoiceRow"><input type="text" name="InvoiceDetails[' + rowCount + '].Description" class="amount" /><input type="text" name="InvoiceDetails[' + rowCount + '].Amount" class="amount" /><a href="javascript:void(0);" class="remRow">Remove</a></div>');
    });

    $("#invoiceList").on('click', '.remRow', function () {

        $(this).closest('.invoiceRow').remove();

        $('.description').each(function (index) {
            $(this).attr('name', 'InvoiceDetails[' + index + '].Description');
        });

        $('.amount').each(function (index) {
            $(this).attr('name', 'InvoiceDetails[' + index + '].Amount');
        });
    })
});

function calculateTotal() {
    var sum = 0;
    $('.amount').each(function (index) {
        sum = Number(sum) + Number($(this).val());

    });
    sum = Number(sum).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    $(".totalvalue").val(sum);
};
