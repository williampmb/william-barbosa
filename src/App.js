import Header from "./components/navbar/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
