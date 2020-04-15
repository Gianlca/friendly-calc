import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './App.css';

function App() {
  const { register, handleSubmit, errors, reset  } = useForm();
  const [results, setResults] = useState(null);
  const onSubmit = data => { 
    Calc(data.weeks);
  }  
  const Calc = (totalWeeks)  => {
    let years = totalWeeks / 52;
    let months = (totalWeeks % 52) / 4;
    let day = (totalWeeks % 52);
    let parent = `${totalWeeks} weeks 👉  ${Math.round(years)} years ${Math.round(months)} months and ${Math.round(day)} days`;
    setResults(parent);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Fancy Converter Weeks to Years, Months and days 😎</h3>
      <Card>
      <CardContent>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          label="enter number of weeks"
          variant="outlined"
          name="weeks"
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : null}
         
        />
        <Box display="flex" justifyContent="flex-end">
          <Button 
          variant="contained" 
          color="primary"
          type="submit" 
          style={{
            marginTop:'10px'
          }}
          >
            Calc weeks
          </Button>        
          </Box>
        </form>
        </CardContent>
        </Card>
        <div id="result" 
          style={{
            marginTop:'20px'
          }}        
        >{results}</div>
      </header>
    </div>
  );
}

export default App;
