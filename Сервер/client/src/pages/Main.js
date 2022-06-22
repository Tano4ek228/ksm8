import React from "react";
import Zayavka from "../components/zayavka/Zayavka";
import { NavLink } from "react-router-dom";
import { DELIVERY_ROUTE } from "../utils/const";
import {BETON_ROUTE} from '../utils/const';
import {FBS_ROUTE} from '../utils/const';
import {KERAMZITOBETON_ROUTE} from '../utils/const';
import {AUTOBETONONASOS_ROUTE} from '../utils/const';
import {JBI_ROUTE} from '../utils/const';
// import { createAppl } from "../http/DeviceApi";


const Main = () => {
	let elements = [];
	let nameShop = ["Beton", "Fbs", "JBI", "KeramzitB"];
	let nameTovar = ["Бетон", "ФБС", "Кольца стеновые", "Керамзитобетон"];
	let nameLink = [BETON_ROUTE, FBS_ROUTE, JBI_ROUTE, KERAMZITOBETON_ROUTE];
	let desc_tovar = [
		'Производство и доставка высококачественного товарного бетона и раствора всех марок.',
		'Используются в качестве основных элементов при возведении стен и устройстве фундаментов.',
		'Предлагает вам сотрудничество в сфере поставок ЖБИ изделий собственного производства.',
		'Одна из разновидностей популярных лёгких бетонов, которые применяют в строительстве в наше время.'];
	for (let i = 0; i < nameShop.length; i++) {
		elements.push(
			<div key={i} className="products line_right line_bottom">
				<h2>{nameTovar[i]}</h2>
				<img src={`/images/main_tovar/${nameShop[i]}.jpg`} alt=""></img>
				<h3>
					{desc_tovar[i]}
				</h3>
				<div className="btn_wh">
					<NavLink to={nameLink[i]}>Подробнее</NavLink>
				</div>
			</div>
		);
	};

	return (
		<div className="all">
		
		{/* Слайдер */}
		<div className="headnone slider">

		{/* Товарный бетон */}
		<div className="G_text_header slider__item">
			<div className="G_text">
				<h1>Товарный бетон</h1>
			</div>
			<div className="g2_text">
				<p>
					ООО «КСМ-8» производит товарный бетон и раствор от М-100 до М-400. Осуществляет доставку
					бетона в
					Ростове-на-Дону и по Ростовской области (Батайск, Азов, Аксай, Новочеркасск, Зерноград и
					прочие).
				</p>
			</div>

			<div className="btns">
				<div className="btn_zakaz">
					<NavLink to={DELIVERY_ROUTE}>Заказать</NavLink>
				</div>
				<div className="btn_podrobno">
					<NavLink to={BETON_ROUTE}>Подробнее</NavLink>
				</div>
			</div>
		</div>

		{/* Керамзитобетон и керамзит */}
		<div className="G_text_header slider__item">
			<div className="G_text">
				<h1>Керамзитобетон и керамзит</h1>
			</div>
			<div className="g2_text">
				<p>
					Теперь, в нашей компании, вы можете купить <br></br> керамзитобетон и керамзит разных фракций и марок.
				</p>
			</div>

			<div className="btns">
				<div className="btn_zakaz">
					<NavLink to={DELIVERY_ROUTE}>Заказать</NavLink>
				</div>
				<div className="btn_podrobno">
					<NavLink to={KERAMZITOBETON_ROUTE}>Подробнее</NavLink>
				</div>
			</div>
		</div>

		{/* Автобетононасос */}
		<div className="G_text_header slider__item">
			<div className="G_text">
				<h1>Услуги автобетононасоса</h1>
			</div>
			<div className="g2_text">
				<p>
					Предлагаем услугу: <a href="/autopump" className="black_text">аренда автобетононасоса в Ростове-на-Дону</a><br></br> и области. 
					В нашей компании свой автопарк автобетононасосов <br></br> высотой подачи от 20 до 52 метров. 
				</p>
			</div>

			<div className="btns">
				<div className="btn_zakaz">
					<NavLink to={DELIVERY_ROUTE}>Заказать</NavLink>
				</div>
				<div className="btn_podrobno">
					<NavLink to={AUTOBETONONASOS_ROUTE}>Подробнее</NavLink>
				</div>
			</div>
		</div>

		{/* ФБС */}
		<div className="G_text_header slider__item">
			<div className="G_text">
				<h1>Фундаментные блоки-ФБС</h1>
			</div>
			<div className="g2_text">
				<p>
					ООО «КСМ-8» производит фундаментные блоки различных размеров. Доставку фундаментных блоков осуществляем по Ростову на Дону в все города Ростовской области такие как Батайск, Азов, Таганрог, Аксай, Егорлык, Кагальницкое и т.д.
				</p>
			</div>

			<div className="btns">
				<div className="btn_zakaz">
					<NavLink to={DELIVERY_ROUTE}>Заказать</NavLink>
				</div>
				<div className="btn_podrobno">
					<NavLink to={FBS_ROUTE}>Подробнее</NavLink>
				</div>
			</div>
		</div>

		{/* Производство на Новороссийском цементе */}
		<div className="G_text_header slider__item">
			<div className="G_Nov_text">
				<h1>Производство на Новороссийском цементе</h1>
			</div>
			<div className="g2_text">
				<p>
					Производство бетона осуществляется исключительно на Новороссийском портланд цементе M—500 сульфатостойкий, поставляемый напрямую заводом производителем транспортной компанией «ЮТК».
				</p>
			</div>

			<div className="btns_Nov">
				<div className="btn_zakaz">
					<NavLink to={DELIVERY_ROUTE}>Заказать</NavLink>
				</div>
				<div className="btn_podrobno">
					<NavLink to={BETON_ROUTE}>Подробнее</NavLink>
				</div>
			</div>
		</div>

		</div>
			<div className="tovar">
				<div className="tovar_line">
					{elements}
				</div>
			</div>
			<div className="container_main">
				<div className="main_text">
					<h1 className="main_text_h1">БЕТОН РОСТОВ 61 - качество по разумной цене!</h1>
					<h2 className="main_text_h2">БЕТОН В РОСТОВЕ ОТ ПРОИЗВОДИТЕЛЯ</h2>
					<p className="main_text_p">
						Многолетний опыт нашей компании в производстве товарного бетона и раствора всех марок, позволяет
						получать высококачественную и высокопрочную бетонную смесь, что неоднократно подтверждалось отзывами
						наших клиентов и их постоянным сотрудничеством с «КСМ-8».
					</p>
					<h2 className="main_text_h2">Бетонный завод в Ростове-на-Дону</h2>
					<p className="main_text_p">
						Бетонный завод - находится в Ростове-на-Дону по адресу: ул.1-я Луговая,32 Б. Удобное расположение
						бетонного завода позволяет нам оперативно в течении 1-2 часов доставить товарный бетон в любой район
						города Ростова, а удобный выезд на федеральные трассы
						позволяет нам работать и обеспечивать быструю доставку нашей продукции во все в города Ростовской
						области.
					</p>
					<p className="main_text_p">
						<b>Производительность РБУ</b> - составляет до 60-80 м3 в час. Процесс производства максимально
						автоматизирован, а технология изготовления позволяет производить бетон с высокими эксплуатационными
						свойствами.
					</p>
					<h2 className="main_text_h2">Производство</h2>
					<p className="main_text_p">
						Мы производим все марки товарного бетона от М-100 до М-350 и товарного раствора от М-50 до М-200.
						Бетон производится на высококачественных заполнителях и портландцементе марки ПЦМ 500 ДО, вся
						продукция сертифицирована.
					</p>
					<p className="main_text_p">
						Производство бетона осуществляется при входном контроле материалов, а также <i>выходной контроль
							качества бетонной смеси</i> все экспертизы проводятся на базе собственной сертифицированной
						лаборатории строительных материалов.
						<br></br>При наличии в проекте особых требований к бетонной смеси, возможно производство товарного бетона
						по техническим условиям заказчика.
					</p>

					<div className="advantages_bg">
						<h2 className="preimushestva">Наши преимущества:</h2>
						<ul className="advantages">
							<li>Цены от производителя, одни из самых низких;</li>
							<li>Собственный автопарк автобетононасосов и бетоносмесителей;</li>
							<li>Любые объёмы продукции в кратчайшие сроки;</li>
							<li>Делаем любой состав бетона по Вашему заказу;</li>
							<li>Постоянным клиентам постоянно растущие скидки.</li>
						</ul>
					</div>

					<div className="offer">
						<a href="https://beton61.ru/docs/kom-beton.xls">Скачать коммерческое предложение ООО «КСМ-8»</a>
					</div>
					<p className="desc_offer">
						<i> Ваше с нами сотрудничество поможет Вам добиваться максимальной выгоды, используя наше основное
							достоинство и преимущество: оптимальное соотношение цены и качества производимого нами товарного
							бетона всех известных марок и лучшего качества.</i>
					</p>

					<div className="Partners_bg">
						<h2>Наши партнёры:</h2>
						<div className="Partners">
							<div>
								<a href="/">
									<img src="images/partners/anastasiya.jpg" alt=""></img>
								</a>
							</div>
							<div>
								<a href="/">
									<img src="images/partners/inrosstroy.jpg" alt=""></img>
								</a>
							</div>
							<div>
								<a href="/">
									<img src="images/partners/bsk-stroy.jpg" alt=""></img>
								</a>
							</div>
							<div>
								<a href="/">
									<img src="images/partners/rosgilstroy.jpg" alt=""></img>
								</a>
							</div>
							<div>
								<a href="http://edinst.ru/">
									<img src="images/partners/edinstvo.jpg" alt=""></img>
								</a>
							</div>
						</div>
					</div>

				</div>
				<Zayavka/>
			</div>
		</div>

	)
}

export default Main;