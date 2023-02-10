import './PrBar.scss';
import { useEffect, useState } from 'react';
import * as _ from 'lodash';






const total = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];



const PrBar = ({value}) => {
    const [pr, setPr] = useState(0)

    useEffect(() => {
        console.log(pr)
    }, [pr])

    useEffect(() => {
        if(value) {
            setPr((_.round(value) / 100) * 20)
        }
    }, [value])

    return (
        <div className={"PrBar" + (pr >= 1 ? ' start ' : '')}>
            {
                total?.map((i, index) => (
                    <span className={index + 1 <= pr ? 'active' : ''}></span>
                ))
            }
        </div>
    )
}

export default PrBar;