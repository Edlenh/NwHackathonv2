import "./Loading.css";

export function Loading() {
  return (
    <div className="container">
      <div className="loader-container">
        <div className="spinner"></div>
      </div>

      {/* <div className="main-content">
        <div className="buttons">
          <button className="btn">
            <a href="#">Read Article</a>
          </button>
          <button className="btn get-quote">
            Generate Quote
          </button>
        </div>
        <div className="quote-section">
          <blockquote className="quote">
            If you do not express your own original ideas, if you do not listen
            to your own being, you will have betrayed yourself.
          </blockquote>
          - <span className="author">Rollo May</span>
        </div>
      </div> */}
    </div>
  );
}