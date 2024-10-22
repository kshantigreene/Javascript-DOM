
function testLocal(){
    localStorage.setItem("test","test1")
}

/*** Change the color of some text */
function changeButton(){
    location.href="second.html"
    //document.getElementById('jsstyled').style.color="purple"
}

/***
 * Initialize page characteristics
 */
function initPage(){
    testLocal()
    var content=document.getElementById('content')
    content.style.backgroundColor="lightGray"
    content.style.textAlign="center"
    content.style.width="80%"
    content.style.margin="AUTO"
    content.style.display="block"// shows it
    var languages=document.getElementById('languages')
    languages.style.margin="10px"
    var image=document.getElementById('image')
    image.style.margin="AUTO"
    image.style.width="80%"
    image.style.textAlign="center"
    localStorage.setItem('LastLanguage','python')
    console.log(localStorage.getItem('LastLanguage'))
    const items = { ...localStorage };

    loadPosts();

}

/**
 * Switch between displaying content and image divs
 */
function switchContent(){
    
    //grab two components.. div called content and div called image
    var content=document.getElementById('content')
    var image=document.getElementById('image')
    console.log("switchContent "+content.style.display)
    
    if (content.style.display == "none"){
    //if content is not showing, switch to showing content (display=block)

        image.style.display="none"
        content.style.display="block"
        
    }else{ 
        //if content is showing, switch to showing image
        content.style.display="none"
        image.style.display="block"
    }
    
}

/***
 * Change text of text area based on language choice
 */
function selectLanguage(choice){
    //get the component by ID
    var text=document.getElementById('code')
    console.log(text.value)
    var codeText=""
    //set the new text
    switch(choice){
        case 'java':
            codeText="System.out.println('Hello World')"
            break
        case 'python':
            codeText="print('Hello World')"
            break
        case 'c#':
            codeText="Console.writeLine('Hello World')"
            break
        case 'c++':
            codeText="cout << 'Hello World'"
            break
        case 'javascript':
            codeText="console.log('Hello World')"
            break;
    default:
            codeText="Hello World"

    }
    //change the text area's text
    text.value=codeText

}

function getLocal(){
    console.log("Last cuisine was: "+localStorage.getItem("cuisine"))
}


function loadPosts(){
    //use this code to add p elements to a div
    //from https://www.w3schools.com/jsref/met_document_createelement.asp
    let postdiv=document.getElementById("posts");

    //look at each key in localstorage and find the ones that contain 'subject'
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).indexOf("subject") != -1){
            //key contains subject
            //create a p tag and set its class to post
            const para = document.createElement("p");
            para.setAttribute("class","post");
            //get the id from the key
            let dot=localStorage.key(i).indexOf(".");
            let id=localStorage.key(i).substring(0,dot);
            //set the id attribute and onclick to loadReplies
            para.setAttribute("id",id);
            //The following line passes the value in ID into the string. Note the back-tick for quotes. Then use the 
            //${varname} to place the value in id into the string.
            para.setAttribute("onclick",`loadReplies(${id})`);
            //set the visible text of the p to the subject of the post
            para.innerHTML=localStorage.getItem(localStorage.key(i));
            //add the p to the div
            postdiv.appendChild(para);
        }
    }
}   

/***
 * Load reply IDs for the post with id
 */
function loadReplies(id){
    console.log("loading replies for "+id);
    let replies=[]; //a new array
    //look for a reply to with the value as the id
    for(let i = 0; i < localStorage.length; i++){
        console.log(localStorage.key(i)+":"+localStorage.getItem(localStorage.key(i)));
        if(localStorage.key(i).indexOf("replyto") != -1){
            let val=localStorage.getItem(localStorage.key(i));
            if(val===String(id)){//note the triple equals for the string comparison. Also had to force it to be a string
                
                //pull out the id of the reply
                let dot=localStorage.key(i).indexOf(".");
                let replyID=localStorage.key(i).substring(0,dot);
                //add the replyID to the array
                replies.push(replyID);

            }
        }
    }
    //do something with the replies. For now I'm just going to print to console
    console.log(replies);
    
}
