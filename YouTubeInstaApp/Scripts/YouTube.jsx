class YouTubeClass extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                    <iframe width="500" height="350"
            src="https://www.youtube.com/embed/mpQZVYPuDGU"
            frameborder="0" allow="accelerometer; autoplay; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-5 col-md-offset-2">
                    <iframe width="500" height="350"
                src="https://www.youtube.com/embed/Zz6eOVaaelI"
            frameborder="0" allow="accelerometer; autoplay; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

