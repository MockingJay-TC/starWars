import React from "react";
import { personType } from "../../typing/types";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Frame,
  Profile,
  Image,
  Circle1,
  Circle2,
  Initial,
  Name,
  Age,
  Actions,
  MoreInfo,
  Stats,
  Box,
  Value,
  Parameter,
} from "../styles/Styled";

const CharacterItem = ({ ...val }: personType) => {
  const navigate = useNavigate();

  const handleClick = (val: personType) => {
    navigate("/character-info", { state: { val } });
    // let lastViewed: any = [val];
    let view = JSON.parse(localStorage.getItem("lastViewed") || "[]");
    if (view.length === 3) view.shift();
    view.push(val);
    localStorage.setItem("lastViewed", JSON.stringify(view));
  };
  return (
    <Frame>
      <Center>
        <Profile>
          <Image>
            <Circle1 />
            <Circle2 />
            <Initial>
              <span>{val.name?.split(" ")[0]?.slice(0, 1)}</span>
              <span>{val.name?.split(" ")[1]?.slice(0, 1)}</span>
            </Initial>
          </Image>
          <Name>{val.name}</Name>
          <Age>Y.O.B: {val.birth_year}</Age>
          <Actions>
            <MoreInfo
              onClick={() => {
                handleClick(val);
              }}
            >
              More Detials...
            </MoreInfo>
          </Actions>
        </Profile>
        <Stats>
          <Box>
            <Value>
              {val.gender.charAt(0).toUpperCase() + val.gender.slice(1)}
            </Value>
            <Parameter>Gender</Parameter>
          </Box>
          <Box>
            <Value>{val.height}</Value>
            <Parameter>Height</Parameter>
          </Box>
          <Box>
            <Value>{val.mass}</Value>
            <Parameter>Mass</Parameter>
          </Box>
        </Stats>
      </Center>
    </Frame>
  );
};

export default CharacterItem;
