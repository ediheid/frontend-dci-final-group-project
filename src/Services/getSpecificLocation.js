// import { useParams } from "react-router-dom"

export const getSpecificLocation = async (id, setLocationData) => {
    
    const url = `http://localhost:3001/location/${id}`


    console.log("URL DETAILS PAGE", url)
    try {
        const response = await fetch(url)
        const data = await response.json()
        setLocationData(data)
    } catch (e) {
        console.log(e)
    }
    // fetch(`http//localhost:3001/location/${id}`)
    // .then(response => {
    //     if(response.ok) {
    //         return response.json();
    //     }
    // })
    // .then(data => {
    //     console.log("SPECIFICLOCATIONDATA", data)
    //     // return data;

    //     setLocationData(data)
    // })
}