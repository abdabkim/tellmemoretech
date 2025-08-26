const articles = [
				{
					id: 1,
					title: "Why Svelte Is the Framework to Watch in 2025",
					category: "frameworks",
					author: "Sarah Chen",
					authorInitials: "SC",
					description:
						"Svelte's compiler-first approach is redefining frontend performance. With zero runtime overhead and intuitive syntax, it's becoming the go-to for devs who want speed without complexity.",
					readTime: "5 min read",
					date: "2025-08-20",
					tags: ["Svelte", "JavaScript", "Performance", "Frontend"],
					popularity: 95,
					url: "svelte_2025.html",
					hasPage: true,
				},
				{
					id: 2,
					title: "React vs Vue: The Complete 2025 Guide",
					category: "frameworks",
					author: "David Kim",
					authorInitials: "DK",
					description:
						"An honest comparison of React and Vue.js in 2025, covering performance, ecosystem, learning curve, and real-world project considerations.",
					readTime: "7 min read",
					date: "2025-08-18",
					tags: ["React", "Vue.js", "Comparison", "JavaScript"],
					popularity: 88,
					url: "react_vs_vue.html",
					hasPage: true,
				},
				{
					id: 3,
					title: "Debugging Like a Pro: Tools and Mindsets",
					category: "dev-tools",
					author: "Alex Thompson",
					authorInitials: "AT",
					description:
						"Debugging isn't just technical – it's psychological. Learn how top engineers approach bugs with curiosity, precision, and the right tools.",
					readTime: "6 min read",
					date: "2025-08-15",
					tags: ["Debugging", "Tools", "Mindset", "Problem Solving"],
					popularity: 82,
					url: "debugging_pro.html",
					hasPage: true,
				},
				{
					id: 4,
					title: "VS Code Extensions That Will Save You Hours",
					category: "dev-tools",
					author: "Jessica Park",
					authorInitials: "JP",
					description:
						"From GitLens to TabNine, these extensions streamline your workflow, reduce context switching, and help you write cleaner code – faster.",
					readTime: "4 min read",
					date: "2025-08-12",
					tags: ["VS Code", "Extensions", "Productivity", "Workflow"],
					popularity: 91,
					url: "vscode_extensions.html",
					hasPage: true,
				},
				{
					id: 5,
					title: "Complete Guide to Frontend Frameworks",
					category: "frameworks",
					author: "Michael Chen",
					authorInitials: "MC",
					description:
						"Comprehensive overview of React, Vue, Angular, Svelte, and emerging frameworks. Performance comparisons, use cases, and migration strategies.",
					readTime: "12 min read",
					date: "2025-08-10",
					tags: ["Frameworks", "React", "Vue", "Angular", "Comparison"],
					popularity: 87,
					url: "frameworks.html",
					hasPage: true,
				},
				{
					id: 6,
					title: "Developer Tools Arsenal: Complete Review",
					category: "dev-tools",
					author: "Emma Rodriguez",
					authorInitials: "ER",
					description:
						"In-depth reviews of essential developer tools including VS Code, Git, Chrome DevTools, Docker, Figma, and Postman with practical tips.",
					readTime: "15 min read",
					date: "2025-08-08",
					tags: ["Tools", "VS Code", "Git", "Docker", "Productivity"],
					popularity: 89,
					url: "dev_tools.html",
					hasPage: true,
				},
				{
					id: 7,
					title: "Getting Started in Tech: A Beginner's Roadmap",
					category: "career",
					author: "Carlos Martinez",
					authorInitials: "CM",
					description:
						"Complete guide for breaking into tech including learning paths, project ideas, portfolio building, and landing your first developer job.",
					readTime: "10 min read",
					date: "2025-08-05",
					tags: ["Career", "Beginner", "Learning", "Portfolio", "Job Search"],
					popularity: 84,
					url: "getting_started.html",
					hasPage: true,
				},
				{
					id: 8,
					title: "Essential Resources for Modern Developers",
					category: "resources",
					author: "Lisa Wang",
					authorInitials: "LW",
					description:
						"Curated collection of documentation, tutorials, tools, communities, and learning platforms every developer should know about.",
					readTime: "8 min read",
					date: "2025-08-02",
					tags: [
						"Resources",
						"Documentation",
						"Learning",
						"Community",
						"Tools",
					],
					popularity: 79,
					url: "resources_page.html",
					hasPage: true,
				},
				{
					id: 9,
					title: "Advanced JavaScript Patterns and Best Practices",
					category: "tutorials",
					author: "Kevin Park",
					authorInitials: "KP",
					description:
						"Deep dive into modern JavaScript patterns, async programming, memory optimization, and performance techniques for scalable applications.",
					readTime: "11 min read",
					date: "2025-07-30",
					tags: [
						"JavaScript",
						"Advanced",
						"Patterns",
						"Performance",
						"Best Practices",
					],
					popularity: 86,
					url: "javascript_patterns_article.html",
					hasPage: true,
				},
				{
					id: 10,
					title: "Building Production-Ready APIs with Node.js",
					category: "backend",
					author: "Rachel Thompson",
					authorInitials: "RT",
					description:
						"Complete guide to building robust APIs with Express, authentication, error handling, testing, documentation, and deployment strategies.",
					readTime: "14 min read",
					date: "2025-07-25",
					tags: ["Node.js", "API", "Express", "Backend", "Production"],
					popularity: 81,
					url: "building_production.html",
					hasPage: true,
				},
			];
			let currentArticles = [...articles];
			let currentCategory = "all";
			let currentSort = "newest";
			function createParticles() {
				const particlesBg = document.getElementById("particlesBg");
				for (let i = 0; i < 50; i++) {
					const particle = document.createElement("div");
					particle.className = "particle";
					particle.style.left = Math.random() * 100 + "%";
					particle.style.animationDelay = Math.random() * 15 + "s";
					particle.style.animationDuration = Math.random() * 10 + 10 + "s";
					particlesBg.appendChild(particle);
				}
			}
			function filterByCategory(category) {
				currentCategory = category;
				document
					.querySelectorAll(".category-btn")
					.forEach((btn) => btn.classList.remove("active"));
				event.target.classList.add("active");
				applyFilters();
			}
			function sortArticles() {
				currentSort = document.getElementById("sortSelect").value;
				applyFilters();
			}
			function performSearch() {
				applyFilters();
			}
			function applyFilters() {
				const searchTerm = document
					.getElementById("searchInput")
					.value.toLowerCase();
				let filtered =
					currentCategory === "all"
						? [...articles]
						: articles.filter(
								(article) => article.category === currentCategory
						  );
				if (searchTerm) {
					filtered = filtered.filter(
						(article) =>
							article.title.toLowerCase().includes(searchTerm) ||
							article.author.toLowerCase().includes(searchTerm) ||
							article.description.toLowerCase().includes(searchTerm) ||
							article.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
					);
				}
				filtered.sort((a, b) => {
					switch (currentSort) {
						case "newest":
							return new Date(b.date) - new Date(a.date);
						case "oldest":
							return new Date(a.date) - new Date(b.date);
						case "popular":
							return b.popularity - a.popularity;
						case "reading-time":
							return parseInt(a.readTime) - parseInt(b.readTime);
						case "title":
							return a.title.localeCompare(b.title);
						default:
							return 0;
					}
				});
				currentArticles = filtered;
				document.getElementById("totalArticles").textContent =
					currentArticles.length;
				renderArticles();
			}
			function renderArticles() {
				const articlesGrid = document.getElementById("articlesGrid");
				const noResults = document.getElementById("noResults");
				if (currentArticles.length === 0) {
					articlesGrid.style.display = "none";
					noResults.style.display = "block";
					return;
				}
				articlesGrid.style.display = "grid";
				noResults.style.display = "none";
				articlesGrid.innerHTML = currentArticles
					.map(
						(article, index) => `
                <div class="article-card" style="opacity: 0; transform: translateY(30px); animation: fadeSlideIn 0.6s ease forwards; animation-delay: ${
									index * 0.1
								}s" onclick="openArticle(${article.id})">
                    <div class="article-header">
                        <span class="article-category">${article.category.replace(
													"-",
													" "
												)}</span>
                        <h3 class="article-title">${article.title}</h3>
                    </div>
                    <div class="article-meta">
                        <div class="author-info">
                            <div class="author-avatar">${
															article.authorInitials
														}</div>
                            <span>${article.author}</span>
                        </div>
                        <span>•</span>
                        <span>${formatDate(article.date)}</span>
                    </div>
                    <p class="article-description">${article.description}</p>
                    <div class="article-tags">
                        ${article.tags
													.map((tag) => `<span class="tag">${tag}</span>`)
													.join("")}
                    </div>
                    <div class="article-footer">
                        <span class="read-time">${article.readTime}</span>
                        <button class="article-action" onclick="openArticle(${
													article.id
												}); event.stopPropagation();">Read Article</button>
                    </div>
                </div>
            `
					)
					.join("");
			}
			function formatDate(dateString) {
				const date = new Date(dateString);
				return date.toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
					day: "numeric",
				});
			}
			function openArticle(articleId) {
				const article = articles.find((a) => a.id === articleId);
				if (article) {
					if (article.hasPage && article.url !== "#") {
						window.open(article.url, "_blank");
					} else {
						alert(
							`"${article.title}" is coming soon!\n\nThis article is currently being written and will be available shortly.`
						);
					}
				}
			}
			document
				.getElementById("searchInput")
				.addEventListener("input", function () {
					clearTimeout(window.searchTimeout);
					window.searchTimeout = setTimeout(() => performSearch(), 300);
				});
			document
				.getElementById("searchInput")
				.addEventListener("keypress", function (e) {
					if (e.key === "Enter") performSearch();
				});
			document.addEventListener("DOMContentLoaded", function () {
				createParticles();
				applyFilters();
			});
			window.filterByCategory = filterByCategory;
			window.sortArticles = sortArticles;
			window.performSearch = performSearch;
			window.openArticle = openArticle;