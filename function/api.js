export async function fecthJson (url, option = {}) {
        const header = {Accept : 'application/json', ...option.headers}
        const r = await fetch(url, {...option, header})
        if(r.ok) {
            return r.json()
        }
        throw new Error('Le serveur ne répond pas', {cause : r})
}