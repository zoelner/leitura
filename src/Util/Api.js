export function fetchData(url) {
    return fetch(`http://localhost:3001/${url}`, { headers: {
        'Authorization': 'Everton Zoelner',
        'Method': 'GET'
    }})
}