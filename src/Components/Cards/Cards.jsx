
import cards from "../../data/cards.json"
import CardItem from "../CardItem/CardItem"
import styles from "./cards.module.css"


export default function Cards () {
    return(
        <div className={styles.cards}>
            {cards.map((item, index) => (
            <CardItem key={index} {...item}/>
            ))}
        </div>
    );
}

