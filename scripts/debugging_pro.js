let magnifier = document.getElementById("magnifier");
			let isOverCode = false;

			document.addEventListener("mousemove", function (e) {
				if (isOverCode) {
					magnifier.style.left = e.clientX - 50 + "px";
					magnifier.style.top = e.clientY - 50 + "px";
					magnifier.style.opacity = "1";
				} else {
					magnifier.style.opacity = "0";
				}
			});

			// Show magnifier over code blocks
			document.querySelectorAll(".code-example").forEach((codeBlock) => {
				codeBlock.addEventListener("mouseenter", () => {
					isOverCode = true;
				});

				codeBlock.addEventListener("mouseleave", () => {
					isOverCode = false;
				});
			});

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

			// Interactive tool cards
			function addToolCardEffects() {
				const toolCards = document.querySelectorAll(".tool-card");

				toolCards.forEach((card) => {
					card.addEventListener("mouseenter", function () {
						const logo = this.querySelector(".tool-logo");
						logo.style.transform = "scale(1.1) rotate(5deg)";
						logo.style.boxShadow = "0 10px 25px rgba(34, 197, 94, 0.3)";
					});

					card.addEventListener("mouseleave", function () {
						const logo = this.querySelector(".tool-logo");
						logo.style.transform = "";
						logo.style.boxShadow = "";
					});
				});
			}

			// Process step interactions
			function addProcessStepEffects() {
				const processSteps = document.querySelectorAll(".process-step");

				processSteps.forEach((step, index) => {
					step.addEventListener("mouseenter", function () {
						const stepNumber = this.querySelector(".step-number");
						stepNumber.style.transform = "scale(1.2)";
						stepNumber.style.boxShadow = "0 5px 15px rgba(34, 197, 94, 0.4)";

						// Highlight connected steps
						processSteps.forEach((otherStep, otherIndex) => {
							if (Math.abs(index - otherIndex) <= 1) {
								otherStep.style.opacity = "1";
							} else {
								otherStep.style.opacity = "0.7";
							}
						});
					});

					step.addEventListener("mouseleave", function () {
						const stepNumber = this.querySelector(".step-number");
						stepNumber.style.transform = "";
						stepNumber.style.boxShadow = "";

						// Reset all steps
						processSteps.forEach((otherStep) => {
							otherStep.style.opacity = "";
						});
					});
				});
			}

			// Debug mindset hover effects
			function addMindsetEffects() {
				const mindsetCards = document.querySelectorAll(".debug-mindset");

				mindsetCards.forEach((card) => {
					card.addEventListener("mouseenter", function () {
						const icon = this.querySelector(".mindset-icon");
						icon.style.transform = "scale(1.3) rotate(10deg)";
						icon.style.textShadow = "0 0 20px rgba(34, 197, 94, 0.6)";
					});

					card.addEventListener("mouseleave", function () {
						const icon = this.querySelector(".mindset-icon");
						icon.style.transform = "";
						icon.style.textShadow = "";
					});
				});
			}

			// Error line animation
			function addCodeLineEffects() {
				const errorLines = document.querySelectorAll(".error-line");
				const successLines = document.querySelectorAll(".success-line");

				// Add click to highlight effect
				[...errorLines, ...successLines].forEach((line) => {
					line.addEventListener("click", function () {
						this.style.transform = "translateX(10px)";
						this.style.boxShadow = "0 0 15px rgba(34, 197, 94, 0.3)";

						setTimeout(() => {
							this.style.transform = "";
							this.style.boxShadow = "";
						}, 1000);
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
					"linear-gradient(90deg, #22c55e, #10b981)";
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
				addToolCardEffects();
				addProcessStepEffects();
				addMindsetEffects();
				addCodeLineEffects();
				addReadingProgress();

				// Animate debug tools on load
				const toolIcons = document.querySelectorAll(
					".debug-tools-showcase .tool-icon"
				);
				toolIcons.forEach((icon, index) => {
					icon.style.opacity = "0";
					icon.style.transform = "translateY(50px) scale(0.8)";
					icon.style.transition = "all 0.6s ease";

					setTimeout(() => {
						icon.style.opacity = "1";
						icon.style.transform = "translateY(0) scale(1)";
					}, 300 + index * 150);
				});
			});

			console.log("Tell Me More Tech - Debugging Pro Article loaded! 🔍🐛");