# Frontend Wizards — Stage 1 Task: Multi-Page Profile Website

A clean, semantic, and fully responsive **multi-page personal website** built with HTML, CSS (Flexbox), and Vanilla JavaScript.  
This project expands upon the **Stage 0 Profile Card** by adding an **About Me** page and a **Contact** page with form validation.

---

##  Live Demo
 **[View the Live Site](https://task0-profilecard.netlify.app/)**

---

##  Pages Overview

###  Profile Page (`index.html`)
- Displays a personal profile card.
- Shows **current time (ms)** using JavaScript.
- Includes social links and interests.

###  About Page (`about.html`)
- Structured with semantic HTML5 tags (`<main>`, `<section>`, `<h2>`, `<p>`).
- Contains reflective sections:
  - **Bio** — `data-testid="test-about-bio"`
  - **Goals** — `data-testid="test-about-goals"`
  - **Areas of Low Confidence** — `data-testid="test-about-confidence"`
  - **Note to Future Self** — `data-testid="test-about-future-note"`
  - **Extra Thoughts** — `data-testid="test-about-extra"`
- Fully accessible and responsive.

###  Contact Page (`contact.html`)
- Features a functional form with **JavaScript validation**.
- Fields:
  - Full Name — `data-testid="test-contact-name"`
  - Email — `data-testid="test-contact-email"`
  - Subject — `data-testid="test-contact-subject"`
  - Message — `data-testid="test-contact-message"`
- Validation rules:
  - All fields are required.
  - Email must be valid.
  - Message must be at least 10 characters.
- Success message appears after a valid submission:
  - `data-testid="test-contact-success"`

---

##  Accessibility & Responsiveness
- Semantic HTML structure for screen readers.
- ARIA labels and `aria-describedby` for form errors.
- Fully keyboard navigable.
- Works seamlessly across **mobile**, **tablet**, and **desktop** devices.

---

##  Technologies Used
- **HTML5**
- **CSS3** (Flexbox + Media Queries)
- **Vanilla JavaScript**


---

##  How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/PenuelSam/profile-card.git
