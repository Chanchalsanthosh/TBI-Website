import './flippable-card.scss';
import Card3 from './card3';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card3 onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;