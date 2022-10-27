let BASEURL = "http://localhost:3500/"


export const fetchAll = async (resource) => {
    const res = await fetch(BASEURL + resource)

    const data = res.json()

    return data
}

export const postTo = async (resource, body = null) => {
    const res = await fetch(BASEURL + resource, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify(body)
    })

    const data = res.json()

    return data
}