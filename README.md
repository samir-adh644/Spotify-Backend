# Spotify-Inspired Backend API

A robust MERN-stack backend for music streaming, user authentication, and artist management[cite: 1, 2].

## 📖 Project Overview
This project serves as the backbone for a digital music streaming platform. It handles user lifecycle management, music discovery for listeners, and specialized management tools for Artists to upload tracks and organize them into albums[cite: 1, 2].

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)[cite: 1, 2]
- **MongoDB** (Local or Atlas)[cite: 1, 2]
- **NPM** (Included with Node.js)[cite: 2]

### Installation
1. **Clone the repository:**


2. npm install
 
3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4.npm run dev

---

## 📡 API Documentation
**Base URL:** `https://api-spotify-wln6.onrender.com`[cite: 1, 2]

### 1. Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `api/auth/register` | Register a new user/artist[cite: 1, 2] |
| `POST` | `api/auth/login` | Login and receive access token[cite: 1, 2] |
| `POST` | `api/auth/logout` | Terminate session[cite: 1, 2] |

### 2. Music Management
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `api/music/upload` | Upload audio files[cite: 1, 2] | **Artist Only**[cite: 1, 2] |
| `GET` | `api/music/` | Fetch tracks for the home feed[cite: 1, 2] | Public/User[cite: 1, 2] |

### 3. Album Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `api/album/create` | Create a new collection (Artist Only)[cite: 1, 2] |
| `GET` | `api/album/albums` | List all album names[cite: 1, 2] |
| `GET` | `api/album/albums/:albumId` | Fetch all songs within a specific album[cite: 1, 2] |

---

## 🛠 Features
- **JWT-Based Security:** Secure routes for user and artist actions[cite: 2].
- **Dynamic Routing:** Efficient handling of music and album queries[cite: 2].
- **Scalable Schema:** Built with Mongoose for future-proof data modeling[cite: 2].

   
