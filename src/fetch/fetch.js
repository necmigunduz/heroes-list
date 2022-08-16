const fetchApi = async (url) => {
    try {
        let response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export default fetchApi;