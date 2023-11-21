function App () {
    const message = 'Hello World!';

    return (
        <div>
            <h1>{message}</h1>
            <h1>{new Date().toLocaleDateString()}</h1>
            <input type='number' min={5} style={{ border: '1px solid blue' }}/>
            <textarea autoFocus />
        </div>
    );
}

export default App;