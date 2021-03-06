﻿class Init extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { name : '', loading: false };
        this.auth();
    }
    
    auth() {
        //$.ajax({
        //    url: this.props.url,
        //    dataType: 'json',
        //    success: function (data) {
        //        this.setState(data);
        //    }.bind(this),
        //    error: function (xhr, status, err) {
        //        console.log(err);
        //    }
        //});
    }

    componentDidMount() {
        $('#loading').hide();
    }
    
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Dashboard></Dashboard>
            </div>
        );
    }
};
ReactDOM.render(
  <Init url="/home/getauth" />,
  document.getElementById('content')
);