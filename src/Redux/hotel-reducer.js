let initialState = {
    hotels :
        [
            {
                 id: "0",
                 mainUrlImg: "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768",
                 price: "45",
                 price2: "50",
                 hotelName: "Ibiza Hotel",
                 description: "  Близькість до таких визначних пам'ятках, як Durres Castle (4,1 км) та Fatih Mosque (4,2\n" +
                    "                                км), перетворює готель Hotel Ibiza в відмінне місце для проживання під час відвідування\n" +
                    "                                Дурреса.\n" +
                    "                                Номери обладнані кондиціонером, а гості можуть в будь-який момент бути онлайн завдяки\n" +
                    "                                безкоштовному Wi-Fi, який пропонує готель.\n" +
                    "                                Hotel Ibiza пропонує обслуговування в номер, обмін валюти і газети для читання, щоб\n" +
                    "                                зробити перебування гостей тут ще більш приємним. До послуг гостей також басейн і лобі.\n" +
                    "                                Ті, хто приїжджає в Hotel Ibiza на машині, можуть скористатися безкоштовним паркуванням.\n" +
                    "                                Мандрівники, яким цікаві грецькі ресторани, можуть сходити в Resto Cafe Hemingway,\n" +
                    "                                Pastarella або Restaurant Delfin Tetova Durres.\n" +
                    "                                У Дурресе також знаходиться The Amphitheater of Durres, популярна стародавні руїни,\n" +
                    "                                розташована не дуже далеко від готелю Hotel Ibiza."
            },
            {
                id: "1",
                mainUrlImg: "https://cf.bstatic.com/images/hotel/max1024x768/264/264603329.jpg",
                price: "45",
                price2: "50",
                hotelName: "CVK Park Bosphorus Istanbul",
                description: "Готель CVK Park Bosphorus Istanbul розташований в центрі міста, в 150 метрах від площі Таксим. До послуг гостей цього розкішного готелю 2 плавальних басейни і великий спа- і фітнес-центр Livera площею 8500 кв. м. Тут можна відвідати сауну, турецьку лазню, парну та масажний кабінет.\n" +
                    "\n" +
                    "У розкішних номерах готелю CVK Park Bosphorus Istanbul серед зручностей ЖК-телевізор, безкоштовний Wi-Fi і електричний чайник з безкоштовними приладдям для чаю / кави. У деяких номерах встановлена гідромасажна ванна."
            }
        ]
};

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default hotelReducer;