
var punishment = function(){
    var PunArray = ["Write a blog post",
    "Come to next class in formal attire",
    "Stand in the corner for one hour",
    "Sing / dance in front of class",
    "Buy/Make coffee and serve everyone",
    "End every conversation with Lunch is coming until lunchtime",
    "Bow to everyone and apologize seriously",
    "Push up x2 for every min. late",
    "Jog to ferry pier during lunch time and take a selfie"];
    
    var a = Math.random();
    var b = PunArray.length;
    var c = Math.floor((a/(1/b)));
    
    return PunArray[c];
};

console.log("The punishment is: ", punishment());

document.write (punishment())