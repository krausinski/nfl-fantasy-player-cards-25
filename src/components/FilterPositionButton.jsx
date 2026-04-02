const FilterPositionButton = ({ posValue, onClickFilterPos, isActive }) => {
    return(
        <button
            style={{
                margin:4,
                backgroundColor: isActive ? "#756f96" : "",
            }}
            onClick={() => onClickFilterPos(posValue)}
        >
            {posValue.toUpperCase()}    
        </button>
    )
}

export default FilterPositionButton