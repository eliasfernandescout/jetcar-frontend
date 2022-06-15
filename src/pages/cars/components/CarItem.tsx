import React from 'react'
import { CarModel } from '../../../model/CarModel'
import * as S from './CarItem.style'

type Props = {
  car: CarModel
}

const CarItem = ({ car }: Props) => {
  return (
    <S.CarItem>
      <S.Image src='placeholder.png'/>
      <S.Row>Categoria: {car.category}</S.Row>
      <S.Row>Fabricante: {car.brand}</S.Row>
      <S.Row>Ano: {car.year}</S.Row>
      <S.Row>Diária: R${parseFloat(car.dailyPrice).toFixed(2)}</S.Row>
      <S.Row>Status: disponível</S.Row>
    </S.CarItem>
  )
}

export default CarItem
