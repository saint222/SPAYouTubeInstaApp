class YouTubeClass extends React.Component {
    render() {
        return <div style={{ textAlign: 'center' }}> <iframe width="600" height="400"
            src="https://www.youtube.com/embed/mpQZVYPuDGU"
            frameborder="0" allow="accelerometer; autoplay; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    }
}
ReactDOM.render(
    <YouTubeClass />,
    document.getElementById("youtubeContent")
);