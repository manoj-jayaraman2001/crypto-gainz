import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import millify from "millify";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

const CurrencyCard = ({ id, name, imgUrl, price, marketCap, dailyChange, handleClick}) => {
  const fonts = { Lato: "Lato , sans-serif", Karla: "Karla, sans-serif" };
  return (
    <Card className="root" onClick = {handleClick}>
      <CardActionArea sx = {{height:'100%' }}>
        <CardContent>
          <div className="card-top">
            <Typography sx={{ fontFamily: fonts.Lato, fontWeight: 600 }}>
              {`${id}. ${name}`}
            </Typography>
            <img src={imgUrl} alt={`${name}-logo`} className="icon" />
          </div>

          <div>
            <Typography
              sx={{
                fontFamily: fonts.Karla,
                fontSize: "2em",
                color: "#FF630B",
              }}
            >
              {millify(price)}
            </Typography>

            <div className="info">
              <Typography sx={{ fontFamily: fonts.Karla, fontSize: "1em" }}>
                Market Cap:
              </Typography>
              <Typography sx={{ fontFamily: fonts.Karla, fontSize: "1em" }}>
                {millify(marketCap)}
              </Typography>
            </div>
            <div className="info">
              <Typography sx={{ fontFamily: fonts.Karla, fontSize: "1em" }}>
                Daily Change:
              </Typography>
              <Typography
                style={{ color: dailyChange > 0 ? "green" : "red" }}
                sx={{
                  fontFamily: fonts.Karla,
                  fontWeight: 600,
                  fontSize: "1em",
                }}
              >
                {dailyChange}%
              </Typography>
              {dailyChange > 0 ? (
                <ArrowDropUp sx={{ color: "green", fontSize: 30 }} />
              ) : (
                <ArrowDropDown sx={{ color: "red", fontSize: "2em" }} />
              )}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CurrencyCard;
