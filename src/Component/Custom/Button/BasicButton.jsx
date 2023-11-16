import React from 'react';
import {Button} from "@mui/material";

const BasicButton = ({color, type, variant, text}) => {
    return (
        <Button variant={variant} color={color} type={type}>
            {text}
        </Button>
    )
}
export default BasicButton;