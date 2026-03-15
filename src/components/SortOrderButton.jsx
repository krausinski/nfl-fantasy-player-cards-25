const SortOrderButton = ({ sortOrderVal, onClickSortOrder, isActive }) => {

    let label = '';

    if (sortOrderVal === 'totalPoints') {
        label = 'Total Points'
    } else if (sortOrderVal === 'pointsPerGame') {
        label = 'Points per Game'
    } else {
        label = 'Name'
    }

    return(
        <button
            style={{
                margin:4,
                // backgroundColor: isActive ? "#80d9f0" : "",
            }}
            onClick={() => onClickSortOrder(sortOrderVal)}
        >
            {label}
        </button>
    )
}

export default SortOrderButton