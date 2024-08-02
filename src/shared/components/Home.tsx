import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchData } from "../../features/slices/dataSlice";
import { RootState } from "../../app/store";
import Footer from "./Footer";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">A Space Unfolds</h1>
      </header>
      <main className="flex-grow text-center">
        <p className="text-xl">
          {data?.underConstructionMessage ||
            "Website Under Construction. Please Check Back for Updates"}
        </p>
      </main>
    </div>
  );
};

export default Home;
