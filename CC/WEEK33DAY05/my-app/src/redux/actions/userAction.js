import axios from 'axios'


export const getProducts = ()=>{
    return async (dispatch)=>{
        try{
            const {data} = await axios({
                url:"https://fakestoreapi.com/products",
                method:"get"
            })
            console.log("data", data)
            dispatch({
                type: "GET_PRODUCTS",
                payload: data
            })
        }
        catch(err){
            alert("Some error occured", err.message)
        }
    }
}


// export const customerLogin = (_data, history) => {
//     return async (dispatch) => {
//         try {
//             dispatch(loader(true))
//             const { data } = await axios({
//                 method: "Post",
//                 url: url + "/api/v1/sendOTP",
//                 data: _data,
//             })
//             dispatch(loader(false))
//             if(data.success){
//                 dispatch({
//                     type: "SET_PHONE-NUMBER",
//                     payload: _data.phoneNumber
//                 })
//                 history.push('/verify-OTP')
//             }
//         }
//         catch (err) {
//             dispatch(loader(false))
//             alert("Some error occured in customer login")
//             console.log("Error in customerLogin Action", err.message)
//         }

//     }
// }
