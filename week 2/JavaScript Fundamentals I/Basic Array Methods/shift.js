// Chat message queue (Remove from array)
const messageQueue = [];

function receiveMessage(user, text) {
    messageQueue.push({ user, text, time: new Date() });
    processMessages();
}

function processMessages() {

    for (let i = 0; i < 5 && messageQueue.length > 0; i++) {
        const msg = messageQueue.shift(); //-------------------------> fetching message in a inputed order. 
        console.log(`${msg.user}: ${msg.text}`);

    }
}


receiveMessage("Alice", "Hello!");
receiveMessage("Bob", "Hi Alice!");
receiveMessage("Charlie", "Hey guys!");


/*
const queue = ["First", "Second", "Third"];
console.log(queue.shift());
console.log(queue);

*/