import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(count * 0);
  };

  return (
<div className="min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 gap-7 items-center justify-center flex-col">
          <h1 className="text-9xl test-count">{count}</h1>
          <div className="text-center lg:w-2/3 w-full mt-8">
            <div className="flex flex-col sm:flex-row justify-center gap-12">
              <button onClick={increment} className="py-2 px-10 pushable w-full sm:w-auto mb-4 sm:mb-0">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">Increase</span>
              </button>
              <button onClick={reset} className="btn py-2 px-10 pushable w-full sm:w-auto">
                <span className="shadow-2"></span>
                <span className="edge-2"></span>
                <span className="front-2">Reset</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
};

export default Counter;
