function addTask() {
    const taskInput = document.getElementById('task-form').children[0].value;
    const container = document.getElementById('container');
    
    const taskDiv = `<div class="task-div">${taskInput}</div>`;

    container.insertAdjacentHTML('beforeend', taskDiv);

    document.getElementById('task-form').children[0].value = '';
}