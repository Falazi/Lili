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
    let ele = select(el)
    setAttrutil(ele, options)
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
    const ele = select(el)
    ele.remove()
}


function toggleClass(el, cless) {
    let ele = select(el)
    ele.classList.toggle(cless);
}

function move(el, to) {
    let ele = select(el)
    let toto = select(to)
    toto.appendChild(ele)
}