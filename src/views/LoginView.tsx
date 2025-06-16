import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white">Iniciar Sesión</h1>
      <nav>
        <Link
          className="text-center text-white text-lg block"
          to="/auth/register"
        >
          ¿No tienes cuenta? Crea una aquí
        </Link>
      </nav>
    </>
  );
}
