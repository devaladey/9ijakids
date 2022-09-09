import './card.css';

export const Card = ({game}) => {
    
    return (
        <div className="card">
            <div className="card-img">
                <img src={game.GameImage} alt={game.GameTitle} />
                <div></div>
            </div>
            <div className="card-text">
                <div className="card-text-inner">
                    <h3 className="card-text-h3">{game.GameTitle}</h3>
                    <p className="card-text-p">{game.GameDescription}</p>
                </div>
            </div>
        </div>
    );
};