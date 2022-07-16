import { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Alert, Spinner } from "reactstrap";
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
        alert(res);
        setData(res);
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <Search updateQuery={updateQuery} query={query} />
      <p>{data.data}</p>
      <List data={data} />
    </>
  );
}
