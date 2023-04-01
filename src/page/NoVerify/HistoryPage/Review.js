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
                <NavLink to={"/history"} >
                <Button variant="contained" color="grey" size="large">
                    การใช้งาน</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavLink>
                <NavLink to={"/income"} >
                <Button variant="contained" color="grey" size="large">
                    รายได้ที่ได้รับ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavLink>
                <NavLink to={"/review"} >
                <Button variant="contained" color="secondary" size="large">
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
                <div style={{fontSize: '25px'} }>
                คะแนนรีวิว</div>
                <div style={{ height: 10, width: '100%', justifyContent: 'center'} }></div>
                <div style={{fontSize: '20px'} }>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 รีวิว</div>
                <div style={{ height: 450, width: '100%', justifyContent: 'center'} }></div>
                </Item>
            </Grid>

        </Grid>
        
    );
}