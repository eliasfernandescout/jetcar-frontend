import React, { useEffect, useState } from 'react'
import { loadCars } from 'services/load-cars.service'
import CarItem from './components/CarItem'
import { CarModel } from '../../model/CarModel'

import * as S from './Cars.style'

const AllCars = () => {
  const [cars, setCars] = useState<CarModel[]>([])

  const getCars = async () => {
    const response = await loadCars()
    setCars(response.data)
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <>
      <S.Title>Carros Cadastrados</S.Title>
      <S.CarsList>

        {cars.map((car) => (
          <CarItem car={car} key={car.licensePlate}/>
        ))}
      </S.CarsList>
    </>
  )
}

export default AllCars
