// REDUX
// import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { setUserInfo } from './redux/actions/users'

// const App = (props) => {
// 	console.log('props: ', props)

// 	const handleOnClick = (type) => {
// 		if (type === 'name') {
// 			props.setUserInfo({ name: 'mookat' })
// 		} else if (type === 'age') {
// 			props.setUserInfo({ age: 23 })
// 		} else {
// 			props.setUserInfo({ gender: 'Male' })
// 		}
// 	}
// 	return (
// 		<div>
// 			<h1>Hello {props.users.info.name}</h1>
// 			<button onClick={() => handleOnClick('name')}>Add Name</button>
// 			<button onClick={() => handleOnClick('age')}>Add Age</button>
// 			<button onClick={() => handleOnClick('gender')}>Add Gender</button>
// 		</div>
// 	)
// }

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.users, //galing sa users store
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(
// 		{
// 			setUserInfo,
// 		},
// 		dispatch,
// 	)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

// HOOKS
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { setUserInfo } from './redux/actions/users'

const App = (props) => {
	const users = useSelector((state) => state.users)

	const dispatch = useDispatch()

	const handleOnClick = (type) => {
		if (type === 'name') {
			// props.setUserInfo({ name: 'mookat' })
			dispatch(setUserInfo({ name: 'mookat' })) //dipatch(sa loob nya is Action)
		} else if (type === 'age') {
			// props.setUserInfo({ age: 23 })
			dispatch(setUserInfo({ age: 23 })) //dipatch(sa loob nya is Action)
		} else {
			// props.setUserInfo({ gender: 'Male' })
			dispatch(setUserInfo({ gender: 'Male' })) //dipatch(sa loob nya is Action)
		}
	}

	console.log('users: ', users)

	return (
		<div>
			<h1>Hello {users.info.name}</h1>
			<button onClick={() => handleOnClick('name')}>Add Name</button>
			<button onClick={() => handleOnClick('age')}>Add Age</button>
			<button onClick={() => handleOnClick('gender')}>Add Gender</button>
		</div>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.users, //galing sa users store
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(
// 		{
// 			setUserInfo,
// 		},
// 		dispatch,
// 	)
// }

export default App
