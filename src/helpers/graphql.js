/**
 * Makes basic post call to graphql api.
 * @param {*} query 
 */
export default async function getGraphQL(query) {
    const res = 
        await fetch('/express', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query })
        })
        .then(res => res.json())
        .then(res => {
            const { data = {} } = res;
            return data;
        });
    return res;
}