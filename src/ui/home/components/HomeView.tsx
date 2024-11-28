import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";

const HomeView: React.FC = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Card>
        <CardBody>
          <h1>¡Bienvenido!</h1>
          <p>Gracias por visitar nuestra aplicación.</p>
          <Link href="/user-info" style={{ color: "blue", textDecoration: "underline" }}>
            Ir a Información del Usuario
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeView;
