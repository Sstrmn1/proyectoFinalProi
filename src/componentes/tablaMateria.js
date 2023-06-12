
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TablaMateria = ({ materias }) => {
    return (
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Código Materia</TableCell>
              <TableCell>Nombre Materia</TableCell>
              <TableCell>Semestre</TableCell>
              <TableCell>Carrera</TableCell>
              <TableCell>Docente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materias.map((materia) => (
              <TableRow key={materia._codigoMateria}>
                <TableCell>{materia._codigoMateria}</TableCell>
                <TableCell>{materia._nombreMateria}</TableCell>
                <TableCell>{materia._semestre}</TableCell>
                <TableCell>{materia._carrera}</TableCell>
                <TableCell>{materia._docente}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default TablaMateria;