const Layout = (props) => {
    return (
        <div className="container bootstrap snippets bootdey">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-content">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
