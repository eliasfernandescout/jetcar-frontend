import axios from 'axios'

export const carRegistration = async (formData: FormData) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:5002/car/car-register',
      data: formData,
      headers: {
        'Context-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    return { status: 400 }
  }
}
