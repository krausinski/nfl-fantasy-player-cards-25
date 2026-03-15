const FilterPositionButton = ({ posValue, onClickFilterPos, isActive }) => {
    return(
        <button
            style={{
                margin:4,
                backgroundColor: isActive ? "#80d9f0" : "",
            }}
            onClick={() => onClickFilterPos(posValue)}
        >
            {posValue.toUpperCase()}    
        </button>
    )
}

export default FilterPositionButton