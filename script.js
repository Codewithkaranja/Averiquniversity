// Mobile Navigation Toggle
      const mobileToggle = document.querySelector(".mobile-toggle");
      const navMenu = document.querySelector(".nav-menu");

      mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileToggle.querySelector("i").classList.toggle("fa-bars");
        mobileToggle.querySelector("i").classList.toggle("fa-times");
      });

      // Tab Functionality
      const tabBtns = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons and contents
          tabBtns.forEach((b) => b.classList.remove("active"));
          tabContents.forEach((c) => c.classList.remove("active"));

          // Add active class to clicked button
          btn.classList.add("active");

          // Show corresponding content
          const tabId = btn.getAttribute("data-tab");
          document.getElementById(tabId).classList.add("active");
        });
      });

      // Video Fallback
      const heroVideo = document.querySelector(".hero-video");
      if (heroVideo && !heroVideo.canPlayType) {
        heroVideo.parentNode.removeChild(heroVideo);
        document.querySelector(".hero").style.backgroundImage =
          'url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1950")';
      }
      
      // student portal
      function login() {
  const name = document.getElementById("studentName").value.trim();
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("displayName").innerText = name;
  document.getElementById("profileName").innerText = name;
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("portal").style.display = "block";
}

function logout() {
  location.reload(); // simple reset
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

//faculty portal
function login() {
  const name = document.getElementById("facultyName").value.trim();
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("displayName").innerText = name;
  document.getElementById("profileName").innerText = name;
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("portal").style.display = "block";
}

function logout() {
  location.reload(); // simple reset
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

