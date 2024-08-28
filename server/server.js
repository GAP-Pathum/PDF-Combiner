const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Enable CORS
app.use(cors());

// Middleware to serve static files (e.g., frontend build files)
app.use(express.static(path.join(__dirname, 'public')));

app.post('/combine-pdfs', upload.array('pdfs', 10), async (req, res) => {
    try {
        // Load uploaded PDFs
        const pdfsToMerge = req.files.map(file => fs.readFileSync(file.path));
        const mergedPdf = await PDFDocument.create();

        for (const pdfBytes of pdfsToMerge) {
            const pdf = await PDFDocument.load(pdfBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach(page => mergedPdf.addPage(page));
        }

        // Save the merged PDF
        const mergedPdfFile = await mergedPdf.save();
        const outputPath = path.join(__dirname, 'uploads', 'merged.pdf');
        fs.writeFileSync(outputPath, mergedPdfFile);

        // Clean up uploaded files
        req.files.forEach(file => fs.unlinkSync(file.path));

        // Send the merged PDF file as a download
        res.download(outputPath, 'combined.pdf');
    } catch (error) {
        console.error('Error combining PDFs:', error);
        res.status(500).send('Error combining PDFs');
    }
});

// Set the port and start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
