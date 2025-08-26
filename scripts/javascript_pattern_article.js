	// Smooth scrolling for table of contents
			document.querySelectorAll(".toc a").forEach((link) => {
				link.addEventListener("click", (e) => {
					e.preventDefault();
					const target = document.querySelector(link.getAttribute("href"));
					if (target) {
						target.scrollIntoView({ behavior: "smooth" });
					}
				});
			});

			// Highlight current section in TOC
			const observerOptions = {
				rootMargin: "-20% 0px -70% 0px",
				threshold: 0,
			};

			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute("id");
						document.querySelectorAll(".toc a").forEach((link) => {
							link.style.color =
								link.getAttribute("href") === `#${id}` ? "#667eea" : "#4a5568";
						});
					}
				});
			}, observerOptions);

			document.querySelectorAll("section[id]").forEach((section) => {
				observer.observe(section);
			});