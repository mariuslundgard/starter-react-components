import * as React from 'react'

import * as styles from './Button.module.css'

interface Props {
  children: any
}

function Button(props: Props) {
  return <button className={styles.root}>{props.children}</button>
}

export default Button
