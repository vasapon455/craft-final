import '../styles/layout.css'
import NavBar from './NavBar';
import Footer from './Footer'

const Layout = ({children}) => {

  return (
    <div className="layout" id="top">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
