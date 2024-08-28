📄 Combine PDFs Web Application
📝 Description
This project is a simple and efficient web application for combining multiple PDF files into a single PDF. It’s built with a React frontend and a Node.js backend using Express. Users can easily upload multiple PDF files, preview the combined result, and download the merged PDF—all with a user-friendly interface.

✨ Features
⚛️ React Frontend: A smooth and intuitive interface for selecting and uploading PDF files.
👀 PDF Preview: Preview the combined PDF before downloading.
🚀 Express & Node.js Backend: Efficiently handles PDF merging using pdf-lib and manages file uploads securely with multer.
⏳ Loading Indicator: Provides real-time feedback while PDFs are being combined.
📥 Download Option: Easily download the merged PDF directly from the browser.
🌍 CORS Enabled: Seamless interaction between the frontend and backend.
🛠️ Tech Stack
Frontend: React, Axios, @react-pdf-viewer/core
Backend: Node.js, Express, pdf-lib, Multer
Styling: CSS
Build Tool: Create React App
🚀 Installation
Clone the repository
bash
Copy code
git clone https://github.com/your-username/combine-pdfs-webapp.git
Navigate to the project directory
bash
Copy code
cd combine-pdfs-webapp
Install dependencies for both frontend and backend
bash
Copy code
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
Run the backend server
bash
Copy code
cd server
node index.js
Run the frontend
bash
Copy code
cd client
npm start
🎯 Usage
Open the web application in your browser.
📂 Select multiple PDF files from your device.
🛠️ Click "Combine" to merge the selected PDFs.
👀 Preview the combined PDF before downloading it.
📥 Download the final merged PDF file.
📁 File Structure
bash
Copy code
combine-pdfs-webapp/
│
├── client/                 # ⚛️ React frontend
│   ├── public/             # 🌐 Public assets
│   ├── src/                # 🛠️ Source files
│   │   ├── components/     # 🧩 React components
│   │   ├── CombinePDF.css  # 🎨 Stylesheet
│   │   └── App.js          # 🔧 Main application file
│   └── package.json        # 📦 Frontend dependencies
│
└── server/                 # 🚀 Express backend
    ├── uploads/            # 🗂️ Temporary storage for uploaded PDFs
    ├── index.js            # 🖥️ Main server file
    ├── package.json        # 📦 Backend dependencies
    └── .env                # 🔐 Environment variables (e.g., PORT)
🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
G.A.P. Pathum

Connect with me on LinkedIn.
