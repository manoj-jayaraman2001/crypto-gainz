import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import moment from "moment";
import demoImg from "../assets/images/cryptos1.webp";
import demoNewsIcon from "../assets/images/crypto-news-icon-M5MGET-modified.png";
import "../styles/news.css";
const ClickableNewsCard = ({
  newsUrl,
  newsTitle,
  imageUrl,
  newsDescription,
  newsProviderIconUrl,
  newsProviderName,
  datePublished,
}) => {
  // Demo URL in case imageUrl is missing

  // Function to calculate "hours ago"
  const calculateTimeAgo = (datePublished) => {
    const now = moment();
    const published = moment(datePublished);
    const hoursAgo = now.diff(published, "hours");
    const minutesAgo = now.diff(published, "minutes");

    if (hoursAgo >= 1) {
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    } else {
      return "Just now";
    }
  };

  // Truncate description to a maximum length of 100 characters
  const truncatedDescription = newsDescription.substring(0, 100);

  return (
    <Card sx={{ maxWidth: 500, minWidth: 150 }}>
      <CardActionArea
        component="a"
        href={newsUrl}
        target="_blank"
        sx={{ padding: "1.2em", height: "100%" }}
      >
        <div style={{ display: "flex", flexDirection: "row-reverse", gap: 10 }}>
          <img
            style={{ maxHeight: "7em", maxWidth: "7em" }}
            src={imageUrl || demoImg}
            alt={newsTitle}
            className="news-img"
          />
          <Typography
            gutterBottom
            variant="p"
            fontFamily={"Lato, sans-serif"}
            fontSize={"1.2em"}
          >
            {newsTitle}
          </Typography>
        </div>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            fontSize={"0.9em"}
            fontFamily={"Lato, sans-serif"}
          >
            {truncatedDescription}...
          </Typography>
        </CardContent>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "0.5em" }}
        >
          <Avatar
            src={newsProviderIconUrl || demoNewsIcon}
            alt={newsProviderName}
            sx={{ width: 18, height: 18 }}
          />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="span"
            style={{ marginLeft: "0.5em", fontSize: "0.8em" }}
            fontFamily={"Lato, sans-serif"}
          >
            {newsProviderName} - {calculateTimeAgo(datePublished)}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ClickableNewsCard;
