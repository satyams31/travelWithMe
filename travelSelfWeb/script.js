// FILTER GALLERY
function filterImages(category) {
    let images = document.querySelectorAll(".gallery-grid img");

    images.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        } else {
            if (img.classList.contains(category)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        }
    });
}

// STORY POPUP
function openStory(story) {
    let content = {
        story1: "Full story of Himalayan adventure...",
        story2: "Beach story details...",
        story3: "City exploration story..."
    };

    alert(content[story]);
}

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").innerText = "Form submitted successfully!";
});