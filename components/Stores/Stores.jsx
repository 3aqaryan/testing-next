import React, {useState} from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import Filter1Icon from '@mui/icons-material/Filter1'
import Filter2Icon from '@mui/icons-material/Filter2'
import MapStore from '../Map/Map'

export default function Stores() {
    const [coordinate, setCoordinate] = useState({
        center : [40.177628, 44.512546],
        zoom : 10
    })
  return (
      <div className='contentStores'>
      <h1 data-aos="flip-up">Մեր <span>խանութները</span></h1>
      <div className='stores' data-aos="fade-up" data-aos-duration="1500">
        <div className='list' data-aos="fade-right" data-aos-duration="2500">
            <div className="item" data-aos="zoom-in-right" data-aos-duration="2800" onClick={() => {
                setCoordinate({center : [40.178876, 44.510292], zoom : 18})
            }}>
                <div className='icon'>
                    <Filter1Icon sx={{ fontSize: 35 }}/>
                </div>
                <div className="itemcont" data-aos="fade-up" data-aos-duration="3100">
                    <p> Ք․ Երևան, Ամիրյան 5 <br></br><i>New Mobile</i></p>
                    <span><PhoneIcon sx={{ fontSize: 14 }}/> 098 83 01 80</span>
                </div>
            </div>
                <div className="item" onClick={() => {
                    setCoordinate({center : [40.062345, 44.442586], zoom : 18})}
                    }>
                    <div className='icon'>
                        <Filter2Icon sx={{ fontSize: 35 }}/>
                    </div>
                    <div className="itemcont" data-aos="fade-down" data-aos-duration="3100">
                        <p> Ք․ Մասիս Հանրապետության 5/1<br></br><i>New Mobile</i></p>
                        <span><PhoneIcon sx={{ fontSize: 14 }}/> 098 83 01 80</span>
                    </div>
                </div>
            </div>
            <MapStore coordinatestore={coordinate}/>
        </div>
        </div>
  )
}
