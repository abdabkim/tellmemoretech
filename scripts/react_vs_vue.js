// Scroll reveal animation
			function revealOnScroll() {
				const reveals = document.querySelectorAll(".content-section");

				reveals.forEach((reveal) => {
					const windowHeight = window.innerHeight;
					const elementTop = reveal.getBoundingClientRect().top;
					const elementVisible = 150;

					if (elementTop < windowHeight - elementVisible) {
						reveal.classList.add("revealed");
					}
				});
			}

			// Interactive table row effects
			function addTableEffects() {
				const tableRows = document.querySelectorAll(".table-row");

				tableRows.forEach((row) => {
					row.addEventListener("mouseenter", function () {
						const scores = this.querySelectorAll(".score");
						scores.forEach((score) => {
							score.style.transform = "scale(1.05)";
						});
					});

					row.addEventListener("mouseleave", function () {
						const scores = this.querySelectorAll(".score");
						scores.forEach((score) => {
							score.style.transform = "";
						});
					});
				});
			}

			// Framework logo interactions
			function addLogoEffects() {
				const frameworkLogos = document.querySelectorAll(".framework-logo");

				frameworkLogos.forEach((logo) => {
					logo.addEventListener("mouseenter", function () {
						this.style.transform = "scale(1.2) rotate(10deg)";
						if (this.classList.contains("react")) {
							this.style.boxShadow = "0 0 60px rgba(97, 218, 251, 0.8)";
						} else {
							this.style.boxShadow = "0 0 60px rgba(79, 192, 141, 0.8)";
						}
					});

					logo.addEventListener("mouseleave", function () {
						this.style.transform = "";
						this.style.boxShadow = "";
					});
				});
			}

			// VS divider rotation effect
			function addVSEffects() {
				const vsDividers = document.querySelectorAll(".vs-divider, .vs-middle");

				vsDividers.forEach((vs) => {
					vs.addEventListener("mouseenter", function () {
						this.style.transform = "scale(1.3) rotate(360deg)";
						this.style.textShadow = "0 0 30px rgba(255, 107, 107, 0.8)";
					});

					vs.addEventListener("mouseleave", function () {
						this.style.transform = "";
						this.style.textShadow = "";
					});
				});
			}

			// Code block syntax highlighting effect
			function addCodeEffects() {
				const codeBlocks = document.querySelectorAll(".code-example");

				codeBlocks.forEach((block) => {
					block.addEventListener("mouseenter", function () {
						const title = this.querySelector(".code-title");
						if (title.classList.contains("react-code")) {
							this.style.borderColor = "#61dafb";
							this.style.boxShadow = "0 10px 30px rgba(97, 218, 251, 0.2)";
						} else if (title.classList.contains("vue-code")) {
							this.style.borderColor = "#4fc08d";
							this.style.boxShadow = "0 10px 30px rgba(79, 192, 141, 0.2)";
						}
					});

					block.addEventListener("mouseleave", function () {
						this.style.borderColor = "";
						this.style.boxShadow = "";
					});
				});
			}

			// Reading progress indicator
			function addReadingProgress() {
				const progressBar = document.createElement("div");
				progressBar.style.position = "fixed";
				progressBar.style.top = "0";
				progressBar.style.left = "0";
				progressBar.style.width = "0%";
				progressBar.style.height = "3px";
				progressBar.style.background =
					"linear-gradient(90deg, #61dafb, #4fc08d)";
				progressBar.style.zIndex = "1001";
				progressBar.style.transition = "width 0.25s ease";

				document.body.appendChild(progressBar);

				window.addEventListener("scroll", () => {
					const winScroll =
						document.body.scrollTop || document.documentElement.scrollTop;
					const height =
						document.documentElement.scrollHeight -
						document.documentElement.clientHeight;
					const scrolled = (winScroll / height) * 100;
					progressBar.style.width = scrolled + "%";
				});
			}

			// Initialize all effects
			document.addEventListener("DOMContentLoaded", function () {
				// Set up scroll reveal
				window.addEventListener("scroll", revealOnScroll);
				revealOnScroll(); // Check initial state

				// Add interactive effects
				addTableEffects();
				addLogoEffects();
				addVSEffects();
				addCodeEffects();
				addReadingProgress();

				// Animate framework logos on load
				const logoContainers = document.querySelectorAll(".logo-container");
				logoContainers.forEach((container, index) => {
					container.style.opacity = "0";
					container.style.transform = "translateY(50px)";
					container.style.transition = "all 0.8s ease";

					setTimeout(() => {
						container.style.opacity = "1";
						container.style.transform = "translateY(0)";
					}, 500 + index * 200);
				});
			});

			console.log("Tell Me More Tech - React vs Vue Battle loaded! ⚛️💚");