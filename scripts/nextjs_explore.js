// Add some dynamic performance visualization
			document.addEventListener("DOMContentLoaded", function () {
				const metricFills = document.querySelectorAll(".metric-fill");

				const observerOptions = {
					threshold: 0.5,
					rootMargin: "0px 0px -100px 0px",
				};

				const observer = new IntersectionObserver(function (entries) {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.style.animationPlayState = "running";
						}
					});
				}, observerOptions);

				metricFills.forEach((fill) => {
					fill.style.animationPlayState = "paused";
					observer.observe(fill);
				});
			});

			console.log(
				"Tell Me More Tech - Next.js Explorer loaded for production! ▲"
			);