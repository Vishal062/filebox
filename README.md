# 📂 Dropbox Clone

A modern Dropbox clone built with the latest technologies like **Neon**, **Drizzle ORM**, **Hero UI**, **ImageKit**, and **Clerk** for full-stack development, authentication, business logic, and file storage.

---

## 🚀 Tech Stack

| Category             | Technology |
| -------------------- | ----------- |
| Backend Database     | [Neon](https://neon.tech/) |
| ORM                  | [Drizzle ORM](https://orm.drizzle.team/docs/get-started/neon-new) |
| Frontend UI          | [Hero UI](https://www.hero-ui.dev/) |
| Authentication       | [Clerk](https://clerk.dev/) |
| Media Storage & CDN  | [ImageKit](https://imagekit.io/) |

---

## ✨ Features

- 🔒 **Authentication** using Clerk (email/password, OAuth)
- 🗂 **File Uploading and Storage** with ImageKit
- 🧠 **Business Logic** handled through clean architecture
- 📦 **Cloud Storage** backend using Neon PostgreSQL
- ⚡ **Modern UI/UX** with Hero UI components
- 📄 **Folder Management**, **File Sharing**, and **Preview**
- 🔎 **Search and Filter** through uploaded files
- 🧹 **Trash Management** and **File Recovery**

---

## 📚 Documentation Links

- **Drizzle ORM with Neon**: [Get Started Guide](https://orm.drizzle.team/docs/get-started/neon-new)
- **Clerk Authentication**: [Clerk Docs](https://clerk.dev/docs)
- **ImageKit for File Storage**: [ImageKit Docs](https://docs.imagekit.io/)
- **Hero UI Components**: [Hero UI Documentation](https://www.hero-ui.dev/docs)
- **Neon PostgreSQL Database**: [Neon Docs](https://neon.tech/docs)

---

## 🏗 Project Structure

```plaintext
├── app/                # Frontend Application (Next.js, React, etc.)
│   ├── components/      # Reusable UI components (Hero UI)
│   ├── pages/           # Routes and Pages
│   ├── hooks/           # Custom Hooks (e.g., useAuth, useUpload)
│   ├── utils/           # Utilities (e.g., formatters, validators)
├── server/             # API Routes, Server Actions
│   ├── db/              # Drizzle ORM Setup with Neon
│   ├── auth/            # Clerk integration
│   ├── storage/         # ImageKit upload/download services
├── public/             # Static Assets
├── .env.local          # Environment Variables
├── README.md           # Project Overview (this file)

```
# 📦 Deployment
You can deploy the application easily on platforms like:

- ** Vercel
- ** Netlify
- ** AWS Amplify