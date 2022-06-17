//@type-check
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Box, Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useContactForm } from "../hooks/useContactForm";
import { useForm } from "react-hook-form";

const inputStyle = {
  width: "100%",
};

export default function ContactForm() {
  const [values, setValues] = useState("");
  const formContext = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });
  const { watch } = formContext;
  
  const url = "https://5eed24da4cbc340016330f0d.mockapi.io/api";

  const { firstname, lastname, email, phone } = watch();

  const onSubmit = (data) => {
    setValues(data);
    dispatch();
  };
  
  const { response, loading, error, dispatch } = useContactForm({
    method: "POST",
    url: `${url}/newsletter`,
    headers: {
      accept: "*/*",
    },
    body: JSON.stringify(values),
  });



  console.log(response)

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "30px auto 0 auto",
      }}
    >
      <FormContainer onSuccess={onSubmit} formContext={formContext}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <TextFieldElement
              color={"primary"}
              name={"firstname"}
              label={"NOMBRE"}
              sx={inputStyle}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldElement
              color={"primary"}
              name={"lastname"}
              label={"APELLIDO"}
              sx={inputStyle}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldElement
              color={"primary"}
              name={"email"}
              label={"MAIL"}
              sx={inputStyle}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldElement
              color={"primary"}
              name={"phone"}
              label={"TELEFONO"}
              sx={inputStyle}
              required
            />
          </Grid>

          <Grid item xs={12}>
            {error && (
              <Typography
                variant="body1"
                color="error"
                sx={{ textAlign: "center" }}
              >
                ¡Ups!, no se pudo enviar, intente de nuevo más tarde.
              </Typography>
            )}
            {response && (
              <Typography
                variant="body1"
                color="primary"
                sx={{ textAlign: "center" }}
              >
                ¡Enviado correctamente!
              </Typography>
            )}

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <LoadingButton
                loading={loading}
                sx={{ width: "170px", height: "55px", borderRadius: "50px" }}
                mt={2}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                disabled={
                  firstname === "" ||
                  lastname === "" ||
                  email === "" ||
                  phone === ""
                }
              >
                Enviar
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </FormContainer>
    </Box>
  );
}
