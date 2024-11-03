
import styles from "./cardItem.module.css"
import { useState } from "react";

export default function CardItem({ name, price, internet, text, color }){
   const [flag,setFlag] = useState(false);

    return(
        <div className={flag? styles[color + `Card`]:""}>
        {/* // <div className={'${styles.color} ${flag? "styles.scale": ""' }> */}
            <div className={styles[color]}>
                <h2 className={styles.h2}>{name}</h2>
                <p className = {styles.price}>{price}</p>
            </div>
            <p className = {styles.internet}>{internet}</p>
            <p className = {styles.text}>{text}</p>
            <button className={styles.button} onClick={() => setFlag(!flag)}>Выбери тариф</button>
        </div>
    );
}
