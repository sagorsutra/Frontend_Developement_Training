/*
:white_check_mark: Question 5: Simple To-Do Manager
Create a simple task manager using JavaScript with the following functions:
addTask(task)
removeTask(task)
listTasks()
Sample Execution:
addTask("Learn JavaScript");
addTask("Practice Coding");
removeTask("Learn JavaScript");
listTasks();
Expected Output:
["Practice Coding"]
Conditions:
Tasks should be stored in an array.
removeTask() removes the first matching task.

*/

let tasks = [];

function addTask(t) {
    tasks.push(t);
}

function removetask(task) {

    const index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`removed: ${task}`);
    } else {
        console.log(`Task not found`);
    }
}

function listTasks() {
    console.log(tasks);
    return tasks;
}


addTask("Learn JavaScript");
addTask("Practice Coding");
removeTask("Learn JavaScript");
listTasks();