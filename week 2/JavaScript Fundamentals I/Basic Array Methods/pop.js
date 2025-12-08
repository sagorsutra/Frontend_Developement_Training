//Stack Data Structure (LIFO)

class cloudManager {
    constructor() {
        this.actions = [];
        this.redoStack = [];
    }

    perform(action) {
        this.actions.push(action);
        console.log(`Performed :${action}`);
        this.redoStack = [];

    }

    undo() {

        if (this.actions.length === 0) {
            console.log("Nothing to undo");
            return null;
        }
        const lastAction = this.actions.pop();
        this.redoStack.push(lastAction);
        console.log(`undo : ${lastAction}`);
        return lastAction;
    }

    redo() {
        if (this.redoStack.length === 0) {
            console.log("Nothing to redo");
            return null;
        }
        const redoLast = this.redoStack.pop();
        this.actions.push(redoLast);
        console.log(`redo : ${redoLast}`);
        return redoLast;
    }

    getHistory() {
        return [...this.actions];
    }
}

const editor = new cloudManager();
editor.perform("Hello Type");
editor.perform("Play football");
editor.perform("jump");

console.log(editor.undo());
console.log(editor.undo());
console.log(editor.redo());
console.log(editor.getHistory());