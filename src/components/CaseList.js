import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const CaseList = ({cases}) => {

	if (!isLoaded(cases)) {
		return <div>Loading...</div>
	  }
	
	if (isEmpty(cases)) {
		return <div>Cases List Is Empty</div>
	}

	return (
		<div>
			{ /*cases.map( item => <span>{`_CASE_ ${item}`}</span> )*/ console.log(cases) }
		</div>
	)
	
}

const mapStateToProps = state => ({
	cases: state.firestore.data.cases
})

const enhance = compose(
	connect( mapStateToProps ),
	firestoreConnect(
		({authUser}) => authUser ? ['cases'] : []
	)
)

export default enhance(CaseList)