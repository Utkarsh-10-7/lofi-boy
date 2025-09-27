# Lofi Boy

A modern web app to upload, browse, and play lofi music tracks.

## Features

- Upload MP3/WAV tracks (stored in browser, simple for demo)
- Browse & play all uploaded tracks
- Clean, responsive UI

## Setup & Deploy on Netlify

1. **Clone the repository:**
   ```
   git clone https://github.com/Utkarsh-10-7/lofi-boy.git
   cd lofi-boy
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run locally:**
   ```
   npm start
   ```

4. **Deploy to Netlify:**
   - Login to Netlify and click "New site from Git".
   - Connect your GitHub repo.
   - Netlify auto-detects React and builds with `npm run build`.
   - Publish directory: `build` (set by `netlify.toml`).

## Notes

- Demo version stores tracks only in your browser session.
- For backend upload support, use serverless functions or a backend (Express, etc.).
- Easily extend for user logins, permanent storage, etc.
