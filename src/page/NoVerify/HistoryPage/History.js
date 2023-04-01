import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {MdAccessTime} from 'react-icons/md';
import { Group } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { div, NavLink } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));

export default function SelectSmall() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };



/*const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });*/

    return(
        
        <Grid container spacing={2} columns={16}>
            <Grid item xs={6} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div className='flex items-center'>
                <MdAccessTime  size={40}/>
                
                <div style={{fontSize: '40px'} }>
                    ประวัติการใช้งาน</div></div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                <div style={{ height: 25, width: '100%', justifyContent: 'center'} }></div>
                <NavLink to={"/้history"} >
                <Button variant="contained" color="secondary" size="large">
                    การใช้งาน</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavLink>
                <NavLink to={"/income"} >
                <Button variant="contained" color="grey" size="large">
                    รายได้ที่ได้รับ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavLink>
                <NavLink to={"/review"} >
                <Button variant="contained" color="grey" size="large">
                    รีวิว</Button>
                </NavLink>
            
                <div style={{ height: 25, width: '100%', justifyContent: 'center'} }></div>
                <div style={{fontSize: '30px'} }>
                    เลือกสถานีชาร์จของคุณ</div>

                <FormControl sx={{ m: 1, minWidth: 1170}} size="small">
                <InputLabel id="demo-select-small">ชื่อสถานีชาร์จ</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Station"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>ไม่มีสถานีชาร์จปัจจุบัน</em>
                    </MenuItem>
                </Select>
                </FormControl>

                {/* <div style={{fontSize: '30px'} }>
                    เลือกปี</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">ปี</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Year"
                    onChange={handleChange}
                >
                     <MenuItem value={10}>2566</MenuItem>
                     <MenuItem value={20}>2565</MenuItem>
                     <MenuItem value={30}>2564</MenuItem>
                </Select>
                </FormControl>

                <div style={{fontSize: '30px'} }>
                    เลือกเดือน</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">เดือน</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Year"
                    onChange={handleChange}
                >
                     <MenuItem value={10}>มกราคม</MenuItem>
                     <MenuItem value={20}>กุมภาพันธ์</MenuItem>
                     <MenuItem value={30}>มีนาคม</MenuItem>
                     <MenuItem value={30}>เมษายน</MenuItem>
                     <MenuItem value={30}>พฤษภาคม</MenuItem>
                     <MenuItem value={30}>มิถุนายน</MenuItem>
                     <MenuItem value={30}>กรกฎาคม</MenuItem>
                     <MenuItem value={30}>สิงหาคม</MenuItem>
                     <MenuItem value={30}>กันยายน</MenuItem>
                     <MenuItem value={30}>ตุลาคม</MenuItem>
                     <MenuItem value={30}>พฤศจิกายน</MenuItem>
                     <MenuItem value={30}>ธันวาคม</MenuItem>
                </Select>
                </FormControl> */}
                <div style={{ height: 50, width: '100%', justifyContent: 'center'} }></div>
                <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'center'}}>
                <div style={{ height: 120, width: '100%', justifyContent: 'center'} }>
                </div>
                <div style={{fontSize: '50px'} }>
                ไม่มีสถานีชาร์จปัจจุบัน<br></br>กรุณากรอกแบบฟอร์มยืนยันลงทะเบียน<br></br>เพื่อสร้างสถานีชาร์จ</div>
                <div></div>
                <Button variant="contained" color="secondary" size="large">คลิกเพื่อลงทะเบียน</Button>
                <div style={{ height: 120, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
                </Grid>

                </Item>
            </Grid>
            {/* <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '30px'} }>
                    เลือกสถานีชาร์จของคุณ</div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
            </Grid> */}
            {/* <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'center'}}>
                <div style={{ height: 120, width: '100%', justifyContent: 'center'} }>
                </div>
                <div style={{fontSize: '50px'} }>
                กรุณากรอกแบบฟอร์มยืนยันตัวตน<br></br>เพื่อทำการลงทะเบียน</div>
                <div></div>
                <Button variant="contained" color="secondary" size="large">คลิกเพื่อลงทะเบียน</Button>
                <div style={{ height: 120, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
            </Grid> */}

        </Grid>
        
    );
}