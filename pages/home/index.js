import styles from  './index.module.less'
import { Button } from 'antd-mobile';
import 'antd-mobile/lib/button/style';
export default function Home(){
    return (
        <div className={styles.container}>
                red text
                <Button type="ghost" size="small" inline>small</Button>
        </div>
    )
}