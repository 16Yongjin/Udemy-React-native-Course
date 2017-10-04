import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployFormReducer from './EmployFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployFormReducer,
    employees: EmployeeReducer
});
