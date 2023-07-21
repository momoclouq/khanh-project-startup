import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";

import PricePage from "./pages/PricePage";
import HelpPage from "./pages/HelpPage";
import CourseDetail from "pages/CourseDetails";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import { DashboardLayout } from "components/Dashboard/DashboardLayout";
import DashboardPage from "pages/DashboardPage";
import MessagesPage from "pages/MessagesPage";
import SessionsPage from "pages/SessionsPage";
import HourOfPurchaseHistoryPage from "pages/HourOfPurchaseHistoryPage";
import MyTutorsPage from "pages/MyTutorsPage";
import MyClassesPage from "pages/MyClassesPage";
import CoursesPage from "pages/MyCoursesPage";
import VideoPlayerPage from "pages/VideoPlayerPage";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pricing" element={<PricePage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="coursedetails/:id" element={<CourseDetail />} />
            <Route path="coursedetails/:orderId/:id" element={<CourseDetail />} />
            <Route path="cart"  element={<Cart />}/>
            <Route path="checkout"  element={<CheckoutPage />}/>

          </Route>
          <Route path="/mainboard" element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="sessions" element={<SessionsPage />} />
            <Route path="my-courses/:orderId" element={<CoursesPage />} />
            <Route
              path="hour-purchase-history"
              element={<HourOfPurchaseHistoryPage />}
            />
            <Route path="my-tutors" element={<MyTutorsPage />} />
            <Route path="my-classes" element={<MyClassesPage />} />
            <Route path="video-player/:id" element={<VideoPlayerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;

