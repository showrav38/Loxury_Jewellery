import images from './images';

const wines = [
 
  {
    title: 'Ring',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Braselet',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Rip-off',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Gui',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Ring',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Braselet',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Rip-off',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Gui',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
const gal = [
  {
    imgUrl: images.gallery01,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    url:'https://instagram.com/1',
  },
  {
    imgUrl: images.gallery02,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    url:'https://instagram.com/2',
  },
  {
    imgUrl: images.gallery03,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    url:'https://instagram.com',
  },
  {
    imgUrl: images.gallery04,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    url:'https://instagram.com',
  },
];
const exported = {
  wines,
  cocktails,
  awards,
  gal
}
export default exported;
