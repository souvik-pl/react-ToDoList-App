import React from 'react';
import DenseAppBar from './components/appBar';
import Main from './components/todoList';

class App extends React.Component {					
	
	render(){
		return (
			<div>
				<DenseAppBar />
				<br />
				<Main />
				
			</div>
		);
	}
}

export default App;
