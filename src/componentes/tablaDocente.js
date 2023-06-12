import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TablaDocente = ({ docentes }) => {
    return (
<TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Código Docente</TableCell>
                    <TableCell>Primer Nombre</TableCell>
                    <TableCell>Segundo Nombre</TableCell>
                    <TableCell>Primer Apellido</TableCell>
                    <TableCell>Segundo Apellido</TableCell>
                    <TableCell>Género</TableCell>
                    <TableCell>Fecha de Nacimiento</TableCell>
                    <TableCell>Profesión</TableCell>
                    <TableCell>Tipo de Grado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {docentes.map((docente) => (
                    <TableRow key={docente._codigoDocente}>
                      <TableCell>{docente._codigoDocente}</TableCell>
                      <TableCell>{docente._primerNombre}</TableCell>
                      <TableCell>{docente._segundoNombre}</TableCell>
                      <TableCell>{docente._primerApellido}</TableCell>
                      <TableCell>{docente._segundoApellido}</TableCell>
                      <TableCell>{docente._genero}</TableCell>
                      <TableCell>{docente._fechaNacimiento}</TableCell>
                      <TableCell>{docente._profesion}</TableCell>
                      <TableCell>{docente._tipoGrado.join(", ")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    );
};

export default TablaDocente;