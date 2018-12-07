import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Step1 from './component/step1/Step1';
import Step2 from './component/step2/Step2';
import Step3 from './component/step3/Step3';

export default (
    <Switch>
      <Route component={ Dashboard} path="/" exact />
      <Route component={ Wizard } path="/wizard" />
      <Route component={ Step1 } path="/wizard/step1" />
      <Route component={ Step2 } path="/wizard/step2" />
      <Route component={ Step3 } path="/wizard/step3" />
    </Switch>
  )