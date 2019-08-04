class InstaClass extends React.Component {
    render() {
        return <div style={{ textAlign: 'center'}}><iframe src="https://www.instagram.com/p/B0Dp-clFYsH/embed/"
            width="512" height="610" frameborder="0" scrolling="no"
            allowtransparency="true"></iframe></div>;
    }
}
ReactDOM.render(
    <InstaClass />,
    document.getElementById("instaContent")
);