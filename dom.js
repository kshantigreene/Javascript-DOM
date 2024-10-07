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
    content.style.display="block"
    var languages=document.getElementById('languages')
    languages.style.margin="10px"
    var image=document.getElementById('image')
    image.style.margin="AUTO"
    image.style.width="80%"
    image.style.textAlign="center"
    localStorage.setItem('LastLanguage','python')
    console.log(localStorage.getItem('LastLanguage'))

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

