document.addEventListener("DOMContentLoaded", function () {
    var coursesData = [
        
            {
                title: "Introduction to Web Development",
                description: "Learn the basics of web development and get started on your coding journey.",
                enrollBtnText: "Enroll Now",
                videoLink: "https://youtu.be/FYErehuSuuw?si=Il-p7SU536gqmkCa",
            },
            {
                title: "JavaScript Fundamentals",
                description: "Master the fundamentals of JavaScript programming language for web development.",
                enrollBtnText: "Enroll Now",
                videoLink:"https://youtu.be/FYErehuSuuw?si=Il-p7SU536gqmkCa",
            },
            {
                title: "Responsive Web Design",
                description: "Create websites that look great on all devices with responsive web design techniques.",
                enrollBtnText: "Enroll Now",
                videoLink: "https://youtu.be/FYErehuSuuw?si=Il-p7SU536gqmkCa",
            },
    ];
    var coursesSection = document.getElementById("courses");
    coursesData.forEach(function (course, index) {
        var courseCard = document.createElement("div");
        courseCard.className = "course-card";
        var title = document.createElement("h3");
        title.textContent = course.title;
        var description = document.createElement("p");
        description.textContent = course.description;
        var enrollBtn = document.createElement("button");
        enrollBtn.textContent = course.enrollBtnText;
        enrollBtn.addEventListener("click", function () {
            openEnrollmentModal(course.title, index + 1); 
        });
        var videoLink = document.createElement("p");
        videoLink.innerHTML = 'Watch the introduction video: <a href="' + course.videoLink + '" target="_blank">Introduction Video</a>';
        courseCard.appendChild(title);
        courseCard.appendChild(description);
        courseCard.appendChild(enrollBtn);
        courseCard.appendChild(videoLink);
      coursesSection.appendChild(courseCard);
    });
});
function openEnrollmentModal(courseTitle, courseId) {
    var modalContent = `
        <h2>Enroll in ${courseTitle}</h2>
        <form onsubmit="handleEnrollment(event, ${courseId})">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Enroll Now</button>
            <p id="enrollment-feedback"></p>
        </form>
    `;
    var modal = createModal(modalContent);
    showModal(modal);
}

function createModal(content) {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = content;
    return modal;
}
function showModal(modal) {
    document.body.appendChild(modal);
}

function handleEnrollment(event, courseId) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validateForm(name, email)) {
        showEnrollmentFeedback("Enrollment successful! You are now enrolled in the course.");
        console.log("Enrolling in course with ID: " + courseId);
    } else {
        showEnrollmentFeedback("Thank you");
    }
}
function validateForm(name, email) {
    return name.trim() !== "" && email.trim() !== "";
}
function showEnrollmentFeedback(message) {
    var feedbackElement = document.getElementById("enrollment-feedback");
    if (feedbackElement) {
        feedbackElement.textContent = message;
    }
}
function closeModal() {
    var modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}
