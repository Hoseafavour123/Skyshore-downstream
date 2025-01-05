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
    imageUrl: chemicals,
    title: 'Commodity Chemicals',
  },
  {
    imageUrl: petroleum,
    title: 'Petroleum Products'
  },
  {
    imageUrl: cng,
    title: 'CNG',
  },
  {
    imageUrl: lpg,
    title: 'LPG',
  },
  {
    imageUrl: bitumen,
    title: 'Bitumen',
  },
  {
    imageUrl: lubricants,
    title: 'Lubricants'
  },

]