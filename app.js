// Time update for profile card
    function updateTime() {
      const timeElement = document.getElementById('time');
      if (timeElement) {
        timeElement.textContent = Date.now();
      }
    }
    updateTime();
    setInterval(updateTime, 1000);



    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-container');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        
        pages.forEach(page => {
          page.classList.remove('active');
          if (page.id === targetPage) {
            page.classList.add('active');
          }
        });
      });
    });

    

    // Form validation
    const form = document.getElementById('contactForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    const validationRules = {
      fullName: {
        input: fullNameInput,
        errorDiv: document.getElementById('fullNameError'),
        validate: (value) => {
          if (!value.trim()) {
            return 'Full name is required';
          }
          return null;
        }
      },
      email: {
        input: emailInput,
        errorDiv: document.getElementById('emailError'),
        validate: (value) => {
          if (!value.trim()) {
            return 'Email is required';
          }
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            return 'Please enter a valid email address';
          }
          return null;
        }
      },
      subject: {
        input: subjectInput,
        errorDiv: document.getElementById('subjectError'),
        validate: (value) => {
          if (!value.trim()) {
            return 'Subject is required';
          }
          return null;
        }
      },
      message: {
        input: messageInput,
        errorDiv: document.getElementById('messageError'),
        validate: (value) => {
          if (!value.trim()) {
            return 'Message is required';
          }
          if (value.trim().length < 10) {
            return 'Message must be at least 10 characters long';
          }
          return null;
        }
      }
    };

    function validateField(fieldName) {
      const rule = validationRules[fieldName];
      const error = rule.validate(rule.input.value);
      
      if (error) {
        rule.input.classList.add('error');
        rule.errorDiv.textContent = error;
        rule.errorDiv.classList.add('visible');
        return false;
      } else {
        rule.input.classList.remove('error');
        rule.errorDiv.textContent = '';
        rule.errorDiv.classList.remove('visible');
        return true;
      }
    }

    
    Object.keys(validationRules).forEach(fieldName => {
      const rule = validationRules[fieldName];
      rule.input.addEventListener('blur', () => {
        validateField(fieldName);
      });
      
      
      rule.input.addEventListener('input', () => {
        if (rule.input.classList.contains('error')) {
          validateField(fieldName);
        }
      });
    });

   
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      
      successMessage.classList.remove('visible');
      
      
      let isValid = true;
      Object.keys(validationRules).forEach(fieldName => {
        if (!validateField(fieldName)) {
          isValid = false;
        }
      });
      
      if (isValid) {
       
        successMessage.classList.add('visible');
        
        
        form.reset();
        
        
        Object.keys(validationRules).forEach(fieldName => {
          const rule = validationRules[fieldName];
          rule.input.classList.remove('error');
          rule.errorDiv.classList.remove('visible');
        });
        
        
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
