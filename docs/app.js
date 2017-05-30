// recipe
$(function () {
  if ($("section#recipe").length) {
    let slug = $("#recipe").data("slug");
    let url = $("#recipe").data("api");
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
  if ($("section#submit").length) {
    let form = $("#recipe");
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
