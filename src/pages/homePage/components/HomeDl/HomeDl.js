import './HomeDl.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Countdown from "react-countdown";

const HomeDl = () => {
    const [startTime, setStartTime] = useState(null)


    const {userInfo} = useSelector(state => state);

    
    useEffect(() => {
        if(userInfo) {
            const {ListingTimer} = userInfo;
            const tr = ListingTimer.split(':')
            const daysInMs = Number(tr[0]) * 86400000;
            const hoursInMs = Number(tr[1]) * 3600000;
            const minsInMs = Number(tr[2]) * 60000;
            const secsInMs = Number(tr[3]) * 1000;
            const totalMs = daysInMs + hoursInMs + minsInMs + secsInMs;
            setStartTime(totalMs)
        }
    }, [userInfo])

   


    return (
        <div className="HomeDl panel">
            <div className="HomeDl__head panel__head">До листинга</div>
            {
                startTime ? (
                    <Countdown 
                        renderer={({days, hours, minutes, seconds}) => {
                            return (
                                <div className="HomeDl__body">
                                    <div className="HomeDl__body_item">
                                        <div className="HomeDl__body_item_val">{days}</div>
                                        <div className="HomeDl__body_item_name">Days</div>
                                    </div>
                                    :
                                    <div className="HomeDl__body_item">
                                        <div className="HomeDl__body_item_val">{hours}</div>
                                        <div className="HomeDl__body_item_name">Hours</div>
                                    </div>
                                    :
                                    <div className="HomeDl__body_item">
                                        <div className="HomeDl__body_item_val">{minutes}</div>
                                        <div className="HomeDl__body_item_name">Minutes</div>
                                    </div>
                                    :
                                    <div className="HomeDl__body_item">
                                        <div className="HomeDl__body_item_val">{seconds}</div>
                                        <div className="HomeDl__body_item_name">Seconds</div>
                                    </div>
                                </div>
                            )
                        }} 
                        date={Date.now() + startTime}/>
                ) : null
            }
            
           
        </div>
    )
}

export default HomeDl;