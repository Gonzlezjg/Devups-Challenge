import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

export default function ArticleCard({ data }) {
  const { image, title, content, category, url } = data;
  return (
    <Tooltip title={`categoria: ${category} `} placement="right" arrow>
      <Card sx={{ maxWidth: 270 }}>
        <CardMedia
          component="img"
          height="200"
          width="270"
          image={image}
          alt="products image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{ fontSize: "18px" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            {content}
          </Typography>
          <Link href={url} underline="always">
            Link
          </Link>
        </CardContent>
      </Card>
    </Tooltip>
  );
}
