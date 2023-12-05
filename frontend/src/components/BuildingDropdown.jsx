import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { buildingNames } from "../constants/BuildingNames";

export default function BuildingDropdown() {

    const names = buildingNames.sort();
    
    return (
        <Autocomplete disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Building" />}
            />
    )
}