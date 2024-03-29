import React, {Component} from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <BrowserRouter>
                <div className='app-wrapper'>

                    <HeaderContainer/>
                    <Navbar/>

                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/login'
                                   render={() => <LoginPage/>}/>

                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialApp