# Lili
Lili (pronounced lee-lee) is a javascript library that makes dom manipulation less tedious

It features many useful functions, such as `select()`, which is syntactic sugar for `document.querySelector()`. 

There is also the `create()` function, which will let you make an element, give it text, give it an id, append it to another element, and give it a class, all in one function!

Here's an example, let's create a paragraph, give it the text "Hello there", set it's id to `greeting` then append it to an element with the id "card"

Vanilla js

```js
let el = document.createElement("p");
el.innerText = "Hello there";
el.setAttribute("id","greeting");
var card = document.getElementById("card");
el.appendChild("card")
```

Lili

```js
create("p", "Hello there", "greeting", "card")
```

For documentation, see [doc.md](doc.md)

If you'd like to see a working example of Lili, then check out the [Lili todo app](https://github.com/Falazi/Lili-Todo-App)




## How to use

Just put it in a script tag and put a `defer` tag.

Use either the lili.js from this page or use the cdn
https://cdn.jsdelivr.net/gh/Falazi/Lili@main/lili.min.js

You should use a specific version, like this
https://cdn.jsdelivr.net/gh/Falazi/Lili@v0.11-alpha/lili.min.js

Currently when it is minfied it is 1.77KB
