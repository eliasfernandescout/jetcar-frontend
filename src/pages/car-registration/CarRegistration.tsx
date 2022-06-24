import React, { HTMLInputTypeAttribute, useState } from 'react'
import { carRegistration } from 'services/car-registration.service'
import { toast } from 'react-toastify'

import * as S from './CarRegistration.style'

function CarRegistration () {
  const [selectedFile, setSelectedFile] = useState<Blob | string>('')
  const [form, setForm] = useState({
    licensePlate: '',
    dailyPrice: '',
    brand: '',
    model: '',
    year: '',
    category: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target?.name
    const inputValue = event?.target?.value

    const isFile = event.target.type === 'file'

    if (isFile && event?.target?.files) {
      const file = event?.target?.files[0]
      const formData = { ...form, [inputName]: file }
      return setForm(formData)
    }

    const formData = { ...form, [inputName]: inputValue }
    setForm(formData)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('licensePlate', form.licensePlate)
    formData.append('dailyPrice', form.dailyPrice)
    formData.append('brand', form.brand)
    formData.append('model', form.model)
    formData.append('year', form.year)
    formData.append('category', form.category)
    formData.append('file', selectedFile)

    const response = await carRegistration(formData)
    if (response.status === 201) {
      toast.success('Carro registrado com sucesso!')
      setForm({
        licensePlate: '',
        dailyPrice: '',
        brand: '',
        model: '',
        year: '',
        category: ''
      })
      return
    }
    toast.error('Algo deu errado, tente novamente.')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) { setSelectedFile(e.target.files[0]) }
  }

  return (

    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>Cadastrar veículo</S.FormTitle>
      <div>
        <label>Placa:</label>
        <S.Input
          type="text"
          id="licensePlate"
          name='licensePlate'
          value={form.licensePlate}
          onChange={handleChange} />
      </div>
      <div>
        <label>Diária:</label>
        <S.Input type="text" placeholder='R$000,00' id="dailyPrice" name='dailyPrice' value={form.dailyPrice} onChange={handleChange}/>
      </div>
      <div>
        <label>Marca:</label>
        <S.Input type="text" id="brand" name='brand' value={form.brand} onChange={handleChange} />
      </div>
      <div>
        <label>Modelo:</label>
        <S.Input type="text" id="model" name='model' value={form.model} onChange={handleChange} />
      </div>
      <div>
        <label>Ano de Fabricação:</label>
        <S.Input type="text" id="year" name='year' value={form.year} onChange={handleChange} />
      </div>
      <div>
        <label>Categoria:</label>
        <S.Input type="text" id="category" name='category' value={form.category} onChange={handleChange} />
      </div>
      <div>
        <label>Imagem do carro:</label>
        <S.Input type="file" id="file" name='file' onChange={handleFileChange} />
      </div>
      <S.Button>
        Cadastrar
      </S.Button>
    </S.Form>

  )
}

export default CarRegistration
