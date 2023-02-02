import PageLayout from "../../components/PageLayout/PageLayout";
import ContentLayout from "../../components/ContentLayout/ContentLayout";
import './refPage.scss';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import RefMain from "./components/RefMain/RefMain";
import RefVals from "./components/RefVals/RefVals";
import RefTable from "./components/RefTable/RefTable";

const RefPage = () => {

    return (
        <div className="page RefPage">
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                        <motion.div {...contentEnterAnimProps} className={"RefPage__in"}>
                            <div className="RefPage__head">
                                <div className="RefPage__head_title">
                                    Данные для рефералки
                                </div>
                                <div className="RefPage__head_subtitle">
                                    Приглашая друзей в игру, Вы получаете награду с каждого заработанного MPI в игре, а также различные выплаты за определенные достижения в игре!
                                </div>
                            </div>
                            <div className="RefPage__body">
                                <div className="RefPage__body_item">
                                    <RefMain/>
                                </div>
                                <div className="RefPage__body_item">
                                    <RefVals/>
                                </div>
                                <div className="RefPage__body_item">
                                    <RefTable/>
                                </div>
                            </div>
                        </motion.div>
                    </ContentLayout>
            </PageLayout>
        </div>
    )
}

export default RefPage;