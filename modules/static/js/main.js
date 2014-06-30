$(function () {
        $("#items1,#items2,#items3").sortable({
                connectWith: "#items1,#items2,#items3",
                start: function (event, ui) {
                        ui.item.toggleClass("highlight");
                },
                stop: function (event, ui) {
                        ui.item.toggleClass("highlight");
                }
        });
        $("#items1,#items2,#items3").disableSelection();
});
$("body").on('click', '#items3 .delete', function () {
    $(this).closest( ".list" ).remove();
});

