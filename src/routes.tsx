import { Routes, Route, BrowserRouter } from 'react-router-dom'

import App from './pages/app'
import Works from './pages/works'
import Header from './components/header'
import Footer from './components/footer'

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<App />} ></Route>
                <Route path="/works/:name" element={<Works />} ></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
        </>
    )
}
export default AppRoutes