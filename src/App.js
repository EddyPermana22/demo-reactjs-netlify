import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/lorem'>Lorem</Link>
          </li>
          <li>
            <Link to='/lost'>Lost Page</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/lorem' element={<LoremPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </header>
    </div>
  );
}

function Homepage() {
  return (
    <>
      <h1>Halo Student! Selamat datang di</h1>
      <img src='https://fir-app-c87a3.web.app/static/media/rg-logo.2ce155d9dc897128091e.png' alt='logo' width={300} />
      <h4>Web ini di deploy menggunakan layanan Netlify.</h4>
    </>
  );
}

function LoremPage() {
  return (
    <div>
      <h1>Lorem Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae turpis diam. Donec porttitor ante sed condimentum ultrices. Curabitur quis sapien arcu. Vivamus sollicitudin nisi non eleifend egestas. Curabitur ultrices cursus eros sit amet pharetra. Mauris tellus enim, elementum sit amet fringilla nec, condimentum quis eros. Etiam porttitor magna viverra, venenatis sem a, auctor mi. Duis consectetur ante non cursus imperdiet. Nam quis iaculis ex. Nullam pellentesque arcu est, nec
        luctus odio tincidunt sed. Nulla et tortor et eros luctus porta. Ut placerat tortor in faucibus mattis. Morbi vehicula malesuada fringilla. Cras et egestas massa, eget bibendum libero. Pellentesque aliquam ultricies eleifend. Duis nec urna ut lectus cursus scelerisque vel vel sem. Curabitur lectus eros, efficitur sed tortor at, egestas commodo nulla. Maecenas quis gravida nisi. Morbi eleifend felis ac velit porta hendrerit. Duis at pretium ex, vel accumsan risus. Curabitur turpis quam,
        faucibus sit amet imperdiet sit amet, faucibus eget leo. Sed blandit tortor ex. Phasellus non mi gravida, congue orci quis, venenatis mauris. Duis non orci eu dolor condimentum congue eu non purus. Maecenas blandit vehicula nibh, feugiat tincidunt quam hendrerit id. Sed rutrum ut turpis in blandit. In et porta felis. Curabitur a libero sed tortor convallis molestie. Vestibulum posuere diam orci, vel dignissim mauris faucibus vitae. Phasellus rhoncus mi at feugiat eleifend. Etiam
        tincidunt sapien vel facilisis blandit. Sed pellentesque orci felis, sed malesuada lacus imperdiet eu. Suspendisse nec semper lectus. Vivamus fringilla pharetra est id commodo. Nulla aliquam tincidunt augue, a venenatis ex aliquam in. Integer aliquet magna ornare, pellentesque ligula vitae, blandit lectus. Curabitur velit neque, aliquam sit amet egestas vitae, viverra bibendum mi. Cras urna sem, efficitur venenatis molestie vestibulum, pretium at massa. Pellentesque at lorem mattis augue
        elementum aliquam eu sed risus. Nullam tincidunt arcu pretium metus aliquet, quis malesuada erat bibendum. Nullam quis justo quis enim dapibus vehicula quis ut leo. Pellentesque dignissim pharetra ipsum et tristique. Ut eu ligula tincidunt velit rhoncus interdum. Quisque dolor mi, congue euismod tellus eu, bibendum luctus nisi. Aliquam tempor ex mi, eget elementum urna cursus sodales. Proin risus arcu, fringilla quis erat eget, luctus ornare lacus. Praesent congue, urna quis tempor
        porta, felis metus aliquam neque, vitae tincidunt velit tellus ut elit. Duis ac pretium augue, vitae interdum quam. Proin commodo dolor augue, vel feugiat neque dictum ut. Proin ut purus vel nisl porttitor semper ac in turpis. Donec in ante diam. Suspendisse ut mollis massa. Sed efficitur at nisl quis convallis.
      </p>
    </div>
  );
}

function Page404() {
  return (
    <>
      <h1>ERROR 404, Page Not Found!</h1>
      <Link to='/'>Back to Home</Link>
    </>
  );
}

export default App;
