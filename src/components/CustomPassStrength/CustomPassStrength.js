import './CustomPassStrength.scss';
import { useCallback, useEffect, useState } from 'react';


const CustomPassStrength = ({value}) => {
    const [width, setWidth] = useState('0%');
    const [color, setColor] = useState('#2E3339')

    useEffect(() => {
        console.log(value)
    }, [value])
    useEffect(() => {
        switch(value) {
            case 0:
                setWidth('0%')
                setColor('#2E3339')
                break;
            case 1:
                setWidth('25%')
                setColor('red')
                break;
            case 2:
                setWidth('50%')
                setColor('#FF8C00')
                break;
            case 3:
                setWidth('75%')
                setColor('#FFD700')
                break;
            case 4:
                setWidth('100%')
                setColor('#7CFC00')
                break;
            default:
                setWidth('0%')
                setColor('#2E3339')
                break;
        }
    }, [value])
    return (
        <div className="CustomPassStrength">
            <div className="CustomPassStrength__el" style={{width, backgroundColor: color}}></div>
        </div>
    )
}

export default CustomPassStrength;