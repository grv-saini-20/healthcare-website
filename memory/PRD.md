# PRD: Sarwal Hospital Landing Page

## Project Overview
**Date Created:** Feb 18, 2026  
**Project Type:** Hospital/Medical Landing Page  
**Tech Stack:** React, FastAPI, MongoDB, Tailwind CSS, Shadcn UI

## Problem Statement
Create a modern, professional, and highly trustworthy landing page for Dr Ankush Sarwal (Oncosurgeon, Laparoscopic Surgeon, Gastro Surgeon) at Sarwal Hospital in Ambala, Haryana, India.

## User Personas
1. **Primary:** Patients seeking cancer surgery and laparoscopic procedures
2. **Secondary:** Family members researching healthcare providers
3. **Tertiary:** Emergency patients needing immediate surgical care

## Core Requirements
- Professional medical design with trust-building elements
- Mobile-first responsive layout
- Appointment booking functionality
- Service showcase (6 primary services)
- Doctor credentials and experience highlights
- Patient testimonials and ratings
- Contact information and location details
- Emergency contact options (24/7)

---

## Implementation Status

### ✅ Completed (Feb 18, 2026)

#### Frontend Components Created:
1. **Header.jsx** - Sticky navigation with mobile menu, emergency & book appointment CTAs
2. **HeroSection.jsx** - Doctor intro, ratings (4.9/5), patient stats (5000+), trust badges
3. **AboutSection.jsx** - Doctor profile, qualifications (MBBS, MS), experience (15+ years), expertise highlights
4. **ServicesSection.jsx** - 6 service cards with icons (Cancer, Breast, Gall Bladder, Hernia, Piles, Gastro)
5. **WhyChooseSection.jsx** - 6 differentiators + stats bar (15+ years, 5000+ surgeries, 98% success rate)
6. **TestimonialsSection.jsx** - 3 patient reviews with 5-star ratings, overall 4.9/5 display
7. **FacilitiesSection.jsx** - 4 facility cards with images (OT, patient rooms, equipment, emergency care)
8. **AppointmentSection.jsx** - Booking form with fields (name, phone, email, treatment type, date, message)
9. **LocationSection.jsx** - Google Maps embed placeholder, address, contact details
10. **FAQSection.jsx** - Accordion with 5 FAQs about surgeries and treatments
11. **Footer.jsx** - Contact info, quick links, services list, social media links
12. **EmergencyBanner.jsx** - Sticky bottom banner with call & WhatsApp CTAs

#### Data Layer:
- **mockData.js** - All content including doctor info, services, testimonials, facilities, FAQs

#### Design Implementation:
- Medical blue/cyan color palette (blue-600, cyan-500)
- Professional typography and spacing
- Smooth animations and hover effects
- Glassmorphism effects on cards
- Trust-building visual hierarchy
- Mobile-responsive (tested at 375px and 1920px)

---

## Next Tasks

### P0 (High Priority)
1. **Backend Development**
   - Create Appointment model in MongoDB
   - Build POST /api/appointments endpoint
   - Implement form validation and error handling
   - Store appointment data with timestamps

2. **Frontend-Backend Integration**
   - Remove mock data from appointment form
   - Connect form submission to backend API
   - Add success/error toast notifications
   - Implement loading states

3. **Content Updates**
   - Replace placeholder phone numbers (+91-XXXXXXXXXX)
   - Update email address
   - Add actual Google Maps coordinates
   - Update social media links

### P1 (Medium Priority)
1. **Appointment Management**
   - Admin dashboard to view appointments
   - Appointment status (pending/confirmed/cancelled)
   - Email notifications to admin
   - SMS notifications to patients

2. **Enhanced Features**
   - WhatsApp direct booking integration
   - Call tracking integration
   - Form analytics (conversion tracking)
   - Live chat support

### P2 (Future Enhancements)
1. **SEO & Performance**
   - Meta tags and Open Graph
   - Schema markup for local business
   - Image optimization
   - Performance monitoring

2. **Additional Features**
   - Patient portal login
   - Online payment integration
   - Medical records upload
   - Prescription management
   - Blog/health tips section

---

## API Contracts (To Be Implemented)

### POST /api/appointments
**Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string (optional)",
  "treatmentType": "string",
  "preferredDate": "date",
  "message": "string (optional)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "appointmentId": "string",
  "message": "Appointment request submitted successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "string"
}
```

### GET /api/appointments (Admin only - future)
**Response:**
```json
{
  "appointments": [
    {
      "id": "string",
      "name": "string",
      "phone": "string",
      "treatmentType": "string",
      "preferredDate": "date",
      "status": "pending|confirmed|cancelled",
      "createdAt": "timestamp"
    }
  ]
}
```

---

## Mocked Data
Currently using mock data in `/app/frontend/src/data/mockData.js` for:
- Doctor information
- Services list
- Why choose us features
- Patient testimonials
- Hospital facilities
- FAQs
- Contact information

**Action Required:** All mock data will be replaced with database-driven content in Phase 2 (backend implementation).

---

## Design Guidelines Followed
✅ No dark purple/blue or purple/pink gradients  
✅ Lucide-react icons (no emoji icons)  
✅ Professional medical color palette  
✅ Shadcn UI components  
✅ Mobile-first responsive design  
✅ Trust-building visual elements  
✅ Clear call-to-actions throughout  
✅ Smooth scrolling navigation  
✅ Accessible form inputs with labels

---

## Technical Notes
- Frontend runs on port 3000 (React)
- Backend will run on port 8001 (FastAPI)
- MongoDB for data storage
- All routes accessible via smooth scroll
- Form currently stores data in component state only
- Images sourced from Unsplash (medical/hospital themed)
