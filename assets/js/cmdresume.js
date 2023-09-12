let answer, todo;
const cmd_button = document.querySelector("#cmd-button");
const cmd_container = document.querySelector("#cmd_container");
const cmd_display = document.querySelector("#cmd_display");
const cmd_resume = document.querySelector("#cmd-resume");
const output = {
    'introduce': "He is a Self Taught who always looking for ways to improve his skills and stay up to date with the latest technologies and industry trends. He is constantly experimenting with new tools and techniques to enhance his abilities. He is committed to continuous learning and always strive to push the boundaries of what can achieve. Whether it's through  webinars, or forums, He always seeking out opportunities to improve his knowledge and hone his craft. In the end, his goal is to become a leading expert in his field and provide the best solutions for the needful \n Ouch..",
    'skills': 'He is skilled in <br>Python,C/C++,Java,JAVASCRIPT,PHP,MySQL, and PostGrSQL',
    'education': 'MCA - 2020-2022 <br>BSC Computer Science - 2017-2020',
}
function clearscreen() {
    cmd_display.innerHTML = '';
    return '>>$ Hi Human.<br>>>$ Type help for list of commands';
}
const s1="c29qYQ==";
const s2="YW51";
const msg1="WW91IG1lbnRpb25lZCBzb21ldGhpbmcgaW4gaGlzIHBlcnNvbmFsIGxpZmU=";
const msg2="LkFzIHBlciB0aGUgc3RhbmRhcmQgcHJvdG9jb2wgZ2l2ZW4gdG8gbWUsIFlvdSB3aWxsIGJlIGJsb2NrZWQgZnJvbSBub3cgb24gZm9yIGEgbGltaXRlZCB0aW1lLg==";
const msg=atob(msg1)+"😉"+atob(msg2);
function dotasks(code) {
    if((code.toLowerCase().indexOf(atob(s1))!=-1) || (code.toLowerCase().indexOf(atob(s2))!=-1))
    { 
        cmd_resume.disabled='false';
       
        return msg;
    }
    code = code.substring(4).toLowerCase();
    switch (code) {
        case '': todo = '';
            break;
        case 'help': todo = 'introduce -for a self introduction<br>skills - for a list of skills<br>education -for educational information<br>clear - for clearing the screen<br>';
            break;
        case 'introduce': todo = output['introduce'];
            break;
        case 'skills': todo = output['skills'];
            break;
        case 'education': todo = output['education'];
            break;
        case 'clear': todo = clearscreen();
            break;
        default: todo = 'Command not found<br>Type help for a list of commands';
            break;
    }
    return todo;
}
cmd_resume.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        cmd_display.innerHTML += ("<br>"+cmd_resume.value);
        answer = dotasks(cmd_resume.value);
        cmd_display.innerHTML += ("<br>"+answer);
        cmd_resume.value = '>>$ ';
    }
    cmd_display.scrollTop = cmd_display.scrollHeight;
});
cmd_button.addEventListener("click", function() {
    cmd_container.classList.toggle("activate");
});
