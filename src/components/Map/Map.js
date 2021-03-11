import React from 'react';
import styles from './Map.module.scss';

/**
 * Google Map iframe
 * @param {} props 
 */
export default function Map(props) {
    const { src } = props;
    return (
        <iframe className={styles.container} src={src} height="300" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    )
}

