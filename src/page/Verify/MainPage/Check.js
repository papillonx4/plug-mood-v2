import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { div, NavLink } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));
 
export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '50px', color: 'purple'}}>
                ยินดีต้อนรับ คุณ user name !</div>
                <div style={{fontSize: '30px'} }>
                สถานะคำร้อง</div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                <Button variant="contained" color="secondary" size="large">คำร้องขอลงทะเบียนผู้ใช้งาน</Button> 
                <Button variant="outlined" size="large" disabled>คำร้องขอลงทะเบียนสถานีชาร์จ</Button>
                <div style={{ height: 5, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
            </Grid>
            <Grid item xs={6} md={16}>
            <Item style={{ textAlign: 'left'}}>
                <NavLink to={"/้check"} >
                <Button variant="contained" color="warning" size="large">
                    รอการตรวจสอบ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavLink>
                <NavLink to={"/notpass"} >
                <Button variant="contained" color="grey" size="large">
                    ไม่สำเร็จ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NavLink>
                <NavLink to={"/pass"} >
                <Button variant="contained" color="grey" size="large">
                    สำเร็จ</Button>
                </NavLink>
              </Item>
              <Item style={{ textAlign: 'center'}}>
              <div style={{ height: 150, width: '100%', justifyContent: 'center'} }></div>
              <div style={{fontSize: '80px'} }>
                    รอการตรวจสอบ</div>
              <div style={{ height: 240, width: '100%', justifyContent: 'center'} }></div>
              </Item>
            </Grid>
        </Grid>
      
    </Box>
  );
}