import React, { useState } from 'react'
import { carRegistration } from 'services/car-registration.service'

function Home () {
  const [form, setForm] = useState({
    licensePlate: '',
    dailyPrice: '',
    brand: '',
    model: '',
    year: '',
    category: ''
    // carImage: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target?.name
    const inputValue = event?.target?.value

    const formData = { ...form, [inputName]: inputValue }
    setForm(formData)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('licensePlate', form.licensePlate)
    formData.append('dailyPrice', form.dailyPrice)
    formData.append('brand', form.brand)
    formData.append('model', form.model)
    formData.append('year', form.year)
    formData.append('category', form.category)

    const response = carRegistration(formData)
    console.log(response)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Placa:</label>
        <input
          type="text"
          id="licensePlate"
          name='licensePlate'
          value={form.licensePlate}
          onChange={handleChange} />
      </div>
      <div>
        <label>Diária:</label>
        <input type="text" placeholder='R$000,00' id="dailyPrice" name='dailyPrice' value={form.dailyPrice} onChange={handleChange}/>
      </div>
      <div>
        <label>Marca:</label>
        <input type="text" id="brand" name='brand' value={form.brand} onChange={handleChange} />
      </div>
      <div>
        <label>Modelo:</label>
        <input type="text" id="model" name='model' value={form.model} onChange={handleChange} />
      </div>
      <div>
        <label>Ano de Fabricação:</label>
        <input type="text" id="year" name='year' value={form.year} onChange={handleChange} />
      </div>
      <div>
        <label>Categoria:</label>
        <input type="text" id="category" name='category' value={form.category} onChange={handleChange} />
      </div>
      {/* <div>
        <label>Imagem do carro:</label>
        <input type="file" id="carImage" name='carImage' value={form.carImage} onChange={handleChange} />
      </div> */}
      <button>
        Cadastrar
      </button>

    </form>
  )
}

export default Home
