import styles from './styles.module.scss';

export function KnowMore(){
    return(
        <div className={styles.knowMore}>
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.left}>
                    <div className={styles.leftRelative}>
                        <img className={styles.imgBuild} src='../../../images/img-building.png' />
                        <img className={styles.imgFamily} src='../../../images/img-family-key.png' />

                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <div>
                        <img src='../../../images/icon-know-more.svg'/>
                        <label>Know More About Us</label>
                    </div>
                </div>

            </div>
        </div>
    );
}