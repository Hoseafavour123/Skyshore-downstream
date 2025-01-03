import { port, supplies, flow } from "./assets/icons";


type Service = {
  imageUrl: string
  title: string
  description: string
  link: string
}


export const services: Service[] = [
  {
    imageUrl: port,
    title: 'Maritime & Port Services',
    description:
      'Efficient and reliable maritime services tailored for seamless port operations and logistics',
    link: '',
  },
  {
    imageUrl: flow,
    title: 'Offshore Logistics & Leasing',
    description:
      'Dependable offshore logistics and leasing solutions to support energy industry operations.',
    link: '',
  },
  {
    imageUrl: supplies,
    title: 'Offshore Bunker & Lubricant Supplies',
    description:
      'Premium offshore bunkering and lubricant supplies for uninterrupted marine and offshore activities.',
    link: '',
  },
]