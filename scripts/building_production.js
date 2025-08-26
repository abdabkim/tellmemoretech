	// Animate sections on scroll
			const sections = document.querySelectorAll("section");
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("visible");
							// Animate bars
							entry.target.querySelectorAll(".metric-fill").forEach((bar) => {
								bar.style.width = bar.dataset.width;
							});
						}
					});
				},
				{ threshold: 0.2 }
			);
			sections.forEach((sec) => observer.observe(sec));