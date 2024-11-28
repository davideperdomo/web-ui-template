import { Card, CardBody } from "@nextui-org/card";
import React from "react";

interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <Card>
      <CardBody>
        <h1>Información del Usuario</h1>
        <p>
          <strong>Nombre:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </CardBody>
    </Card>
  </div>
);

export default UserInfo;
