import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import { Route, Switch } from 'react-router-dom';
import CraftframeShop from './components/CraftframeShop/CraftframeShop';
import General from './components/General/General';
import Portfolio from './components/Portfolio/Portfolio';
import Price from './components/Price/Price';
import Reviews from './components/Reviews/Reviews';
import Discount from './components/Discount/Discount';
import LeaveARequest from './components/LeaveARequest/LeaveARequest';
import AddServices from './components/AddServices/AddServices';
import FeatureVideo from './components/FeatureVideo/FeatureVideo';
import ModelPhoto from './components/ModelPhoto/ModelPhoto';
import VisualManagerInst from './components/VisualManagerInst/VisualManagerInst';
import StepMessanger from './components/LeaveARequest/StepMessanger/StepMessanger';
import StepTel from './components/LeaveARequest/StepTel/StepTel';
import StepEmail from './components/LeaveARequest/StepEmail/StepEmail';
import Aricles from './components/Aricles/Aricles';
import BoxComposition from './components/CraftframeShop/BoxComposition';
import ModelPhotoPortf from './components/ModelPhotoPortf/ModelPhotoPortf';
import VideoPortf from './components/VideoPortf/VideoPortf';
import Mailing from './components/Mailing/Mailing';
import QrCode from '../src/images/QrCode.webp';

const ScreenIdentifier = () => {
  return (
    <section className='screenIdentifier' id='screenIdentifier'>
      <div className='QrCode' id='QrCode'><img src={QrCode} /></div>
      <h3>Компьютерная версия сайта находится в разработке</h3>
      <h4>Пожалуйста, отсканируйте QR-код и перейдите на мобильную версию сайта</h4>
    </section>
  )
}
function App() {
  if (window.screen.availWidth > 450) {
    return <ScreenIdentifier />
  } else {
    return (
      <div className='App-wrapper'>
        <Route exact path='/portfolio/photo' render={() => <ModelPhotoPortf />} />
        <Route exact path='/portfolio/video' render={() => <VideoPortf />} />
        <Header />
        <Navbar />
        <div className='App-wrapper-content'>
          <Switch>
            <Route path='/about-company' render={() => <AboutUs />} />
            <Route exact path='/craftframe-shop' render={() => <CraftframeShop />} />
            <Route exact path='/' render={() => <General />} />
            <Route exact path='/general' render={() => <General />} />
            <Route exact path='/portfolio' render={() => <Portfolio />} />
            <Route exact path='/price' render={() => <Price />} />
            <Route path='/reviews' render={() => <Reviews />} />
            <Route exact path='/discount' render={() => <Discount />} />
            <Route exact path='/discount/mailing-list' render={() => <Mailing />} />
            <Route path='/articles' render={() => <Aricles />} />
            <Route exact path='/craftframe-shop/box-composition' render={() => <BoxComposition />} />
            <Route path='/leave-a-request' render={() => <LeaveARequest />} />
            <Route exact path='/price/add-services' render={() => <AddServices />} />
            <Route exact path='/price/feature-video' render={() => <FeatureVideo />} />
            <Route exact path='/price/model-photoset' render={() => <ModelPhoto />} />
            <Route exact path='/price/visual-manager' render={() => <VisualManagerInst />} />
            <Route exact path='/stepMessanger' render={() => <StepMessanger />} />
            <Route exact path='/stepTel' render={() => <StepTel />} />
            <Route exact path='/stepEmail' render={() => <StepEmail />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
