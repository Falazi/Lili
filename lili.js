function create(ele, text, id, putel, cless) {

    let el = document.createElement(ele);
    if (text) { el.innerText = text }

    if (putel) { select(putel).appendChild(el) }
    else {
        document.body.appendChild(el);
    }

    if (id) { el.setAttribute("id", id) }

    if (cless) {
        el.setAttribute("class", cless)
    }

}

const select = document.querySelector.bind(document);

const selectId = document.getElementById.bind(document)


// selects every element that matches
const selectAll = document.querySelectorAll.bind(document)


/* old
function set(el, id, value) {
let ele = select(el)
ele.setAttribute(id, value)
}
*/


// sets the attributes that you want for an element
// the format is like this
// set("#cool", { "type": "number", "class": "my-class" });

function setAttr(el, options) {
    setAttrutil(select(el), options)
}

function setAttrutil(ele, options) {
    Object.keys(options).forEach(function (attr) {
        ele.setAttribute(attr, options[attr]);
    })

}


// usage of onEvent Function

// in the func put the name of a self-made function to execute

// make sure the func isn't a string or it wont work.


// this is for listening for events
// here's an example
// onEvent("#input", "keyup", enterPress)
// the last parameter is a function that you define.

// you can pass events to your function, for example
/*

function enterPress(event) {
    if (event.keyCode === 13) {
        someFunction()
    }
};

that function listens to see if enter has been pressed

*/

function onEvent(el, eventt, func) {
    select(el).addEventListener(eventt, func);
}

function remove(el) {
    select(el).remove()
}


function toggleClass(el, cless) {
    select(el).classList.toggle(cless);
}

function move(el, to) {
    select(to).appendChild(select(el))
}

function moveAbove(el, to) {
    let toto = select(to)

    // Get the reference element
    let ele = select(el)
    // Get the parent element
    let parentDiv = ele.parentNode

    // Insert the new element into before sp2
    parentDiv.insertBefore(ele, toto)

}

// should make moveBelow() too

function addClass(el, cless) {
    select(el).classList.add(cless);
}

function removeClass(el, cless) {
    select(el).classList.remove(cless)
}


function getText(el, text) {
    return document.querySelector(el).innerText()
}