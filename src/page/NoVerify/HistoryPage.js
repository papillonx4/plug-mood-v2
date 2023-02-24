import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {MdAccessTime} from 'react-icons/md';
import { Group } from '@mui/icons-material';



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
                <div className='flex items-center'>
                <MdAccessTime  size={40}/>
                <div style={{fontSize: '40px'} }>
                    ประวัติการใช้งาน</div></div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                <Button variant="contained" color="secondary" size="medium">การใช้งาน</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="grey" size="medium">รายได้ที่ได้รับ</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="grey" size="medium">รีวิว</Button>
                <div style={{fontSize: '30px'} }>
                    เลือกสถานีชาร์จของคุณ</div>
                <div style={{ width: '100%', justifyContent: 'center'} }></div>
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
            <Grid item xs={16} md={16}>
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
            </Grid>

        </Grid>
        
    );
}

