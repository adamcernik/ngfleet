// Main JavaScript file for NG Fleet Website

document.addEventListener('DOMContentLoaded', function() {
    // Check if Firebase is available
    const isFirebaseAvailable = window.firebaseDb !== undefined;
    
    if (isFirebaseAvailable) {
        console.log('Firebase is connected and ready to use');
    } else {
        console.warn('Firebase is not available. Using localStorage for data storage instead.');
    }

    // Modal Elements
    const registrationModal = document.getElementById('registrationModal');
    const verificationModal = document.getElementById('verificationModal');
    const closeButtons = document.querySelectorAll('.close');
    const btnKuryr = document.getElementById('btnKuryr');
    const btnRidic = document.getElementById('btnRidic');
    const btnVerifyDocs = document.getElementById('btnVerifyDocs');
    const btnContinueToSign = document.getElementById('btnContinueToSign');
    const registrationForm = document.getElementById('registrationForm');
    const roleSelect = document.getElementById('role');

    // Event Listeners
    btnKuryr.addEventListener('click', function() {
        openRegistrationModal('kuryr');
    });

    btnRidic.addEventListener('click', function() {
        openRegistrationModal('ridic');
    });

    btnVerifyDocs.addEventListener('click', function() {
        if (validateForm()) {
            saveFormData();
            closeModal(registrationModal);
            openModal(verificationModal);
        } else {
            console.log('Form validation failed');
        }
    });

    btnContinueToSign.addEventListener('click', function() {
        redirectToSignature();
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });

    // Close modal if clicked outside content
    window.addEventListener('click', function(e) {
        if (e.target === registrationModal) {
            closeModal(registrationModal);
        }
        if (e.target === verificationModal) {
            closeModal(verificationModal);
        }
    });

    // Functions
    function openRegistrationModal(role) {
        roleSelect.value = role;
        openModal(registrationModal);
    }

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    function validateForm() {
        const requiredFields = registrationForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
                console.log(`Field ${field.name} is empty`);
            } else {
                field.style.borderColor = '#ddd';
            }
        });

        // Email validation
        const emailField = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value && !emailPattern.test(emailField.value)) {
            emailField.style.borderColor = 'red';
            isValid = false;
            console.log('Email validation failed');
        }

        // Phone validation - better pattern for Czech phone numbers
        const phoneField = document.getElementById('phone');
        // Accept formats like: 123456789, +420123456789, 420 123 456 789, +420 123 456 789, etc.
        const phonePattern = /^(\+?(420)?)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
        console.log('Phone value:', phoneField.value);
        const isPhoneValid = phonePattern.test(phoneField.value);
        console.log('Phone validation result:', isPhoneValid);
        
        if (phoneField.value && !isPhoneValid) {
            phoneField.style.borderColor = 'red';
            isValid = false;
            console.log('Phone validation failed');
        }

        return isValid;
    }

    function saveFormData() {
        // Gather form data
        const formData = {
            role: roleSelect.value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            city: document.getElementById('city').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Always save to localStorage as backup
        localStorage.setItem('ngFleetRegistration', JSON.stringify(formData));
        console.log('Form data saved to localStorage:', formData);
        
        // If Firebase is available, save to Firestore
        if (isFirebaseAvailable) {
            try {
                window.firebaseDb.collection('registrations').add({
                    ...formData,
                    timestamp: new Date() // Firestore will convert this to a timestamp
                })
                .then((docRef) => {
                    console.log("Document written to Firebase with ID:", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document to Firebase:", error);
                });
            } catch (error) {
                console.error("Error using Firebase:", error);
            }
        }
    }

    function redirectToSignature() {
        // In a real application, this would redirect to an e-signature service
        // For now, just alert the user
        alert('V reálné aplikaci bude uživatel přesměrován na službu elektronického podpisu (např. Signi.cz)');
        closeModal(verificationModal);
    }
}); 