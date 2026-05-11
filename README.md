🎓 SkillSphere – Online Learning Platform

SkillSphere is a modern and responsive online learning platform where users can explore courses, view detailed course information, and enroll in skill-based programs like Web Development, Design, Marketing, and more.




📂 GitHub Repository

👉 GitHub Repo Link Here

🚀 Project Features
🔐 Authentication system using BetterAuth
🔑 Google Social Login
📚 Browse all available courses
🔎 Search courses by title
🔒 Protected Course Details Route
👤 User Profile Page
✏️ Update User Information Feature
🎥 Hero Banner Section
⭐ Popular Courses Section
📈 Trending Courses Section
🏆 Top Instructors Section
📱 Fully Responsive Design
🌙 Modern UI with Tailwind CSS & DaisyUI
🔔 Toast Notifications
⏳ Loading Spinner while fetching data
🚫 Custom 404 Not Found Page
🔄 Persistent Navbar & Footer
⚡ Smooth animations using Motion / SwiperJS

🛠️ Tech Stack
Frontend
Next.js (App Router)
React
Tailwind CSS
DaisyUI
Authentication
BetterAuth
Google Authentication
UI & Animation
Motion
Swiper JS
React Icons
React Hot Toast

📦 NPM Packages Used
next
react
react-dom
tailwindcss
daisyui
better-auth
firebase
motion
swiper
react-hot-toast
react-icons
axios

📁 Folder Structure
src/
│
├── app/
│ ├── courses/
│ ├── login/
│ ├── register/
│ ├── my-profile/
│ ├── update-profile/
│ └── not-found.jsx
│
├── components/
│ ├── Navbar
│ ├── Footer
│ ├── CourseCard
│ ├── HeroSection
│ └── Loader
│
├── data/
│ └── courses.json
│
├── lib/
│ └── auth.js
│
└── utils/

🔐 Environment Variables

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_AUTH_URL=your_auth_url
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret

⚠️ Never expose secret keys publicly.

📚 Course Features

Each course includes:

Course Image
Title
Instructor
Duration
Rating
Level
Category
Detailed Description
Curriculum Section
🔍 Search Functionality

Users can search courses dynamically by course title from the All Courses page.

👤 My Profile

Authenticated users can:

View profile information
Update name
Update profile image
🧩 Extra Functionalities
Route protection with redirect after login
Toast notifications for success/error
Smooth page transitions
Responsive navbar & footer
Persistent layout structure

📱 Responsive Design

SkillSphere is optimized for:

📱 Mobile
💻 Laptop
🖥️ Desktop
📲 Tablet
