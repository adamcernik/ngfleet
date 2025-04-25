// Main JavaScript file for NG Fleet Website

document.addEventListener('DOMContentLoaded', function() {
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
        }

        // Phone validation
        const phoneField = document.getElementById('phone');
        const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (phoneField.value && !phonePattern.test(phoneField.value)) {
            phoneField.style.borderColor = 'red';
            isValid = false;
        }

        return isValid;
    }

    function saveFormData() {
        // In a real application, we would save this data to Firebase
        // For now, just save to localStorage for demonstration
        const formData = {
            role: roleSelect.value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            city: document.getElementById('city').value,
            message: document.getElementById('message').value
        };

        localStorage.setItem('ngFleetRegistration', JSON.stringify(formData));
        
        // In a real application, we would use Firebase to store this data
        /*
        firebase.firestore().collection('registrations').add({
            ...formData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        */
    }

    function redirectToSignature() {
        // In a real application, this would redirect to an e-signature service
        // For now, just alert the user
        alert('V reálné aplikaci bude uživatel přesměrován na službu elektronického podpisu (např. Signi.cz)');
        closeModal(verificationModal);
    }
}); 