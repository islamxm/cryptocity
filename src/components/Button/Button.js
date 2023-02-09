import './Button.scss';
import { ScaleLoader } from 'react-spinners';

const Button = ({
    text,
    load,
    disabled,
    style,
    onClick,
    variant = '',
    disableTextTransform
}) => {
    return (
        <button className={"Button" + (load ? ' load ' : '') + (disabled ? ' disabled ' : '') + ` ${variant}` + (disableTextTransform ? ' remove-tt ' : '')} disabled={disabled} onClick={onClick}>
            {
                load ? (
                    <div className="Button__load">
                        <ScaleLoader 
                            height={15}
                            className="Button__load_el"
                            />
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