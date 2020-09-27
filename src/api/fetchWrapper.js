
export async function client(endpoint, {body, ...customConfig} = {}) {
    const headers = {'Content-Type': 'application/json'}
    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }
    if (body) {
        config.body = JSON.stringify(body)
    }
    return await window.fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, config)
        .then(async response => {
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        })
}

function create(path, data) {
    return client(path, {body: data, method: 'POST'});
}

async function read(path) {
    return await client(path);
}

function update(path, updates) {
    return client(`${path}`, {
        method: 'PUT',
        body: updates,
    })
}

function remove(path) {
    return client(`${path}`, {method: 'DELETE'})
}

export {create, read, remove, update}