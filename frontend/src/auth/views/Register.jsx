import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      {/* Header */}
      <header className="flex h-40 w-screen items-center justify-center">
        <nav className="flex h-20 w-8/12 flex-row items-center justify-around rounded-3xl border border-[var(--color-text)] bg-[var(--color-card)]">
          <a href="#index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-14 text-[var(--color-text)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </a>

          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 text-[var(--color-text)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>

          <a
            href="#register.html"
            className="group relative flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 text-[var(--color-text)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            <div className="absolute top-full mt-6 hidden rounded-2xl bg-[var(--color-card)] p-4 shadow-xl group-focus:block">
              <h5 className="border-b p-3 text-center text-2xl font-semibold text-[var(--color-text)]">
                Login
              </h5>
              <h4 className="my-2 text-center text-2xl font-extralight text-[var(--color-text)]">
                Usuario
              </h4>
              <input
                className="mt-3 h-7 w-60 rounded bg-[var(--color-background)] text-[var(--color-text)]"
                type="text"
              />
              <h4 className="my-2 text-center text-xl font-extralight text-[var(--color-text)]">
                Contraseña
              </h4>
              <input
                className="mt-2 h-7 w-60 rounded bg-[var(--color-background)] text-[var(--color-text)]"
                type="password"
              />
              <h6 className="pb-2 pt-5 text-center text-xs text-[var(--color-accent)]">
                Regístrese aquí
              </h6>
            </div>
          </a>
        </nav>
      </header>

      {/* Register Form */}
      <div className="container mx-auto">
        <div className="flex w-8/12 bg-[var(--color-card)] rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://t.ctcdn.com.br/T_OrndypRFdoWRTuRYfd6YWym40=/1200x675/smart/i352330.jpeg')",
            }}
          >
            <h1 className="text-white text-3xl mb-3 font-semibold">
              Bienvenido
            </h1>
            <div className="bg-gray-400/55 rounded-xl shadow-xl">
              <p className="text-white font-medium text-xl text-shadow shadow-black-500">
                ¡Somos una empresa enfocada al transporte sustentable! ¡Creemos
                que "Ir en coche" no siempre es la mejor opción! Disfruta más de
                lo que te rodea.{" "}
                <a href="#" className="text-[var(--color-accent)] font-bold">
                  Descubra más
                </a>
                .
              </p>
            </div>
          </div>
          <div className="w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 text-[var(--color-text)]">Registro</h2>
            <p className="mb-4 text-[var(--color-text)]">
              Crea tu cuenta. Es gratis y sólo te llevará un minuto.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Primer Nombre"
                  className="border border-[var(--color-muted)] py-1 px-2 rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellidos"
                  className="border border-[var(--color-muted)] py-1 px-2 rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  className="border border-[var(--color-muted)] py-1 px-2 w-full rounded"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Contrasena"
                  className="border border-[var(--color-muted)] py-1 px-2 w-full rounded"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar Contrasena"
                  className="border border-[var(--color-muted)] py-1 px-2 w-full rounded"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    className="border border-[var(--color-muted)]"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-[var(--color-text)]">
                    Acepto los{" "}
                    <a
                      href="#"
                      className="text-[var(--color-accent)] font-semibold"
                    >
                      Términos de uso
                    </a>{" "}
                    y la{" "}
                    <a
                      href="#"
                      className="text-[var(--color-accent)] font-semibold"
                    >
                      Política de Privacidad
                    </a>
                  </span>
                </label>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] py-3 text-center text-white rounded hover:bg-[var(--color-secondary)] transition-colors"
                >
                  Regístrate Ahora
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

