import './HomeDl.scss';


const HomeDl = () => {
    return (
        <div className="HomeDl panel">
            <div className="HomeDl__head panel__head">До листинга</div>
            <div className="HomeDl__body">
                <div className="HomeDl__body_item">
                    <div className="HomeDl__body_item_val">72</div>
                    <div className="HomeDl__body_item_name">Days</div>
                </div>
                :
                <div className="HomeDl__body_item">
                    <div className="HomeDl__body_item_val">09</div>
                    <div className="HomeDl__body_item_name">Hourse</div>
                </div>
                :
                <div className="HomeDl__body_item">
                    <div className="HomeDl__body_item_val">29</div>
                    <div className="HomeDl__body_item_name">Minuts</div>
                </div>
                :
                <div className="HomeDl__body_item">
                    <div className="HomeDl__body_item_val">02</div>
                    <div className="HomeDl__body_item_name">Seconds</div>
                </div>
            </div>
        </div>
    )
}

export default HomeDl;