//Oppose of push --> Added to the array
// Simple task manager with priorities
const taskQueue = [];

function addTask(task, priority = "normal") {
    const taskObj = {
        id: Date.now(),
        task,
        priority,
        added: new Date()
    };

    if (priority === "high") {
        taskQueue.unshift(taskObj); // High priority goes to front
        console.log(`🔥 High priority task added: ${task}`);
    } else {
        taskQueue.push(taskObj); // Normal goes to end
        console.log(`📝 Normal task added: ${task}`);
    }
}

function processNextTask() {
    if (taskQueue.length > 0) {
        const task = taskQueue.shift(); // Get first (highest priority)
        console.log(`Processing: ${task.task} (${task.priority})`);
        return task;
    }
    return null;
}

// Usage
addTask("Fix critical bug", "high"); // Goes to front
addTask("Write documentation"); // Goes to end
addTask("Update dependencies", "high"); // Goes to front
addTask("Plan meeting"); // Goes to end

// Processing order: Update deps → Fix bug → Write docs → Plan meeting
processNextTask(); // "Update dependencies"
processNextTask(); // "Fix critical bug"