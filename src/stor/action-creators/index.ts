import * as filterActionCreators from "./filter";
import * as ticketActionCreactors from './tickets';
const ActionCreators = {
    ...filterActionCreators,
    ...ticketActionCreactors
};

export default ActionCreators;