import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Alert } from "reactstrap";
import List from "../components/List";
import Search from "../components/Search";
import LoaderSpiner from "../components/LoaderSpiner";

export default function Index() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [query, updateQuery] = useState("");

  const data2 = ["123456789", "123456789", "123456789", "123456789"];

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:1337/api/documentos/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoaderSpiner />;
  if (!data)
    return <Alert color="danger">{JSON.stringify(data, null, 2)}</Alert>;

  return (
    <>
      <Search updateQuery={updateQuery} query={query} />
      <List data={data} />
    </>
  );
}