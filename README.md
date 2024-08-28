# 📄 Combine PDFs Web Application

### 📝 Description

This project is a simple and efficient web application for combining multiple PDF files into a single PDF. It’s built with a React frontend and a Node.js backend using Express. Users can easily upload multiple PDF files, preview the combined result, and download the merged PDF—all with a user-friendly interface.

### ✨ Features

- ⚛️ **React Frontend**: A smooth and intuitive interface for selecting and uploading PDF files.
- 👀 **PDF Preview**: Preview the combined PDF before downloading.
- 🚀 **Express & Node.js Backend**: Efficiently handles PDF merging using `pdf-lib` and manages file uploads securely with `multer`.
- ⏳ **Loading Indicator**: Provides real-time feedback while PDFs are being combined.
- 📥 **Download Option**: Easily download the merged PDF directly from the browser.
- 🌍 **CORS Enabled**: Seamless interaction between the frontend and backend.

### 🛠️ Tech Stack

- **Frontend**: React, Axios, @react-pdf-viewer/core
- **Backend**: Node.js, Express, `pdf-lib`, Multer
- **Styling**: CSS
- **Build Tool**: Create React App

### 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GAP-Pathum/PDF-Combiner.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd combine-pdfs-webapp
   ```
3. **Install dependencies for both frontend and backend**
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```
4. **Run the backend server**
   ```bash
   cd server
   node index.js
   ```
5. **Run the frontend**
   ```bash
   cd client
   npm start
   ```

### 🎯 Usage

1. Open the web application in your browser.
2. 📂 Select multiple PDF files from your device.
3. 🛠️ Click "Combine" to merge the selected PDFs.
4. 👀 Preview the combined PDF before downloading it.
5. 📥 Download the final merged PDF file.

### 📁 File Structure

```
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
```

### 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.

### 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 👤 Author

**G.A.P. Pathum**

Connect with me on [LinkedIn](https://www.linkedin.com/in/pasindu-pathum-98a299249/).

---
