import { Stack } from "@mui/material";
import SearchFilterPanel from "../components/SearchFilterPanel";
import CountryCard from "../components/CountryCard";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../App/hook";
import { changeLimit } from "../Feature/countrySlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [limit, setLimit] = useState<number>(12);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setLimit(limit + 12);
    dispatch(changeLimit(limit + 12));
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("limit", `${limit + 12}`);
    const searchQuery = urlParams.toString();
    navigate(`/?${searchQuery}`);
  };

  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const limit = urlParams.get("limit");
    if (limit) {
      const limitNumber = parseInt(limit);
      dispatch(changeLimit(limitNumber));
      setLimit(limitNumber);
    }
  }, [dispatch, location.search]);

  return (
    <>
      <SearchFilterPanel />
      <Stack>
        <CountryCard></CountryCard>
      </Stack>
      <LoadingButton
        //loading
        variant="outlined"
        onClick={handleClick}
      >
        See more countries
      </LoadingButton>
    </>
  );
};

export default Home;
