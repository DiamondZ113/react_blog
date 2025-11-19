import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { supabase } from "./SupaBase";

const App = () => {
  const [num, setNum] = useState(10);

  const fetchData = async () => {
    let { data: blog, error } = await supabase.from("blog").select("*");
    console.log(blog);
  };
  fetchData();
  function inc() {
    setNum(num + 1);
  }
  return (
    <div>
      <Home />
      <p>{num}</p>
      <button onClick={inc}>Inc</button>
    </div>
  );
};

export default App;
