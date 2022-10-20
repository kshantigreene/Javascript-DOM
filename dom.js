function changeButton(){
    document.getElementById('jsstyled').style.color="purple"
}

function initPage(){
    var content=document.getElementById('content')
    content.style.backgroundColor="lightGray"
    content.style.textAlign="center"
    content.style.width="80%"
    content.style.margin="AUTO"
    var languages=document.getElementById('languages')
    languages.style.margin="10px"
}

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
    text.value=codeText

}