//Recursive Function

const commentThread = {
    id: 1,
    text: "What do you think?",
    replies: [{
            id: 2,
            text: "I agree!",
            replies: [{
                id: 3,
                text: "Me too!",
                replies: [{
                        id: 5,
                        text: "Me too!",
                        replies: []

                    }] // No more replies
            }]
        },
        {
            id: 4,
            text: "I disagree",
            replies: []
        }
    ]
};


function countcoment(node) {
    let total = 1;
    for (let child of node.replies) { ///pre defining the result values
        total += countcoment(child);
    }
    return total;
}

console.log(countcoment(commentThread));


val m = 0;








/*
------ Usage --> 
Some APIs return deeply nested JSON.
Recursion helps you traverse and extract information without writing loops for every level.

7. When to Use Recursion
Use Recursion When:
Problem naturally divides into similar sub-problems

File/folder structures

Comment threads

Mathematical sequences

Tree/Graph traversal

DOM traversal

Finding paths

Game solving (chess, sudoku)

Divide and conquer algorithms

Merge sort

Quick sort

Binary search

Avoid Recursion When:
Simple iteration works (use loops instead)

Depth is unpredictable (risk of stack overflow)

Performance is critical (recursion has overhead)


// File system structure
const fileSystem = {
    name: "root",
    type: "folder",
    children: [{
            name: "documents",
            type: "folder",
            children: [
                { name: "resume.pdf", type: "file", size: 1024 },
                {
                    name: "taxes",
                    type: "folder",
                    children: [
                        { name: "2023.pdf", type: "file", size: 2048 }
                    ]
                }
            ]
        },
        { name: "photos", type: "folder", children: [] },
        { name: "readme.txt", type: "file", size: 512 }
    ]
};

function countfiles(node) {
    if (node === "file") {
        return 1;
    }

    let total = 0;
    for (let child of node.children) {
        total += countfiles(child);
    }
    return total;
}

//count the pdf files 
function countPDF(node) {
    if (node === "files") {
        return node.name.endsWith(".pdf") ? 1 : 0;
    }

    let total = 0;
    for (let child of node.children) {
        total += countPDF(child);
    }
    return total;
}



---> new thread

const number = 5;


const facto = (n) => {
    //Base Function 


    if (n <= 0) {
        return 1;
    }

    //Recursive Function
    return n * facto(n - 1);

}

console.log(facto(number));


*/