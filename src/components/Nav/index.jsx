import { CampLabel } from '../../elements/CampLabel';
import styles from './styles.module.scss';

export function Nav(){
    var infos = [
        {
            "name": "mail.uremail.com",
            "icon": "icon-airplane.svg"
        },
        {
            "name": "(14) 98219-6308",
            "icon": "icon-tel.svg"
        }
    ];
    return(
        <nav className={styles.nav}>
            {/* Blue Part */}
            <div className={styles.infos}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        {infos.map((camp)=> <CampLabel name={camp.name} icon={camp.icon} />)}
                    </div>
                    <CampLabel name="Login / SignUp" icon="icon-user.svg" />

                </div>
            </div>
            {/* Nav Part */}
            <div className={styles.bgNav}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <img src="../../../images/icon-logo.svg" />
                        <label>Sweet Home</label>
                    </div>

                    <div className={styles.right}>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Property</li>
                            <li>Agents</li>
                            <li>Pages</li>
                            <li><button>Contact Us</button></li>

                        </ul>
                        <div className={styles.hamburger}>

                        </div>
                    </div>

                </div>

            </div>

        </nav>
    );
}