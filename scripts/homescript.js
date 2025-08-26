
			const articles = {
				svelte: "Why Svelte Is the Framework to Watch in 2025",
				"react-vue": "React vs Vue: The Complete 2025 Guide",
				debugging: "Debugging Like a Pro: Tools and Mindsets",
				vscode: "VS Code Extensions That Will Save You Hours",
			};

			function goHome() {
				location.reload();
			}

			function openArticle(articleId) {
				alert(
					`Opening article: ${articles[articleId]}\n\nThis will open in a new page when fully implemented.`
				);
			}

			function performSearch() {
				const query = document.getElementById("searchInput").value.trim();
				const results = document.getElementById("searchResults");

				if (!query) {
					results.classList.remove("show");
					return;
				}

				const matches = Object.entries(articles).filter(([id, title]) =>
					title.toLowerCase().includes(query.toLowerCase())
				);

				if (matches.length === 0) {
					results.innerHTML = `<div>No results found for "${query}"</div>`;
				} else {
					results.innerHTML = matches
						.map(
							([id, title]) =>
								`<div class="search-result-item" onclick="openArticle('${id}')">
            <div class="search-result-title">${title}</div>
          </div>`
						)
						.join("");
				}

				results.classList.add("show");
			}

			// Hide search results when clicking outside
			document.addEventListener("click", function (e) {
				if (!document.querySelector(".search-container").contains(e.target)) {
					document.getElementById("searchResults").classList.remove("show");
				}
			});

			// Search on Enter key
			document
				.getElementById("searchInput")
				.addEventListener("keypress", function (e) {
					if (e.key === "Enter") {
						performSearch();
					}
				});

			console.log("Tell Me More Tech - Home page loaded successfully");
	