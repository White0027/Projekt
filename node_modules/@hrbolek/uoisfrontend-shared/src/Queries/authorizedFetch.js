const overridenPath = '/api/gql'

const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
}

// const cache = {}
const replaceUUID = false
const replaceID = true
/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {*} path 
 * @param {*} params 
 * @returns Promise
 */
export const authorizedFetch2 = (path, params) => {
    console.log("fetch from shared")

    const headers = {...globalFetchParams.headers, ...params.headers}
    const newParams = {...globalFetchParams, ...params, headers} // allow owerwrite default parameters (globalFetchParams)
    if (replaceUUID) {
        newParams.body = newParams.body.replaceAll("UUID", "ID")
    }
    if (replaceID) {
        newParams.body = newParams.body.replaceAll(": ID", ": UUID")
    }

    return fetch(overridenPath, newParams).then(response => response.json()) //params.header should be extended with Authorization TOKEN
    // const cached = cache[bodyIndex]
    // if (cached) {
    //     console.log("fetch2.cache used")
    //     return cached
    // } else {
    //     const result = fetch(overridenPath, newParams).then(response => response.json()) //params.header should be extended with Authorization TOKEN
    //     // cache[bodyIndex] = result   
    //     result.then(
    //         r => {
    //             // delete cache[bodyIndex]
    //         }
    //     )
    //     return result
    // }
}
