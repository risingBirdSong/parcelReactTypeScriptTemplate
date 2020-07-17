import * as React from "react";

const App = () => {
  const [eitherOr, setEitherOr] = React.useState<number | string>("initial");
  return (
    <div>
      <h1>hello new project!</h1>
    </div>
  );
};

export default App;
