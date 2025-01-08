document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar toggle
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const menuText = document.querySelectorAll('.menu-text');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up

            sidebar.classList.toggle('collapsed');

            menuText.forEach(function(text) {
                text.classList.toggle('hidden');
            });

            // Toggle the icon direction
            if (sidebar.classList.contains('collapsed')) {
                toggleBtn.innerHTML = '<i class="fas fa-angle-double-left"></i>';
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-angle-double-right"></i>';
            }
        });
    }

    // Handle category button clicks
    const categoryButtons = document.querySelectorAll('.category');
    const menuItems = document.querySelectorAll('.menu-items');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the category ID from button text
            const categoryId = this.textContent.trim().toLowerCase().replace(/ /g, '-');

            // Hide all menu items
            menuItems.forEach(item => {
                item.style.display = 'none';
            });

            // Show the selected category's menu items
            const selectedItem = document.getElementById(categoryId);
            if (selectedItem) {
                selectedItem.style.display = 'block';
            }
        });
    });

    // Handle payment modal
    const confirmPaymentBtn = document.querySelector('.confirm-btn');
    const paymentModal = document.getElementById('paymentModal');
    const closeModalButton = document.getElementById('closeModalButton');

    if (confirmPaymentBtn && paymentModal && closeModalButton) {
        // Function to show the modal
        function showModal() {
            paymentModal.style.display = 'flex';
        }

        // Function to hide the modal
        function hideModal() {
            paymentModal.style.display = 'none';
        }

        // Event listener for "Confirm Payment" button
        confirmPaymentBtn.addEventListener('click', function() {
            showModal();
        });

        // Event listener for "Done" button inside the modal
        closeModalButton.addEventListener('click', function() {
            hideModal();
        });

        // Optional: Close modal when clicking outside the modal content
        window.addEventListener('click', function(event) {
            if (event.target === paymentModal) {
                hideModal();
            }
        });
    }

    // Handle Senior and PWD button clicks
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});
