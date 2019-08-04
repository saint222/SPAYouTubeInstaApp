//class HomeClass extends React.Component {
//    render() {
//        return <h1>HC</h1>;
//    }
//}
//ReactDOM.render(
//    <HomeClass />,
//    document.getElementById("homeContent")
//);
//import { BrowserRouter } from 'react-router-dom';
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;

class Home extends React.Component {
    render() {
        return <div class="row" style={{textAlign: 'center'}}>
            <div class="col-md-12">
                <img src="https://i.gifer.com/87t7.gif" />                
            </div>
        </div>;
    }
}
class YouTube extends React.Component {
    render() {
        return <div style={{ textAlign: 'center' }}><iframe width="600" height="400"
            src="https://www.youtube.com/embed/mpQZVYPuDGU" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen></iframe></div>;
    }
}
class NotFound extends React.Component {
    render() {
        return <h2>Ups...404...Not found...</h2>;
    }
}
class Insta extends React.Component {
    render() {
        return <div style={{ textAlign: 'center' }}><iframe src="https://www.instagram.com/p/B0Dp-clFYsH/embed/"
            width="512" height="610" frameborder="0" scrolling="no"
            allowtransparency="true"></iframe></div>;
    }
}
class Nav extends React.Component {
    render() {
        return (
            <nav className="Nav">
                <ul class="nav nav-tabs">
                    <li className="Nav__item">
                        <Link title="Home" style={{ color: 'darkGreen', fontSize: '27px', fontWeight: 'bold' }} to="/">Home</Link>
                            </li>
                            <li className="Nav__item">
                        <Link title="YouTube" style={{ color: 'darkGreen', fontSize: '27px', fontWeight: 'bold' }} to="/youtube">YouTube</Link>
                            </li>
                            <li className="Nav__item">
                        <Link title="Instagram" style={{ color: 'darkGreen', fontSize: '27px', fontWeight: 'bold' }} to="/insta">Instagram</Link>
                    </li>
                </ul>
            </nav>
        );

        //return <nav style={{ fontSize: '20px'}}>
        //    <Link to="/">Главная</Link>
        //    <Link to="/youtube">YouTube</Link>
        //    <Link to="/insta">Instagram</Link>            
        //</nav>;
    }
}
ReactDOM.render(
    <Router>        
        <div>            
            <Nav />            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/youtube" component={YouTube} />
                <Route path="/insta" component={Insta} />  
                
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("homeContent")
)
