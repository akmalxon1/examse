
    const apiUrl = "https://raw.githubusercontent.com/diyor011/apibest/master/api.json";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const searchInput = document.getElementById('search');
            const cardsContainer = document.getElementById('cards-container');

          
            const renderCards = (filteredData) => {
                cardsContainer.innerHTML = ''; 
                filteredData.forEach(item => {
                    const box = document.createElement('div');
                    box.classList.add('pokemon-card');

                    const name = document.createElement('h2');
                    name.textContent = item.name;
                    box.appendChild(name);

                    const image = document.createElement('img');
                    image.src = item.pic; 
                    box.appendChild(image);

                    const desc1 = document.createElement('p');
                    desc1.textContent = item.desc1 || 'No description available';
                    box.appendChild(desc1);

                    const fulldesc = document.createElement('p');
                    fulldesc.textContent = item.fulldesc || 'No full description available'; 
                    box.appendChild(fulldesc);

                    const price = document.createElement('p');
                    price.textContent = `Price: ${item.price}`; 
                    box.appendChild(price);

                    const count = document.createElement('p');
                    count.textContent = `Count: ${item.count}`; 
                    box.appendChild(count);

                    cardsContainer.appendChild(box);
                });
            };

          
            renderCards(data);

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
                renderCards(filteredData); 
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });


