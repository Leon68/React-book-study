class Post extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            content: ''
        }
    }
    componentWillMount() {
        this.handleGetPostData()
    }
    handleGetPostData() {
        this.setState({
            loading: true,
            content: ''
        })
        getPostData().then((postContent) => {
            if (postContent) {
                this.setState({
                    loading: false,
                    content: postContent
                })
            }
        })
    }
    render () {
        return (
            <div>
                <div className='post-content'>
                    { this.state.loading? '数据加载中...' : this.state.content }
                </div>
                <button onChange={this.handleGetPostData.bind(this)}>刷新</button>
            </div>
        )
    }
}