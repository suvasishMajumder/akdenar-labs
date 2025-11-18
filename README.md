# Project Setup Guide

To run this project, you must set up the required environment variables and connect MongoDB locally. Follow all steps carefully.

---

## Required Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# MongoDB Localhost Connection
MONGODB_URI=mongodb://localhost:27017/akdenarLab

# JWT Secret
JWT_SECRET=ajay123

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=dytuod
CLOUDINARY_API_KEY=825889711783
CLOUDINARY_API_SECRET=iAveyyP4rkm2kAZHWBYmHLwk
```

## Future enhancement
1. forgot password for admin
2. change password through admin panel
3. make admin by admin
