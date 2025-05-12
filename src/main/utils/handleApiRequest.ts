import axios from 'axios'

export default async function handleApiRequest(httpVerb: string, apiUrl: string, isJson: boolean, message: string | object): Promise<void> {
    switch (httpVerb) {
        case 'post':
            axios.post(apiUrl, message, {
                headers: { 'Content-Type': 'text/plain' }
            })
            break
        case 'get':
            const { data } = await axios.get(apiUrl)
            return data;
        
        case 'patch':
            throw 'Not Implemented'

        case 'delete':
            throw 'Not Implemented'

        default:
            throw 'Not recognized'
    }
}