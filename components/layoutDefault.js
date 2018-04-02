import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import config from '../config';

// Set up year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Set up NProgress loader
Router.onRouteChangeStart = (url) => {
	console.log(`Loading: ${url}`)
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

// Default Layout
export default ({ children, title = 'pstraw App' }) => (
	<div>
	  <Head>
		<title>{config.name} | { title }</title>
		<meta charSet='utf-8' />
		<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		<link rel="icon" type="image/png" href="/static/favicon.png"></link>
		<link href="https://fonts.googleapis.com/css?family=Roboto:100,400,900" rel="stylesheet"></link>
		<link rel="stylesheet" type="text/css" href="/static/base.css"></link>
	  </Head>
	  <header>
		  
		<nav>
			<ul className="nav__area">
				<li><Link href='/'><a>Home</a></Link></li>
				<li><Link href='/about'><a>About</a></Link></li>
				<li><Link href='/contact'><a>Contact</a></Link></li>
			</ul>
			<ul className="nav__area">
				<li><Link href='/'><a className="logo">
					<img src={`${config.logoHeaderUrl}`} />
				</a></Link></li>
			</ul>
			<ul className="nav__area">
				<li><a target="_blank" href="https://google.com/">Twit</a></li>
				<li><a target="_blank" href="https://google.com/">FB</a></li>
				<li><a target="_blank" href="https://google.com/">Insta</a></li>
			</ul>
		</nav>
	  </header>
  
	
		<main className="main-default">
			{ children }
		</main>
  
	  <footer>
		<div className="footer__area">
			<ul>
				<li><Link href='/'><a>Home</a></Link></li>
				<li><Link href='/about'><a>About</a></Link></li>
				<li><Link href='/contact'><a>Contact</a></Link></li>
				<li><Link href='/'><a>Home</a></Link></li>
			</ul>
			<ul>
				<li><Link href='/'><a>Home</a></Link></li>
				<li><Link href='/about'><a>About</a></Link></li>
				<li><Link href='/contact'><a>Contact</a></Link></li>
				<li><Link href='/'><a>Home</a></Link></li>
			</ul>
			<ul>
				<li><Link href='/'><a>Home</a></Link></li>
				<li><Link href='/about'><a>About</a></Link></li>
				<li><Link href='/contact'><a>Contact</a></Link></li>
				<li><Link href='/'><a>Home</a></Link></li>
			</ul>
		</div>
		<div className="footer__area">
			<p>
				<img src={`${config.logoFooterUrl}`} /><br />
				{`${config.description}`}<br />
				&copy; {`${currentYear} ${config.copyrightName}`}
			</p>
		</div>
	  </footer>

	{/* Nav + Footer Styles */}
	<style jsx>{`
		nav {
			display:flex;
			justify-content:space-between;
			height:45px;
			position:fixed;
			top:0;left:0;right:0;
			background:#2f2f2f;
		}
		nav ul {
			position:relative;
			display:flex;
			height:100%;
		}
		nav a {
			align-items:center;
			position:relative;
			display:flex;
			height:100%;
			padding: 0 1.2rem;
			color:#fff;
			transition: .11s all ease-in-out;
		}
		nav a:not(.logo):hover {
			transform:translate3d(0,-3px,0);
		}
		nav img {
			max-height:45px;
			width:auto;
		}
		footer {
			display:flex;
			justify-content:space-between;
			bottom:0;left:0;right:0;
			background:#111;
			padding:1rem .25rem;
			color:#fff;
			font-size:.9rem;
		}
		footer .footer__area {
			display:flex;
			margin:auto 0;
		}
		footer ul, footer a {
			flex-direction:column;
			display:flex;
			height:100%;
			align-items:center;
			justify-content:flex-start;
			text-align:left;
		}
		footer a {
			padding: .2rem 1rem;
		}
		footer p {
			font-size:.75rem;
			padding: .5rem 1rem;
			max-width:280px;
			text-align:right;
			color:#aaa;
		}
		footer img {
			margin-bottom:.75rem;
		}
	`}</style>
	
	{/* Default Global Styles */}
	<style global jsx>{`
	html {
		height:100%;
		font-size:100%;
	}
	body {
		font-family: 'Roboto', Arial, sans-serif;
		height:100%;
		font-weight:400;
		line-height:1.18;
		padding-top:45px;
		background: #f0f0f0;
		font-size:1rem;
	}
	`}</style>
	</div>
  )