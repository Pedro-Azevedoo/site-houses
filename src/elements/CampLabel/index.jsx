import styles from './styles.module.scss';

export function CampLabel(props){
    return(
        <div className={styles.campoLabel}>
            <img src={`../../../images/${props.icon}`}/>
            <label>{props.name}</label>
        </div>

    );
}