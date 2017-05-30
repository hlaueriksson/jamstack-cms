using System.Net;

public static async Task<HttpResponseMessage> Run(string recipe, HttpRequestMessage req, TraceWriter log)
{
  log.Info($"Get ingredients for {recipe}");

  var result = GetIngredients(recipe);

  return result != null
    ? req.CreateResponse(HttpStatusCode.OK, result)
    : req.CreateResponse(HttpStatusCode.BadRequest, $"Recipe {recipe} is invalid");
}

public static IEnumerable<Ingredient> GetIngredients(string recipe)
{
  switch (recipe)
  {
    case "apple-jam":
      return new[]
      {
          new Ingredient(2.2, "lbs", "apples"),
          new Ingredient(1.7, "fl.oz.", "water"),
          new Ingredient(17, "fl.oz.", "sugar")
      };
    case "lingonberry-jam":
      return new[]
      {
          new Ingredient(6.8, "fl.oz.", "water"),
          new Ingredient(4.4, "lbs", "sugar"),
          new Ingredient(2.2, "lbs", "lingonberries")
      };
    case "strawberry-jam":
      return new[]
      {
          new Ingredient(17, "fl.oz.", "sugar"),
          new Ingredient(68, "fl.oz.", "strawberries")
      };
    default:
      return null;
  }
}

public class Ingredient
{
  public double Amount { get; }
  public string Unit { get; }
  public string Name { get; }

  public Ingredient(double amount, string unit, string name)
  {
    Amount = amount;
    Unit = unit;
    Name = name;
  }
}