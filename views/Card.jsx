const React = require('react');

module.exports = function Card({ card }) {
    return (
        <div rel="grow" className="cardCointainer grow" data-id={card.id}>
            {/* <div className='cardContainerImg' data-id={card.id}>
                <img className="cardImg" src={card.picture} data-id={card.id}></img>
            </div> */}
            <img className="cardImg" src={card.picture} data-id={card.id}></img>
            <h5><span className="cardCointeainerHeader" data-id={card.id}> {card.watchName}</span></h5>
            <h6><span className="cardPrice" data-id={card.id}> {card.price} </span></h6>
            <button id="cardBtn" className="btn btn-light" >В корзину</button>
        </div>
    )
}