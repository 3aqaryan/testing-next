import React, { useEffect } from 'react'
import axios from 'axios'
import { Grid, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import { MTableBodyRow } from 'material-table'
import { useNavigate } from 'react-router-dom'

export default function NotFinishedCustomRow(props) {
    const DeleteItem = () => {
        const sendData = {
          id: props.data.id
        }
        // axios.post("http://localhost/newmobile/admin/content/notfinisheddelete.php", sendData)
        // .then((response) =>{
        //     console.log(response.data)
        // })
      };
    const checkItem = () => {
      const sendData = {
        id : props.data.id
      }
      // axios.post("http://localhost/newmobile/admin/content/notfinished_update_status.php", sendData)
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
          <IconButton title="Check" onClick={checkItem}>
                <CheckIcon />
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
