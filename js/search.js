// js/search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    if (!searchInput || !searchSuggestions) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchSuggestions.classList.remove('active');
            return;
        }

        // Use global foodData
        const data = window.foodData || { restaurants: [], dishes: [] };
        let resultsHTML = '';
        let found = false;

        // Search Restaurants
        const matchedRests = data.restaurants.filter(r => r.name.toLowerCase().includes(query) || r.cuisine.toLowerCase().includes(query));
        if (matchedRests.length > 0) {
            found = true;
            matchedRests.slice(0, 3).forEach(r => {
                resultsHTML += `
                    <div class="suggestion-item" onclick="window.location.href='menu.html?id=${r.id}'" style="display: flex; align-items: center; gap: 12px; padding: 10px 16px; cursor: pointer;">
                        <img src="${r.img}" alt="${r.name}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-color); flex-shrink:0;">
                        <div style="flex: 1; min-width: 0;">
                            <strong style="display: block; font-size: 0.95rem; color: var(--text-primary); text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${r.name}</strong>
                            <small style="color: var(--text-secondary); display: block; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${r.cuisine} • ⭐ ${r.rating || '4.2'}</small>
                        </div>
                    </div>
                `;
            });
        }

        // Search Dishes
        const matchedDishes = data.dishes.filter(d => d.name.toLowerCase().includes(query));
        if (matchedDishes.length > 0) {
            found = true;
            matchedDishes.slice(0, 4).forEach(d => {
                // Find matching restaurant id to link menu
                const restObj = data.restaurants.find(r => r.name === d.restaurant);
                const restLink = restObj ? `menu.html?id=${restObj.id}` : `dishes.html?q=${d.id}`;
                const typeClass = d.type === 'veg' ? 'success' : 'danger';
                
                resultsHTML += `
                    <div class="suggestion-item" onclick="window.location.href='${restLink}'" style="display: flex; align-items: center; gap: 12px; padding: 10px 16px; cursor: pointer; position: relative;">
                        <img src="${d.img}" alt="${d.name}" style="width: 40px; height: 40px; border-radius: var(--radius-sm); object-fit: cover; border: 1px solid var(--border-color); flex-shrink:0;">
                        <div style="flex: 1; min-width: 0;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span class="type-icon ${d.type}" style="display: inline-flex; width: 10px; height: 10px; border: 1px solid var(--${typeClass}-color); border-radius: 2px; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fa-solid fa-circle" style="color: var(--${typeClass}-color); font-size: 6px;"></i></span>
                                <strong style="font-size: 0.95rem; color: var(--text-primary); text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block;">${d.name}</strong>
                            </div>
                            <small style="color: var(--text-secondary); display: block; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">₹${d.price} • ${d.restaurant}</small>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); if(window.cartSystem){ window.cartSystem.addItem(${d.id}, '${d.name.replace(/'/g, "\\'")}', ${d.price}, '${d.img}'); }" style="padding: 4px 10px; font-size: 0.75rem; border-radius: var(--radius-full); cursor: pointer; flex-shrink: 0; font-weight: 700;">ADD +</button>
                    </div>
                `;
            });
        }

        if (!found) {
            resultsHTML = `
                <div class="suggestion-item" style="padding: 12px 16px;">
                    <span style="color: var(--text-secondary);">No results found for "${query}"</span>
                </div>
            `;
        } else {
            resultsHTML += `
                <div class="suggestion-item" style="justify-content: center; border-top: 1px solid var(--border-color); padding: 12px 16px;" onclick="window.location.href='restaurants.html?q=${query}'">
                    <strong style="color: var(--primary-color);">See all results</strong>
                </div>
            `;
        }

        searchSuggestions.innerHTML = resultsHTML;
        searchSuggestions.classList.add('active');
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });
});

