import './HomePage.scss';
import PageLayout from '../../components/PageLayout/PageLayout';


import HomeNot from './components/HomeNot/HomeNot';
import HomeUl from './components/HomeUl/HomeUl';
import HomeSale from './components/HomeSale/HomeSale';
import HomeDl from './components/HomeDl/HomeDl';
import HomeCon from './components/HomeCon/HomeCon';
import HomeBuy from './components/HomeBuy/HomeBuy';
import HomeBalance from './components/HomeBalance/HomeBalance';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
const HomePage = () => {
    return (
        <div className="page HomePage">
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <motion.div {...contentEnterAnimProps} className="HomePage__in">
                        <div className="HomePage__item">
                            <HomeBalance/>
                        </div>
                        <div className="HomePage__item">
                            <HomeBuy/>
                        </div>
                        <div className="HomePage__item">
                            <HomeDl/>
                        </div>
                        <div className="HomePage__item">
                            <HomeCon/>
                        </div>
                        <div className="HomePage__item">
                            <HomeUl/>
                        </div>
                        <div className="HomePage__item">
                            <HomeSale/>
                        </div>
                        <div className="HomePage__item">
                            <HomeNot/>
                        </div>
                    </motion.div>
                </ContentLayout>
                
            </PageLayout>
        </div>
    )
}

export default HomePage;