import React, {useState} from 'react'
import axios from 'axios'


const url = 'https://mindkosh-backend-test-2.s3.amazonaws.com/mindkosh/Wallpapers-main-81ccdac4-e92a-40a7-a86e-7f6dd1c14188/1.tar.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATTAUJC2AHTUU2I4G%2F20210719%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210719T084818Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b11295dccb324abe6cf501a6e385764a5ef81fd85d60ca27c4fa260a5347af22'

const Fbc = () => {
  const clickHandler = async() => { 
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', `${"data"}`);
      // document.body.appendChild(link);
      // link.click();
      const {data} = await axios({
        url:url,
        method:'Get'
      })
      console.log("data", data)
  }

    return (
        <div className="App">
        <button type="button" onClick={clickHandler}>CLICK ME</button>
      </div>
    )
}

export default Fbc
