
// if smartmode is true, then the select function will be "smart"
// this can be changed to false in the user script
// or you can use selectStrict if you only want to do one time

let smartmode = true

function create(ele, text, id, putel, cless) {

    let el = document.createElement(ele);
    if (text) { el.innerText = text }

    if (putel) { select(putel).appendChild(el) }
    else {
        document.body.appendChild(el);
    }

    if (id) {
        // removes the hashtag if you use it in the id parameter
        if (id.charAt(0) === "#") {
            id = id.substring(1)
        }

        el.setAttribute("id", id)
    }


    if (cless) {
        // u can use dot for class

        if (cless.charAt(0) === ".") {
            cless = cless.substring(1)
        }

        el.setAttribute("class", cless)
    }

}

const selectStrict = document.querySelector.bind(document);


// this function is "smart"
// if an element is not found, it will try to get an id then a class if it fails

function select(el) {
    let ele = document.querySelector(el)

    if (!ele && smartmode === true) {
        return ele = document.querySelector(`#${el}`)
    }

    else if (!ele && smartmode === true) {
        return ele = document.querySelector(`.${el}`)
    }

    return ele
}



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


// moves an element to inside another element (the bottom of it)
function move(el, to) {
    select(to).appendChild(select(el))
}

// just in case you forget that move does this
function moveBottom(el, to) {
    move(el, to)
}

// moves an element above a container
function moveAbove(el, to) {

    // Get the reference element
    let ele = select(el)
    // Get the parent element
    let parentDiv = ele.parentNode

    // Insert the new element into before sp2
    parentDiv.insertBefore(ele, select(to))

}




// moves an element below another element (outside of it)
function moveBelow(el, to) {
    // grab target element reference
    const target = select(to);

    // insert the element after target element
    target.parentNode.insertBefore(select(el), target.nextSibling);

}


// moves an element to the top of another element
function moveTop(el, to) {
    var container = select(to);
    container.insertBefore(select(el), container.firstChild);
}


function addClass(el, cless) {
    select(el).classList.add(cless);
}

function removeClass(el, cless) {
    select(el).classList.remove(cless)
}


// gets the text of an element
function getText(el) {
    return select(el).innerText
}


function setText(el, text) {
    select(el).innerText = text
}

function appendText(el, text) {
    let ele = select(el)
    ele.innerText = ele.innerText + text
}


function prependText(el, text) {
    let ele = select(el)
    ele.innerText = text + ele.innerText
}

function hide(el) {
    select(el).style.display = "none"
}

function show(el) {
    select(el).style.display = ""
}



// you can set the original value of an element, and it will be set as an attribute
function setOrigvalue(el, val) {
    select(el).setAttribute("origValue", val)
}


// you can access the orig value
function getOrigvalue(el) {
    return select(el).getAttribute("origValue");
}



// why does javascript use dots for everything? too much work
function log(str) {
    console.log(str)
}

