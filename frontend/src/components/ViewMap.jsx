//import React from "react";
import React, { useEffect } from 'react';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


export default function ViewMap() {
    
    // TODO: fix the dropdown to show options 
    
    //Initialize with the list of symbols
    let names = [
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
        "Westminister Hall"]

    //Find the input search box
    let search = document.getElementById("searchBuildings")

    //Find every item inside the dropdown
    let items = document.getElementsByClassName("dropdown-item")
    function buildDropDown(values) {
        let contents = []
        for (let name of values) {
        contents.push('<input type="button" class="dropdown-item" type="button" value="' + name + '"/>')
        }
        $('#menuItems').append(contents.join(""))

        //Hide the row that shows no items were found
        $('#empty').hide()
    }

    //Capture the event when user types into the search box
    window.addEventListener('input', function () {
        filter(search.value.trim().toLowerCase())
    })

    //For every word entered by the user, check if the symbol starts with that word
    //If it does show the symbol, else hide it
    function filter(word) {
        let length = items.length
        let collection = []
        let hidden = 0
        for (let i = 0; i < length; i++) {
        if (items[i].value.toLowerCase().startsWith(word)) {
            $(items[i]).show()
        }
        else {
            $(items[i]).hide()
            hidden++
        }
        }

        //If all items are hidden, show the empty view
        if (hidden === length) {
        $('#empty').show()
        }
        else {
        $('#empty').hide()
        }
    }

    //If the user clicks on any item, set the title of the button as the text of the item
    $('#menuItems').on('click', '.dropdown-item', function(){
        $('#dropdown_buildings').text($(this)[0].value)
        $("#dropdown_buildings").dropdown('toggle');
    })

buildDropDown(names)
    return (
        
        <div>
            
            <h1>Map</h1>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown_buildings" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Building
                </button>
                <div id="menu" class="dropdown-menu" aria-labelledby="dropdown_buildings">
                    <form class="px-4 py-2">
                        <input type="search" class="form-control" id="searchBuildings" placeholder="3M" autofocus="autofocus"/>
                    </form>
                    <div id="menuItems"></div>
                    <div id="empty" class="dropdown-header">No buildings found</div>
                </div>
            </div>
            <Link to="/" ><Button variant="info">Return to Homepage</Button></Link>
            
        </div>
    )
}




