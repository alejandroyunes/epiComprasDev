interface AdType {
  id: number
  title: string
  description: string
  image: string
  price: number
  location: string
  date: string
  url: string
}

export const ads: AdType[] = [
  {
    id: 1,
    title: 'Car for Sale',
    description: 'Well-maintained car available for sale. Low mileage and excellent condition.',
    image: '/ads/carro.jpg',
    price: 100,
    location: 'New York, NY',
    date: '2021-01-01',
    url: '/ads/car-for-sale'
  },
  {
    id: 2,
    title: 'Spacious House for Rent',
    description: 'Beautiful house with multiple bedrooms and amenities. Ideal for families.',
    image: '/ads/casa.jpg',
    price: 200,
    location: 'Los Angeles, CA',
    date: '2021-01-02',
    url: '/ads/spacious-house-for-rent'
  },
  {
    id: 3,
    title: 'Kitchen Stove for Sale',
    description: 'Brand new kitchen stove available at a discounted price. Limited stock!',
    image: '/ads/estufa.jpg',
    price: 300,
    location: 'Chicago, IL',
    date: '2021-01-03',
    url: '/ads/kitchen-stove-for-sale'
  },
  {
    id: 4,
    title: 'Refurbished Laptop',
    description:
      'Powerful laptop with upgraded specifications. Perfect for work and entertainment.',
    image: '/ads/laptop.jpg',
    price: 400,
    location: 'Houston, TX',
    date: '2021-01-04',
    url: '/ads/refurbished-laptop'
  },
  {
    id: 5,
    title: 'Electric Stove for Sale',
    description: 'Modern electric stove available for sale. Energy-efficient and easy to use.',
    image: '/ads/estufa.jpg',
    price: 500,
    location: 'Phoenix, AZ',
    date: '2021-01-05',
    url: '/ads/electric-stove-for-sale'
  },
  {
    id: 6,
    title: 'Gaming Laptop',
    description: 'High-performance gaming laptop with advanced graphics capabilities.',
    image: '/ads/laptop.jpg',
    price: 600,
    location: 'Philadelphia, PA',
    date: '2021-01-06',
    url: '/ads/gaming-laptop'
  }
]
