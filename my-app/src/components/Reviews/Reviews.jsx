import './Reviews.css';

const Reviews = () => {
    return (
        <>
            <div className="reviews__title">
                <h2>Отзывы</h2> <span className="reviews__count">3245</span>
            </div>
            {reviews.map((rev) => (
                <div className="review__item" key={rev.name}>
                    < img className="review__avatar" src={rev.avatar} alt={rev.name} height="200" />
                    <div className="review__text">
                        <b>{rev.name}</b>
                        <div className="review__stars">
                            <img src={rev.star} alt="звездa" height="30" />
                            <img src={rev.star} alt="звездa" height="30" />
                            <img src={rev.star} alt="звездa" height="30" />
                            <img src={rev.star} alt="звездa" height="30" />
                            <img src={rev.star} alt="звездa" height="30" />
                        </div>
                        <br/>
                        <p><b>Опыт использования:</b> {rev.experience} </p>
                        <br/>
                        <p>
                            <b>Достоинства:</b> <br />{rev.advantages}
                        </p>
                        <br/>
                        <p>
                            <b>Недостатки:</b> <br />{rev.flaws}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

const reviews = [
    {
        name: "Марк Г.",
        avatar: "../img/avatar-1.jpeg",
        experience: 'менее месяца',
        star: "../img/star.png",
        advantages: `это мой первый айфон после огромного количества телефонов на андроиде.
               всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая.`,

        flaws: `к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь)
               а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий`,
    },
    {
        name: "Валерий Коваленко",
        avatar: "../img/avatar-2.jpeg",
        experience: 'Больше года',
        star: "../img/star.png",
        advantages: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,

        flaws: `Плохая ремонтопригодность`,
    },
]

export default Reviews;