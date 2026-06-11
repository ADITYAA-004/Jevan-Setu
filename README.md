Jeevan Setu – Disaster Relief Coordination Platform
Overview

Jeevan Setu is a disaster relief and emergency response platform that connects victims, volunteers, and administrators during natural disasters and emergency situations.

The platform allows victims to submit emergency requests, volunteers to view and respond to requests, and administrators to monitor and manage the entire relief operation.

Problem Statement

During disasters such as floods, earthquakes, landslides, and accidents, victims often struggle to communicate their needs quickly to rescue teams and volunteers.

Jeevan Setu acts as a bridge between:

Victims requesting help
Volunteers providing assistance
Administrators coordinating relief efforts
Features
Victim Module
Submit emergency requests
Select emergency type
Medical
Rescue
Food & Water
Shelter
Transportation
Set priority level
Provide contact information
Share location details
Volunteer Module
View active requests
Mark availability status
Track emergency requests
Update location
Participate in relief operations
Admin Module
Monitor all requests
Manage users
View analytics dashboard
Track victims and volunteers
Coordinate relief activities
Backend Features
REST API support
Create emergency requests
Update request status
Delete requests
Fetch request details
MongoDB integration support
In-memory fallback storage
Tech Stack
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
Mongoose
Other Packages
CORS
dotenv
Project Structure
Jeevan-Setu
│
├── frontend
│   ├── index.html
│   ├── victim.html
│   ├── volunteer.html
│   ├── admin.html
│   ├── app.js
│   └── style.css
│
├── backend
│   ├── server.js
│   ├── config
│   │   └── db.js
│   └── routes
│       └── requests.js
│
└── package.json
System Architecture
Victim
   │
   ▼
Frontend (HTML/CSS/JS)
   │
   ▼
Express Backend
   │
   ▼
REST APIs
   │
   ▼
MongoDB Database
   │
   ▼
Admin & Volunteer Dashboard
API Endpoints
Get All Requests
GET /api/requests
Get Request By ID
GET /api/requests/:id
Create Request
POST /api/requests

Example:

{
  "type": "medical",
  "location": "Bangalore",
  "description": "Need urgent medical help",
  "contact": "+91XXXXXXXXXX"
}
Update Request Status
PUT /api/requests/:id

Example:

{
  "status": "completed"
}
Delete Request
DELETE /api/requests/:id
Request Status Flow
Pending
   │
   ▼
In Progress
   │
   ▼
Completed

Other possible status:

Cancelled
Installation
Clone Repository
git clone https://github.com/your-username/jeevan-setu.git
Install Dependencies
npm install
Start Backend
cd backend
node server.js

or

nodemon server.js

Server runs at:

http://localhost:5000
Future Enhancements
Real-time notifications
Google Maps integration
GPS tracking
AI-based request prioritization
SMS alerts
OTP authentication
Volunteer matching algorithm
Disaster heatmaps
Mobile application
Cloud deployment
Learning Outcomes

Through this project, I learned:

Frontend development using HTML, CSS, Bootstrap
Backend development using Node.js and Express.js
REST API creation
CRUD operations
MongoDB integration
Client-server architecture
Disaster management workflow design
