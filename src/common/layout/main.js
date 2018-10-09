import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import S01 from "../../stages/S01/S01";
import S02 from "../../stages/S02/S02";

export default props => (
  <main>
    <Switch>
      <Route path="/s01" component={S01} />
      <Route path="/s02" component={() => <S02 list={[]} />} />
      <Redirect from="*" to="/s01" />
    </Switch>
  </main>
);
