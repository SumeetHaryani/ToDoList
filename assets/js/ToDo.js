$("ul").on("click", "li", function () {
   $(this).toggleClass("completed");
});
//ul is there everytime pg loads
$("ul").on("click", "span", function (event) {
   $(this).parent().fadeOut(500, function () {
      $(this).remove();
   });
   event.stopPropagation(); //stops from bubbling up other elements
});
$("input[type='text']").keypress(function (e) {
   if (e.which === 13) {
      var toDo = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + toDo + "</li>");
      console.log("enter");
   }
});
$(".fa-plus-square").click(function () {
   console.log("click");
   $("input[type='text']").fadeToggle();
})