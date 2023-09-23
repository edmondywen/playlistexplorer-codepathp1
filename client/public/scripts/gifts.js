const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.className = 'card'

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${gift.image})`

            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)

            const artist = document.createElement('p')
            artist.textContent = gift.artist 
            bottomContainer.appendChild(artist)

            const genre = document.createElement('p')
            genre.textContent = gift.genre
            bottomContainer.appendChild(genre)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available :('
        mainContent.append(message)
    }
}

const requestedURL = window.location.href.split('/').pop()
if (requestedURL) {
    window.location.href = '../404.html'
}
else {
    renderGifts()
}
