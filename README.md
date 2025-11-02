# 🌟 Web Visitor TrackerNodeJS + Express

======================

<div align="center">This is a simple NodeJS + Express application. This application serves as a basic template for a web server using NodeJS for the backend, Express as the web application framework.



![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)What does this application do?

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)-------------------------------

![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)This application serves a simple web server that listens on defined port, default: `3000`.

![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)



**A sleek and modern web application to track visitor logins with stunning anime-themed UI** ✨# How to run?

You can run the application in one of the following ways:

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Screenshots](#screenshots)

1. Press `F5`. This will start the application in debug mode.

</div>

2. Open a terminal by going to 'View' -> 'Terminal'. Then run: 

---    > `npm run dev`



## 📋 Table of ContentsThis will start the application in development mode.



- [About](#about)

- [Features](#features)Via curl command:

- [Demo](#demo)-----------------

- [Screenshots](#screenshots)1. Open a terminal.

- [Installation](#installation)2. Type the following command: 

- [Configuration](#configuration)   > `curl http://localhost:3000`

- [Usage](#usage)3. Press 'Enter' to make the request.

- [Technologies](#technologies)

- [Project Structure](#project-structure)Via Thunder Client:

- [Contributing](#contributing)-------------------

- [License](#license)1. Click on the Thunder Client icon on the activity bar on the side. If you can't find it, you can search for 'Thunder Client' in the 'View' -> 'Extensions' menu.

- [Contact](#contact)2. Once Thunder Client is open, click on 'New Request'.

3. In the 'Request URL' field, enter the URL of your application (e.g., http://localhost:3000) and select the HTTP method from the dropdown menu.

---5. Click on 'Send' to make the request.



## 🎯 AboutHappy coding! 🙂# login-access

# login-access

**Web Visitor Tracker** is a sophisticated Node.js application that combines functionality with aesthetics. Track every visitor login with detailed analytics while treating your users to a visually stunning experience featuring beautiful anime-themed backgrounds and smooth animations.

Perfect for:
- 📊 Analytics dashboards
- 🔐 User authentication systems
- 📈 Visitor tracking applications
- 🎨 Learning full-stack development

---

## ✨ Features

### 🔐 Authentication
- **Google OAuth 2.0** - Secure and seamless login experience
- **Session Management** - Persistent user sessions

### 📊 Visitor Analytics
- ⏰ **Timestamp Tracking** - Record exact login times
- 🌐 **IP Address Logging** - Track visitor locations
- 💻 **Device Information** - Browser, OS, and device type detection
- 🔍 **User Agent Parsing** - Detailed browser and system information

### 🎨 Beautiful UI
- 🖼️ **Anime GIF Backgrounds** - Stunning full-screen animated backgrounds
- ✨ **Smooth Animations** - Professional fade-in and transition effects
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- 🌙 **Dark Theme** - Easy on the eyes with elegant styling
- 🎭 **Custom Success Page** - Celebratory login confirmation with unique visuals

### 📁 Data Management
- 💾 **JSONL Storage** - Efficient data logging in JSON Lines format
- 🔄 **Real-time Logging** - Instant visitor data recording
- 📈 **Easy Data Processing** - Simple format for analytics

---

## 🎬 Demo

Experience the app live at `http://localhost:3000`

### Login Flow:
1. 🏠 **Landing Page** - Beautiful anime-themed welcome screen
2. 🔐 **Google Login** - One-click OAuth authentication
3. 🎉 **Success Page** - Stunning confirmation with unique GIF background
4. 📊 **Data Logged** - All visit information automatically recorded

---

## 📸 Screenshots

### Landing Page
![Landing Page](https://via.placeholder.com/800x400/1a1a1a/00ff88?text=Anime+Background+Login+Page)

*Beautiful anime GIF background with Google OAuth button*

### Success Page
![Success Page](https://via.placeholder.com/800x400/1a1a1a/00ff88?text=Login+Successful+Animation)

*Celebratory success screen with unique anime GIF*

---

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Console account (for OAuth credentials)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AshmitThakur23/Web-Visitor-Tracker-.git
   cd Web-Visitor-Tracker-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google OAuth 2.0**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/auth/google/callback`

4. **Create environment file**
   
   Create a `.env` file in the root directory:
   ```env
   CLIENT_ID=your-google-client-id-here
   CLIENT_SECRET=your-google-client-secret-here
   REDIRECT_URI=http://localhost:3000/auth/google/callback
   PORT=3000
   ```

5. **Add your GIF files**
   
   Place your anime GIF files in the `public` folder:
   - `animegif9.gif` - Login page background
   - `animegif8.gif` - Success page background

6. **Start the application**
   ```bash
   npm start
   ```

7. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CLIENT_ID` | Google OAuth 2.0 Client ID | ✅ Yes |
| `CLIENT_SECRET` | Google OAuth 2.0 Client Secret | ✅ Yes |
| `REDIRECT_URI` | OAuth callback URL | ✅ Yes |
| `PORT` | Server port number | ❌ No (default: 3000) |

### Customization

#### Change Background GIFs
Replace the GIF files in the `public` folder:
```
public/
  ├── animegif9.gif  (Login page)
  └── animegif8.gif  (Success page)
```

#### Modify Styling
Edit `public/style.css` to customize colors, fonts, and animations.

---

## 🎮 Usage

### Starting the Server

**Development mode** (with auto-restart):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

### Accessing Logs

Visitor data is stored in `logs/visits.jsonl`:

```json
{"timestamp":"2025-11-02T10:30:00.000Z","ip":"192.168.1.100","userAgent":"Mozilla/5.0...","browser":"Chrome","os":"Windows","device":"Desktop"}
```

### Processing Logs

Use any JSONL parser or simple Node.js script:
```javascript
const fs = require('fs');
const logs = fs.readFileSync('logs/visits.jsonl', 'utf-8')
  .split('\n')
  .filter(line => line)
  .map(line => JSON.parse(line));

console.log(`Total visitors: ${logs.length}`);
```

---

## 🛠️ Technologies

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google OAuth 2.0** - Authentication
- **dotenv** - Environment management

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript** - Client-side interactions

### Utilities
- **ua-parser-js** - User agent parsing
- **nodemon** - Development auto-restart

---

## 📁 Project Structure

```
Web-Visitor-Tracker/
├── 📁 src/
│   ├── app.js              # Main application entry
│   ├── auth.js             # OAuth authentication logic
│   ├── logger.js           # Visitor logging functionality
│   ├── 📁 routes/
│   │   └── index.js        # Route handlers
│   └── 📁 views/
│       ├── index.html      # Login page
│       └── success.html    # Success page
├── 📁 public/
│   ├── style.css           # Global styles
│   ├── animegif9.gif       # Login background
│   └── animegif8.gif       # Success background
├── 📁 logs/
│   └── visits.jsonl        # Visitor data logs
├── .env                    # Environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
└── README.md               # Documentation
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Ideas for Contributions
- 🎨 New themes and UI improvements
- 📊 Analytics dashboard
- 🗄️ Database integration
- 🔔 Real-time notifications
- 🌍 Multi-language support

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Ashmit Thakur**

- GitHub: [@AshmitThakur23](https://github.com/AshmitThakur23)
- Repository: [Web-Visitor-Tracker](https://github.com/AshmitThakur23/Web-Visitor-Tracker-)

---

## 🌟 Show Your Support

If you like this project, please give it a ⭐️ on GitHub!

---

## 📚 Acknowledgments

- Google OAuth 2.0 for secure authentication
- ua-parser-js for user agent parsing
- Express.js community for excellent documentation
- Anime community for inspiring the aesthetic design

---

<div align="center">

**Made with ❤️ and lots of ☕**

⭐️ Star this repo if you find it helpful!

</div>
