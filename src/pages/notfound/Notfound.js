import './Notfound.scss';
import Button from '../../components/Button/Button';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';
import orderedElemAnim from '../../ex/orderedElemAnim';
import {motion} from 'framer-motion';

const Notfound = () => {
    const nav = useNavigate();

    const goHome = () => {
        nav('/', {replace: true})
    }

    return (
        <div className="Notfound page">
            <PageLayout>
                <div className="sb"></div>
                    <motion.div {...orderedElemAnim?.container} className="Notfound__in">
                        <motion.h1 {...orderedElemAnim?.item} className='Notfound__title'>404</motion.h1>
                        <motion.div {...orderedElemAnim?.item} className="Notfound__action">
                            <Button
                                onClick={goHome}
                                text={'НА ГЛАВНУЮ'}
                                />
                        </motion.div>
                    </motion.div>
            </PageLayout>
        </div>
    )
}

export default Notfound;