import React from 'react';
import './home.css';
import Slider from '../../components/Slider';
const Home = () => {
    return (
        <div>
            <div className='heroImage' style={{ backgroundImage: `url(/images/heroimage.png)`, backgroundRepeat: 'no-repeat' , backgroundSize: 'contain'}}></div>
            <div className="bestseller">
                <h3>Explore Our Best Sellers</h3>
            </div>
            <div className='card-container-section'>
                <div className="card-container">
                <a href="./Products"><img src='images/bestseller-one.png' className="card-image" alt="Juice" /></a>
                    <h3>Cold Citrus</h3>
                    <h2>$5</h2>
                </div>
                <div className="card-container">
                <a href="./Products"><img src="images/bestseller-two.png" className="card-image" alt="Juice" /></a>
                    <h3>The Miracle</h3>
                    <h2>$6</h2>
                </div>
                <div className="card-container">
                <a href="./Products"><img src="images/bestseller-three.png" className="card-image" alt="Juice" /></a>
                    <h3>Wellness Cold Brew</h3>
                    <h2>$7</h2>
                </div>
            </div>
            <section className="about-section">
                <h3>Who We Are</h3>
                <article className="about-article">
                    <div className="about-image-section">
                    <img src='images/aboutimage.png' className="about-image" alt="About Us" />
                    </div>
                    <div className="about-paragraph">
                        <p>At Plants, we're dedicated to creating refreshing experiences with our cold-pressed juices. Our mission is simple: to harness the natural goodness of fresh, organic ingredients and transform them into vibrant, nutrient-rich juices that invigorate both body and mind. Join us in celebrating health and wellness, one delicious sip at a time..</p>
                        <a href="./Products"><button>See products</button></a>
                    </div>
                </article>
            </section>
            <div className="reviews">
                <h3>See what our customers think</h3>
            </div>
            <Slider />
        </div>
    );
}
export default Home;
