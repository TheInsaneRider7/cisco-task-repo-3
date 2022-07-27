import React from 'react'

const api_url = 'https://api.ipify.org?format=json'
async function getIP() {
  const response = await fetch(api_url);
  const data = await response.json();
  const ip = data;

  document.getElementById('ip').textContent = ip;

}

  

export default component2