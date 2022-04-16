import Header from '../src/components/Homepage/Header'
import Card from '../src/components/Homepage/Card'
import Footer from '../src/components/Homepage/Footer'
import './App.css'

function App() {
  const content=<span>We are working hard to build an investment product around our co-owners&rsquo; wants and desires. Answer a few short questions and get early access to our innovative, <br id={'break'}/>trust-worthy, and legally solid tools to invest in real estate.</span>
  const link='https://docs.google.com/forms/d/1T53JIZNw5CQRxPn-z52B-nWJlBArOh1NmjUE5N_6ttI/viewform?edit_requested=true'
  
  return (
    <div>
      <Header 
        buttontext={'GET EARLY ACCESS'}
        link={link}
      />
      <Card 
        id="down"
        title={'New relationships are fragile. Help us define boundaries.'}
        content={content}
        buttontext={'GET EARLY ACCESS'}
        link={link}
      />
      <Footer />
    </div>
  );
}

export default App;
