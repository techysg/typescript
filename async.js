

async function foo() {
    setTimeout(function () {
        return 6
    }, 2000)
}

function aTimeOut() {
    return new Promise((resolve, rejetc) => {
        setTimeout(function () {
            resolve(5)
        }, 2000)
    })
}
async function aFetchTest() {
    let fetchR = ApiHelper('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => json).catch(err => err)


    console.log(fetchR);
    let value = await fetchR;
    console.log({ value, fetchR });

    let aVal = await aTimeOut();
    console.log({ aVal });

    let fooVal = await foo();
    console.log({ fooVal });
}


function ApiHelper(url, data = {}, method = 'GET') {
    let bearer = 'Bearer ' + '12345';
    return fetch(url, {  // Return promise
        method: method,
        headers: {
            'Authorization': bearer
        }
    })
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            return res;
        }).catch((error) => {
            error = error;
        })
}

aFetchTest();

