import React from "react"
import Signup from "./Signup";
import { Container } from "react-bootstrap"
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
<<<<<<< HEAD
=======
import PrivateRoute from "./PrivateRoute";
>>>>>>> b1f2a1e1696e95b99aeb1806120a0e69c4636b67

function App() {
	return ( 
		<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Switch>
<<<<<<< HEAD
							<Route exact path="/" component={Dashboard} />
=======
							<PrivateRoute exact path="/" component={Dashboard} />
>>>>>>> b1f2a1e1696e95b99aeb1806120a0e69c4636b67
							<Route path="/signup" component={Signup} />
							<Route path="/login" component={Login} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
