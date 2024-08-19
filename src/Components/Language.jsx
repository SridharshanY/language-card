const Language = ({name, img, options}) => {
    return(
        <div className="cardWrapper">
            <img src={img} alt="lang" />
            <h3>{name}</h3>
            <p>{options}</p>
        </div>
    )
}

export default Language