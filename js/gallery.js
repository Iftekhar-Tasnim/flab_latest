/**
 * F Lab Gallery Functionality
 * Handles image rendering, grid layout (Classic Design), and lightbox interactions
 */

// Image data source - Based on assets/gallery contents
const galleryImages = [
    // Using filenames found in assets/gallery
    'IMG_2149.jpg', 'IMG_2180.jpg', 'IMG_2228.jpg', 'IMG_2231.jpg', 'IMG_2235.jpg',
    'IMG_2238.jpg', 'IMG_2276.jpg', 'IMG_2281.jpg', 'IMG_2283.jpg', 'IMG_2342.jpg',
    'IMG_2366.jpg', 'IMG_2374.jpg', 'IMG_2571.jpg', 'IMG_2581.jpg', 'IMG_2673.jpg',
    'IMG_2686.jpg', 'IMG_2749.jpg', 'IMG_9101.jpg', 'IMG_9115.jpg', 'IMG_9371.jpg',
    'IMG_9492.jpg', 'IMG_9608.jpg', 'IMG_9613.jpg', 'IMG_9619.jpg', 'IMG_9655.jpg',
    'IMG_9687.jpg', 'IMG_9705.jpg', 'IMG_9715.jpg', 'IMG_9722.jpg', 'IMG_9724.jpg',
    'IMG_9727.jpg', 'IMG_9739.jpg',
    // Numbered images
    'image3.jpg', 'image4.jpg', 'image5.jpg', 'image8.jpg', 'image9.jpg',
    'image10.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg',
    'image16.jpg', 'image19.jpg', 'image22.jpg', 'image23.jpg', 'image24.jpg',
    'image25.jpg'
];

// State
let currentImageIndex = 0;
let filteredImages = [...galleryImages]; // For search functionality

/**
 * Initialize Gallery
 * Called by router or auto-init
 */
window.initGallery = function () {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    // Initial Render
    filterGallery('');
    setupSearch();
    setupLightbox();
};

/**
 * Setup Search Filter
 */
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterGallery(e.target.value);
        });
    }
}

/**
 * Filter and Render Gallery
 */
function filterGallery(query) {
    const galleryGrid = document.getElementById('gallery-grid');
    const emptyState = document.getElementById('empty-state');
    const galleryCount = document.getElementById('gallery-count');

    if (!galleryGrid) return;

    // Filter images
    const lowerQuery = query.toLowerCase();
    filteredImages = galleryImages.filter(img =>
        img.toLowerCase().includes(lowerQuery)
    );

    // Update count
    if (galleryCount) galleryCount.textContent = filteredImages.length;

    // Show/Hide Empty State
    // Note: empty-state ID check handles if logic is active but element missing
    if (filteredImages.length === 0) {
        galleryGrid.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
    } else {
        galleryGrid.classList.remove('hidden');
        if (emptyState) emptyState.classList.add('hidden');
    }

    renderGallery(galleryGrid, filteredImages);
}

/**
 * Render images into the grid
 * Matches the CSS structure of the "Old Gallery" design
 */
function renderGallery(container, images) {
    container.innerHTML = '';

    images.forEach((filename, index) => {
        // Find the specific index in the ORIGINAL array (for lightbox mapping)
        const originalIndex = galleryImages.indexOf(filename);

        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openLightbox(originalIndex);

        // Clean up filename for display
        const displayName = filename.replace(/\.(jpg|png|jpeg)$/i, '').replace(/[_-]/g, ' ');

        item.innerHTML = `
            <img src="/assets/gallery/${filename}" alt="${displayName}" loading="lazy">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${displayName}</h3>
                <p class="gallery-item-number">Image ${originalIndex + 1}</p>
            </div>
        `;

        container.appendChild(item);
    });
}

/**
 * Setup Lightbox Elements and Event Listeners
 */
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    const nextBtn = document.getElementById('lightbox-next');
    const prevBtn = document.getElementById('lightbox-prev');

    if (!lightbox) return;

    // Close
    closeBtn?.addEventListener('click', closeLightbox);

    // Navigation
    nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        }
    });
}

window.openLightbox = function (index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');

    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = function () {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
};

window.nextImage = function () {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
};

window.prevImage = function () {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
};

function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    const info = document.getElementById('lightbox-info');

    if (img) {
        // Quick fade effect
        img.style.opacity = '0.5';
        setTimeout(() => {
            img.src = `/assets/gallery/${galleryImages[currentImageIndex]}`;
            img.onload = () => { img.style.opacity = '1'; };
        }, 150);
    }

    if (info) {
        info.textContent = `Image ${currentImageIndex + 1} of ${galleryImages.length}`;
    }
}

// Auto-initialize if direct load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('gallery-grid')) {
            window.initGallery();
        }
    });
} else {
    // If we're already loaded (common in SPAs), check immediately
    if (document.getElementById('gallery-grid')) {
        // short delay ensuring DOM is painted
        setTimeout(window.initGallery, 50);
    }
}
