import './App.css';

function App() {
  return (
    <div className='App'>
      <iframe
        title='hangdeh'
        src={process.env.REACT_APP_VIDEO_URL}
        allow='accelerometer, autoplhttp://localhost:8000/videoay; encrypted-media; gyroscope; picture-in-picture'
        className='video-feed'
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
