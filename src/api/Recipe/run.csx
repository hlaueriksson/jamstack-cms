using System.Net;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
  log.Info("Submit Recipe");

  var recipe = await req.Content.ReadAsAsync<Recipe>();

  // TODO: store the recipe somewhere

  return recipe != null
      ? req.CreateResponse(HttpStatusCode.OK, "Thank you for the " + recipe.Title + " recipe!")
      : req.CreateResponse(HttpStatusCode.BadRequest, "Recipe is invalid");
}

public class Recipe
{
  public string Title { get; set; }
  public string Ingredients { get; set; }
  public string Method { get; set; }
}