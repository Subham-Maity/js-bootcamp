console.log("This is Day 15");




document.getElementById("heading").addEventListener("click", function(e) {
    //heading = which element id is heading gimme that
    //The addEventListener() method attaches an event handler to a document.
    //first argument is event and type is click
    //second argument is listener -> function
    //Third is mouse event (e)

 /*   you can add whatever you want when someone clicks to the heading that redirects to the Google page*/
    // location.href = '//google.com'

/*  you can run whatever you want*/
    let variable;
    console.log("You have clicked the heading");
    // variable = e.target;
    // variable = e.target.className;
    // variable = e.target.classList;
    // variable = Array.from(e.target.classList);
    // variable = e.target.id;
    // variable = e.offsetX;
    // variable = e.offsetY;
    // variable = e.clientX;
    variable = e.clientY;
    console.log(variable);

});
