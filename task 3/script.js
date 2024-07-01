console.log("initialising.....");
function updateVideoDetails(imgSrc, duration, title, views, cName, monthsold) {
    // Create a new card div
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Create and set up the thumbnail div
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('thumbnail');
    
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc; // Use the passed image URL
    imgElement.alt = title; // Use the title as the alt text
    
    const durationDiv = document.createElement('div');
    durationDiv.classList.add('duration');
    durationDiv.innerText = duration;
    
    thumbnailDiv.appendChild(imgElement);
    thumbnailDiv.appendChild(durationDiv);
    
    // Create and set up the description div
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = title;
    
    const d2Div = document.createElement('div');
    d2Div.classList.add('d2');
    
    const cNameDiv = document.createElement('div');
    cNameDiv.classList.add('cName');
    cNameDiv.innerText = cName;
    
    const viewsDiv = document.createElement('div');
    viewsDiv.classList.add('views');
    viewsDiv.innerText = formatViews(views);
    
    const monthsoldDiv = document.createElement('div');
    monthsoldDiv.classList.add('monthsold');
    monthsoldDiv.innerText = monthsold;
    
    d2Div.appendChild(cNameDiv);
    d2Div.appendChild(viewsDiv);
    d2Div.appendChild(monthsoldDiv);
    
    descriptionDiv.appendChild(titleDiv);
    descriptionDiv.appendChild(d2Div);
    
    // Append the thumbnail and description to the card
    newCard.appendChild(thumbnailDiv);
    newCard.appendChild(descriptionDiv);
    
    // Append the new card to the container
    const container = document.querySelector('.container');
    if (container) {
        container.appendChild(newCard);
    }
}

function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    } else {
        return views.toString();
    }
}

// Example usage
updateVideoDetails('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ', '11:25', 'Intermediate HTML Tutorial | Lesson 2', 140000, 'crazygujju', '6 months old');
updateVideoDetails('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD_LqXfZPZNd_iqMCjJK-U2A5v_pA', '13:26', 'Rick Roll', 146000, 'mighty raju', '2 months old');
updateVideoDetails('https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDAk3Z_PyyftjVtRoKO00aXDTq8-A', '11:45', 'huge kangaroo found in australia', 116000, 'Nick Dias', '11 months old');