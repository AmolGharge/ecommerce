
import React, { useState } from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

const DisplayData = () => {
    const [record, setRecord] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false)
    // const [editID, setEditID] = useState('')

    const [formInputData, setFormInputData] = useState(
        {
            srno: '',
            fullname: '',
            mobile: '',
            email: '',
            cityname: ''
        }

    );

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value

        const newInput = (data) => ({ ...data, [name]: value })
        setFormInputData(newInput)

        // ---- Second Option --------
        // setFormInputData ({...setFormInputData, [name] : value})

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setIsUpdate(false)
        
        const newRecord = { ...formInputData }
        setRecord([...record, newRecord]);

        let deletedRecord
        deletedRecord = record.filter((curElem) => {
            return curElem.srno !== formInputData.srno
        })

        setRecord([...deletedRecord, newRecord]);
        setFormInputData({ srno: '', fullname: '', mobile: '', email: '', cityname: '' })

        const sortTypes = {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.srno - b.srno
            }
        };
        console.log('testfg32')
        // setRecord([...record ])
        // setRecord([...record, newRecord]);

     }

     

    const deleteRecord = (item) => {
        console.log(item)
        const deletedRecord = record.filter((curElem) => {
            return curElem.srno !== item.srno
        }
        )
        setRecord(deletedRecord)
    }

    const updateRecord = (item) => {
        setIsUpdate(true)

        setFormInputData(item)
    }

    return (
        <div>
            <h1>Display Data</h1>
            <input type='text' placeholder='Enter Code' onChange={handleChange} name='srno' value={formInputData.srno} /><br /><br />
            <input type='text' placeholder='Enter Full Name' onChange={handleChange} name='fullname' value={formInputData.fullname} /><br /><br />
            <input type='text' placeholder='Enter Mobile Number' onChange={handleChange} name='mobile' value={formInputData.mobile} /><br /><br />
            <input type='text' placeholder='Enter Email ID' onChange={handleChange} name='email' value={formInputData.email} /><br /><br />
            <input type='text' placeholder='Enter City Name' onChange={handleChange} name='cityname' value={formInputData.cityname} /><br /><br />

            <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">City Name</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                {
                    record.map((item, index) => {
                        return (

                            <tbody class="table-group-divider">
                                <tr key={item.index} >
                                    <td>{item.srno}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>{item.cityname}</td>
                                    <td><MDBIcon fas icon='edit' onClick={() => updateRecord(item)} /></td>
                                    <td><MDBIcon fas icon='trash-alt' onClick={() => deleteRecord(item)} /></td>
                                </tr>
                            </tbody>

                        )

                    }
                    )

                }

            </table>

        </div>

    )

}

export default DisplayData