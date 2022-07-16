import { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import List from "../components/List";
import Search from "../components/Search";
import LoaderSpiner from "../components/LoaderSpiner";

export default function Index() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [query, updateQuery] = useState("");

  updateQuery() {
    useEffect(() => {
    setLoading(true);
    const fetchHandler = async () => {
      await fetch("http://localhost:1337/api/documentos/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };
    fetchHandler();
  }, []);
  }

  if (isLoading) return <LoaderSpiner />;
  if (!data)
    return <Alert color="danger">{JSON.stringify(data, null, 2)}</Alert>;

  return (
    <>
      <Search updateQuery={updateQuery} query={query} />
      <List data={data.data} query={query} />
    </>
  );
}
