
# wanderlust    
LIVE LINK:https://majorproject-5-hp15.onrender.com

# Wanderlust - Travel Accommodation Platform
Wanderlust is a full-stack web application that allows users to discover, list, and book unique accommodations around the world. Similar to Airbnb, it provides a platform for property owners to showcase their spaces and for travelers to find their perfect stay.

## Features

- **User Authentication**
  - Secure signup and login system
  - User profile management
  - Password protection with Passport.js

- **Listing Management**
  - Create, edit, and delete property listings
  - Upload property images with Cloudinary integration
  - Detailed property descriptions and pricing
  - Location mapping with MapTiler integration

- **Search & Discovery**
  - Browse available properties
  - Filter by various categories
  - Interactive property cards
  - Location-based search

- **Reviews & Ratings**
  - Leave reviews and ratings for properties
  - Star rating system
  - Review management for property owners

- **Interactive Maps**
  - Visual property location display
  - Map-based property navigation
  - Precise location markers

## Technology Stack

- **Frontend**
  - EJS (Embedded JavaScript templates)
  - Bootstrap 5
  - CSS3
  - JavaScript
  - MapTiler SDK

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Passport.js

- **Cloud Services**
  - Cloudinary (Image hosting)
  - MongoDB Atlas
  - MapTiler (Maps and Geocoding)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mdashad0/majorproject.git
   cd majorproject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   ATLASDB_URL=your_mongodb_url
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_maptiler_token
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. Visit `http://localhost:8080/listings` in your browser

## Project Structure

```
majorproject/
├── models/           # Database models
├── routes/           # Route handlers
├── controllers/      # Business logic
├── views/           # EJS templates
├── public/          # Static files
├── utils/           # Utility functions
├── middleware/      # Custom middleware
└── config/          # Configuration files
```

## Wanderlust Preview

![Screenshot 2025-05-01 113216](https://i.ibb.co/bjfRZhbH/Screenshot-2025-09-12-205959.png)
![Screenshot 2025-05-01 113217](https://i.ibb.co/sd9n9bwX/Screenshot-2025-09-12-210019.png)
![Screenshot 2025-05-01 112933](https://i.ibb.co/9mYPH0dk/Screenshot-2025-09-12-173617.png)
![Screenshot 2025-05-01 112945](https://i.ibb.co/WpYLxTPx/Screenshot-2025-09-12-174306.png)
![Screenshot 2025-05-01 112946](https://i.ibb.co/JwMMhrSR/Screenshot-2025-09-12-174326.png)
![Screenshot 2025-05-01 112854](https://i.ibb.co/Hp450WhL/Screenshot-2025-09-12-174350.png)
