# Lili
Lili (pronounced lee-lee) is a javascript library that makes dom manipulation easy

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
