if(!localStorage.getItem("1234.subject")){
    console.log("adding items");
    localStorage.setItem("1234.subject","How to create local storage");
    localStorage.setItem("1234.author","Kshanti Greene");
    localStorage.setItem("1234.content","Go to w3 schools");
}
if(!localStorage.getItem("1235.subject")){
    localStorage.setItem("1235.subject","Error: element was null");
    localStorage.setItem("1235.author","Kshanti Greene");
    localStorage.setItem("1235.content","You have to wait to do any manipulation on the DOM until after the page is loaded. So use something like the body onload tag to call any code that should happen after the page is loaded.");
}

if(!localStorage.getItem("12341.replyto","1234")){
    localStorage.setItem("12341.replyto","1234");
    localStorage.setItem("12341.author","Mary Poppins");
    localStorage.setItem("12341.content","Thanks for the recommendation.");
}

