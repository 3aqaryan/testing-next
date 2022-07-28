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
import ImageUpload from '../ImageUpload/ImageUpload'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorPicker from '../../components/ColorPicker/ColorPicker'
import { DialogLeavingPage } from './../DialogLeavingPage'
import { useNavigatingAway } from './../../hooks/useNavigatingAway'
import axios from 'axios'

export default function ProductAdd() {
    const [canShowDialogLeavingPage, setCanShowDialogLeavingPage] = useState(
        false
      );
      const [stateOfImageTable, setStateOfImageTable] = useState([])
    const [
        showDialogLeavingPage,
        confirmNavigation,
        cancelNavigation
    ] = useNavigatingAway(canShowDialogLeavingPage);
    
    const [dataImage, setDataImage] = useState([])
    const [objItem, setObjItem] = useState({
       name : '',
       price : '',
       cashprice : '',
       credit : false,
       category : 'phone',
       os : 'ios',
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
            r : 0,
            g : 0,
            b : 0,
            a : 0
       },
        color2 : {
            r : 0,
            g : 0,
            b : 0,
            a : 0
        },
        color3 : {
            r : 0,
            g : 0,
            b : 0,
            a : 0
        },
       color4 : {
            r : 0,
            g : 0,
            b : 0,
            a : 0
       },
        color5 : {
            r : 0,
            g : 0,
            b : 0,
            a : 0
        },
        imagePath : ''
    })
    
    const [value, setValue] = useState('1');
    const Input = styled('input')({
        display: 'none',
      });
      const GeneralValue = (e) => {
        setObjItem({
            ...objItem, 
            [e.target.name] : e.target.value
        })
        if (e.target.value !== ""){
            setCanShowDialogLeavingPage(true)
        }else {
            setCanShowDialogLeavingPage(false)
        }
    }
        const GeneralCheckbox = (e) => {
            setObjItem({
                ...objItem,
                [e.target.name] : e.target.checked
            })
            if (e.target.checked !== false){
                setCanShowDialogLeavingPage(true)
            }else {
                setCanShowDialogLeavingPage(false)
            }
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
  const handleSend = (event) => {
    event.preventDefault();
        const sendData = {
          name: objItem.name,
          price : objItem.price,
          cashPrice : objItem.cashprice,
          credit : objItem.credit,
          category : objItem.category,
          os : objItem.os,
          iosVersion : objItem.iosversion,
          androidVersion : objItem.androidversion,
          statusSell : objItem.statusSell,
          frontCamera : objItem.frontCamera,
          mainCamera : objItem.mainCamera,
          screenType : objItem.screenType,
          screenResolution : objItem.screenResolution,
          screenSize : objItem.screenSize,
          numberOfProcessorCores : objItem.numberOfProcessorCores,
          cpu : objItem.cpu,
          ram : objItem.ram,
          networkType : objItem.networkType,
          networkRange : objItem.networkRange,
          chargerType : objItem.chargerType,
          battery : objItem.battery,
          gps : objItem.gps,
          bluetooth : objItem.bluetooth,
          wifi : objItem.wifi,
          n4g : objItem.n4g,
          n3g : objItem.n3g,
          nfc : objItem.nfc,
          memory4 : objItem.memory4,
          memory8 : objItem.memory8,
          memory16 : objItem.memory16,
          memory32 : objItem.memory32,
          memory64 : objItem.memory64,
          memory128 : objItem.memory128,
          memory256 : objItem.memory256,
          memory512 : objItem.memory512,
          memory1 : objItem.memory1,
          cardSlot : objItem.cardSlot,
          weight : objItem.weight,
          thickness : objItem.thickness,
          height : objItem.height,
          width : objItem.width,
          audio : objItem.audio,
          simCardQty : objItem.simCardQty,
          color1 : objItem.color1.r + ',' + objItem.color1.g + ',' + objItem.color1.b + ',' + objItem.color1.a,
          color2 : objItem.color2.r + ',' + objItem.color2.g + ',' + objItem.color2.b + ',' + objItem.color2.a,
          color3 : objItem.color3.r + ',' + objItem.color3.g + ',' + objItem.color3.b + ',' + objItem.color3.a,          
          color4 : objItem.color4.r + ',' + objItem.color4.g + ',' + objItem.color4.b + ',' + objItem.color4.a,
          color5 : objItem.color5.r + ',' + objItem.color5.g + ',' + objItem.color5.b + ',' + objItem.color5.a
        }
        console.log(sendData)
        // axios.post("http://localhost/newmobile/admin/php/sendtodatabase.php", sendData)
        // .then((response) =>{
        //     console.log(response.data)
        // })
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
  const handleChangeMainImage = (imageUrl) => {
    setObjItem({
        ...objItem,
        imagePath : imageUrl
    })
        let imageMainUpload = imageUrl;
        let formData = new FormData()  
        formData.append('image', imageMainUpload) 
        // axios.post("http://localhost/newmobile/admin/php/upload_image.php", formData,{
        //     headers : {
        //         "Content-Type" : "multipart/form-data"
        //     }
        // })
        // .then((response) =>{
        //     console.log(response)
        // }) 
        // .catch(error => {
        //     console.log(error)
        // })
  }
      let fileTable;
      let fileUrl;
      const tableImage = [];
  const handleChangeTableImage = (e) => {
        fileTable = e.target.files[0]
        // let formData = new FormData()
        // formData.append('multiple_image', fileTable)
        tableImage.push(fileTable)
        // console.log(tableImage)
        showFile()
        // axios.post("http://localhost/newmobile/admin/php/upload_multimage.php", formData,{
        //     headers : {
        //         "Content-Type" : "multipart/form-data"
        //     }
        // })
        // .then((response) =>{
        //     setDataImage(response.data)
        // }) 
        // .catch(error => {
        //     console.log(error)
        // })
  }
  const showFile = () => {
    let fileReader = new FileReader()
    fileReader.onload = () => {
      fileUrl = fileReader.result
      setStateOfImageTable([...stateOfImageTable, fileUrl])
      console.log(stateOfImageTable)
  }
  fileReader.readAsDataURL(fileTable)
}
  return (
    <>
    {/* MODAL WHEN LIVING */}
    {/* <DialogLeavingPage
        showDialog={showDialogLeavingPage}
        setShowDialog={setCanShowDialogLeavingPage}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      /> */}


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
              <TextField id="outlined-name" error={false} label="Name" variant="standard" name="name" value={ objItem.name } onChange={GeneralValue}/>
              <Box>
                  <TextField id="outlined-number" label="Price" variant="standard" name='price' value={ objItem.price } onChange={GeneralValue}/>
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
              <TextField id="outlined-number" label="Cash Price" type="number" variant="standard" name='cashprice' value={ objItem.cashprice } onChange={GeneralValue} />
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
                  <TextField disabled={(objItem.category === 'phone' || objItem.category=== 'tablet') && objItem.os === "ios" && objItem.os !== "harmonyOS" ? false : true} id="outlined-number" label="Ios Version" type="number" variant="standard" name="iosversion" value={ objItem.iosversion } onChange={GeneralValue}/>
                  <TextField disabled={(objItem.category === 'phone' || objItem.category === 'tablet') && objItem.os === "android" && objItem.os !== "harmonyOS" ? false : true} id="outlined-number" label="Android Version" type="number" variant="standard" name="androidversion" value={ objItem.androidversion } onChange={GeneralValue}/>
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
          <Box>
              <ImageUpload onChange={handleChangeMainImage}/>
          </Box>
                  {/* Image Table */}
          <table className='addImageTable'>
        <thead>
          <tr>
            <th>No</th>
            <th>Images</th>
            <th style={{width: '140px'}}>
              <label>
                <form id="multiUpload">
                    <input type="file" hidden multiple accept='.jpg, .jpeg, .png'  onChange={handleChangeTableImage}/>
                    <AddCircleOutlineIcon fontSize="large" id="add"/>
                </form>
              </label>
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="result_multi">
        {/* {
          dataImage.map((image) => {
            return(
              <tr key={image.id_image}>
                <td>{image.id_image}</td>
                <td><img src={image.image_path} width="110" /></td>
                <td className="checkBox"><label>Գլխավոր <input type="checkbox" name="checkbox" /></label></td>
                <td className="deleteImg" data-id={image.id_image}><DeleteIcon /></td>
            </tr>  
            )}
          )
        } */}
        {/* {
          arrImageTable.map((image) => {
            return(
              <tr>
                <td></td>
                <td><img src={''} width="110" /></td>
                <td className="checkBox"><label>Գլխավոր <input type="checkbox" name="checkbox" /></label></td>
                <td className="deleteImg"><DeleteIcon /></td>
            </tr>  
            )}
          )
        } */}
        </tbody>
      </table>
                {/* Image Table END*/}
      </TabPanel>
      <TabPanel value="2">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField id="outlined-number" label="Front Camera" type="number" variant="standard" name="frontCamera" value={ objItem.frontCamera } onChange={ GeneralValue }/>
              <TextField id="outlined-number" label="Main Camera" variant="standard" name="mainCamera" value={ objItem.mainCamera } onChange={ GeneralValue }/>
          </Box>
      </TabPanel>
      <TabPanel value="3">
      <Box sx={{ display: 'inline-flex', flexDirection: 'column', width: '100%'}}>
          <TextField id="standard-basic" label="Screen Type" variant="standard" name="screenType" value={ objItem.screenType } onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="Screen Resolution" variant="standard" name="screenResolution" value={ objItem.screenResolution } onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="Screen Size" variant="standard" name="screenSize" value={ objItem.screenSize } onChange={ GeneralValue }/>
      </Box>
      </TabPanel>
      <TabPanel value="4">
      <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
          <TextField id="standard-basic" label="Number of processor cores" variant="standard" name="numberOfProcessorCores" value={ objItem.numberOfProcessorCores } onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="CPU" variant="standard" name="cpu" value={ objItem.cpu } onChange={ GeneralValue }/>
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
          <TextField id="outlined-number" label="RAM" type="number" variant="standard" className='ram' name="ram" value={ objItem.ram } onChange={ GeneralValue }/>
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
          <TextField id="standard-basic" label="Network Type Example LTE/GSM" variant="standard" name="networkType" value={ objItem.networkType } onChange={ GeneralValue }/>
          <TextField id="standard-basic" label="4G LTE Network range Example 'LTE'" variant="standard" name="networkRange" value={ objItem.networkRange } onChange={ GeneralValue }/>
      </Box>
      </TabPanel>
      <TabPanel value="6">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField id="standard-basic" label="Charging Connector Type" variant="standard" name="chargerType" value={ objItem.chargerType } onChange={ GeneralValue }/>
          <TextField id="outlined-number" label="Battery" type="number" variant="standard" name="battery" value={ objItem.battery } onChange={ GeneralValue }/>
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
            onChange={ GeneralValue }
          />
          <TextField 
            id="standard-basic" 
            label="Thickness" 
            variant="standard" 
            name="thickness" 
            value={ objItem.thickness }  
            onChange={ GeneralValue }
          />
          <TextField 
            id="outlined-number" 
            label="Height" 
            type="number" 
            variant="standard" 
            name="height" 
            value={ objItem.height } 
            onChange={ GeneralValue }
            />
          <TextField 
            id="outlined-number" 
            label="Width" 
            type="number" 
            variant="standard"
            name="width" 
            value={ objItem.width }  
            onChange={ GeneralValue }
          />
          <TextField 
            id="standard-basic" 
            label="Audio" 
            variant="standard"
            name="audio" 
            value={ objItem.audio }  
            onChange={ GeneralValue }
          />
          <TextField 
            id="outlined-number" 
            label="Sim Card Quantity" 
            type="number" 
            variant="standard"
            name="simCardQty" 
            value={ objItem.simCardQty } 
            onChange={ GeneralValue }
          />
      </Box>
      </TabPanel>
    </TabContext>
    <Button variant="outlined" onClick={handleSend}>Save</Button>
  </Box>
  </>
    )
}