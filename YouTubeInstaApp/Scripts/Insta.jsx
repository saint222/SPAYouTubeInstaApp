//21379dc7503347f0b9ff87605a99b676 CLIENT ID

class InstaClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=17622009932.21379dc.275c953512404b549652811fe1bbd3d0")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container" style={{ width: '700px' }}>
                    <div className="head" style={{ height: '50px', background: 'pink', borderStyle: 'solid', width: '650px' }}>
                        <img style={{ float: 'left', margin: '0 10px', paddingTop: '4px' }} title="Instagram" src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/32/Instagram-icon.png" />
                        <p style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: '19px', paddingTop: '8px' }}>Alexandr Kalyuganov</p>
                    </div>
                    {items.map(item => (
                        <div className="photoes">
                            <img src={item.images.thumbnail.url} style={{ float: 'left', margin: '0 10px', padding: '5px' }} />
                            <div style={{ float: 'left', margin: '0 7px', paddingTop: '130px' }}><img src="http://icons.iconarchive.com/icons/icons8/ios7/16/Messaging-Like-icon.png" /> {item.likes.count} </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}