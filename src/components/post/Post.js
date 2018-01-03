class Post extends Component {
    constructor() {
        super()
        this.state = {
            loading: '数据加载中...',
        }
    }
    componentWillMount() {
        this.handleGetPostData()
    }
    handleGetPostData() {
        this.setState({
            loading: '数据加载中...',
        })
        getPostData().then((postContent) => {
                this.setState({
                    loading: postContent,
                })
        })
    }
    render () {
        return (
            <div>
                <div className='post-content'>{ this.state.loading }</div>
                <button onClick={this.handleGetPostData.bind(this)}>刷新</button>
            </div>
        )
    }
}