**QuickJob - Micro Job Finding Platform**

**📌 Overview**
QuickJob is a web and mobile application designed to connect job suppliers with employees looking for micro jobs such as plumbing, mechanics, carpentry, and more. The platform simplifies the process of finding and offering short-term, skill-based tasks, ensuring efficient and quick job matching. Built using the latest technologies like Next.js, it provides a seamless user experience with real-time interactions and modern UI components.

**🚀 Features**
User Registration & Authentication: Secure sign-up and sign-in for job suppliers and employees.
User Roles:
Job Suppliers: Post micro jobs with details like job type, description, location, and payment.
Employees: Browse available jobs and apply with a click.
Job Listings: Filter and search for micro jobs by category, location, and date.
Application Management: Job suppliers can review applicants and assign jobs.
Ratings & Reviews: After job completion, job suppliers and employees can leave ratings and reviews to build trust.
Responsive Design: Works seamlessly across web and mobile devices.
**🛠️ Tech Stack**
Frontend: Next.js (v14.2.14), React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Deployment: Vercel (for web app)

**📂 Project Structure**

Copy code

├── components/           # Reusable React components

├── pages/                # Next.js pages (routes)

│   ├── api/              # API routes

│   ├── index.js          # Home page

│   ├── sign-in.js        # Sign-in page

│   └── sign-up.js        # Sign-up page

├── public/               # Static assets (images, icons, etc.)

├── styles/               # Tailwind CSS configurations

├── utils/                # Helper functions and utilities

├── package.json          # Project metadata and dependencies

└── README.md             # Documentation (this file)

**🛠️ Installation & Setup**
To get a local copy of the project up and running, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js (v18.x.x or higher)
npm (v9.x.x or higher)
MongoDB
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/hasinduvindana/Quick-Job-Micro-Job-Finding-platform.git
cd Quick-Job-Micro-Job-Finding-platform
Step 2: Install Dependencies
bash
Copy code
npm install
Step 3: Configure Environment Variables
Create a .env file in the root directory and add the following:

makefile
Copy code
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
NEXT_PUBLIC_API_URL=http://localhost:3000
Step 4: Run the Application
bash
Copy code
npm run dev
The application will be accessible at http://localhost:3000.

**📱 Mobile Compatibility**

The platform is fully responsive and optimized for mobile devices. To view the mobile version, simply access the website on your smartphone or use browser developer tools.

**🧩 Key Components**

Authentication: Secure login and registration system.
Job Listings: Dynamic listings that allow suppliers to post jobs and employees to apply.
Dashboard: A personalized dashboard for users to manage job posts, applications, and more.

**🚧 Future Enhancements**

Payment Integration: Add secure payment gateways for job transactions.
Real-Time Notifications: Notify users of new job posts and applications in real-time.
Profile Verification: Enable profile verification to enhance trust and reliability.

**🤝 Contributing**

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

**📝 License**

This project is licensed under the MIT License - see the LICENSE file for details.

**📧 Contact**

For any inquiries or support, please contact:

Hsindu Vindana - hasinduvindana@gmail.com
