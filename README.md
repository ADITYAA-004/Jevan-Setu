🌉 Jeevan Setu – Disaster Relief Coordination Platform
📌 Introduction

Jeevan Setu is a web-based disaster relief coordination platform designed to connect disaster victims, volunteers, and administrators on a single system. During emergencies such as floods, earthquakes, landslides, or accidents, communication and coordination become critical. This platform helps victims request assistance, enables volunteers to provide support, and allows administrators to monitor and manage relief operations efficiently.

The primary objective of the project is to reduce response time and improve resource allocation during disaster situations through a centralized digital platform.

🚨 Problem Statement

In disaster situations, affected individuals often struggle to communicate their needs to rescue teams. Information is scattered across multiple channels, leading to delays in rescue operations and inefficient distribution of resources.

Jeevan Setu addresses this challenge by providing:

A centralized platform for emergency requests.
Real-time visibility of relief requirements.
Efficient coordination between victims and volunteers.
Administrative monitoring and management capabilities.
🎯 Objectives
Provide a digital platform for emergency assistance requests.
Enable volunteers to identify and respond to relief needs.
Help administrators coordinate disaster management activities.
Improve transparency and efficiency in relief operations.
Maintain organized records of requests and responses.
👥 User Roles
1. Victims

Victims affected by disasters can:

Submit emergency requests.
Specify the type of assistance required.
Provide location and contact information.
Set request priority levels.
Track the status of submitted requests.
2. Volunteers

Volunteers can:

View active emergency requests.
Update availability status.
Respond to victim requests.
Assist in relief and rescue operations.
Coordinate with administrators.
3. Administrators

Administrators have full control over the platform and can:

Monitor all emergency requests.
Manage users and volunteers.
Track ongoing relief operations.
Update request statuses.
Analyze platform activity through dashboards.
✨ Key Features
Emergency Request Management
Create emergency requests.
Categorize requests based on need.
Assign priority levels.
Update request status.
Delete completed or invalid requests.
Disaster Response Coordination
Volunteer participation management.
Request tracking system.
Centralized communication workflow.
Administrative Dashboard
Overview of all active requests.
User management.
Relief operation monitoring.
Request analytics.
Data Management
Secure storage of request information.
MongoDB database integration.
RESTful API architecture.
🛠️ Technology Stack
Frontend
HTML5
CSS3
Bootstrap 5
JavaScript
Backend
Node.js
Express.js
Database
MongoDB
Mongoose ODM
Additional Tools
CORS
dotenv
REST APIs
🏗️ System Architecture
Victim
   │
   ▼
Frontend Interface
   │
   ▼
Express.js Backend Server
   │
   ▼
REST API Layer
   │
   ▼
MongoDB Database
   │
   ▼
Volunteer & Admin Dashboard
📂 Project Structure
Jeevan-Setu
│
├── frontend
│   ├── index.html
│   ├── victim.html
│   ├── volunteer.html
│   ├── admin.html
│   ├── style.css
│   └── app.js
│
├── backend
│   ├── server.js
│   ├── routes
│   ├── models
│   ├── controllers
│   └── config
│
├── package.json
└── README.md
🔄 Workflow
Step 1

A victim submits an emergency request through the platform.

Step 2

The request is stored in the database and displayed on the volunteer dashboard.

Step 3

Volunteers review the request and provide assistance.

Step 4

Administrators monitor the progress and update the request status.

Step 5

Once assistance is provided, the request is marked as completed.

📡 API Endpoints
Method	Endpoint	Description
GET	/api/requests	Retrieve all requests
GET	/api/requests/:id	Retrieve specific request
POST	/api/requests	Create a new request
PUT	/api/requests/:id	Update request status
DELETE	/api/requests/:id	Delete request
📊 Request Lifecycle
Pending
   │
   ▼
In Progress
   │
   ▼
Completed

Alternative Status:

Cancelled
🔒 Future Enhancements
Real-time notifications using Socket.io
GPS-based location tracking
Google Maps integration
AI-powered request prioritization
SMS and Email alerts
OTP authentication
Cloud deployment (AWS/Azure)
Mobile application support
Volunteer recommendation system
Disaster heatmap visualization
📚 Skills Demonstrated

This project demonstrates knowledge of:

Full-Stack Web Development
Frontend UI Design
RESTful API Development
MongoDB Database Management
Node.js and Express.js
CRUD Operations
Client-Server Architecture
Disaster Management System Design
