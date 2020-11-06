/* Name: Tammy Liu
Email Address: Tammy_Liu@student.uml.edu
Affliation: University of Massachusetts Lowell Computer Science Student
COMP.4610-201 (91.61) GUI Programming Inclass Assignment 5
Copyright (c) November 5th 2020 by Tammy Liu. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the author.
Sources: w3schools.com */

let unorderList = document.getElementsByTagName("ul")[0];
let newItem, listCount, heading, coolClass;

// ADD NEW ITEM TO END OF LIST
newItem = document.createElement("li");
newItem.textContent = "cream";
unorderList.insertAdjacentElement("afterbegin", newItem);//inserts newItem after the tagname

// ADD NEW ITEM START OF LIST
newItem = document.createElement("li");
newItem.textContent = "kale";
unorderList.insertAdjacentElement("beforeEnd", newItem); //inserts newItem before the endtag

// ADD A CLASS OF COOL TO ALL LIST ITEMS
listCount = unorderList.childElementCount;

for(let i = 0; i < listCount; i++){
    /* Assigns each li element to coolClass so it can set class
    attribute of each li element to the cool class */
    coolClass = document.getElementsByTagName("li")[i];
    coolClass.setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
heading = document.getElementsByTagName("h2")[0];
newItem = document.createElement("span"); //span is used in the c05.css file and used here.
newItem.textContent = listCount;

heading.appendChild(newItem); //appends newItem to the end of the heading
