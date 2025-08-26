
			// Scroll reveal animation
			function revealOnScroll() {
				const reveals = document.querySelectorAll(
					".category-section, .timeline-item"
				);

				reveals.forEach((reveal) => {
					const windowHeight = window.innerHeight;
					const elementTop = reveal.getBoundingClientRect().top;
					const elementVisible = 150;

					if (elementTop < windowHeight - elementVisible) {
						reveal.classList.add("revealed");
					}
				});
			}

			// Floating icon interactions
			function addFloatingIconEffects() {
				const floatingIcons = document.querySelectorAll(".floating-icon");

				floatingIcons.forEach((icon, index) => {
					icon.addEventListener("mouseenter", function () {
						this.style.transform = "scale(1.2) rotate(15deg) translateY(-25px)";
						this.style.borderColor = "#3b82f6";
						this.style.boxShadow = "0 25px 50px rgba(59, 130, 246, 0.4)";

						// Create ripple effect
						const ripple = document.createElement("div");
						ripple.style.position = "absolute";
						ripple.style.top = "50%";
						ripple.style.left = "50%";
						ripple.style.width = "0";
						ripple.style.height = "0";
						ripple.style.background = "rgba(59, 130, 246, 0.3)";
						ripple.style.borderRadius = "50%";
						ripple.style.transform = "translate(-50%, -50%)";
						ripple.style.animation = "rippleEffect 0.6s ease-out";
						ripple.style.pointerEvents = "none";

						this.appendChild(ripple);

						setTimeout(() => {
							if (ripple.parentNode) {
								ripple.parentNode.removeChild(ripple);
							}
						}, 600);
					});

					icon.addEventListener("mouseleave", function () {
						this.style.transform = "";
						this.style.borderColor = "";
						this.style.boxShadow = "";
					});

					// Add click effect
					icon.addEventListener("click", function () {
						this.style.transform = "scale(0.95)";
						setTimeout(() => {
							this.style.transform = "";
						}, 150);
					});
				});
			}

			// Resource card interactions
			function addResourceCardEffects() {
				const resourceCards = document.querySelectorAll(".resource-card");

				resourceCards.forEach((card) => {
					card.addEventListener("mouseenter", function () {
						const icon = this.querySelector(".resource-icon");
						const link = this.querySelector(".resource-link");

						icon.style.transform = "scale(1.15) rotate(10deg)";
						icon.style.boxShadow = "0 15px 35px rgba(59, 130, 246, 0.5)";

						link.style.color = "#ffffff";
						link.style.textDecoration = "underline";

						// Add glow effect to title
						const title = this.querySelector(".resource-title");
						title.style.textShadow = "0 0 20px rgba(59, 130, 246, 0.6)";
					});

					card.addEventListener("mouseleave", function () {
						const icon = this.querySelector(".resource-icon");
						const link = this.querySelector(".resource-link");
						const title = this.querySelector(".resource-title");

						icon.style.transform = "";
						icon.style.boxShadow = "";
						link.style.color = "";
						link.style.textDecoration = "";
						title.style.textShadow = "";
					});

					// Add click feedback
					card.addEventListener("mousedown", function () {
						this.style.transform = "translateY(-8px) scale(0.98)";
					});

					card.addEventListener("mouseup", function () {
						this.style.transform = "translateY(-10px) scale(1)";
					});
				});
			}

			// Timeline animations
			function addTimelineEffects() {
				const timelineItems = document.querySelectorAll(".timeline-item");

				timelineItems.forEach((item, index) => {
					item.addEventListener("mouseenter", function () {
						const content = this.querySelector(".timeline-content");
						const dot = this.querySelector(".timeline-dot");

						content.style.background = "rgba(255, 255, 255, 0.12)";
						content.style.borderColor = "#3b82f6";
						content.style.transform = "scale(1.05)";

						dot.style.transform = "translateX(-50%) scale(1.5)";
						dot.style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.8)";

						// Highlight connected timeline items
						timelineItems.forEach((otherItem, otherIndex) => {
							if (Math.abs(index - otherIndex) <= 1) {
								otherItem.style.opacity = "1";
							} else {
								otherItem.style.opacity = "0.6";
							}
						});
					});

					item.addEventListener("mouseleave", function () {
						const content = this.querySelector(".timeline-content");
						const dot = this.querySelector(".timeline-dot");

						content.style.background = "";
						content.style.borderColor = "";
						content.style.transform = "";

						dot.style.transform = "";
						dot.style.boxShadow = "";

						// Reset all timeline items
						timelineItems.forEach((otherItem) => {
							otherItem.style.opacity = "";
						});
					});
				});
			}

			// Particle interactions
			function addParticleInteractions() {
				const particles = document.querySelectorAll(".particle");

				particles.forEach((particle) => {
					particle.addEventListener("animationiteration", function () {
						// Randomize horizontal position slightly during animation
						const randomOffset = (Math.random() - 0.5) * 10;
						this.style.transform += `translateX(${randomOffset}px)`;
					});
				});
			}

			// Background circle interactions
			function addBackgroundEffects() {
				const circles = document.querySelectorAll(".bg-circle");

				// Add mouse influence to background circles
				document.addEventListener("mousemove", function (e) {
					const mouseX = e.clientX / window.innerWidth;
					const mouseY = e.clientY / window.innerHeight;

					circles.forEach((circle, index) => {
						const influence = 30 + index * 10;
						const xMovement = (mouseX - 0.5) * influence;
						const yMovement = (mouseY - 0.5) * influence;

						circle.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
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
					"linear-gradient(90deg, #3b82f6, #1d4ed8)";
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

			// Smooth scrolling for internal links
			function addSmoothScrolling() {
				document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
					anchor.addEventListener("click", function (e) {
						e.preventDefault();
						const target = document.querySelector(this.getAttribute("href"));
						if (target) {
							target.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}
					});
				});
			}

			// Dynamic CSS animations
			function addDynamicAnimations() {
				// Add ripple effect keyframes
				const style = document.createElement("style");
				style.textContent = `
        @keyframes rippleEffect {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
        
        @keyframes cardPulse {
          0%, 100% {
            box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 30px 60px rgba(59, 130, 246, 0.4);
          }
        }
        
        .resource-card:hover {
          animation: cardPulse 2s ease-in-out infinite;
        }
      `;
				document.head.appendChild(style);
			}

			// Performance optimization
			function optimizePerformance() {
				// Throttle scroll events
				let ticking = false;

				function updateScrollEffects() {
					revealOnScroll();
					ticking = false;
				}

				window.addEventListener("scroll", function () {
					if (!ticking) {
						requestAnimationFrame(updateScrollEffects);
						ticking = true;
					}
				});
			}

			// Initialize all effects
			document.addEventListener("DOMContentLoaded", function () {
				// Set up scroll reveal
				revealOnScroll(); // Check initial state

				// Add all interactive effects
				addFloatingIconEffects();
				addResourceCardEffects();
				addTimelineEffects();
				addParticleInteractions();
				addBackgroundEffects();
				addReadingProgress();
				addSmoothScrolling();
				addDynamicAnimations();
				optimizePerformance();

				// Animate floating icons on load
				const floatingIcons = document.querySelectorAll(".floating-icon");
				floatingIcons.forEach((icon, index) => {
					icon.style.opacity = "0";
					icon.style.transform = "translateY(100px) scale(0.5)";
					icon.style.transition = "all 0.8s ease";

					setTimeout(() => {
						icon.style.opacity = "1";
						icon.style.transform = "translateY(0) scale(1)";
					}, 500 + index * 200);
				});

				// Stagger category sections animation
				const categorySections = document.querySelectorAll(".category-section");
				categorySections.forEach((section, index) => {
					section.style.transitionDelay = `${index * 0.2}s`;
				});

				// Add welcome effect
				setTimeout(() => {
					const heroTitle = document.querySelector(".hero-title");
					heroTitle.style.animation =
						"titleShine 3s ease-in-out infinite, pulse 2s ease-in-out infinite";
				}, 1000);
			});

			// Easter egg: Konami code
			let konamiCode = [];
			const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

			document.addEventListener("keydown", function (e) {
				konamiCode.push(e.keyCode);
				if (konamiCode.length > konamiSequence.length) {
					konamiCode.shift();
				}

				if (konamiCode.toString() === konamiSequence.toString()) {
					// Activate special effect
					document.body.style.animation = "rainbow 2s ease-in-out infinite";
					setTimeout(() => {
						document.body.style.animation = "";
					}, 10000);
				}
			});

			// Add rainbow animation for easter egg
			const rainbowStyle = document.createElement("style");
			rainbowStyle.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
			document.head.appendChild(rainbowStyle);

			console.log(
				"Tell Me More Tech - Resources page loaded! Ready to accelerate your development journey! 🚀"
			);
		