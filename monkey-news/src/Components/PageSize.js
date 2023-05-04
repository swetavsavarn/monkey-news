function PageSize(props) {
    const handlePageSizeChange = (pageSize) => {
        props.onChange(pageSize);
    }

    return (
        <div className="btn-group">
            <button type="button" className="btn btn-secondary">Page Size</button>
            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => handlePageSizeChange(5)}>5</a></li>
                <li><a className="dropdown-item" onClick={() => handlePageSizeChange(10)}>10</a></li>
                <li><a className="dropdown-item" onClick={() => handlePageSizeChange(15)}>15</a></li>
            </ul>
        </div>
    );
}

export default PageSize