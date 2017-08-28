
function priceChange(event) {
    var ele = event.currentTarget;
    var newValue = parseFloat(ele.value).toFixed(2)
    var regex = /^\d+(?:\.\d{0,2})$/;
    if (!regex.test(newValue)) {
        alert("Please enter valid amount");
        ele.value = 0;
    }
    recalculateTotal();
};

function recalculateTotal() {
    var sum = 0;
    $('.amount').each(function (index) {
        sum = Number(sum) + Number($(this).val());

    });
    sum = Number(sum).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    $(".totalvalue").val(sum);
};

$(document).ready(function () {

    $(".addRow").click(function () {

        var rowCount = $('.itemRow').length;

        $("#itemList").append('<div class="form-group"><div class="itemRow"><div class="col-lg-12"><div class="input-group"><div class="col-lg-7"><input type="text" name="InvoiceDetails[' + rowCount + '].Description" class="description form-control col-sm-10" /></div><div class="col-lg-3"><input type="text" name="InvoiceDetails[' + rowCount + '].Amount" class="amount form-control col-sm-2" onchange="priceChange(event);" /></div><div class="col-lg-2"><a href="javascript:void(0);" class="remRow">Remove</a></div></div></div></div></div>');
    });

    $("#itemList").on('click', '.remRow', function () {

        $(this).closest('.itemRow').remove();

        $('.description').each(function (index) {
            $(this).attr('name', 'InvoiceDetails[' + index + '].Description');
        });

        $('.amount').each(function (index) {
            $(this).attr('name', 'InvoiceDetails[' + index + '].Amount');
        });

        recalculateTotal();
    })
});

function validateForm() {
    var name = document.forms["InvoiceCreateForm"]["Name"];

    if (!name.value) {
        alert("Please enter name");
        return false;
    }

    var email = document.forms["InvoiceCreateForm"]["Email"];
    if (!email.value) {
        alert("Please enter Email");
        return false;
    }

    var dueDate = document.forms["InvoiceCreateForm"]["DueDate"];

    if (!dueDate.value) {
        alert("Please enter Due date");
        return false;
    }

    var description = document.forms["InvoiceCreateForm"]["InvoiceDetails[0].Description"];
    if (!description.value) {
        alert("Please enter Description");
        return false;
    }

    var amount = document.forms["InvoiceCreateForm"]["InvoiceDetails[0].Amount"];
    if (amount.value == 'undefined' || amount.value == '') {
        alert("Please enter amount");
        return false;
    }

    return true;
}
