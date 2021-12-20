import './App.css';

function App() {
  return (
    <div className='App'>
      <iframe
        title='hangdeh'
        src={'http://localhost:8000/video'}
        allow='accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture'
        className='video-feed'
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
