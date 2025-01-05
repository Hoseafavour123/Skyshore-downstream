import {
  chemicals,
  petroleum,
  lpg,
  cng,
  bitumen,
  lubricants,
} from './assets/images'

type Service = {
  imageUrl: string
  title: string
}


export const services: Service[] = [
  {
    imageUrl: petroleum,
    title: 'Petroleum Products',
  },
  {
    imageUrl: lubricants,
    title: 'Lubricants',
  },
  {
    imageUrl: lpg,
    title: 'LPG',
  },
  {
    imageUrl: cng,
    title: 'CNG',
  },
  {
    imageUrl: bitumen,
    title: 'Bitumen',
  },
  {
    imageUrl: chemicals,
    title: 'Commodity Chemicals',
  },
]