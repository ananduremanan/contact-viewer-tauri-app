import "./Viewport.module.css"

export default function WelcomeScreen() {
  return (
    <div className="default-content">
      <img
        src="logo.png"
        width="250px"
        height="250px"
        alt="contact viewer logo"
      />
      <h1>Contact Viewer</h1>
      <p>
        version 1.0 <br />
        Select a contact to view details.
      </p>
    </div>
  );
}
