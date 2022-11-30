import "./Iframe.css"
const Iframe = () => {
    return (
        <>
            <p className="advertisement">Реклама</p>
            <iframe className="iframe" title="AD" src="https://www.youtube.com/embed/VjqttGTtam0" allow="allowfullscreen></" width="420" height="315"></iframe>
            <iframe width="420" height="315" title="AD" src="https://www.youtube.com/embed/GLlEfWNXJaM" allow="fullscreen"></iframe>
        </>
    );
}

export default Iframe;
