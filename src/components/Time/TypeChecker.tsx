import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface TypeCheckerProps {
  handleType: (e: any) => void;
}
export function TypeChecker({ handleType }: TypeCheckerProps) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="auto"
      >
        <FormControlLabel
          onChange={e => handleType(e)}
          value="auto"
          control={<Radio />}
          label="auto"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="morning"
          control={<Radio />}
          label="morning"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="day"
          control={<Radio />}
          label="day"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="evening"
          control={<Radio />}
          label="evening"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="night"
          control={<Radio />}
          label="night"
        />
      </RadioGroup>
    </FormControl>
  );
}
