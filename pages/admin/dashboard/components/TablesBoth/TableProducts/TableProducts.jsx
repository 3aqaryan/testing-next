import React, { useState, useEffect } from 'react'
import MaterialTable from '@material-table/core';
import axios from 'axios';
import CustomRow from '../../customRow/CustomRow';
// import Data from '../components/Data/Data';

export default function TableProducts() {
  const [t1, setT1] = useState([]);
  // useEffect(() =>{
  //     axios.post("http://localhost/newmobile/admin/finished.php")
  //     .then(response => {
  //       const data = response.data;
  //         setT1(data) 
  //     })  
  // }, [t1])
  const dataProduct=[
    ...t1.map((e) => {
        return ({ id : e.id, name : e.name, image : e.image })
    })
  ]
  const columns = [
    {
      title : 'ID', field : 'id'
    },
    {
      title : 'Image', field : 'image', render:(row)=><img src={row.image} alt={row.name}/>
    },
    {
      title : 'Name', field : 'name'
    }
  ]
    // return <Data objProduct={t1} />
  return (
    <div>
        <MaterialTable title="Products"
        data={dataProduct}
        columns={columns}
        // editable={{
        //   onRowDelete : selectedRow=>new Promise((resolve)=>{
        //       // console.log(selectedRow.id) //get id product for delete
        //       const index = selectedRow.id
        //       const updatedRows = [...dataProduct]
        //       updatedRows.splice(index,1)
        //       setTimeout(() => {
        //         console.log(updatedRows)
        //           resolve()
        //       }, 1000)
        //   })
        // }}
        components={{
          Row : props => <CustomRow {...props} />
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition : 'first',
          // search : false anjatel pntrel@
          // paging : false Turn off pages arrows
          // filtering : true filtracnel @st og. namei u gni
          exportButton : true // nerbernel CSV kam PDF-i tesqov
        }}
        />
    </div>
  )
}
