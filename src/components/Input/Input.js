import './Input.scss';


const Input = ({
    type = 'text',
    placeholder,
    label,
    error,
    disabled,
    onChange,
    value,
    hideErrorText,
    readOnly
}) => {
    return (
        <div className={"Input" + (error ? ' error ' : '' + (disabled ? ' disabled ' : '') + (readOnly ? ' readOnly ' : ''))}>
            {
                label ? (
                    <div className="Input__label">
                        {label}
                    </div>
                ) : null
            }
            <input 
                readOnly={readOnly}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder} 
                className="Input__el" />
            {
                error && !hideErrorText ? (
                    <div className="Input__error">
                        {error}
                    </div>
                ) :null
            }
        </div>
    )
}

export default Input;