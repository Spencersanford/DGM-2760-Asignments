async function getHotelData(){
  try {
    const respone = await fetch('hotel.json')
    return await respone.json()

  } catch(error) {
    console.error(error)
  }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

document.querySelector("#marriot").addEventListener('click', hotelInfo)


var buttons = document.querySelectorAll("button")
buttons.forEach(element => addEventListener('click', hotelInfo))

function hotelInfo(event){
    let hotelChoice = hotelData.hotels.find(hotel => {
      return event.target.id === hotel.name.toLowerCase()
    })

    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    document.querySelector("#Adress").textContent = `${hotelChoice.adress}`
    document.querySelector("#rooms").textContent = `${hotelChoice.rooms} rooms available `
    document.querySelector("#gym").textContent = `${hotelChoice.rooms} rooms available `
    document.querySelector("#RoomType").textContent = `${hotelChoice.roomType}`
    document.querySelector("#picture").setAttribute("src", hotelChoice.picture)
}