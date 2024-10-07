/*** Change the color of some text */
function changeButton(){
    document.getElementById('jsstyled').style.color="purple"
}

/*** Initialize the page characteristics */
function initPage(){
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
}

/***
 * Toggle which divs are visible
 */
function switchContent(){
    
    var content=document.getElementById('content')
    var image=document.getElementById('image')
    console.log("switchContent "+content.style.display)
    
    if (content.style.display == "none"){
        //if content is not showing, show it and hide image
        image.style.display="none"
        content.style.display="block"
        
    }else{
        //if content is showing, hide it and show image
        content.style.display="none"
        image.style.display="block"
    }
}

/***
 * Change text of text area based on language choice
 */
function selectLanguage(choice){
    var text=document.getElementById('code')
    var codeText=""
    switch(choice){
        case 'java':
            codeText="System.out.println('Hello World')"
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
    //set the text of the text area
    text.value=codeText

}