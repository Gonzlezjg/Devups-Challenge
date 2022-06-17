import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Brush from "../images/BRUSH-ARTICLES.png";
import ArticleCard from "./ArticleCard";
import ArrowRight from "../icons/ArrowRight";
import { useAxios } from "../hooks/useAxios";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { getParam } from "../helper/getParam";
import useMediaQuery from "@mui/material/useMediaQuery";

const Articles = () => {
  const matches = useMediaQuery("(min-width:400px)");
  const url = "https://5eed24da4cbc340016330f0d.mockapi.io/api";
  const [category, setCategory] = useState("");

  const CustomCategoryButtom = ({ children, onClick }) => {
    const handleClick = () => {
      window.history.pushState({}, "", `?leftBar=${onClick}`);
      setCategory(onClick);
    };

    return (
      <Box
        mb={4}
        sx={{
          background: "none",
          border: "none",
          minWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: getParam() === onClick ? "primary.main" : "text",
          "&:hover": {
            color: "primary.main",
            transition: "ease-out 0.3s",
          },
          "&:hover div.arrow-icon svg": {
            visibility: "visible",
          },
        }}
        onClick={handleClick}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "23px",
            fontWeight: "400",
            cursor: "default",
          }}
        >
          {children}
        </Typography>
        <div className="arrow-icon" style={{ visibility: "hidden" }}>
          <ArrowRight size={20} />
        </div>
      </Box>
    );
  };

  const { response, loading, error } = useAxios({
    method: "GET",
    url: category ? `${url}/articles?filter=${category}` : `${url}/articles`,
    headers: {
      accept: "*/*",
    },
  });

  return (
    <section style={{ height: "100%", marginBottom: "5rem 0" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 12rem",
          textAlign: "center",
        }}
      >
        <header>
          <Typography
            variant="h2"
            sx={{
              fontSize: `${matches ? "60px" : "80px"}`,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Nuestros Artículos
          </Typography>
          <img
            src={Brush}
            alt="brush"
            style={{
              marginTop: "-45px",
              width: `${matches ? "250px" : "400px"}`,
            }}
          />
        </header>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Grid
            container
            spacing={matches ? 1 : 2}
            mt={4}
            mb={4}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  p: 4,
                  margin: "auto",
                  width: "300px",
                  height: "300px",
                  flexGrow: 1,
                  boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.07)",
                  borderRadius: "10px",
                }}
                elevation={12}
              >
                <CustomCategoryButtom onClick="">Todos</CustomCategoryButtom>
                <CustomCategoryButtom onClick="Productos">
                  Productos
                </CustomCategoryButtom>
                <CustomCategoryButtom onClick="Recetas">
                  Recetas
                </CustomCategoryButtom>
                <CustomCategoryButtom onClick="Consejos">
                  Consejos
                </CustomCategoryButtom>
              </Box>
            </Grid>
            <Grid item xs={4} md={9}>
              <Grid
                container
                spacing={1}
                columns={{ sm: 8, md: 12 }}
                alignItems="center"
              >
                {loading &&
                  Array(20)
                    .fill("devups")
                    .map((_, key) => (
                      <Grid
                        item
                        xs={8}
                        md={4}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                        key={key}
                      >
                        <Skeleton
                          variant="rectangular"
                          width={270}
                          height={200}
                        />
                        <Skeleton variant="text" width={200} />
                        <Skeleton variant="text" width={270} height={50} />
                      </Grid>
                    ))}
                {response &&
                  response?.map((item, key) => (
                    <Grid item xs={8} md={4} key={key}>
                      <ArticleCard data={item} />
                    </Grid>
                  ))}

                {error && (
                  <Typography variant="h3" color="error">
                    No es posible cargar los resultados.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
  );
};

export default Articles;
