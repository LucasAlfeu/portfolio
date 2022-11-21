import React from 'react';
import Inicio from 'Pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projetos from 'Pages/Projetos';
import Banner from 'Components/Banner';
import Estudo from 'Pages/Estudo';
import style from 'styles/Background.module.scss';
import SobreMim from 'Pages/SobreMim';
import Curriculo from 'Pages/Curriculo';

export default function AppRoute() {
	return (
		<div className={style.container}>
			<BrowserRouter>
				<Banner />
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/projetos' element={<Projetos />} />
					<Route path='/estudo/:id' element={<Estudo />} />
					<Route path='/sobre' element={<SobreMim />} />
					<Route path='/curriculo' element={<Curriculo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}