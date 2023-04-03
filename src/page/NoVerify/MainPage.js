import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { div, NavLink } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));

/*const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });*/


  export default function MainPage() {
    return(
        
        <Grid container spacing={2} columns={16}>
            <Grid item xs={6} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '50px', color: 'purple'}}>
                ยินดีต้อนรับ คุณ user name !</div>
                <div style={{fontSize: '30px'} }>
                สถานะคำร้อง</div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                <Button variant="contained" color="secondary" size="large">คำร้องขอลงทะเบียนผู้ใช้งาน</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="outlined" size="large" disabled>คำร้องขอลงทะเบียนสถานีชาร์จ</Button>
                </Item>
              </Grid>
              <Grid item xs={6} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <Button variant="contained" color="grey" size="medium"disabled>รอการยืนยัน</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="grey" size="medium"disabled>ไม่สำเร็จ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="grey" size="medium"disabled>สำเร็จ</Button>
                </Item>
            </Grid>
            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'center'}}>
                <div style={{ height: 120, width: '100%', justifyContent: 'center'} }>
                </div>
                <div style={{fontSize: '50px'} }>
                กรุณากรอกแบบฟอร์มยืนยันตัวตน<br></br>เพื่อทำการลงทะเบียน</div>
                <div></div>
                <NavLink to={"/form"} >
                <Button variant="contained" color="secondary" size="large">คลิกเพื่อลงทะเบียน</Button></NavLink>
                <div style={{ height: 120, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
            </Grid>

        </Grid>
        
    );
}

