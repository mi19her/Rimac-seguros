
type Errors = {
  [key: string]: string | undefined;
};

type SetErrors = React.Dispatch<React.SetStateAction<Errors>>;

export const options = [
    { value: "dni", label: "DNI" },
    { value: "carnet", label: "CE" },
    { value: "pasaporte", label: "Pasaporte" },
  ];
  
  export const validateField = (name: string, value: string, setErrors: SetErrors) => {
    let error = "";
    if (name === "id" && value.length !== 8) {
      error = "Debe tener exactamente 8 caracteres.";
    }
    if (name === "phone" && value.length !== 9) {
      error = "El número debe tener exactamente 9 dígitos.";
    }
    setErrors((prev: any) => ({ ...prev, [name]: error }));
    return error === "";
  };

