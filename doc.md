# Here is the documentation for lili. It will give you an overview of the functions of the library.

## `select()`

This can select a element by type,  id, or class, but only one. If you want more than one then use `selectAll()`

## `selectAll()`

Like `select()`, but let's you select multiple elements

## `create()`
This will let you create an element.

Here are the parameters it takes:
`element, text, element to append to, id, class`

Please note that id in this function doesn't use a hashtag

## `set()`

Let's you set attributes for an element

parameters:

`element, a javascript object containing the attributes`

example:

``js
set("#btn", {"class": "", "disabled": "true"})
```
