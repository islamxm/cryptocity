import './HeaderLangDrop.scss';


const HeaderLangDrop = ({value, onSelect}) => {
    
    return (
        <div className="HeaderLangDrop">
            <div className={"HeaderLangDrop__item" + (value == 'en' ? ' active ' : '')} onClick={() => onSelect('en')}>En</div>
            <div className={"HeaderLangDrop__item" + (value == 'ru' ? ' active ' : '')} onClick={() => onSelect('ru')}>Ru</div>
        </div>
    )
}

export default HeaderLangDrop;