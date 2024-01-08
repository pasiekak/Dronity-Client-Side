import { useForm } from "react-hook-form";
import { ServerCommunicator } from "../../../../../../../shared/services/ServerCommunicator";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { OverlayContext } from "../../../../../../overlay/context/OverlayContext";
import { useNavigate } from "react-router-dom";
import { schemas } from "../../../../../../../shared/schemas/schemas";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.auth.loginForm),
  });
  const navigate = useNavigate();

  const [formDisabled, setFormDisabled] = useState(false);

  const { setType, setMessage, clearOverlay } = useContext(OverlayContext);

  const onSubmit = (data) => {
    setType("loading");
    setFormDisabled(true);
    ServerCommunicator.handleRequest("post", "/login", data).then((res) => {
      if (!res.success) {
        setFormDisabled(false);
        setError("password", { message: res.message });
        clearOverlay();
      } else {
        setMessage("Zalogowano pomyślnie, zaraz nastąpi przekierowanie.");
        setType("message");
        setTimeout(() => {
          clearOverlay();
          navigate("/");
        }, 1000);
      }
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">Login</label>
      <input type="text" {...register("login")} disabled={formDisabled} />
      <p className="error">{errors.login?.message}</p>
      <label htmlFor="password">Hasło</label>
      <input
        type="password"
        {...register("password")}
        disabled={formDisabled}
      />
      <p className="error">{errors.password?.message}</p>
      <input type="submit" value="Zaloguj się" disabled={formDisabled} />
    </form>
  );
};

export default LoginForm;
