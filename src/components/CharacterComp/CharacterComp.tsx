import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

import {
  DetailCenter,
  Details,
  Title,
  Top,
  Pro,
  Left,
  Middle,
  Right,
  Age,
  Stats,
  Box,
  Value,
  Parameter,
  Film,
  Loader,
} from "../styles/Styled";
import { DotLoader } from "react-spinners";

const CharacterComp = () => {
  const locate = useLocation();
  const [val, setVal] = useState(locate.state.val);
  let [movies, setMovies] = useState<any>([]);
  const [loader, setLoader] = useState<Boolean>(true);

  useEffect(() => {
    setVal(locate.state.val);
  }, [locate]);
  useEffect(() => {
    let filmTitles: string[] = [];
    val?.films?.map(async (value: any) => {
      await Axios.get(value).then((result) => {
        filmTitles.push(result.data.title);
        setLoader(false);
      });
      setMovies((previous: any) => {
        return [previous, filmTitles];
      });
    });
  }, [val]);

  return (
    <Details className="container">
      <DetailCenter className="row justify-content-center">
        <Left className="col-lg-4 col-sm-12">
          <Top>
            <>
              <Title>{val && val?.name}</Title>
              <Age className="fs-5">
                Year Of Birth: {val && val?.birth_year}
              </Age>
            </>
          </Top>
        </Left>
        <Middle className="col-lg-4 col-sm-12">
          <Pro src="assets/images/profile.png"></Pro>
        </Middle>
        <Right className="col-lg-4 col-sm-12">
          <Stats className="row">
            <Box className="col">
              <Value>
                {val &&
                  val?.gender?.charAt(0).toUpperCase() + val?.gender?.slice(1)}
              </Value>
              <Parameter>Gender</Parameter>
            </Box>
            <Box className="col-3">
              <Value>{val && val?.height}</Value>
              <Parameter>Height</Parameter>
            </Box>
            <Box className="col-3">
              <Value>{val && val?.mass}</Value>
              <Parameter>Mass</Parameter>
            </Box>
            <Box className="col">
              <Value>
                {val &&
                  val?.skin_color.charAt(0).toUpperCase() +
                    val?.skin_color?.slice(1)}
              </Value>
              <Parameter>Skin Color</Parameter>
            </Box>
            <Box className="col-3">
              <Value>
                {val?.hair_color.charAt(0).toUpperCase() +
                  val?.hair_color?.slice(1)}
              </Value>
              <Parameter>Hair Color</Parameter>
            </Box>
            <Box className="col-3">
              <Value>
                {val?.eye_color.charAt(0).toUpperCase() +
                  val?.eye_color?.slice(1)}
              </Value>
              <Parameter>Eye Color</Parameter>
            </Box>
          </Stats>
        </Right>
        <div className="row justify-content-center text-center">
          <h1>Featured Movies</h1>
          <div
            className="d-flex flex-wrap justify-content-center align-items-center"
            style={{ minHeight: "124px" }}
          >
            {loader ? (
              <Loader style={{ height: "auto", padding: "25px" }}>
                <DotLoader size="60px" color="#ca7c4e" />
              </Loader>
            ) : (
              movies[1]?.map((mov: string, index: number) => {
                return (
                  <Film key={index} className="col-lg-3 col-sm-6">
                    {mov}
                  </Film>
                );
              })
            )}
          </div>
        </div>
      </DetailCenter>
    </Details>
  );
};

export default CharacterComp;
