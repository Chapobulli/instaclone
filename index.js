const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg'
];

const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < images.length; i++) {
  const image = document.createElement('img');
  image.src = images[i];
  container
