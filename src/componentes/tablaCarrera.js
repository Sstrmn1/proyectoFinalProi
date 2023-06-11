// componentes/TablaCarrera.js
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TablaCarrera = ({ carreras }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código Carrera</TableCell>
                        <TableCell>Nombre Carrera</TableCell>
                        <TableCell>Cantidad de Semestres</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {carreras.map((carrera) => (
                        <TableRow key={carrera._codigoCarrera}>
                            <TableCell>{carrera._codigoCarrera}</TableCell>
                            <TableCell>{carrera._nombreCarrera}</TableCell>
                            <TableCell>{carrera._cantidadSemestres}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablaCarrera;