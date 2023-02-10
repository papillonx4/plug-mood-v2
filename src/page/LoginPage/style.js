import  {makeStyles}  from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    input :{
    "& .MuiOutlinedInput-root": {
        borderColor: "white",
        color: "white",
        "&.Mui-focused fieldset": {
            borderColor: "white"
        },
        "& .MuiInputLabel-outlined": {
            color: "white"
        },
        "& .MuiInputBase-input": {
            color: "white"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: 'white !important' ,
            borderWidth: '2px !important',
        },
        "& .MuiOutlinedInput-root": {
            borderColor: "orange" ,
        },
        
        
    }
  },
  submitBtn : {
    "&.MuiButton-root": {
        border: "1px black solid"
      },
      "&.MuiButton-text": {
        color: "white"
      },
      ".MuiButton-outlinedPrimary":{
        color: 'grey',
      },
      "&.MuiButton-contained": {
        color: "white"
      },
      "&.MuiButton-outlined": {
        color: "white"
      }
  }
  }));

  export default useStyles ;