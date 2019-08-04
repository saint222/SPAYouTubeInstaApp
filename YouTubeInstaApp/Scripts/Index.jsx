const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                        <a title="Home">
                                            <img src=" http://icons.iconarchive.com/icons/artua/mac/32/Home-icon.png" />
                                        </a>
                                    </Link>
                                </li>        
                                <li>
                                    <Link title="Youtube" style={{ fontSize: '18px', fontWeight: 'bold' }} to="/youtube">YouTube</Link>
                                </li>
                                <li>
                                    <Link title="Instagram" style={{ fontSize: '18px', fontWeight: 'bold' }} to="/instagram">Instagram</Link>
                                </li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            //<nav className="Nav">
            //    <ul class="nav nav-tabs">
            //        <li className="Nav__item">
            //            <Link title="Home" style={{ color: 'darkGreen', fontSize: '27px', fontWeight: 'bold' }} to="/">Home</Link>
            //        </li>
            //        <li className="Nav__item">
            //            <Link title="YouTube" style={{ color: 'darkGreen', fontSize: '27px', fontWeight: 'bold' }} to="/youtube">YouTube</Link>
            //        </li>
            //        <li className="Nav__item">
            //            <Link title="Instagram" style={{ color: 'darkGreen', fontSize: '27px', fontWeight: 'bold' }} to="/instagram">Instagram</Link>
            //        </li>
            //    </ul>
            //</nav>
        );
    }
}

ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={HomeClass} />
                <Route path="/youtube" component={YouTubeClass} />
                <Route path="/instagram" component={InstaClass} />                 
            </Switch>
        </div>
    </Router>,
    document.getElementById("indexContent")
)