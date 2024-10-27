
import styles from "./cardItem.module.css"

export default function CardItem({ name, price, internet, text, color }){
    return(
        <div className={styles[color + `Card`]}>
            <div className={styles[color]}>
                <h2 className={styles.h2}>{name}</h2>
                <p className = {styles.price}>{price}</p>
            </div>
            <p className = {styles.internet}>{internet}</p>
            <p className = {styles.text}>{text}</p>
        </div>
    );
}
