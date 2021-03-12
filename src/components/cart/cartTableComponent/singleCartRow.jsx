import React, { Component } from "react";
import blackCoffee from "../../../assets/images/movies/black-coffee.png";
import madea from "../../../assets/images/movies/madea.png";
import omogoe from "../../../assets/images/movies/omoge.png";

class SingleCart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="product">
          <div class="product-image">
            <img src={blackCoffee} alt="pic" />
          </div>
          <div class="product-details">
            <div class="product-title">Back Coffee</div>
            <p class="product-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              voluptates praesentium alias ab aliquid! Numquam quod, soluta est
              rem quis aspernatur iure quo, magnam, reiciendis laudantium dicta
              voluptates error doloremque.
            </p>
          </div>
          <div class="product-price">12.99</div>
          <div class="product-quantity">
            <input class="form-control" type="number" value="2" min="1"></input>
          </div>
          <div class="product-removal">
            <button class="btn btn-default" title="Remove this movie">
              <i class="fa fa-times text-danger"></i>
            </button>
          </div>
          <div class="product-line-price">25.98</div>
        </div>

        <div class="product">
          <div class="product-image">
            <img src={madea} alt="pic" />
          </div>
          <div class="product-details">
            <div class="product-title">Madea's Withness Protection</div>
            <p class="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              in possimus, enim rem dolor aliquam quae, aspernatur consequuntur
              vero minus officia laudantium recusandae necessitatibus atque
              suscipit libero saepe quasi autem.
            </p>
          </div>
          <div class="product-price">45.99</div>
          <div class="product-quantity">
            <input class="form-control" type="number" value="1" min="1"></input>
          </div>
          <div class="product-removal">
            <button class="btn btn-default" title="Remove this movie">
              <i class="fa fa-times text-danger"></i>
            </button>
          </div>
          <div class="product-line-price">45.99</div>
        </div>

        <div class="product">
          <div class="product-image">
            <img src={omogoe} alt="pic" />
          </div>
          <div class="product-details">
            <div class="product-title">Omoge</div>
            <p class="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              in possimus, enim rem dolor aliquam quae, aspernatur consequuntur
              vero minus officia laudantium recusandae necessitatibus atque
              suscipit libero saepe quasi autem.
            </p>
          </div>
          <div class="product-price">45.99</div>
          <div class="product-quantity">
            <input class="form-control" type="number" value="1" min="1"></input>
          </div>
          <div class="product-removal">
            <button class="btn btn-default" title="Remove this movie">
              <i class="fa fa-times text-danger"></i>
            </button>
          </div>
          <div class="product-line-price">45.99</div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleCart;
