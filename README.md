# AI Resume Builder

A modern and interactive **Resume Builder** web application developed as an internship project. The application allows users to enter their personal, professional, educational, and skills information and instantly view a professionally formatted resume through a live preview.

## 🚀 Features

* 📝 Personal details form
* 💼 Add and manage multiple work experiences
* 🎓 Add and manage multiple education entries
* 🛠️ Add and remove skills
* 👀 Real-time live resume preview
* 🎨 Three resume templates:

  * Modern
  * Classic
  * Compact
* 📊 Profile completion percentage
* 📋 Section completion tracking
* 🔗 LinkedIn / Portfolio URL support
* 🖨️ Print-ready resume
* 📱 Responsive user interface
* 💬 Contact/support form

The application dynamically updates the resume preview whenever the user changes the entered information.

## 🖥️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling, layouts, responsive design and resume templates
* **JavaScript** – Application logic and dynamic resume generation
* **Vite** – Development server and build tooling
* **Google Fonts – Inter** – Interface typography

The project is configured with Vite as its development dependency and provides a `dev` script for starting the application.

## 📂 Project Structure

```text
internship_project/
│
├── index.html
├── resume.js
├── resume-builder-style.css
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Application Workflow

### 1. Enter Personal Details

Users can enter:

* Full Name
* Job Title
* Email
* Phone Number
* Location
* LinkedIn / Portfolio URL
* Professional Summary

The application contains dedicated fields for these details.

### 2. Add Work Experience

Users can add multiple work experience entries.

Each entry can contain:

* Company
* Role
* Dates
* Impact points / responsibilities

Users can also add or remove experience entries and individual bullet points.

### 3. Add Education

Users can add multiple educational qualifications containing:

* School / College
* Degree
* Dates

### 4. Add Skills

Users can enter skills individually and add them to the resume. Skills can also be removed when required.

### 5. Choose a Resume Template

The application provides three template options:

* **Modern**
* **Classic**
* **Compact**

The template selection changes the appearance of the resume preview.

### 6. Live Resume Preview

The resume preview automatically updates as the user enters or changes information.

It displays:

* Name and job title
* Contact information
* Profile summary
* Experience
* Education
* Skills

### 7. Print the Resume

The **Print Ready** button uses the browser's print functionality to generate a clean printable version of the resume.

The CSS also includes a dedicated print layout that hides the editor and other unnecessary elements while printing only the resume.

## 📊 Resume Progress Tracking

The application tracks:

* **Profile completion percentage**
* **Number of completed resume sections**

The completion percentage is calculated from the user's name, job title, email, phone, location, and professional summary.

## 🎨 Design

The application uses a clean and modern interface with:

* Responsive layouts
* Card-based sections
* Modern typography
* Interactive form controls
* Live preview panel
* Multiple resume styles
* Responsive design for different screen sizes

The project uses the **Inter** font and CSS variables for consistent colors, spacing, and styling.

## 🛠️ Installation and Setup

### Prerequisites

Make sure you have installed:

* **Node.js**
* **npm**

### Clone the Repository

```bash
git clone <your-github-repository-url>
```

### Navigate to the Project

```bash
cd internship_project
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The project uses the Vite development server through the `dev` script defined in `package.json`.

Open the local URL shown in the terminal to use the application.

## 📸 Project Screenshots

Add your project screenshots here:

```markdown
![Home Page](screenshots/home.png)

![Resume Builder](screenshots/builder.png)

![Resume Preview](screenshots/preview.png)
```

## 🎯 Project Objectives

The main objectives of this project are:

* To simplify the resume creation process.
* To provide an easy-to-use resume-building interface.
* To dynamically generate resume content.
* To provide multiple professional resume templates.
* To provide an instant resume preview.
* To create a print-ready resume.

## 📚 Skills Gained

Through this project, I gained practical experience in:

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Event Handling
* Dynamic Form Generation
* Responsive Web Design
* UI/UX Design
* Vite
* Frontend Application Development
* Problem Solving

## 🔮 Future Enhancements

Possible future improvements include:

* AI-powered resume content generation
* AI-based resume suggestions
* ATS compatibility checking
* PDF download
* More resume templates
* User authentication
* Resume saving and editing
* Cloud storage
* Job-specific resume customization
* AI-generated professional summaries

## 👨‍💻 Internship Project

**Project:** AI Resume Builder
**Internship:** Artificial Intelligence Internship
**Organization:** AvaIntern Edutech Pvt. Ltd.
**Duration:** 5 May 2026 – 5 July 2026

## 📄 License

This project was developed for educational and internship purposes.
