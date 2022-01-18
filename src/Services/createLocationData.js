import axios from 'axios';

export const createLocation = async (hookData) => {

    let formData=new FormData();

    const locationData = {
        ...hookData
    }


    // console.log(formData)
    // console.log(locationData.locationImage)
    // formData.append("locationImage",locationData.locationImage);

    // console.log(formData)

    formData.append("locationData",JSON.stringify(hookData));
    formData.append("locationImage",hookData.locationImage);

    try {
        // make axios post request
        const response = await axios({
          method: "post",
          url: "http://localhost:3001/location",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response)
      } catch(error) {
        console.log(error)
      }

    

    const settings = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL"

            // "Content-Type": "application/x-www-form-urlencoded"
            
        }
    }

    // const settings = {
    //     method: "POST",
    //     body: JSON.stringify(locationData),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }

//    fetch("http://localhost:3001/location", settings) 
//    .then( response => {
//        console.log(response)
//        if (response.ok) {
//            return response
//        } else {
//             switch(response.status) {
//                 case 400: 
//                     return response.json().then(err => {
//                         throw new Error(err.message)
//                     })
//                 default: 
//                     throw new Error("Internal server Error!")
//             }   
//        }
//    })
//    .then( data => {
//        console.log(data)
//    })
//    .catch( err => {
//        console.log(err)
//    })
}