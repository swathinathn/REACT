
import Unmounting from './class-components/life-cycle-method/Unmounting'
import './App.css'
import { UserApiProvider } from './functional-components/hooks/usecontext/userlist/UserApiContex'
import UserList from './functional-components/hooks/usecontext/userlist/UserList'
import { Form, Link, Route, Routes } from 'react-router-dom'
import Home from './react-router-dom/Home'
import About from './react-router-dom/About'
import Products from './Dynamic-Routing/Products'
import ProductDetail from './Dynamic-Routing/ProductDetail'
import Homee from './nested-routing/pages/Homee'
import Services from './nested-routing/pages/Services'
import Navbar from './nested-routing/Navbar'
import WebDev from './nested-routing/pages/services/WebDev'
import AppDev from './nested-routing/pages/services/AppDev'
import Aboutt from './nested-routing/pages/Aboutt'
import AllProducts from './react-keys/AllProducts'
import './nested-routing/Nav.css';
import Footer from './nested-routing/pages/Footer'
import SimpleForm from './Form/SimpleForm'
import Formee from './Form/Formee'



// import State from './functional-components/state'
// import Props from './functional-components/props'
// import Counter from './functional-components/hooks/useState/Counter'
// import Textinput from './functional-components/hooks/useState/Textinput'
// import ProfileForm from './functional-components/hooks/useState/ProfileForm'
// import Togglebutton from './functional-components/hooks/useState/Togglebutton'
// import UseEff from './functional-components/hooks/useEffect/UseEff'
// import UserList from './functional-components/hooks/useEffect/Userlist'
// import { ThemeProvider } from './functional-components/hooks/usecontext/theme/ThemeContext'
// import Home from './functional-components/hooks/usecontext/theme/Home'
//import Basic from './functional-components/Basic'
// //import Basic from './Basic'
// import Welcome from './embedding-expression/Welcome'
// import Person from './embedding-expression/Person'
// import Items from './react-keys/Items'

function App() {


  return (
    <>
      {/* -----------------embedding -expression------------------------ */}
      {/* <Basic/> */}
      {/* <Welcome/>
       <Person/> */}

      {/** <Unmounting/> */}

      {/** ------------------functional components------------------------------------ */}


      {/*<Basic/>*/}
      {/*<State/>*/}
      {/*<Props/>*/}
      {/*<Counter/>*/}

      {/*<Textinput/>*/}
      {/* <ProfileForm/> */}
      {/* <Togglebutton/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}
      {/*---------------------------------- useContext-------------------------- */}

      {/* <ThemeProvider>
      <Home/>
    </ThemeProvider> */}
      {/**2.------------------------------userlist-------------------------------*/}

      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}

      {/* ---------------------------------react-router-dom -----------------------------------------*/}


      {/*----------------------------------- 1.basic ----------------------------*/}

      {/* <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div> */}
      {/* --------------------------------------2. Dynamic-Routing ---------------------------*/}

      {/* <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes> */}
      {/* navbar */}

      
      {/* <Navbar />


      <Routes>
        <Route path='/' element={<Homee />} />
        <Route path='/About' element={<Aboutt />} />
        <Route path='/Services' element={<Services />}>
          <Route path='web-dev' element={<WebDev />} />
          <Route path='app-dev' element={<AppDev/>} />

        </Route>

      </Routes>
      <Footer/> */}

      {/*----------------------------------- react keys -----------------------------------------*/}
      {/* <Items /> */}
      {/* <AllProducts/> */}

      {/* <SimpleForm/> */}
      <Formee/>



    </>
  )
}

export default App
