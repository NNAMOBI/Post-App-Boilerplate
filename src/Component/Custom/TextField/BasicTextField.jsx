import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BasicTextField = () => {
  return (
    <Box
      sx={{
        height: 5,
        width: 500,
        // maxWidth: '100%',
      }}
    >
      <TextField fullWidth  id="fullWidth" />
    </Box>
  );
}

export default BasicTextField;