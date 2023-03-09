import PageLayout from "../../components/PageLayout/PageLayout";
import { ToastContainer } from "react-toastify";
import ContentLayout from "../../components/ContentLayout/ContentLayout";


const AcPage = () => {
    return (
        <div className="page HomePage">
            <ToastContainer/>
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <h1>Страница в разработке</h1>
                </ContentLayout>
            </PageLayout>
        </div>
    )
}

export default AcPage;