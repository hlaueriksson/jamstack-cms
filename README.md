# JAMstack

This is an experiment where I'm trying to build a [JAMstack](https://jamstack.org) site.

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

The ingredients are:

* JavaScript: Client-side logic with [jQuery](https://jquery.com)
* APIs: Server-side logic with [Azure Functions Core Tools](https://www.npmjs.com/package/azure-functions-core-tools) hosted on [Azure](https://azure.microsoft.com/en-us/services/functions/)
* Markup: Static HTML generated with [Hugo](https://gohugo.io)

The source code for the Hugo site:

* [/src/site](/src/site)

The source code for the Azure Functions:
* [/src/api](/src/api)

The generated static HTML:

* [/docs](/docs)

The site is hosted by [GitHub Pages](https://pages.github.com) at:

* [https://hlaueriksson.github.io/jamstack/](https://hlaueriksson.github.io/jamstack/)

## Run

To run the site locally, edit [/src/site/data/api.toml](/src/site/data/api.toml):

```toml
[recipe]
get_ingredients = "http://localhost:7071/api/Ingredients/"

[submit]
post_recipe = "http://localhost:7071/api/Recipe"
```

Run the Hugo site:

`cd src/site`

`hugo server`

Run the Azure Functions:

`cd src/api`

`func host start --cors http://localhost:1313`

Browse:

`http://localhost:1313/jamstack/`

## Build

Build the Hugo site:

`cd src/site`

`hugo --destination ../../docs`

## Attributions

The jam recipes was taken from the Swedish site [Tasteline.com](http://www.tasteline.com):

* Apple Jam: [http://www.tasteline.com/recept/appelmos-grundrecept/](http://www.tasteline.com/recept/appelmos-grundrecept/)
* Lingonberry Jam: [http://www.tasteline.com/recept/lingonsylt/](http://www.tasteline.com/recept/lingonsylt/)
* Strawberry Jam: [http://www.tasteline.com/recept/jordgubbssylt/](http://www.tasteline.com/recept/jordgubbssylt/)

Translations from Swedish to English was done with [Google Translate](https://translate.google.com/#sv/en/).

The images was taken from [Flickr](https://www.flickr.com/):

* Apples: [https://www.flickr.com/photos/1sock/7910673688/](https://www.flickr.com/photos/1sock/7910673688/) by 1sock
* Lingonberries: [https://www.flickr.com/photos/kymis/2875484409/](https://www.flickr.com/photos/kymis/2875484409/) by Jyrki Kymäläinen
* Strawberries: [https://www.flickr.com/photos/42787780@N04/6984507532/](https://www.flickr.com/photos/42787780@N04/6984507532/) by Fried Dough
