import { port, supplies, flow, oilTrade, warehouse } from "./assets/icons";


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
  {
    imageUrl: oilTrade,
    title: 'Global Oil Trade',
    description:
      'Reliable global oil trading services connecting buyers and sellers across industries.',
    link: '',
  },
  {
    imageUrl: warehouse,
    title: 'Warehousing & Hauling',
    description:
      'Comprehensive warehousing and haulage solutions to streamline your supply chain logistics.',
    link: '',
  },
  {
    imageUrl: warehouse,
    title: 'Ship Management & Agency',
    description:
      'Expert ship management and agency services tailored to your operational needs.',
    link: '',
  },
  {
    imageUrl: oilTrade,
    title: 'Custom Clearing & Freight Forwarding',
    description:
      'Hassle-free custom clearing and freight forwarding for smooth import and export operations.',
    link: '',
  },
]