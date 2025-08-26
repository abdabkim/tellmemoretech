// Create floating sparks
			function createSpark() {
				const spark = document.createElement("div");
				spark.className = "spark";
				spark.style.left = Math.random() * 100 + "%";
				spark.style.animationDuration = Math.random() * 4 + 4 + "s";
				spark.style.animationDelay = Math.random() * 2 + "s";

				document.getElementById("floatingSparks").appendChild(spark);

				setTimeout(() => {
					if (spark.parentNode) {
						spark.parentNode.removeChild(spark);
					}
				}, 8000);
			}

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

			// Animate performance chart bars
			function animateChartBars() {
				const chartBars = document.querySelectorAll(".bar-fill");
				const chartSection = document.querySelector(".performance-chart");

				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								chartBars.forEach((bar, index) => {
									setTimeout(() => {
										if (bar.classList.contains("svelte-bar")) {
											bar.style.width = "5%";
										} else {
											const widths = ["35%", "45%", "100%"];
											bar.style.width = widths[index - 1] || "50%";
										}
									}, index * 200);
								});
							}
						});
					},
					{ threshold: 0.5 }
				);

				observer.observe(chartSection);
			}

			// Add interactive effects to code blocks
			function addCodeBlockEffects() {
				const codeBlocks = document.querySelectorAll(".code-block");

				codeBlocks.forEach((block) => {
					block.addEventListener("mouseenter", function () {
						this.style.borderColor = "#ff3e00";
						this.style.boxShadow = "0 10px 30px rgba(255, 62, 0, 0.2)";
					});

					block.addEventListener("mouseleave", function () {
						this.style.borderColor = "";
						this.style.boxShadow = "";
					});
				});
			}

			// Add glow effect to highlight boxes
			function addHighlightEffects() {
				const highlightBoxes = document.querySelectorAll(".highlight-box");

				highlightBoxes.forEach((box) => {
					box.addEventListener("mouseenter", function () {
						this.style.boxShadow = "0 15px 35px rgba(255, 62, 0, 0.3)";
						this.style.borderLeftColor = "#ff6600";
					});

					box.addEventListener("mouseleave", function () {
						this.style.boxShadow = "";
						this.style.borderLeftColor = "";
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
					"linear-gradient(90deg, #ff3e00, #ff6600)";
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

				// Animate chart bars
				animateChartBars();

				// Add interactive effects
				addCodeBlockEffects();
				addHighlightEffects();
				addReadingProgress();

				// Start creating sparks
				setInterval(createSpark, 1000);

				// Add some initial sparks
				for (let i = 0; i < 5; i++) {
					setTimeout(createSpark, i * 500);
				}

				// Typewriter effect for the title (optional)
				const title = document.querySelector(".article-title");
				if (title) {
					title.style.animation = "titleShift 3s ease-in-out infinite";
				}
			});

			console.log(
				"Tell Me More Tech - Svelte 2025 Article loaded with lightning effects! ⚡"
			);