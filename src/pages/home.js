import { Button } from '@mui/material';
import '../components/ProductCard/ProductCard.css';

const HomePage = (props) => {
    console.log(props.products);
    return (
        <div>
            <div className="products">
                {props.products.map(({ id, title, image, description, price }) => (
                    <div key={id} className="card-container">
                        <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
                        <div className="card-data">
                            <h3 className='card-title'> {title} </h3>
                            {/* truncate */}
                            <p className='card-description'> {description} </p> 
                            <h5 className='card-price'> ${price} </h5>
                        </div>
                        <Button variant="text" className='card-button'> ADD TO CART </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const x = 10;

export default HomePage;