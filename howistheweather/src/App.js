import './App.css';
import {TextField} from ' @material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {useEffect, useState} from 'react';

const App =() => {
const locations = require ('./city.list.min.json');
const [cities, setCities] = useState ([]);

  return <div>
    <Autocomplete
  className= 'search'
  options={cities}
  onSelect={e =>{

  }}
  renderInput={(params) => <TextField {...params} label= "search" variant= "outlined"/>}
/>
  </div>
}

export default App;
