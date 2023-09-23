const renderGift = async() => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/gifts')
    const data = await response.json()
    const giftContent = document.getElementById('gift-content')
    let gift 
    if (data){
        gift = data.find(gift => gift.id === requestedID)
    }

    if (gift){
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('artist').textContent = 'Artist Name: ' + gift.artist
        document.getElementById('genre').textContent = 'Genre: ' + gift.genre
        document.title = `UnEarthed - ${gift.name}`
    }
    else{
        const text = document.createElement('h2')
        text.textContent = 'No gifts available :('
        giftContent.appendChild(text)
    }
}

renderGift()