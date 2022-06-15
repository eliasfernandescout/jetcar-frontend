import axios from 'axios'

export const loadCars = async () => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:5002/car/list'
  })
  return response
}
