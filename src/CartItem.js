import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state ={
            price:999,
            title: 'Phone',
            qty:1,
            img: ''
        }
    }
    render(){
        const { price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="rifht-block">
                    <div style={{fontSize:'40'}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="actions-icons" src="https://cdn-icons-png.flaticon.com/512/9919/9919268.png"/>
                        <img alt="decrease" className="actions-icons" src="https://cdn-icons-png.flaticon.com/512/2801/2801932.png"/>
                        <img alt="delete" className="actions-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
                    </div>
                
                </div>
            </div>
        )
    }
}

const styles={
    image: {
          height:110,
          width:110,
          borderRadius:4,
          background:'#ccc'
    }
}

export default CartItem;