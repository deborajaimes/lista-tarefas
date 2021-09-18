let list = [] //inicializando o vetor

function addTask() {
    list.push(document.getElementById("task").value); //pega o valor que o usuário inseriu no imput
    clearTask()
    listTask()
}


function listTask() {
document.getElementById("tasks").innerHTML = ``
for (let i = 0; i < list.length; i++) {
    document.getElementById("tasks").innerHTML += `<div>${' - ' + list[i]}</div>`
    console.log(list[i]);
}
    
}

function clearTask() {
    document.getElementById('task').value = '';
}