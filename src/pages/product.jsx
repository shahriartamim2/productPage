import React,{useContext} from "react";
import { counterContext } from "../counter";
import { useState } from "react";
import ip1t from "../images/image-product-1-thumbnail.jpg";
import ip2t from "../images/image-product-2-thumbnail.jpg";
import ip3t from "../images/image-product-3-thumbnail.jpg";
import ip4t from "../images/image-product-4-thumbnail.jpg";
import ip1 from "../images/image-product-1.jpg";
import ip2 from "../images/image-product-2.jpg";
import ip3 from "../images/image-product-3.jpg";
import ip4 from "../images/image-product-4.jpg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import cart from "../images/icon-cart.svg";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import close from "../images/icon-close.svg";





const Product = () => {

  const value = useContext(counterContext)

  const [ishidden, setishidden] = useState(true);
  const [largePhoto, setlargePhoto] = useState(ip1)


  const showPhoto = () => {
    if (ishidden) {
      setishidden(false);
    } else {
      setishidden(true);
    }
  };

  const cngPhoto=(e)=>{
    if (e.target.alt === "img1") {
      setlargePhoto(ip1);
    } else if (e.target.alt === "img2") {
      setlargePhoto(ip2);
    } else if (e.target.alt === "img3") {
      setlargePhoto(ip3);
    } else {
      setlargePhoto(ip4);
    }
    console.log(e.target.alt)
  }

  const swipeRight=()=>{
    if (largePhoto === ip1) {
      setlargePhoto(ip2);
    } else if (largePhoto === ip2) {
      setlargePhoto(ip3);
    } else if (largePhoto === ip3) {
      setlargePhoto(ip4);
    } else if (largePhoto === ip4) {
      setlargePhoto(ip1);
    }

  }
  const swipeLeft = () => {
    if (largePhoto === ip1) {
      setlargePhoto(ip4);
    } else if (largePhoto === ip2) {
      setlargePhoto(ip1);
    } else if (largePhoto === ip3) {
      setlargePhoto(ip2);
    } else if (largePhoto === ip4) {
      setlargePhoto(ip3);
    }
  };

  const countPlus=()=>{
    value.setcount(value.count + 1)
  };


  const countMinus = () => {
    if(value.count>0){
      value.setcount(value.count - 1);
    }
  };

  const addInCart=()=>{
    value.setcartCount(value.cartCount + value.count)
    value.setcount(0)
  }

  return (
    <>
      <section className="hero">
        <div className="product-img">
          <div className="large" onClick={showPhoto}>
            <img src={largePhoto} alt="" />
          </div>
          <div className="small">
            <img onClick={cngPhoto} src={ip1t} alt="img1" />
            <img onClick={cngPhoto} src={ip2t} alt="img2" />
            <img onClick={cngPhoto} src={ip3t} alt="img3" />
            <img onClick={cngPhoto} src={ip4t} alt="img4" />
          </div>
        </div>
        <div className="product-detail">
          <div className="details">
            <p>SNEAKER COMPANY</p>
            <h2>
              Fall Limited Edition <br /> Sneakers
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cum
              temporibus harum reiciendis quo voluptas recusandae veritatis
              perspiciatis dicta incidunt omnis labore consequatur voluptatum
              dolore.
            </p>
          </div>
          <div className="price">
            <div className="discount">
              <span>$125.00</span>
              <span>50%</span>
            </div>
            <div className="normal">
              <span>$250</span>
            </div>
          </div>
          <div className="addcart">
            <div className="productcount">
              <div onClick={countMinus} className="plus">
                <img src={minus} alt="" />
              </div>
              <div className="count">{value.count}</div>
              <div onClick={countPlus} className="minus">
                <img src={plus} alt="" />
              </div>
            </div>
            <div onClick={addInCart} className="addtocart">
              <img src={cart} alt="" />
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </section>

      <div className={ishidden ? "hidden" : "shown"}>
        <div className="product-img">
          <div className="large">
            <div onClick={swipeLeft} className="previous">
              <img src={previous} alt="" />
            </div>
            <img src={largePhoto} alt="" />
            <div onClick={swipeRight} className="next">
              <img src={next} alt="" />
            </div>
          </div>
          <div className="small">
            <img onClick={cngPhoto} src={ip1t} alt="img1" />
            <img onClick={cngPhoto} src={ip2t} alt="img2" />
            <img onClick={cngPhoto} src={ip3t} alt="img3" />
            <img onClick={cngPhoto} src={ip4t} alt="img4" />
          </div>
          <div className="close" onClick={showPhoto}>
            <img src={close} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
