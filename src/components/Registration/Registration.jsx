import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import styles from "./Registration.module.css";
import NameInput from "../UI/NameInput/NameInput";
import BlackButton from "../UI/BlackButton/BlackButton";

function Registration() {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <Controller
            control={control}
            rules={{
              required: "Поле обязательное",
              minLength: {
                value: 2,
                message: "Длина должна быть больше 2 символов",
              },
              pattern: {
                value: /^(?=.{1,29}$)[а-яА-ЯёЁa\s-]*$/gi,
                message: "Допустимые символы: пробел, кириллические, тире",
              },
            }}
            render={({ field: { onChange, onBlur, value, type = "text" } }) => (
              <NameInput
                required
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                type={type}
                placeholder="Иван"
                inputId="first_name"
                label="Имя"
                helperText={errors.first_name?.message?.toString()}
                error={!!errors.first_name?.message}
                onClick={() => resetField("first_name")}
              />
            )}
            name="first_name"
          />

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
                inputId="regEmail"
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
                value: /^(?=.*\d)\w{6,}$/m,
                message:
                  "Пароль должен содержать цифры, латинские буквы верхнего и нижнего регистра, не менее 6 символов",
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
        <BlackButton buttonText="Зарегистрироваться" type="submit" />
      </form>
      <div className={styles.buttons}>
        <button
          className={styles.link}
          onClick={() => navigate('/signin')}
          type="button"
        >
          Авторизация
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

export default Registration;
