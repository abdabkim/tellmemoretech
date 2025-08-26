// Filter tools by category
			function filterTools(category) {
				const toolCards = document.querySelectorAll(".tool-card");
				const categoryBtns = document.querySelectorAll(".category-btn");

				// Update active button
				categoryBtns.forEach((btn) => btn.classList.remove("active"));
				event.target.classList.add("active");

				// Filter cards with animation
				toolCards.forEach((card, index) => {
					if (category === "all" || card.dataset.category === category) {
						card.style.display = "block";
						card.style.animation = `fadeSlideIn 0.5s ease forwards ${
							index * 0.1
						}s`;
					} else {
						card.style.animation = "fadeSlideOut 0.3s ease forwards";
						setTimeout(() => {
							card.style.display = "none";
						}, 300);
					}
				});
			}

			// Add CSS animations dynamically
			const style = document.createElement("style");
			style.textContent = `
      @keyframes fadeSlideIn {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes fadeSlideOut {
        from {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        to {
          opacity: 0;
          transform: translateY(-30px) scale(0.9);
        }
      }
      
      .sparkle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #ffd700;
        border-radius: 50%;
        animation: sparkleFloat 3s ease-out forwards;
        pointer-events: none;
      }
      
      @keyframes sparkleFloat {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-100px) scale(0);
        }
      }
    `;
			document.head.appendChild(style);

			// Add interactive sparkle effect on tool card hover
			document.addEventListener("DOMContentLoaded", function () {
				const toolCards = document.querySelectorAll(".tool-card");

				toolCards.forEach((card) => {
					card.addEventListener("mouseenter", function () {
						createSparkles(this);
					});
				});

				function createSparkles(element) {
					for (let i = 0; i < 5; i++) {
						setTimeout(() => {
							const sparkle = document.createElement("div");
							sparkle.className = "sparkle";
							sparkle.style.left = Math.random() * 100 + "%";
							sparkle.style.top = Math.random() * 100 + "%";

							element.appendChild(sparkle);

							setTimeout(() => {
								if (sparkle.parentNode) {
									sparkle.parentNode.removeChild(sparkle);
								}
							}, 3000);
						}, i * 100);
					}
				}

				// Add scroll-triggered animations
				const observerOptions = {
					threshold: 0.1,
					rootMargin: "0px 0px -50px 0px",
				};

				const observer = new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.style.animation = "fadeSlideIn 0.6s ease forwards";
						}
					});
				}, observerOptions);

				// Observe all tool cards
				toolCards.forEach((card) => {
					card.style.opacity = "0";
					observer.observe(card);
				});

				// Add glitch effect to random tools every few seconds
				setInterval(() => {
					const randomCard =
						toolCards[Math.floor(Math.random() * toolCards.length)];
					const logo = randomCard.querySelector(".tool-logo");
					logo.classList.add("glitch");

					setTimeout(() => {
						logo.classList.remove("glitch");
					}, 1000);
				}, 5000);

				// Add floating animation to tool icons
				const floatingIcons = document.querySelectorAll(".tool-icon");
				floatingIcons.forEach((icon, index) => {
					icon.addEventListener("mouseenter", function () {
						this.style.animationPlayState = "paused";
						this.style.transform = "scale(1.5) rotate(180deg)";
						this.style.opacity = "0.5";
						this.style.color = "#ff6b35";
					});

					icon.addEventListener("mouseleave", function () {
						this.style.animationPlayState = "running";
						this.style.transform = "";
						this.style.opacity = "";
						this.style.color = "";
					});
				});

				// Add dynamic grid movement on mouse move
				let mouseX = 0;
				let mouseY = 0;

				document.addEventListener("mousemove", function (e) {
					mouseX = (e.clientX / window.innerWidth) * 100;
					mouseY = (e.clientY / window.innerHeight) * 100;

					const gridBg = document.querySelector(".grid-bg");
					gridBg.style.transform = `translate(${mouseX * 0.1}px, ${
						mouseY * 0.1
					}px)`;
				});

				// Add random color shifts to category buttons
				const categoryBtns = document.querySelectorAll(".category-btn");
				categoryBtns.forEach((btn) => {
					btn.addEventListener("mouseenter", function () {
						if (!this.classList.contains("active")) {
							this.style.borderColor = "#ff6b35";
							this.style.color = "#ff6b35";
						}
					});

					btn.addEventListener("mouseleave", function () {
						if (!this.classList.contains("active")) {
							this.style.borderColor = "";
							this.style.color = "";
						}
					});
				});
			});

			// Global filter function
			window.filterTools = filterTools;

			console.log("Tell Me More Tech - Dev Tools Arsenal loaded! 🛠️");