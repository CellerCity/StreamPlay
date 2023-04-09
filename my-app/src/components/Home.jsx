import React from 'react';
import image from "../static/img/homeimg.png";
import { NavLink } from 'react-router-dom';

const linkStyle = {
  marginRight: '30px',
  padding: '10px 20px',
  marginTop : '30px'
};

const tagStyle = {
  fontFamily: '-apple-system, system-ui, BlinkMacSystemFont ',
  color: "grey",
  fontWeight : '200',
  fontSize : '56',
  textAlign : 'left',
  marginLeft : '40px',


}

const Home = () => {
  return (
    
            <div className="row">
                  <div className='col-md-6 pt-5'> <br /> <br /> <br />
                    <h1 style={tagStyle}>
                    Experience the ultimate fusion of streaming and gaming entertainment <br />
                    <NavLink to="/videos_all" className=' btn btn-outline-primary' style={linkStyle}>Watch Videos</NavLink>
                    <NavLink to="/games" className='btn btn-outline-secondary' style={linkStyle}>Play Games</NavLink>
                    </h1>
                </div>
                <div className='col-md-6'>
                <img className="image1" src={image} alt="image" />
                </div>
            </div>

  );
};

export default Home;