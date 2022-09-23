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
                <div className={styles.right}>
                    <div className={styles.title}>
                        <img src='../../../images/icon-know-more.svg'/>
                        <label>Know More About Us</label>
                    </div>

                    <h2>Are You Looking Best Property Near You? Contact Us</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    <div className={styles.years}>
                        <h2>20+</h2>
                        <h4>Years of experience</h4>
                    </div>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

            </div>
        </div>
    );
}