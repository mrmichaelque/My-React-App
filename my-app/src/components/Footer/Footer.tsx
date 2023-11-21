import React from 'react';

import styles from './Footer.css';

export interface FooterProps {
  prop?: string;
}

export function Footer({prop = 'default value'}: FooterProps) {
  return <div className={styles.Footer}>Footer {prop}</div>;
}
