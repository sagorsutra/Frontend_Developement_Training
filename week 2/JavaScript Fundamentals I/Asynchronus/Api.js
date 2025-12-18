async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
}

async function safeFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        return null;
    }
}


async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'My post',
            body: 'Hello world',
            userId: 1
        })
    });
    return await response.json();
}


localStorage.setItem('name', 'JOhn');
//localStorage.removeItem('name');

/*
const URL = "https://api.genderize.io?name=peter";
const btn = document.querySelector("#loadBtn");
const factPara = document.querySelector("#fact");

getdata = async() => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.status);

    factPara.innerHTML = `
    Name : ${data.name} <br>
    Gender : ${data.gender} <br>

    `;
}


btn.addEventListener("click", getdata);

*/