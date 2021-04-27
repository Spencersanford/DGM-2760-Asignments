async function getHotelData(){
  try {
    const respone = await fetch('../hotel.json')
    return await respone.json()

  } catch(error) {
    console.error(error)
  }
}

console.log(getHotelData)