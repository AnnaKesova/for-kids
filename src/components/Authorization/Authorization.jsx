import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import styles from "./Authorization.module.css";
import NameInput from "../UI/NameInput/NameInput";
import BlackButton from "../UI/BlackButton/BlackButton";

function Authorization() {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Авторизация</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <Controller
            control={control}
            rules={{
              required: "Поле обязательное",
              pattern: {
                value: /\S+@\S+\.\S+/gi,
                message: "Неверный формат email",
              },
            }}
            render={({
              field: { onChange, onBlur, value, type = "email" },
            }) => (
              <NameInput
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                type={type}
                placeholder="username@address.ru"
                inputId="authEmail"
                label="Электронная почта"
                helperText={errors.email?.message?.toString()}
                error={!!errors.email?.message}
                onClick={() => resetField("email")}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: "Поле обязательное",
              pattern: {
                value: /^\w{6,}$/m,
                message:
                  "Пароль латинские буквы верхнего и нижнего регистра, не менее 6 символов",
              },
            }}
            render={({
              field: { onChange, onBlur, value, type = "password" },
            }) => (
              <NameInput
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                type={type}
                placeholder="Введите пароль"
                inputId="password"
                label="Пароль"
                helperText={errors.password?.message?.toString()}
                error={!!errors.password?.message}
                onClick={() => resetField("password")}
              />
            )}
            name="password"
          />
        </div>
        <BlackButton buttonText="Войти" type="submit" />
      </form>
      <div className={styles.buttons}>
        <button
          className={styles.link}
          onClick={() => navigate('/signup')}
          type="button"
        >
          Регистрация
        </button>
        <button
          className={styles.link}
          onClick={() => navigate("/")}
          type="button"
        >
          На главную
        </button>
      </div>
    </div>
  );
}

export default Authorization;
