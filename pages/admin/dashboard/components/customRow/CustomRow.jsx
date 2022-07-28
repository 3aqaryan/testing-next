import React, { useEffect } from 'react'
import axios from 'axios'
import { Grid, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { MTableBodyRow } from 'material-table'
import { useNavigate } from 'react-router-dom'

export default function CustomRow(props) {
    const DeleteItem = () => {
        const sendData = {
          id: props.data.id
        }
        // axios.post("http://localhost/newmobile/admin/content/notfinisheddelete.php", sendData)
        // .then((response) =>{
        //     console.log(response.data)
        // })
      };
    const returnItem = () => {
      const sendData = {
        id : props.data.id
      }
      // axios.post("http://localhost/newmobile/admin/content/finishedreturn.php", sendData)
      //   .then((response) =>{
      //       console.log(response.data)
      //   })
    }
    let navigate = useNavigate()
    const updateItem = () => {
      localStorage.setItem("id", props.data.id)
      navigate( "/dashboard/update-item" );
    }

  const overlayStyle = {width : "100%", position : "absolute"}
  return (
    <Grid style={{display : "contents"}}>
        <Grid align="right" style={overlayStyle}>
          <IconButton title="Back to the not finished page" onClick={returnItem}>
                <KeyboardBackspaceIcon />
          </IconButton>
            <IconButton title="Edit" onClick={ updateItem }>
                <EditIcon />
            </IconButton>
            <IconButton title="Delete" onClick={DeleteItem}>
                <DeleteIcon />
            </IconButton>
        </Grid>
        <MTableBodyRow {...props} />
    </Grid>
  )
}
