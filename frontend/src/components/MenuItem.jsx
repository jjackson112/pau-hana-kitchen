
function MenuItem({ item }) {
    return (
        <div className="menu-item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p className="category-badge">{item.category}</p>
        </div>
    )
}

export default MenuItem;