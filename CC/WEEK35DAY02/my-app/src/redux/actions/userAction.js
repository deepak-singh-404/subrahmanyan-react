
export const setProfile = (data,history)=>{
    history.push('/profile')
    return {
        type:'SET_PROFILE',
        payload: data
    }
}







