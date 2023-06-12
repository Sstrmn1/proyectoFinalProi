import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TablaSemestre = ({ semestres }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código Semestre</TableCell>
                        <TableCell>Número Semestre</TableCell>
                        <TableCell>Cantidad de Materias</TableCell>
                        <TableCell>Carrera</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {semestres.map((semestre) => (
                        <TableRow key={semestre._codigoSemestre}>
                            <TableCell>{semestre._codigoSemestre}</TableCell>
                            <TableCell>{semestre._numeroSemestre}</TableCell>
                            <TableCell>{semestre._cantidadMaterias}</TableCell>
                            <TableCell>{semestre._carrera}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablaSemestre;

