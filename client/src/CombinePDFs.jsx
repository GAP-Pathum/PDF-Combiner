import React, { useState } from 'react';
import axios from 'axios';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'pdfjs-dist';
import './CombinePDF.css'; // Import the CSS file

function CombinePDFs() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [pdfList, setPdfList] = useState([]);
    const [downloadLink, setDownloadLink] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [loading, setLoading] = useState(false); // New state for loading

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
        setPdfList(files.map(file => ({
            name: file.name,
            url: URL.createObjectURL(file),
        })));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Start loading
        const formData = new FormData();
        for (let file of selectedFiles) {
            formData.append('pdfs', file);
        }

        try {
            const response = await axios.post('/combine-pdfs', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadLink(url);
            setPreviewUrl(url); // Set the preview URL to the combined PDF
        } catch (error) {
            console.error('Error combining PDFs:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handlePreview = () => {
        setShowPreview(true); // Show the preview when button is clicked
    };

    return (
        <div className={`container ${loading ? 'loading' : ''}`}>
            {loading && (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                    <p className="loading-text">Combining PDFs...</p>
                </div>
            )}
            {!loading && (
                <>
                    <div className="left-side">
                        <h1>Combine PDFs</h1>
                        <form onSubmit={handleSubmit} className="form">
                            <input type="file" multiple accept="application/pdf" onChange={handleFileChange} />
                            <button type="submit">Combine</button>
                        </form>
                        {pdfList.length > 0 && (
                            <div className="pdf-list">
                                <h2>Selected PDFs</h2>
                                <ul>
                                    {pdfList.map((pdf, index) => (
                                        <li key={index}>
                                            <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                                                {pdf.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {downloadLink && (
                            <div className="buttons">
                                <button onClick={handlePreview}>Preview</button>
                                <a href={downloadLink} download="combined.pdf">
                                    <button>Download</button>
                                </a>
                            </div>
                        )}
                    </div>
                    {showPreview && previewUrl && (
                        <div className="right-side">
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                <Viewer fileUrl={previewUrl} />
                            </Worker>
                        </div>
                    )}
                    
                </>
            )}
                    <footer>
                        Created by G.A.P. Pathum
                    </footer>
        </div>
    );
}

export default CombinePDFs;
