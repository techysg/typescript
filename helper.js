const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

function get({ url }) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post({ url, body, headers = { 'Content-Type': 'application/json' } }) {
    const requestOptions = {
        method: 'POST',
        headers,
        body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put({ url, body, headers = { 'Content-Type': 'application/json' } }) {
    const requestOptions = {
        method: 'PUT',
        headers,
        body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete({ url }) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

async function handleResponse(response) {
    let data = await response.json();
    if (!response.ok) {
        //Handle error here
        return Promise.reject({ response, data })
    }
    return { response, data };
}



const handleError = error => console.error('Error!', error);
const handleSuccess = data => console.log('Success!', data);

//GET
let TODOURL = 'https://jsonplaceholder.typicode.com/todos/1';
fetchWrapper.get({ url: TODOURL })
    .then(handleSuccess)
    .catch(handleError)



//POST
let ADDPOSTURL = 'https://jsonplaceholder.typicode.com/posts';
let POSTDATA = {
    url: ADDPOSTURL,
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}
fetchWrapper.post(POSTDATA)
    .then(handleSuccess)
    .catch(handleError)



//ERROR
fetchWrapper.get({ url: 'https://graph.facebook.com/oauth/access_token?client_id=foo&client_secret=bar&grant_type=baz' })
    .then(handleSuccess)
    .catch(handleError)
