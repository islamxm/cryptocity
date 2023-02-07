import './Button.scss';
import { ScaleLoader } from 'react-spinners';

const Button = ({
    text,
    load,
    disabled,
    style,
    onClick,
    variant = ''
}) => {
    return (
        <button className={"Button" + (load ? ' load ' : '') + (disabled ? ' disabled ' : '') + (variant ? ' danger ' : '')} disabled={disabled} onClick={onClick}>
            {
                load ? (
                    <div className="Button__load">
                        <ScaleLoader 
                            height={15}
                            color='var(--aqua)'/>
                    </div>
                ) : null
            }
            <div className="Button__text">
                {text}
            </div>
        </button>
    )
}

export default Button;