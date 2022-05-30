import React from "react";

const Main = () => {
	let elements = [];
	let nameShop = ["Beton", "Fbs", "JBI", "KeramzitB"];
	let nameTovar = ["Бетон", "ФБС", "Кольца стеновые", "Керамзитобетон"];
	let nameLink = ["/beton", "/fbs_blocks", "/jbi_koltsa", "/keramzitobeton"];
	for (let i = 0; i < nameShop.length; i++) {
		elements.push(
			<div class="products line_right line_bottom">
				<h2>{nameTovar[i]}</h2>
				<img src={`/images/main_tovar/${nameShop[i]}.jpg`} alt=""></img>
				<h3>
					Производство и доставка высококачественного товарного бетона и раствора всех марок.
				</h3>
				<div class="btn_wh">
					<a href={nameLink[i]}>Подробнее</a>
				</div>
			</div>
		);
	};

	return (
		<div class="all">
			<div class="tovar">
				<div class="tovar_line">
					{elements}
				</div>
			</div>
			<div class="container_main">
				<div class="main_text">
					<h1 class="main_text_h1">БЕТОН РОСТОВ 61 - качество по разумной цене!</h1>
					<h2 class="main_text_h2">БЕТОН В РОСТОВЕ ОТ ПРОИЗВОДИТЕЛЯ</h2>
					<p class="main_text_p">
						Многолетний опыт нашей компании в производстве товарного бетона и раствора всех марок, позволяет
						получать высококачественную и высокопрочную бетонную смесь, что неоднократно подтверждалось отзывами
						наших клиентов и их постоянным сотрудничеством с «КСМ-8».
					</p>
					<h2 class="main_text_h2">Бетонный завод в Ростове-на-Дону</h2>
					<p class="main_text_p">
						Бетонный завод - находится в Ростове-на-Дону по адресу: ул.1-я Луговая,32 Б. Удобное расположение
						бетонного завода позволяет нам оперативно в течении 1-2 часов доставить товарный бетон в любой район
						города Ростова, а удобный выезд на федеральные трассы
						позволяет нам работать и обеспечивать быструю доставку нашей продукции во все в города Ростовской
						области.
					</p>
					<p class="main_text_p">
						<b>Производительность РБУ</b> - составляет до 60-80 м3 в час. Процесс производства максимально
						автоматизирован, а технология изготовления позволяет производить бетон с высокими эксплуатационными
						свойствами.
					</p>
					<h2 class="main_text_h2">Производство</h2>
					<p class="main_text_p">
						Мы производим все марки товарного бетона от М-100 до М-350 и товарного раствора от М-50 до М-200.
						Бетон производится на высококачественных заполнителях и портландцементе марки ПЦМ 500 ДО, вся
						продукция сертифицирована.
					</p>
					<p class="main_text_p">
						Производство бетона осуществляется при входном контроле материалов, а также <i>выходной контроль
							качества бетонной смеси</i> все экспертизы проводятся на базе собственной сертифицированной
						лаборатории строительных материалов.
						<br></br>При наличии в проекте особых требований к бетонной смеси, возможно производство товарного бетона
						по техническим условиям заказчика.
					</p>

					<div class="advantages_bg">
						<h2 class="preimushestva">Наши преимущества:</h2>
						<ul class="advantages">
							<li>Цены от производителя, одни из самых низких;</li>
							<li>Собственный автопарк автобетононасосов и бетоносмесителей;</li>
							<li>Любые объёмы продукции в кратчайшие сроки;</li>
							<li>Делаем любой состав бетона по Вашему заказу;</li>
							<li>Постоянным клиентам постоянно растущие скидки.</li>
						</ul>
					</div>

					<div class="offer">
						<a href="https://beton61.ru/docs/kom-beton.xls">Скачать коммерческое предложение ООО «КСМ-8»</a>
					</div>
					<p class="desc_offer">
						<i> Ваше с нами сотрудничество поможет Вам добиваться максимальной выгоды, используя наше основное
							достоинство и преимущество: оптимальное соотношение цены и качества производимого нами товарного
							бетона всех известных марок и лучшего качества.</i>
					</p>

					<div class="Partners_bg">
						<h2>Наши партнёры:</h2>
						<div class="Partners">
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
								<a href="/">
									<img src="images/partners/edinstvo.jpg" alt=""></img>
								</a>
							</div>
						</div>
					</div>

				</div>

				{/* Заявка */}
				<div className="zayavka_block">
					<div className="text_zayavka">
						<p>Есть вопросы?</p>
						<p>Оставьте заявку, и мы перезвоним Вам что бы ответить на все Ваши вопросы.</p>
					</div>

					<div class="zayavka_fone">
						<form action="">
							<div class="zayavka">
								<h2>Оставьте заявку:</h2>
								<div class="input_zayavka">
									<input type="text" name="name" class="name" placeholder="Имя:"></input>
									<input type="text" name="tel" class="tel" placeholder="Телефон: +7"></input>
								</div>
								<div class="btn_zayavka">
									<input type="submit" name="btn_zayavka" class="ostavit_zayavk" value="Оставить заявку">
									</input>
								</div>
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Main;