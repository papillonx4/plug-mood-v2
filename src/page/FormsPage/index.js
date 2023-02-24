import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';





export default function FormsPage() {
  const [next, setNext] = useState();
  const [formData, setFormData] = React.useState({});


  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    
  };
  
  

  return (
    

    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ margin:"auto" ,display:"flex",minHeight: '100vh'  }}>
      <Grid item xs={12}>
      <p>เลขบัตรประจำตัวประชาชน 13 หลัก</p>
      <input type="text" placeholder='' style={{height:25, width:600}}/>
      </Grid>   
      
      <Grid item xs={12}>
      <p>รูปบัตรประจำตัวประชาชนหน้า-หลัง</p>
      <input type="file" onChange={handleFileChange} style={{height:25, width:600}}/>
      </Grid> 

      <Grid item xs={12}>
      <p>รูปตนเองคู่กับบัตรประจำตัวประชาชน</p>
      <input type="file" onChange={handleFileChange} style={{height:25, width:600}}/>
      </Grid> 

      <Grid item xs={12}>
      <p>ใส่เอกสารยืนยันความเป็นเจ้าของบ้าน</p>
      <p style={{ color: 'red' }}>(เช่น สำเนาทะเบียนบ้าน, เอกสารการซื้อขาย )</p>
      <input type="file" onChange={handleFileChange} style={{height:25, width:600}}/>
      </Grid> 

      <Grid item xs={12}>
      <p>ที่อยู่ของบ้าน</p>
      <input type="text" placeholder='' style={{height:100, width:600}}/>
      </Grid> 

      <Grid item xs={12}>
      <FormControlLabel
          control={<Checkbox />}
          label="ยินยอมรับข้อกำหนด..." style={{height:25, width:600}}
        />
      </Grid> 

      <Grid item xs={12}>
      <FormControlLabel
          control={<Checkbox />}
          label="ยินยอมรับข้อกำหนด..." style={{height:25, width:600}}
        />
      </Grid> 

      <Grid item xs={12}>
      <FormControlLabel
          control={<Checkbox />}
          label="ยินยอมรับข้อมูลข่าวสารจาก Plugmood" style={{height:25, width:600}}
        />
      </Grid> 
      <Grid outlined spacing={100}>
        <Grid item xs={12} sm={12} >
          <Button
            type="submit"
            variant="outlined"
            color="primary" 
            style={{float: "left"}}
          to="/register/information"
          >
            back
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} >
          <Button
            type="submit"
            variant="outlined"
            color="primary" 
            style={{float: "left"}}
          to="/register/information"
          >
            next
          </Button>
        </Grid>
      </Grid>
      
    </Grid>
    
  );
}
