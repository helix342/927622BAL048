const express = require('express');
const { data } = require('react-router-dom');
const port = 8000;
const app = express();
// const cors = require('cors');
const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDcxMzc4LCJpYXQiOjE3NDgwNzEwNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjMzN2NiZGRkLTJjNTctNDg5YS1iYWE1LTM2Mzg0MDEyZjI1NiIsInN1YiI6InN5ZWRzYW1pNDc1MUBnbWFpbC5jb20ifSwiZW1haWwiOiJzeWVkc2FtaTQ3NTFAZ21haWwuY29tIiwibmFtZSI6InN5ZWQgc2FtaSB1Iiwicm9sbE5vIjoiOTI3NjIyYmFsMDQ4IiwiYWNjZXNzQ29kZSI6IndoZVFVeSIsImNsaWVudElEIjoiMzM3Y2JkZGQtMmM1Ny00ODlhLWJhYTUtMzYzODQwMTJmMjU2IiwiY2xpZW50U2VjcmV0IjoiWmh3WVpiQ2dYdkp1a0ZXciJ9.2HmWRXM6fjKzHNsGhvfNPFvcOuUG8hqfHliOITZH_PY';

app.get('/getData', (req, res) => {
  fetch("http://20.244.56.144/evaluation-service/stocks", {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json' // Adjust if the API expects a different content type
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Failed to fetch data:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
});