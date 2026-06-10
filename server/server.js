import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, '..', 'dist');

app.use(express.static(distPath));

// SPA fallback: send index.html for any unmatched route
app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
