import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { AiOutlineFileText } from "react-icons/ai"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));


function YourList () {
    return(
        
        <Grid container spacing={2} columns={16}>
            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div className='flex items-center'>
                <AiOutlineFileText size={40}/>
                <div style={{fontSize: '40px'} }>
                รายการของคุณ</div></div>
                <div style={{fontSize: '26px'} }>
                สถานีชาร์จของคุณ</div>
                <div style={{ width: '100%', justifyContent: 'center'} }>
                </div>
                <div style={{fontSize: '22px', color: 'grey'} }>
                ไม่มีสถานีชาร์จปัจจุบัน</div>
                <div style={{ height: 250, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>
            </Grid>

            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '26px'} }>
                สร้างสถานีชาร์จใหม่</div>
                </Item>

                <Item style={{ textAlign: 'center'}}>
                <div style={{ height: 35, width: '100%', justifyContent: 'center'} }>
                </div>
                <div style={{fontSize: '20px'} }>
                เพิ่มสถานีชาร์จใหม่ของคุณ เพื่อสร้างรายได้ที่เพิ่มขึ้น</div>
                <div></div>
                <Button variant="contained" color="grey" size="large">คลิกเพื่อสร้างสถานีชาร์จใหม่</Button>
                <div style={{ height: 110, width: '100%', justifyContent: 'center'} }>
                </div>
                </Item>

                
            </Grid>

        </Grid>
        
    );
}

export default YourList;