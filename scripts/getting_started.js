	// Scroll reveal animation
			function revealOnScroll() {
				const reveals = document.querySelectorAll(".scroll-reveal");

				reveals.forEach((reveal) => {
					const windowHeight = window.innerHeight;
					const elementTop = reveal.getBoundingClientRect().top;
					const elementVisible = 150;

					if (elementTop < windowHeight - elementVisible) {
						reveal.classList.add("revealed");
					}
				});
			}

			// Floating symbols animation
			function createFloatingSymbol() {
				const symbols = [
					"&lt;/&gt;",
					"{}",
					"[]",
					"()",
					"===",
					"=&gt;",
					"if",
					"var",
					"let",
					"const",
					"function",
					"return",
				];
				const symbol = document.createElement("div");
				symbol.className = "code-symbol";
				symbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
				symbol.style.left = Math.random() * 100 + "%";
				symbol.style.animationDuration = Math.random() * 10 + 10 + "s";
				symbol.style.fontSize = Math.random() * 1.5 + 1 + "rem";

				document.querySelector(".floating-symbols").appendChild(symbol);

				setTimeout(() => {
					if (symbol.parentNode) {
						symbol.parentNode.removeChild(symbol);
					}
				}, 15000);
			}

			// Interactive timeline effects
			function addTimelineInteractivity() {
				const timelineItems = document.querySelectorAll(".timeline-content");

				timelineItems.forEach((item, index) => {
					item.addEventListener("mouseenter", function () {
						this.style.transform = "translateY(-10px) scale(1.03)";
						this.style.borderColor = "#ffd700";
						this.style.boxShadow = "0 20px 40px rgba(255, 215, 0, 0.3)";

						// Animate skill tags
						const skillTags = this.querySelectorAll(".skill-tag");
						skillTags.forEach((tag, tagIndex) => {
							setTimeout(() => {
								tag.style.transform = "scale(1.1)";
								tag.style.background = "rgba(255, 215, 0, 0.3)";
							}, tagIndex * 100);
						});
					});

					item.addEventListener("mouseleave", function () {
						this.style.transform = "";
						this.style.borderColor = "";
						this.style.boxShadow = "";

						// Reset skill tags
						const skillTags = this.querySelectorAll(".skill-tag");
						skillTags.forEach((tag) => {
							tag.style.transform = "";
							tag.style.background = "";
						});
					});
				});
			}

			// Path card interactions
			function addPathCardEffects() {
				const pathCards = document.querySelectorAll(".path-card");

				pathCards.forEach((card) => {
					card.addEventListener("mouseenter", function () {
						const icon = this.querySelector(".path-icon");
						icon.style.transform = "scale(1.2) rotate(10deg)";
						icon.style.textShadow = "0 0 20px rgba(255, 215, 0, 0.6)";

						// Animate highlight items
						const highlights = this.querySelectorAll(".highlight-item");
						highlights.forEach((highlight, index) => {
							setTimeout(() => {
								highlight.style.transform = "translateX(10px)";
								highlight.style.background = "rgba(255, 255, 255, 0.15)";
							}, index * 100);
						});
					});

					card.addEventListener("mouseleave", function () {
						const icon = this.querySelector(".path-icon");
						icon.style.transform = "";
						icon.style.textShadow = "";

						// Reset highlight items
						const highlights = this.querySelectorAll(".highlight-item");
						highlights.forEach((highlight) => {
							highlight.style.transform = "";
							highlight.style.background = "";
						});
					});
				});
			}

			// Resource card click effects
			function addResourceCardEffects() {
				const resourceCards = document.querySelectorAll(".resource-card");

				resourceCards.forEach((card) => {
					card.addEventListener("click", function () {
						// Create ripple effect
						const ripple = document.createElement("div");
						ripple.style.position = "absolute";
						ripple.style.borderRadius = "50%";
						ripple.style.background = "rgba(255, 215, 0, 0.3)";
						ripple.style.transform = "scale(0)";
						ripple.style.animation = "ripple 0.6s linear";
						ripple.style.left = "50%";
						ripple.style.top = "50%";
						ripple.style.width = "100px";
						ripple.style.height = "100px";
						ripple.style.marginLeft = "-50px";
						ripple.style.marginTop = "-50px";

						this.style.position = "relative";
						this.appendChild(ripple);

						setTimeout(() => {
							if (ripple.parentNode) {
								ripple.parentNode.removeChild(ripple);
							}
						}, 600);
					});
				});
			}

			// Add ripple animation to CSS
			const style = document.createElement("style");
			style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      @keyframes sparkleTrail {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0) translateY(-50px);
        }
      }
      
      .sparkle-trail {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #ffd700;
        border-radius: 50%;
        animation: sparkleTrail 1s ease-out forwards;
        pointer-events: none;
      }
    `;
			document.head.appendChild(style);

			// Mouse trail effect
			let mouseTrail = [];
			document.addEventListener("mousemove", function (e) {
				// Add current position to trail
				mouseTrail.push({
					x: e.clientX,
					y: e.clientY,
					time: Date.now(),
				});

				// Limit trail length
				if (mouseTrail.length > 10) {
					mouseTrail.shift();
				}

				// Create sparkle occasionally
				if (Math.random() < 0.1) {
					createSparkleTrail(e.clientX, e.clientY);
				}
			});

			function createSparkleTrail(x, y) {
				const sparkle = document.createElement("div");
				sparkle.className = "sparkle-trail";
				sparkle.style.left = x + "px";
				sparkle.style.top = y + "px";
				sparkle.style.zIndex = "9999";

				document.body.appendChild(sparkle);

				setTimeout(() => {
					if (sparkle.parentNode) {
						sparkle.parentNode.removeChild(sparkle);
					}
				}, 1000);
			}

			// Initialize all effects
			document.addEventListener("DOMContentLoaded", function () {
				// Set up scroll reveal
				window.addEventListener("scroll", revealOnScroll);
				revealOnScroll(); // Check initial state

				// Add interactivity
				addTimelineInteractivity();
				addPathCardEffects();
				addResourceCardEffects();

				// Start floating symbols
				setInterval(createFloatingSymbol, 2000);

				// Add entrance animations for hero elements
				const heroElements = document.querySelectorAll(
					".hero-subtitle, .hero-description"
				);
				heroElements.forEach((element, index) => {
					element.style.animationDelay = 0.5 + index * 0.5 + "s";
				});

				// Stagger step indicator animations
				const stepIndicators = document.querySelectorAll(".step-indicator");
				stepIndicators.forEach((step, index) => {
					step.style.animationDelay = 1.2 + index * 0.2 + "s";
				});
			});

			console.log(
				"Tell Me More Tech - Getting Started in Tech loaded with career guidance! 🚀"
			);