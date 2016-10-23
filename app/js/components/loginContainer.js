// ************************************ IMPORT NODE MODULES ************************************
import {connect} from 'react-redux';

// ************************************ IMPORT COMPONENT ************************************
import {Login} from './login.jsx';

const mapStateToProps = state => ({
  input: state.input
})

export default connect(mapStateToProps)(Login); 