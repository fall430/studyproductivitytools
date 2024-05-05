// JavaScript Documentdocument.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.worldmap-item');
    const modal = document.getElementById('modal');
    const modalClose = modal.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            modal.style.display = 'block';
            modalTitle.textContent = this.alt;
            modalDescription.textContent = 'Description for ' + this.alt;
            modalLink.href = '#profile-' + this.id;
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
