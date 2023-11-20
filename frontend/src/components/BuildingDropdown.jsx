import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

export default function BuildingDropdown() {

    const names = [
        "3M",
        "Advanced Faculty For Avian Research",
        "Alumni Hall",
        "Amit Chakma Engineering",
        "Arts and Humanity Building",
        "Biological and Geological Sciences Building",
        "Chemistry Building",
        "Claudette Mackay-Lassonde Pavilion",
        "Clinical Skills Building (Dr. Don Rix)",
        "Dental Sciences Building",
        "Elborn College",
        "Faculty of Education Building",
        "FIMS and Nursing Building",
        "Health Science Addition",
        "Health Science Building",
        "International and Graduate",
        "Ivey Building",
        "Kresge Building",
        "Law Building",
        "Lawson Building",
        "Material Science Addition",
        "Medical Sciences Building",
        "Middlesex College",
        "Molecular Biology Laboratory",
        "Music Building",
        "Natural Science Centre",
        "North Campus Building",
        "Ontario Hall Residence",
        "Physics and Astronomy Building",
        "Robarts Research Institute",
        "Siebens-Drake Research Institute",
        "Social Science Centre",
        "Somerville House",
        "Spencer Engineering Building",
        "Staging Building",
        "Stevenson Hall",
        "Support Services Building",
        "Talbot College",
        "Taylor Library",
        "Western Alumni Stadium",
        "Thames Hall",
        "Thompson Engineering Building",
        "Thompson Recreation and Athletic Centre",
        "University College",
        "University Community Centre",
        "Visual Arts Centre",
        "D.B. Weldon Library",
        "Westren Centre for Public Health and Family Medicine",
        "Western Interdisciplinary Research Building",
        "Western Science Centre",
        "Western Recreation Centre",
        "Western Student Services Building",
        "Westminister Hall"].sort();
    
    return (
        <Autocomplete disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Building" />}
            />
    )
}