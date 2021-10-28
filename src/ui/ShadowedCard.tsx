import React from "react"
import styles from './ShadowedCard.module.css';

const ShadowedCard: React.FC<{className? : string, grow? : boolean, noPadding? : boolean}> = ({className = '', grow, children, noPadding = false}) => {
  
    let classes = styles.card+ ' ' + className;

    if(grow){
        classes = classes + ' ' +  styles.grow;
    }
    
    if(!noPadding){
        classes = classes + ' ' + styles.padding;
    }

    return (
        <div className={classes}>
            {children}
        </div>
    )
}


export default ShadowedCard