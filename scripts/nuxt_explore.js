// Add some mountain animation effects
			document.addEventListener("DOMContentLoaded", function () {
				const mountains = document.querySelectorAll(".mountain");

				mountains.forEach((mountain, index) => {
					mountain.addEventListener("mouseenter", function () {
						this.style.transform = "translateY(-30px) scale(1.1)";
						this.style.opacity = "0.3";
					});

					mountain.addEventListener("mouseleave", function () {
						this.style.transform = "translateY(0px) scale(1)";
						this.style.opacity = "0.1";
					});
				});

				// Add sparkle effects to the logo
				const logo = document.querySelector(".nuxt-logo");

				function createSparkle() {
					const sparkle = document.createElement("div");
					sparkle.innerHTML = "✨";
					sparkle.style.position = "absolute";
					sparkle.style.left = Math.random() * 100 + "%";
					sparkle.style.top = Math.random() * 100 + "%";
					sparkle.style.fontSize = "1.5rem";
					sparkle.style.pointerEvents = "none";
					sparkle.style.animation = "sparkle 2s ease-out forwards";
					sparkle.style.zIndex = "10";

					logo.appendChild(sparkle);

					setTimeout(() => {
						if (sparkle.parentNode) {
							sparkle.parentNode.removeChild(sparkle);
						}
					}, 2000);
				}

				// Create sparkles every 3 seconds
				setInterval(createSparkle, 3000);
			});

			console.log(
				"Tell Me More Tech - Nuxt Explorer loaded with Vue magic! 💎"
			);