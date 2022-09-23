import styles from './styles.module.scss';

export function FindProperty(){
    return(
        <>
            <div className={styles.findProperty}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            <h1>We Help You To</h1>
                            <h1>Find Best Propery</h1>
                            <h1>For Living</h1>
                        </div>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form by injected humour</p>

                        <button>Find Property</button>

                    </div>

                    <div className={styles.imgHero} />

                </div>
            </div>
        </>
    );
}