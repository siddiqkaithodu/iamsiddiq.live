let answer, todo;
const cmd_button = document.querySelector("#cmd-button");
const cmd_container = document.querySelector("#cmd_container");
const cmd_display = document.querySelector("#cmd_display");
const cmd_resume = document.querySelector("#cmd-resume");
const output = {
    'introduce': 'He is a Self Taught programer.He loves to learn new technologies and skills on his own',
    'skills': 'He is somewhat skilled in <br>HTML,JAVASCRIPT,CSS,PHP,MySQL,Python,C/C++,Java and PostGrSQL',
    'education': 'He is a MCA student since 2020<br>He graduated in BSC Computer Science in the period of 2017-2020'
}
function clearscreen() {
    cmd_display.innerHTML = '';
    return '>>$ Hi Human.I am Cipher ,a friendly bot commissioned by sid.He made me to talk about him to others.<br>>>$ Type help for list of commands';
}
function dotasks(code) {
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
