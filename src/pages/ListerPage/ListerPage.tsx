import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../Context/context";
import Axios from "axios";
import { personType } from "../../typing/types";
import CharacterItem from "../../components/CharacterItem/CharacterItem";
import { Pagination } from "@mui/material";
import { Title, Loader } from "../../components/styles/Styled";
import { DotLoader } from "react-spinners";
const ListerPage = () => {
  const { searchTerm } = useContext(CharacterContext);
  const [characters, setCharacters] = useState([]);
  const [paginate, setPaginate] = useState(1);
  const [loader, setLoader] = useState<Boolean>(true);

  const getPeople = async (paging = 1) => {
    const baseUrl = process.env.REACT_APP_STARWARS;
    const url = `${baseUrl}/people/?page=${paging}`;
    Axios.get(url).then((res) => {
      setCharacters(res.data.results);
      setLoader(false);
    });
  };
  useEffect(() => {
    getPeople();
  }, []);

  const handlePagination = async (event: any, value: any) => {
    setPaginate(value);
    await getPeople(value);
  };
  return loader ? (
    <Loader>
      <DotLoader size="100px" color="#ca7c4e" />
    </Loader>
  ) : (
    <div className="container my-5">
      <div className="row justify-content-center">
        <Title>Star Wars Characters</Title>
        {characters
          ?.filter((val: personType) => {
            if (searchTerm === "") {
              return (
                <div key={val.name} className="col">
                  <CharacterItem {...val} />
                </div>
              );
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((val: personType) => {
            return (
              <div key={val.name} className="col">
                <CharacterItem {...val} />
              </div>
            );
          })}
        <div
          className="d-flex justify-content-center "
          style={{ margin: "79px 0px" }}
        >
          <Pagination
            count={characters?.length}
            shape="rounded"
            page={paginate}
            onChange={handlePagination}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default ListerPage;
