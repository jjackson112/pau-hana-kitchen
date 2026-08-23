
function MenuItem({ item }) {
    return (
        <div className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
        </div>
    )
}

export default MenuItem;