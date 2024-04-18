// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: April 2024
'use strict'
/**
 * This function converts fahrenheit to celsius
 */
function myButtonClicked() {
  // input
  const fahrenheit = parseFloat(document.getElementById('temperature').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'The temperature is: ' + celsius.toFixed(2) + ' °C'
}
