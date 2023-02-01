import './Notfound.scss';
import Button from '../../components/Button/Button';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';


const Notfound = () => {
    const nav = useNavigate();

    const goHome = () => {
        nav('/', {replace: true})
    }

    return (
        <div className="Notfound page">
            <PageLayout>
                <div className="sb"></div>
                <div className="Notfound__in">
                <h1 className='Notfound__title'>404</h1>
                    <div className="Notfound__action">
                        <Button
                            onClick={goHome}
                            text={'НА ГЛАВНУЮ'}
                            />
                    </div>
                </div>
            </PageLayout>
        </div>
    )
}

export default Notfound;