import { connect } from 'react-redux'
import CaseList from '../components/CaseList'



const mapStateToProps = state => 
	({
		cases: state.cases
	})

const VisibleTodoList = connect(
	mapStateToProps,
)(CaseList)

export default VisibleTodoList