import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
import { styled } from '@mui/material/styles';
// import ImageUpload from '../ImageUpload/ImageUpload'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorPicker from '../../components/ColorPicker/ColorPicker'
import axios from 'axios'

export default function UpdateItem() {
  const [dataImage, setDataImage] = useState([])

  
    const [objItem, setObjItem] = useState({
       name : '',
       price : '',
       cashprice : '',
       credit : true,
       category : '',
       os : '',
       iosversion : '',
       androidversion : '',
       statusSell : '',
       frontCamera : '',
       mainCamera : '',
       screenType : '',
       screenResolution : '',
       screenSize : '',
       numberOfProcessorCores : '',
       cpu : '',
       ram : '',
       networkType : '',
       networkRange : '',
       chargerType : '',
       battery : '',
       gps : false,
       bluetooth : false,
       wifi : false,
       n4g : false,
       n3g : false,
       nfc : false,
       memory4 : false,
       memory8 : false,
       memory16 : false,
       memory32 : false,
       memory64 : false,
       memory128 : false,
       memory256 : false,
       memory512 : false,
       memory1 : false,
       cardSlot : false,
       weight : '',
       thickness : '',
       height : '',
       width : '',
       audio : '',
       simCardQty : '',
       color1 : {
            r : 23,
            g : 231,
            b : 201,
            a : 100
       },
       color2 : {
            r : 23,
            g : 231,
            b : 201,
            a : 100
       },
       color3 : {
            r : 23,
            g : 231,
            b : 201,
            a : 100
       },
       color4 : {
            r : 23,
            g : 231,
            b : 201,
            a : 100
       },
        color5 : {
            r : 23,
            g : 231,
            b : 201,
            a : 100
        },
        imagePath : ''
    })
    const productId = localStorage.getItem("id");
    useEffect(() =>{
        const sendData = {
            id: productId
            }
            axios.post("http://localhost/newmobile/admin/update_content_datas.php", sendData)
            .then((response) =>{
                setObjItem({...response.data[0]})
            })
    }, [])
    useEffect(() =>{
      const sendData = {
          id: productId
          }
          axios.post("http://localhost/newmobile/admin/php/sendDataBaseImages.php", sendData)
          .then((responseImage) =>{
            setDataImage([...responseImage.data])
          })
  }, [])
    const [value, setValue] = useState('1');
    const Input = styled('input')({
        display: 'none',
      });
    const GeneralValue = (e) => {
        setObjItem({
            ...objItem, 
            [e.target.name] : e.target.value
        })
    }
        const GeneralCheckbox = (e) => {
            setObjItem({
                ...objItem,
                [e.target.name] : e.target.checked
            })
        }
    const NativeSelectOs = () => {
        return(
            <FormControl fullWidth sx={{ marginTop : '10px' }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">OS</InputLabel>
                <NativeSelect
                    value={ objItem.os }
                    inputProps={{
                        name: 'os',
                        id: 'uncontrolled-native',
                    }}
                    onChange={ GeneralValue }
                    >
                    <option value='ios'>Ios</option>
                    <option value='harmonyOS'>Harmony OS</option>
                    <option value='android'>Android</option>
                </NativeSelect>
            </FormControl>
            )
        }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSend = () => {
    alert()
  }
  const handleChangeColor = (returnedColor, name) => {
    setObjItem({
     ...objItem,
     [name] : {
        r : returnedColor.rgb.r,
        g : returnedColor.rgb.g,
        b : returnedColor.rgb.b,
        a : returnedColor.rgb.a,
      }
    })
  }
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Add product table"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
        >
          <Tab label="General" value="1" />
          <Tab label="Camera" value="2" />
          <Tab label="Display" value="3" />
          <Tab label="Memory CPU" value="4" />
          <Tab label="Network" value="5" />
          <Tab label="Power" value="6" />
          <Tab label="Color" value="7" />
          <Tab label="Other" value="8" />
        </TabList>
      </Box>
      <TabPanel value="1">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField id="outlined-name" label="Name" variant="standard" name="name" value={ objItem.name } focused onChange={GeneralValue}/>
              <Box>
                  <TextField id="outlined-number" label="Price" variant="standard" name='price' value={ objItem.price } focused onChange={GeneralValue}/>
                  <FormControlLabel
                      value="monthlyFee"
                      control={
                      <Checkbox 
                        checked={ objItem.credit }
                        name="credit"
                        onChange={ GeneralCheckbox }
                        inputProps={{ 'aria-label': 'controlled' }}
                      />}
                      label="Monthly fee"
                      labelPlacement="top"
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} 
                  />
              </Box>
              <TextField id="outlined-number" label="Cash Price" type="number" variant="standard" name='cashprice' value={ objItem.cashprice } focused onChange={GeneralValue} />
              <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">Category</InputLabel>
                      <NativeSelect
                      value={ objItem.category }
                      inputProps={{
                          name: 'category',
                          id: 'uncontrolled-native',
                      }}
                      onChange={ GeneralValue }
                      >
                      <option value='phone'>Phone</option>
                      <option value='pc'>PC</option>
                      <option value='tablet'>Tablet</option>
                      <option value='watch'>Watch</option>
                      <option value='accessories'>Accessories</option>
                      <option value='camera'>Camera</option>
                  </NativeSelect>
              </FormControl>
                  {objItem.category === 'phone' && ( <NativeSelectOs /> )}
                  {objItem.category === 'tablet' && ( <NativeSelectOs /> )}
                  <TextField disabled={(objItem.category === 'phone' || objItem.category=== 'tablet') && objItem.os === "ios" && objItem.os !== "harmonyOS" ? false : true} id="outlined-number" label="Ios Version" type="number" variant="standard" name="iosversion" value={ objItem.iosversion } focused onChange={GeneralValue}/>
                  <TextField disabled={(objItem.category === 'phone' || objItem.category === 'tablet') && objItem.os === "android" && objItem.os !== "harmonyOS" ? false : true} id="outlined-number" label="Android Version" type="number" variant="standard" name="androidversion" value={ objItem.androidversion } focused onChange={GeneralValue}/>
          </Box>
          <Box>
              <FormControl component="fieldset">
              <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name='statusSell'
                  value={ objItem.statusSell }
                  onChange={ GeneralValue }
              >
                  <FormControlLabel value="1" control={<Radio />} label="is Available" />
                  <FormControlLabel value="0.5" control={<Radio />} label="Limited" />
                  <FormControlLabel value="0" control={<Radio />} label="not Аvailable" />
              </RadioGroup>
              </FormControl>
          </Box>
          
          
                  {/* Image Table */}
          <table className='addImageTable'>
        <thead>
          <tr>
            <th>No</th>
            <th>Images</th>
            <th style={{width: '140px'}}>
              <label>
                <form action="upload_multimage.php" id="multiUpload" encType="multipart/form-data">
                  <input type="file" name="multiple_image" />
                  <AddCircleOutlineIcon fontSize="large" id="add"/>
                </form>
              </label>
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="result_multi">
        {
          dataImage.map((image) => {
            return(
              <tr key={image.id_image} className={image.role === 1 ? "main_image" : false}>
                <td>{image.id_image}</td>
                <td><img src={image.image} width="110" alt={image.id_image} /></td>
                <td className="checkBox"><label>Գլխավոր <input type="checkbox" name="checkbox" /></label></td>
                <td className="deleteImg" data-id={image.id_image}><DeleteIcon /></td>
            </tr>  
            )
          })
        }
        </tbody>
      </table>
                {/* Image Table END*/}
      </TabPanel>
      <TabPanel value="2">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField id="outlined-number" label="Front Camera" type="number" variant="standard" name="frontCamera" value={ objItem.frontCamera } focused onChange={ GeneralValue }/>
              <TextField id="outlined-number" label="Main Camera" variant="standard" name="mainCamera" value={ objItem.mainCamera } focused onChange={ GeneralValue }/>
          </Box>
      </TabPanel>
      <TabPanel value="3">
      <Box sx={{ display: 'inline-flex', flexDirection: 'column', width: '100%'}}>
          <TextField id="standard-basic" label="Screen Type" variant="standard" name="screenType" value={ objItem.screenType } focused onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="Screen Resolution" variant="standard" name="screenResolution" value={ objItem.screenResolution } focused onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="Screen Size" variant="standard" name="screenSize" value={ objItem.screenSize } focused onChange={ GeneralValue }/>
      </Box>
      </TabPanel>
      <TabPanel value="4">
      <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
          <TextField id="standard-basic" label="Number of processor cores" variant="standard" name="numberOfProcessorCores" value={ objItem.numberOfProcessorCores } focused onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="CPU" variant="standard" name="cpu" value={ objItem.cpu } focused onChange={ GeneralValue }/>
          <FormControl component="fieldset">
      <FormLabel component="legend">MEMORY</FormLabel>
          <FormGroup aria-label="position" row>
              <FormControlLabel
              value="4GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory4 }
                    name="memory4"
                    onChange={ GeneralCheckbox }
                />
              }
              label="4 GB"
              labelPlacement="top"
              />
             <FormControlLabel
              value="8GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory8 }
                    name="memory8"
                    onChange={ GeneralCheckbox }
            />
              }
              label="8 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="16GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory16 }
                    name="memory16"
                    onChange={ GeneralCheckbox }
            />
              }
              label="16 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="32GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory32 }
                    name="memory32"
                    onChange={ GeneralCheckbox }
                />
              }
              label="32 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="64GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory64 }
                    name="memory64"
                    onChange={ GeneralCheckbox }
                />
              }
              label="64 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="128GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory128 }
                    name="memory128"
                    onChange={ GeneralCheckbox }
                />
              }
              label="128 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="256GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory256 }
                    name="memory256"
                    onChange={ GeneralCheckbox }
                />
              }
              label="256 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="512GB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory512 }
                    name="memory512"
                    onChange={ GeneralCheckbox }
                />
              }
              label="512 GB"
              labelPlacement="top"
              />
              <FormControlLabel
              value="1TB"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.memory1 }
                    name="memory1"
                    onChange={ GeneralCheckbox }
                />
              }
              label="1TB"
              labelPlacement="top"
              />
          </FormGroup>
      </FormControl>
          <TextField id="outlined-number" label="RAM" type="number" variant="standard" className='ram' name="ram" value={ objItem.ram } focused onChange={ GeneralValue }/>
          <FormControlLabel
          value="memorycardslot"
          control={
            <Checkbox
                size="small"
                checked={ objItem.cardSlot }
                name="cardSlot"
                onChange={ GeneralCheckbox }
            />
          }
          label="Memory card slot"
          />
      </Box>
      </TabPanel>
      <TabPanel value="5">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="standard-basic" label="Network Type Example LTE/GSM" variant="standard" name="networkType" value={ objItem.networkType } focused onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="4G LTE Network range Example 'LTE'" variant="standard" name="networkRange" value={ objItem.networkRange } focused onChange={ GeneralValue }/>
      </Box>
      </TabPanel>
      <TabPanel value="6">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="standard-basic" label="Charging Connector Type" variant="standard" name="chargerType" value={ objItem.chargerType } focused onChange={ GeneralValue }/>
          <TextField id="outlined-number" label="Battery" type="number" variant="standard" name="battery" value={ objItem.battery } focused onChange={ GeneralValue }/>
          <FormGroup aria-label="position" row sx={{ display: 'inline-flex', flexDirection: 'column' }}>
              <FormControlLabel
              value="gps"
              control={
              <Checkbox size="small"
                    checked={ objItem.gps }
                    name="gps"
                    onChange={ GeneralCheckbox }
                    inputProps={{ 'aria-label': 'controlled' }}
                />}
              label="GPS"
              labelPlacement="end"
              />
             <FormControlLabel
              value="bluetooth"
              control={
              <Checkbox
                 size="small"
                 checked={ objItem.bluetooth }
                 name="bluetooth"
                 onChange={ GeneralCheckbox }
                />}
                 label="Bluetooth"
                 labelPlacement="end"
              />
              <FormControlLabel
              value="wifiNetwork"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.wifi }
                    name="wifi"
                    onChange={ GeneralCheckbox }
               />}
              label="WiFi Network"
              labelPlacement="end"
              />
              <FormControlLabel
              value="nfc"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.nfc }
                    name="nfc"
                    onChange={ GeneralCheckbox }
               />}
              label="NFC"
              labelPlacement="end"
              />
              <FormControlLabel
              value="4g"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.n4g }
                    name="n4g"
                    onChange={ GeneralCheckbox }
               />}
              label="4G"
              labelPlacement="end"
              />
              <FormControlLabel
              value="3g"
              control={
                <Checkbox
                    size="small"
                    checked={ objItem.n3g }
                    name="n3g"
                    onChange={ GeneralCheckbox }
               />}
              label="3G"
              labelPlacement="end"
              />
          </FormGroup>
      </Box>
      </TabPanel>
      <TabPanel value="7">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormGroup aria-label="position" row sx={{ display: 'inline-flex', flexDirection: 'column'}}>
              <FormControlLabel
              value="color1"
              control={<ColorPicker productColor={objItem.color1} colorName="color1" onChange={handleChangeColor}/>}
              label="Color No1"
              labelPlacement="end"
              />
             <FormControlLabel
              value="color2"
              control={<ColorPicker productColor={objItem.color2} colorName="color2" onChange={handleChangeColor}/>}
              label="Color No2"
              labelPlacement="end"
              />
              <FormControlLabel
              value="color3"
              control={<ColorPicker productColor={objItem.color3} colorName="color3" onChange={handleChangeColor}/>}
              label="Color No3"
              labelPlacement="end"
              />
              <FormControlLabel
              value="color4"
              control={<ColorPicker productColor={objItem.color4} colorName="color4" onChange={handleChangeColor}/>}
              label="Color No4"
              labelPlacement="end"
              />
              <FormControlLabel
              value="color5"
              control={<ColorPicker productColor={objItem.color5} colorName="color5" onChange={handleChangeColor}/>}
              label="Color No5"
              labelPlacement="end"
              />
      </FormGroup>
      </Box>
      </TabPanel>
      <TabPanel value="8">
      <Box sx={{ display: 'inline-flex', flexDirection: 'column', width: '100%' }}>
            <TextField 
            id="outlined-number" 
            label="Weight" 
            type="number" 
            variant="standard" 
            name="weight" 
            value={ objItem.weight } 
            focused 
            onChange={ GeneralValue }
          />
          <TextField 
            id="standard-basic" 
            label="Thickness" 
            variant="standard" 
            name="thickness" 
            value={ objItem.thickness } 
            focused 
            onChange={ GeneralValue }
          />
          <TextField 
            id="outlined-number" 
            label="Height" 
            type="number" 
            variant="standard" 
            name="height" 
            value={ objItem.height } 
            focused 
            onChange={ GeneralValue }
            />
          <TextField 
            id="outlined-number" 
            label="Width" 
            type="number" 
            variant="standard"
            name="width" 
            value={ objItem.width } 
            focused 
            onChange={ GeneralValue }
          />
          <TextField 
            id="standard-basic" 
            label="Audio" 
            variant="standard"
            name="audio" 
            value={ objItem.audio } 
            focused 
            onChange={ GeneralValue }
          />
          <TextField 
            id="outlined-number" 
            label="Sim Card Quantity" 
            type="number" 
            variant="standard"
            name="simCardQty" 
            value={ objItem.simCardQty } 
            focused 
            onChange={ GeneralValue }
          />
      </Box>
      </TabPanel>
    </TabContext>
    <Button variant="outlined" onClick={handleSend}>Save</Button>
  </Box>
    )
}