import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/">
            <CalendarScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
