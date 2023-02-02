import PageLayout from "../../components/PageLayout/PageLayout";
import ContentLayout from "../../components/ContentLayout/ContentLayout";
import './WalletPage.scss';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import WalletTable from "./components/WalletTable/WalletTable";


const WalletPage = () => {
    return (
        <div className="WalletPage page">
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <motion.div {...contentEnterAnimProps} className={"WalletPage__in"}>
                        <div className="WalletPage__head">26 Сентября 2022</div>
                        <WalletTable/>
                    </motion.div>
                </ContentLayout>
            </PageLayout>
        </div>
    )
}

export default WalletPage;