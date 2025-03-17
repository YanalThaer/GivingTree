
        document.addEventListener('DOMContentLoaded', function() {
            // Load existing testimonials from localStorage
            loadTestimonials();
            
            // Form submission handler
            const form = document.getElementById('testimonial-form');
            const successMessage = document.getElementById('success-message');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const role = document.getElementById('role').value;
                const experience = document.getElementById('experience').value;
                const rating = document.querySelector('input[name="rating"]:checked').value;
                
                // Create new testimonial object
                const testimonial = {
                    name: name,
                    role: role,
                    content: experience,
                    rating: parseInt(rating),
                    date: new Date().toISOString()
                };
                
                // Save testimonial to localStorage
                saveTestimonial(testimonial);
                
                // Reset form
                form.reset();
                
                // Show success message
                successMessage.style.display = 'block';
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 3000);
                
                // Reload testimonials
                loadTestimonials();
            });
        });
        
        function saveTestimonial(testimonial) {
            // Get existing testimonials from localStorage
            let testimonials = JSON.parse(localStorage.getItem('ramadanTestimonials')) || [];
            
            // Add new testimonial
            testimonials.push(testimonial);
            
            // Save back to localStorage
            localStorage.setItem('ramadanTestimonials', JSON.stringify(testimonials));
        }
        
        function loadTestimonials() {
            // Get container
            const container = document.getElementById('testimonials-container');
            
            // Get testimonials from localStorage
            let testimonials = JSON.parse(localStorage.getItem('ramadanTestimonials')) || [];
            
            // Only add user testimonials - keep the default three testimonials
            // Get count of child elements that aren't user-generated
            const defaultCount = 3;
            
            // Remove user-generated testimonials only (keep the default ones)
            while (container.children.length > defaultCount) {
                container.removeChild(container.lastChild);
            }
            
            // Sort testimonials by date (newest first)
            testimonials.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Add each testimonial to the container
            testimonials.forEach(testimonial => {
                const card = createTestimonialCard(testimonial);
                container.appendChild(card);
            });
        }
        
        function createTestimonialCard(testimonial) {
            // Create testimonial card element
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            
            // Create testimonial header
            const header = document.createElement('div');
            header.className = 'testimonial-header';
            
            // Create avatar
            const avatar = document.createElement('img');
            avatar.className = 'avatar';
            avatar.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjE1IiByPSIxMCIgZmlsbD0iIzMzMzMzMyIvPjxwYXRoIGQ9Ik0xMCAzMCBDMTAgMzAgMTAgNTAgNDAgNTAgQzQwIDUwIDQwIDMwIDEwIDMwIFoiIGZpbGw9IiMzMzMzMzMiLz48L3N2Zz4=';
            avatar.alt = 'Avatar';
            
            // Create author info
            const authorInfo = document.createElement('div');
            authorInfo.className = 'testimonial-author';
            
            const authorName = document.createElement('div');
            authorName.className = 'author-name';
            authorName.textContent = testimonial.name;
            
            const authorRole = document.createElement('div');
            authorRole.className = 'author-role';
            authorRole.textContent = testimonial.role;
            
            // Assemble author info
            authorInfo.appendChild(authorName);
            authorInfo.appendChild(authorRole);
            
            // Assemble header
            header.appendChild(avatar);
            header.appendChild(authorInfo);
            
            // Create testimonial content
            const content = document.createElement('div');
            content.className = 'testimonial-content';
            content.textContent = `"${testimonial.content}"`;
            
            // Create rating
            const rating = document.createElement('div');
            rating.className = 'testimonial-rating';
            rating.textContent = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
            
            // Assemble card
            card.appendChild(header);
            card.appendChild(content);
            card.appendChild(rating);
            
            return card;
        }
        
        // Function to clear all user testimonials from localStorage (for testing/debugging)
        function clearTestimonials() {
            localStorage.removeItem('ramadanTestimonials');
            loadTestimonials();
        }
        // No replacement needed, just remove this line from the JavaScript file