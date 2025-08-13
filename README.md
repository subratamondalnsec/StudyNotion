# StudyNotion Online Education Platform (MERN App) 

[![StudyNotion Logo](https://res.cloudinary.com/dvpulu3cc/image/upload/v1702489710/Screenshot_2023-12-13_231558_dwyhv3.png)](https://studynotion-frontend-black.vercel.app/)

**Live Demo:** [https://studynotion-frontend-black.vercel.app/](https://studynotion-frontend-black.vercel.app/)

---

## DESCRIPTION

StudyNotion is a comprehensive educational platform aimed at providing a seamless experience for students and educators. It allows users to access a variety of educational materials, collaborate on projects, and interact with educators. The project uses a MERN stack with a monolithic architecture and features React.js, Node.js, Express.js, MongoDB, Cloudinary, and Tailwind CSS.

---

## TECHNOLOGY STACK

### Frontend
<p>
  <a href="https://www.w3schools.com/html/"><img src="https://img.icons8.com/color/70/000000/html-5--v1.png" alt="HTML" /></a>
  <a href="https://www.w3schools.com/css/"><img src="https://img.icons8.com/color/70/000000/css3.png" alt="CSS" /></a>
  <a href="https://www.w3schools.com/js/"><img src="https://img.icons8.com/color/70/000000/javascript--v1.png" alt="JS" /></a>
  <a href="https://reactjs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" width="50" height="50" /></a>
</p>

- **HTML, CSS, JavaScript**: Structure, style, and interactivity.
- **React.js**: Frontend library for building interactive UI components.

### Backend
<p>
  <a href="https://nodejs.org/"><img src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png" alt="Node.js" width="50" height="50" /></a>
  <div style="background-color: white; display: inline-block;">
  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="Express.js" width="50" height="50" />
</div>
  <a href="https://www.mongodb.com/docs/"><img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="MongoDB" width="50" height="50" /></a>
</p>

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for flexible JSON-like document storage.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## ARCHITECTURE DIAGRAM

![Architecture Diagram](https://res.cloudinary.com/dvpulu3cc/image/upload/v1699036870/Screenshot_2023-11-04_000952_argzj8.jpg)

---

## API ROUTES

### Authentication
| ENDPOINT       | API PATH                        |
|----------------|---------------------------------|
| SENDOTP        | `api/v1/auth/sendotp`           |
| SIGNUP         | `api/v1/auth/signup`            |
| LOGIN          | `api/v1/auth/login`             |
| RESETPASSTOKEN | `api/v1/auth/reset-password-token` |
| RESETPASSWORD  | `api/v1/auth/reset-password`    |

### Profile
| ENDPOINT                    | API PATH                           |
|-------------------------------|-----------------------------------|
| GET_USER_DETAILS              | `api/v1/profile/getUserDetails`    |
| GET_USER_ENROLLED_COURSES     | `api/v1/profile/getEnrolledCourses` |
| GET_INSTRUCTOR_DATA           | `api/v1/profile/instructorDashboard` |

### Student
| ENDPOINT                     | API PATH                           |
|-------------------------------|-----------------------------------|
| COURSE_PAYMENT               | `api/v1/payment/capturePayment`   |
| COURSE_VERIFY                | `api/v1/payment/verifyPayment`    |
| SEND_PAYMENT_SUCCESS_EMAIL   | `api/v1/payment/sendPaymentSuccessEmail` |

### Course
| ENDPOINT                               | API PATH                               |
|----------------------------------------|----------------------------------------|
| GET_ALL_COURSE                         | `api/v1/course/getAllCourses`          |
| COURSE_DETAILS                         | `api/v1/course/getCourseDetails`       |
| EDIT_COURSE                            | `api/v1/course/editCourse`             |
| COURSE_CATEGORIES                       | `api/v1/course/showAllCategories`      |
| CREATE_COURSE                           | `api/v1/course/createCourse`           |
| CREATE_SECTION                          | `api/v1/course/addSection`             |
| CREATE_SUBSECTION                       | `api/v1/course/addSubSection`          |
| UPDATE_SECTION                          | `api/v1/course/updateSection`          |
| UPDATE_SUBSECTION                       | `api/v1/course/updateSubSection`       |
| GET_ALL_INSTRUCTOR_COURSES              | `api/v1/course/getInstructorCourses`   |
| DELETE_SECTION                          | `api/v1/course/deleteSection`          |
| DELETE_SUBSECTION                       | `api/v1/course/deleteSubSection`       |
| DELETE_COURSE                           | `api/v1/course/deleteCourse`           |
| GET_FULL_COURSE_DETAILS_AUTHENTICATED   | `api/v1/course/getFullCourseDetails`   |
| LECTURE_COMPLETION                       | `api/v1/course/updateCourseProgress`   |
| CREATE_RATING                            | `api/v1/course/createRating`           |

### Ratings & Reviews
| ENDPOINT         | API PATH                  |
|------------------|---------------------------|
| REVIEWS_DETAILS  | `api/v1/course/getReviews` |

### Categories
| ENDPOINT     | API PATH                          |
|--------------|-----------------------------------|
| CATEGORIES   | `api/v1/course/showAllCategories` |

### Catalog
| ENDPOINT          | API PATH                                 |
|------------------|------------------------------------------|
| CATALOG_PAGE_DATA | `api/v1/course/getCategoryPageDetails`   |

### Contact Us
| ENDPOINT    | API PATH                    |
|------------|------------------------------|
| CONTACT_US | `api/v1/reach/contact`       |

### Settings
| ENDPOINT                 | API PATH                              |
|--------------------------|---------------------------------------|
| UPDATE_DISPLAY_PICTURE   | `api/v1/profile/updateDisplayPicture` |
| UPDATE_PROFILE           | `api/v1/profile/updateProfile`        |
| CHANGE_PASSWORD          | `api/v1/auth/changepassword`          |
| DELETE_PROFILE           | `api/v1/profile/deleteProfile`        |

---

## SCHEMA DESIGN

![Schema Design](https://res.cloudinary.com/dvpulu3cc/image/upload/v1699036870/Screenshot_2023-11-04_001024_ef0phq.jpg)

---

## FUNCTIONALITIES

1. **User Authentication & Authorization** – Email/password login, OTP verification, password reset.
2. **Course Management** – CRUD operations for courses and content.
3. **Payment Integration** – Razorpay for secure course purchases.
4. **Cloud-based Media Management** – Cloudinary for media storage.
5. **Markdown Formatting** – Course content in Markdown for easy rendering.

---

## FRONTEND FEATURES

### Student
- Homepage, Course List, Wishlist, Cart Checkout, Course Content, User Details/Edit.

### Instructor
- Dashboard, Insights, Course Management, View/Edit Profile.

### Admin (Future Scope)
- Dashboard, Insights, Instructor Management, User/Course Management.

---

## HOW TO CONTRIBUTE

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation
```bash
git clone https://github.com/subratamondalnsec/StudyNotion.git
cd StudyNotion
npm install
