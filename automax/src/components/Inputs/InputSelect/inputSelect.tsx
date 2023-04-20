import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


interface IPropsInputSelect{
  width?: number
  placeholder: string
  disabled?: boolean
}

export default function InputSelect(props:IPropsInputSelect) {

  const {width=0.8, placeholder, disabled=false} = props

  return (
    <Autocomplete
      className="no-hover-effect"
      disabled={disabled}
      disablePortal
      id="combo-box-demo"
      options={brands}
      sx={{ 
        width: {width},
        '& input::placeholder': {
          color: 'var(--colors-grey-3)' 
        },
        "& .MuiOutlinedInput-notchedOutline" : {
          borderColor: "var(--colors-grey-7)",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline" : {
          borderColor: "var(--colors-brand-2) !important",
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          backgroundColor: "var(--colors-grey-9)",
        },
        "& .MuiOutlinedInput-input:focus": {
          color: "var(--colors-grey-0)",
        },
        "& .MuiInputBase-input" : {
          boxSizing: "border-box"
        },
        "& .MuiInputBase-root-MuiOutlinedInput-root" : {
          height: 48,
          borderColor: "var(--colors-grey-7)"
        },
        "& .MuiOutlinedInput-root" : {
          marginTop: 1,
          height: 48,
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--colors-grey-7)",
        },
        "& .Mui-disabled": {
          backgroundColor: "var(--colors-grey-8)",
          cursor: "not-allowed",
          borderColor: "var(--colors-grey-8) ",
        },
        "& .Mui-disabled .MuiOutlinedInput-notchedOutline" : {
          borderColor: "var(--colors-grey-8) !important"
        },
        "& > div > div > div > input:disabled" : {
          WebkitTextFillColor: "var(--colors-grey-3) !important",
        }
      }}
      renderInput={(params) =>( 
      <div>
        <TextField 
        {...params} 
        label="" 
        variant='outlined'
        inputProps={{
          ...params.inputProps,
          placeholder: placeholder,
        }}
        />
      </div>
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const brands = [
  { label: 'chevrolet' },
  { label: 'citroën'},
  { label: 'fiat'},
  { label: 'ford'},
  { label: 'honda'},
  { label: "hyundai"},
  { label: 'nissan'},
  { label: 'peugeot'},
  { label: 'renault'},
  { label: 'toyota'},
  { label: 'volkswagen'},
]
