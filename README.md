### **Frontend GitHub README**

````markdown
# LearnUp Frontend

Welcome to the frontend repository of **LearnUp**, an e-learning platform designed to provide a seamless experience for both students and instructors.

## 🌟 Features

- **User Authentication**: Secure login, signup, and password recovery.
- **Course Browsing**: Explore free and paid courses with detailed overviews.
- **Interactive Dashboard**: Access and manage enrolled or created courses.
- **Instructor Tools**: Create and manage courses, upload lessons, and track stats.
- **Responsive Design**: Optimized for desktop and mobile devices.

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React-based)
- **Styling**: Tailwind CSS, Bootstrap 4
- **UI Components**: Ant Design
- **State Management**: Context API
- **API Communication**: Axios
- **Video Playback**: React Player
- **Notifications**: React Toastify
- **Interactive Features**: Swiper.js for carousels

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- A backend server for LearnUp (refer to the backend repository)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aymenkenway/LearnUp-Frontend
   ```
````

2. Navigate to the project folder:
   ```bash
   cd learnup-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in `.env.local`:
   ```plaintext
   NEXT_PUBLIC_API_URL=backend url
   STRIPE_PUBLIC_KEY=stripe public api key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Folder Structure

- `/components`: Reusable React components.
- `/pages`: Application routes.
- `/utils`: Utility functions and constants.
- `/public`: Static assets.

## 📦 Deployment

Deploy this project easily with [Vercel](https://vercel.com/). Simply connect the repository, add your environment variables, and hit deploy.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
