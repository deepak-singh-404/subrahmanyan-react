import axios from 'axios'

let baseUrl = "https://www.googleapis.com/youtube/v3/videos"

//Your access_key
let access_key = ""


export const getTrendingVideos = ()=>{
    return async (dispatch)=>{
        try{
            const {data} = await axios({
                url: baseUrl,
                method:"get",
                params:{
                    part:'contentDetails',
                    chart:'mostPopular',
                    regionCode:'IN',
                    maxResults:25,
                    key:access_key

                }
            })
            dispatch({
                type: "SET_TRENDING_VIDEOS",
                payload: data.items
            })
        }
        catch(err){
            alert("Some error occured", err.message)
        }
    }
}




