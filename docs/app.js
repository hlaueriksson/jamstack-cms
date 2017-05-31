// nav
$(function () {
  $("nav a[href='" + window.location.href + "']").addClass("active");
});

// recipe
$(function () {
  if ($("body#recipe").length) {
    let slug = $("#data").data("slug");
    let url = $("#data").data("api");
    $.getJSON(url + slug, function (data) {
      $.each(data, function (index, ingredient) {
        $("#imperial").append("<li>" + ingredient.Amount + " " + ingredient.Unit + " " + ingredient.Name + "</li>");
      })
      $("#measurements").show();
    });
    $("#system").change(function () {
      $("#metric").toggle();
      $("#imperial").toggle();
    });
  }
})

// submit
$(function () {
  if ($("body#submit").length) {
    let form = $("form#recipe");
    form.submit(function (e) {
      e.preventDefault();
      let data = form.serializeArray().reduce(function (a, x) { a[x.name] = x.value; return a; }, {});
      $.ajax({
        type: form.attr("method"),
        url: form.attr("action"),
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (data) {
          form.hide();
          $("#result").append(data).show();
        }
      });
    });
  }
})
