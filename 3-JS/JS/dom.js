// --- BOM (Browser Object Model) --- //
// 1. alert() , confirm() , promt()
// 2. location.href = '';


// --- DOM (Document Object Model) --- //

// - DOM tree refers to the HTML page where all the nodes are objects.
// -text nodes , element nodes , comment nodes

// --- Children of an Element --- //
// 1. firstChild
// 2. lastChild
// 3. childNodes
// 4. childNodes[0]

// --- Table Links For DOM --- //
// 1. table.rows  (Collection of tr elements)
// 2. table.caption
// 3. table.tHead
// 4. table.tFoot  (Referenece to <tFoot>)
// 5. table.tBodies  (Collection of <tBody> Elements)
// 6. tbody.rows  (Collection of <tr> inside)
// 7. tr.cells  (Collection of td and th)
// 8. tr.SectionRowIndex  (Index of inside <tr>)
// 8. tr.rowIndex   (Row no. starting from 0)
// 8. td.callIndex  (No. of cells inside <tr>)

// --- Searching the DOM --- //
// A1. elem.matches(css)
// A2. elem.closest(css)
// A3. elemA.contains(elemB)

// B1. getElementById('header')
// B2. getElementsByClassName('header')
// B3. querySelectorAll('header')
// B4. querySelector('header')
// B5. getElementByTagName('header')
// B6. getElementByName('header')

// --- SOME EXAMPLE FOR DOM --- //
let headerElement = document.getElementById('nav-menu');
let Element = headerElement.childNodes[1].style.color = 'red';
// headerElement.firstChild
let listElement = document.getElementsByTagName('li');
listElement.childNodes
  
console.log(listElement,'h')
console.log(Element,'h')