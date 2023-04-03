import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import  { useState } from "react";
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { div, NavLink } from "react-router-dom";
import axios from 'axios';


export default function FormPropsTextFields() {

  const [id, setId] = useState("");
  const [address , setAddress] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  function handleNameChange(event) {
    setId(event.target.value); // อัพเดทค่า name ตามค่าที่ผู้ใช้กรอกใน input
  }
  function handlephoneChange(event) {
    setAddress(event.target.value); // อัพเดทค่า name ตามค่าที่ผู้ใช้กรอกใน input
  }


  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      console.log(`Selected file - ${selectedFile.name}`);
    } else {
      console.log("No file selected");
    }
  };

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }; 
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmits = () => {
      axios.post('http://localhost:5000/api/create', {
        
        // age: inputs.age,
        // quantity: inputs.quantity, 
        // price: inputs.price, 
        // priceHome: inputs.priceHome
          id: id,
          address: address, 
       })
        .then(response => {
          console.log('Data saved successfully!');
        })
        .catch(error => {
          console.error('Error while saving data:', error);
        });
      };
    
  return (
   

    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ margin:"auto" ,display:"flex",minHeight: '100vh'  }}>

    <Box>
      <div>เลขบัตรประจำตัวประชาชน 13 หลัก</div>
      <div>
        <TextField
          required
          type='text'
          maxLength={13}
          id="outlined-required"
          label="เลขบัตรประจำตัวประชาชน"
          defaultValue=""
          style={{height:25, width:675}}
          onChange={handleNameChange}
        />
        </div>
        </Box>

      <div style={{ height: 60, width: '100%', justifyContent: 'center'} }></div>
      <div>
      <div>รูปบัตรประชาชนหน้าหลัง</div>

      <form onSubmit={handleSubmit}>
        <input type="file" style={{height:25, width:600}} onChange={handleFileInput} />
        <Button variant="contained"  size="small" type="submit">Submit</Button>
      </form>
    </div>
    <div style={{ height: 60, width: '100%', justifyContent: 'center'} }></div>
      <div>
      <div>ถ่ายรูปคู่กับบัตรประชาชน</div>

      <form onSubmit={handleSubmit}>
        <input type="file" style={{height:25, width:600}} onChange={handleFileInput} />
        <Button variant="contained"  size="small" type="submit">Submit</Button>
      </form>
    </div>

    <div style={{ height: 60, width: '100%', justifyContent: 'center'} }></div>
      <div>
      <div>ใส่เอกสารยืนยันความเป็นเจ้าของบ้าน</div>
      <div style={{ color: 'red' }}>(เช่น สำเนาทะเบียนบ้าน, เอกสารการซื้อขาย )</div>

      <form onSubmit={handleSubmit}>
        <input type="file" style={{height:25, width:600}} onChange={handleFileInput} />
        <Button variant="contained"  size="small" type="submit">Submit</Button>
      </form>
    </div>
    <div style={{ height: 60, width: '100%', justifyContent: 'center'} }></div>
    <Box>
      <div>ที่อยู่ของบ้าน</div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="ที่อยู่ของบ้าน"
          defaultValue=""
          style={{height:25, width:675}}
          onChange={handlephoneChange}
        />
        </div>
        </Box>

      <div style={{ height: 60, width: '100%', justifyContent: 'center'} }></div>
      <Grid item xs={12}>
      <FormControlLabel
          control={<Checkbox />}
          label="ยินยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว" style={{height:25, width:600}}
        />
       
      <Button  onClick={handleOpen}>ข้อกำหนดและนโยบายความเป็นส่วนตัว</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ข้อกำหนดและนโยบายความเป็นส่วนตัวของ Plugmood
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          นโยบายความเป็นส่วนตัว<br></br>
          ประเภทของข้อมูลที่เรารวบรวมขณะที่คุณใช้บริการของเรา <br></br>
          -เมื่อสร้างบัญชี คุณให้ข้อมูลส่วนบุคคลกับเรา ได้แก่ชื่อและรหัสผ่าน เบอร์โทรศัพท์ของคุณ 
          รวมไปถึงเลขบัตรประชาชน ที่อยู่ เอกสารความเป็นเจ้าของบ้าน<br></br>
          -เรารวบรวมข้อมูลเกี่ยวกับตำแหน่งของคุณเมื่อคุณใช้บริการของเรา ซึ่งจะช่วยเราในการให้บริการฟีเจอร์ต่างๆ 
          เช่น เส้นทางการขับขี่ ผลการค้นหาสิ่งต่างๆ ที่อยู่ใกล้คุณ 
          อาจมีการระบุตำแหน่งของคุณได้อย่างแม่นยำต่างกันไปด้วยวิธีต่อไปนี้ GPS และข้อมูลเซ็นเซอร์อื่นๆ จากอุปกรณ์ของคุณ ที่อยู่ IP 
          กิจกรรมในบริการของ Plugmood เช่น การค้นหาและสถานที่ที่คุณติดป้ายกำกับอย่างเช่นบ้านหรือที่ทำงาน
          ข้อมูลเกี่ยวกับสิ่งที่อยู่ใกล้อุปกรณ์ของคุณ เช่น จุดเชื่อมต่อ Wi-Fi, เสาสัญญาณมือถือ และอุปกรณ์ที่เปิดใช้บลูทูธ<br></br><br></br>
          ข้อกำหนดในการให้บริการ<br></br>
          เราต้องการรักษาสภาพแวดล้อมที่มีความเคารพต่อทุกคน ซึ่งหมายความว่าคุณจะต้องปฏิบัติตามหลักปฏิบัติพื้นฐานต่อไปนี้<br></br>
          -ปฏิบัติตามกฎหมายที่เกี่ยวข้อง ซึ่งรวมถึงกฎหมายว่าด้วยการควบคุมการส่งออก มาตรการลงโทษ และการค้ามนุษย์<br></br>
          -เคารพสิทธิของผู้อื่น ซึ่งรวมถึงความเป็นส่วนตัวและสิทธิในทรัพย์สินทางปัญญา<br></br>
          -ไม่ละเมิดหรือทำอันตรายต่อผู้อื่นหรือตัวคุณเอง (หรือข่มขู่หรือสนับสนุนให้เกิดการละเมิดหรือการทำอันตรายดังกล่าว) 
          ตัวอย่างเช่น โดยการทำให้เข้าใจผิด หลอกลวง แอบอ้างบุคคลอื่นอย่างผิดกฎหมาย หมิ่นประมาท กลั่นแกล้ง ก่อกวน หรือคุกคามบุคคลอื่น<br></br>
          -ไม่ละเมิด ทำให้เกิดอันตราย รบกวน หรือขัดขวางบริการ เช่น โดยการเข้าถึงหรือใช้งานในลักษณะที่เป็นการฉ้อโกงหรือหลอกลวง การแนะนำมัลแวร์ 
          หรือการส่งสแปม การแฮ็ก หรือการข้ามระบบหรือมาตรการป้องกันของเรา เมื่อเราจัดทำดัชนีเว็บเพื่อแสดงผลการค้นหาแก่คุณ 
          เราเคารพข้อจำกัดการใช้งานตามมาตรฐานที่เจ้าของเว็บไซต์ระบุไว้ในโค้ดของเว็บไซต์ ด้วยเหตุนี้เราจึงต้องการความเคารพในลักษณะเดียวกันเมื่อผู้อื่นใช้บริการของเรา<br></br>
          ข้อกำหนดเพิ่มเติมและนโยบายเฉพาะบริการให้รายละเอียดเพิ่มเติมเกี่ยวกับการดำเนินการที่เหมาะสมซึ่งทุกคนที่ใช้บริการเหล่านี้ต้องปฏิบัติตาม 
          หากคุณพบว่าผู้อื่นไม่ปฏิบัติตามกฎเหล่านี้ บริการหลายอย่างของเราอนุญาตให้คุณรายงานการละเมิดได้ หากเราดำเนินการเมื่อได้รับรายงานการละเมิด 
          เรามีกระบวนการรองรับด้วยการบล็อคบัญชีผู้ใช้นั้น
          </Typography>
        </Box>
      </Modal></Grid>


      <div style={{ height: 60, width: '100%', justifyContent: 'center'} }></div>
      <Grid outlined spacing={100}>
        <Grid item xs={12} sm={12} >
        <NavLink to={"/"} >
          <Button
            type="submit"
            variant="outlined"
            color="primary" 
            style={{ justifyContent: 'left'}}
          >
            back
          </Button></NavLink>
        </Grid>

        <Grid item xs={5} sm={12} >
        <NavLink to={"/success"} >
          <Button
            type="submit"
            variant="outlined"
            color="primary" 
            style={{justifyContent: 'right'}}
            onClick={handleSubmits}
          >
            next

          </Button></NavLink>
        </Grid>
      </Grid>
    </Grid>
  )}