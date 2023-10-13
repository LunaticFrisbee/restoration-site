const express = require('express');
const app = express();
const path = require('path');

// Define routes and serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-us.html'));
})

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
})

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
})

app.get('/windstorm-damage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'windstorm-damage.html'));
})

app.get('/sewage-clean-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sewage-clean-up.html'));
})

app.get('/fire-and-smoke-damage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fire-and-smoke-damage.html'));
})

app.get('/mold-remediation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mold-remediation.html'));
})

app.get('/asbestos-removal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'asbestos-removal.html'));
})

app.get('/puff-back', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'puff-back.html'));
})

app.get('/chemical-contaminants', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chemical-contaminants.html'));
})

app.get('/disinfecting', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'disinfecting.html'));
})

app.get('/rebuild-and-restoration', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rebuild-and-restoration.html'));
})

app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reviews.html'));
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
