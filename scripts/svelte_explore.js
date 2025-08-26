	// Add some interactive sparkle effects
			document.addEventListener("DOMContentLoaded", function () {
				const hero = document.querySelector(".hero-section");

				function createSparkle() {
					const sparkle = document.createElement("div");
					sparkle.innerHTML = "✨";
					sparkle.style.position = "absolute";
					sparkle.style.left = Math.random() * 100 + "%";
					sparkle.style.top = Math.random() * 100 + "%";
					sparkle.style.fontSize = "1rem";
					sparkle.style.pointerEvents = "none";
					sparkle.style.animation = "sparkle 3s ease-in-out forwards";
					sparkle.style.zIndex = "1";

					hero.appendChild(sparkle);

					setTimeout(() => {
						if (sparkle.parentNode) {
							sparkle.parentNode.removeChild(sparkle);
						}
					}, 3000);
				}

				// Create sparkles every 2 seconds
				setInterval(createSparkle, 2000);
			});

			console.log(
				"Tell Me More Tech - Svelte Explorer loaded with compile-time magic! ⚡"
			);