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

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:1337/api/documentos/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Search
        updateQuery={updateQuery}
        query={query}
        data={data}
        setData={setData}
        isLoading={isLoading}
        setLoading={setLoading}
      />
      <List query={data} />
    </>
  );
}
