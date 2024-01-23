import one from '../../assets/houseOne.jpeg'
import two from '../../assets/houseTwo.jpeg'
import three from '../../assets/houseThree.jpeg'
const House = () => {
    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-center text-5xl font-bold">Listed Houses</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={one} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Blue Palace!</h2>
                        <p>$1200/per month </p>
                        <p>New York City </p>
                        <p>Situated in the middle of the down near Hospital</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={two} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">King Palace!</h2>
                        <p>$1000/per month </p>
                        <p>Florida City </p>
                        <p>Situated in the center of the down near Police Station</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={three} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Alizaa Palace!</h2>
                        <p>$1100/per month </p>
                        <p>Los Angles City </p>
                        <p>Situated in the back of the down near Railway</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default House;