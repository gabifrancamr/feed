import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import cover from '../assets/capa.svg'
import { Avatar } from './Avatar'

export function Sidebar() {
 return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src={cover} 
            alt="foto da capa" 
        />
        <div className={styles.profile}>
            <Avatar src="https://github.com/gabifrancamr.png" /> 
            <strong>Gabriela França</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
 )
}