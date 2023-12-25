import "./style.scss";

const header = 'header.jsx';
const footer = 'footer.jsx';

const App = () => (
    <div className="container">
        <div className="content">
            <h1>Michael is an Innovator,<br />
                a Change Management Agent,<br /> 
                and a Project Manager.
            </h1>
            <h3>
                Driving client success in San Francisco Bay Area, CA for 10 years! 
                With a strong background in finance and leadership, I am seeking to transition my skills
                and knowledge into project management. I am committed to delivering positive results
                and contributing to innovative solutions that improve work efficiency and support business growth.
                Whether through workshops or certification, I stay on top of my game through continuous learning.
            </h3>
            <button className="button">Read More</button>
            <div style={{paddingTop: '50px'}}>
                <hr />
            </div>
            <h3>
                <div style={{paddingTop: '50px'}}>
                    <strong>An Open Letter to Hiring Teams</strong>
                    <div className="letter-buttons">
                        <button>Cover Letter</button>
                        <button>Resume</button>
                    </div>
                </div>
            </h3>
        </div>
    </div>
)

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    // This is the effect
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          You clicked <code>{count}</code> times
        </p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );