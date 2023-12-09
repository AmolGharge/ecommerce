import React, { useState } from 'react'
import AvatarDisplay from './AvatarDisplay'
import AvatarListArray from './AvatarData'

function AvatarList() {
    const [data, setData] = useState(AvatarListArray)
    
    const genderData = [...new Set(AvatarListArray.map((curElem, i)=> {
        return curElem.gender
    })), 'All']

    const designationData = [...new Set(AvatarListArray.map((curElem, i)=> {
        return curElem.designation
    }))]

    const filterMenu = (item) => {
        setData('')
        if(item == 'All') {
            setData(AvatarListArray)
            console.log(data)
        } else {
            const updatedArray = AvatarListArray.filter((element) => {
                return element.gender === item 
            })
            setData(updatedArray)
        }
    }

    const filterDesignation = (e) => {
        setData('')
        const updatedDesi = AvatarListArray.filter((element) => {
            return element.designation === e.target.value
        })
        setData(updatedDesi)
    }

    return (
        <div>

            <h1>Avatar List Display</h1>

            <div>
                {
                    genderData.map((item,i) => {
                        return <button type="button" class="btn btn-danger" style={{marginLeft: 5, marginBottom:20}} onClick={() =>filterMenu(item)}>{item}</button>
                    })
                }
            </div>
            
            <div style={{marginBottom:20}}>
                <select onChange={(e)=> filterDesignation(e)}>
                    {
                        designationData.map((desi,i)=> {
                            return <option>{desi}</option>
                        })
                    }
                    
                </select>
            </div>

            
            {
                data.map((list, i) => {
                    return (

                        <AvatarDisplay
                            id={list.id}
                            name={list.name}
                            designation={list.designation}
                        />

                    )
                })
            }

            {/* <AvatarDisplay  AvatarListArray = {AvatarListArray}/> */}

        </div>
    )
}

export default AvatarList