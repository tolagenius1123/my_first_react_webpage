import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Page(){
	return(
		<div className='page'>
			<Header/>
			<div className='main-page'>
				<h1>My First React Website</h1>
				<ol className='myList'>
					<li>I'm excited to learn React</li>
					<li>I love building beautiful UI/UX</li>
					<li>I love Front-end Technologies</li>
				</ol>
			</div>
			
			<Footer/>
		</div>
	)
}
root.render( 
	<Page/>
);

