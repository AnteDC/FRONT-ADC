import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		PET HOME SERVICE
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About us</Heading>
			<FooterLink href="/Portada">Mision</FooterLink>
			<FooterLink href="/Portada">Vision</FooterLink>
			<FooterLink href="/Portada">Testimonios</FooterLink>
		</Column>
		<Column>
			<Heading>Servicios</Heading>
			<FooterLink href="/Portada">Salud</FooterLink>
			<FooterLink href="/Portada">Belleza</FooterLink>
			<FooterLink href="/Portada">SPA</FooterLink>
			<FooterLink href="/Portada">Celebraciones</FooterLink>
		</Column>
		<Column>
			<Heading>Contactos</Heading>
			<FooterLink href="/Portada">Administración</FooterLink>
			<FooterLink href="/Portada">Reservas</FooterLink>
			<FooterLink href="/Portada">Requerimientos</FooterLink>
			<FooterLink href="#">Soportes</FooterLink>
		</Column>
		<Column>
			<Heading>Redes</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
