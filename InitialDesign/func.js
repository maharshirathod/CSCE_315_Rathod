function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const element = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var newVar = element.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    if(newVar == "style.css"){
        element.setAttribute("href", "style2.css");
    }
    else{
        element.setAttribute("href", "style.css");
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", element.getAttribute("href"));
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var newVar = localStorage.getItem("stylesheet")
    // 2 (b) get html style element by ID
   // localStorage.getItem("mainStyleSheet")
    // 2 (c) replace href attribute of html element.
    const element = document.getElementById("mainStyleSheet");

    element.setAttribute("href", newVar);
}


