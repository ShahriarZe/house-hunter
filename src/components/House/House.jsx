import { useState } from 'react';
import one from '../../assets/houseOne.jpeg';
import two from '../../assets/houseTwo.jpeg';
import three from '../../assets/houseThree.jpeg';
import fifth from '../../assets/fifth.jpeg';

const House = () => {
  const [searchPrice, setSearchPrice] = useState('');
  const houses = [
    {
      imgSrc: one,
      title: 'Blue Palace!',
      price: '$1200/per month',
      location: 'New York City',
      description: 'Situated in the middle of the town near Hospital',
    },
    {
      imgSrc: two,
      title: 'King Palace!',
      price: '$1000/per month',
      location: 'Florida City',
      description: 'Situated in the center of the town near Police Station',
    },
    {
      imgSrc: three,
      title: 'Alizaa Palace!',
      price: '$1100/per month',
      location: 'Los Angeles City',
      description: 'Situated in the back of the town near Railway',
    },
    {
      imgSrc: fifth,
      title: 'Mountain Retreat',
      price: '$1200/per month',
      location: 'Denver City',
      description: 'Cozy House nestled in the Mountains and Fountain',
    },
    {
      imgSrc: one,
      title: 'Mountain Cozy House',
      price: '$900/per month',
      location: 'Denver City',
      description: 'Cozy House nestled in the Mountains and Fountain',
    },
  ];

  
  const filteredHouses = houses.filter((house) =>
    house.price.toLowerCase().includes(searchPrice.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center text-5xl font-bold">Listed Houses</h1>

      <div className="mb-4">
        <label htmlFor="searchPrice" className="block text-sm font-medium text-gray-700">
          Search by Rent:
        </label>
        <input
          type="text"
          id="searchPrice"
          className="mt-1 p-2 border rounded-md"
          placeholder="Enter price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHouses.map((house, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={house.imgSrc} alt="House" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{house.title}</h2>
              <p>{house.price}</p>
              <p>{house.location}</p>
              <p>{house.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default House;
