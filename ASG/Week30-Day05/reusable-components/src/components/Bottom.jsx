import M from 'minimatch'
import React from 'react'
import Item from './Item'


const data = [{
    first: "firstA",
    second: "secondA",
    third: "thirdA",
    fourth: "fourthA"
    

},
    {
        first: "firstB",
        second: "secondB",
        third: "thirdB",
        fourth: "fourthB"


    },
    {
        first: "1",
        second: "2",
        third: "3",
        fourth: "4"


    }]
const Bottom = () => {
    
    return (
        <div>
            {data.map(o =>
                <Item data={o} />
                
            )}
        </div>
    )
}

export default Bottom
