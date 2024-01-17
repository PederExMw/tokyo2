import React from "react";

const LandingPage = () => {
  return (
    <section id="home" className="relative h-[90]">
      <div className="grid grid-cols-2">
        <div>
          <h1>
            {Array.from("EXPLORE").map((lett, i) => {
              <span key={i}>{lett}</span>;
            })}
          </h1>
          <h1>
            {Array.from("TOKYO").map((lett, i) => {
              <span key={i}>{lett}</span>;
            })}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
