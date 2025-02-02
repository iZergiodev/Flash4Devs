import React, { useState } from "react";

export const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envio do form
  const handleSubmit = (e) => {
    e.preventDefault();
    //Adicionar aqui a lógica da API (O enviar a uma API o actualizar os dados Sergio)
    console.log("Dados do formulário:", formData);
  
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-card/60 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-primary text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                className="w-full px-3 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-primary text-sm font-bold mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-3 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              type="submit"
            >
              Entrar
            </button>
          </form>
          <p className="mt-4 text-center text-muted">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-secondary hover:underline">
              Registro
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
