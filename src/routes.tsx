import React from 'react';
import Inicio from 'Pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projetos from 'Pages/Projetos';
import Banner from 'Components/Banner';
import Estudo from 'Pages/Estudo';

export default function AppRoute() {
	return (
		<BrowserRouter>
			<Banner />
			<Routes>
				<Route path='/' element={<Inicio />} />
				<Route path='/projetos' element={<Projetos />} />
				<Route path='/estudo/:id' element={<Estudo />} />
			</Routes>
		</BrowserRouter>
	);
}