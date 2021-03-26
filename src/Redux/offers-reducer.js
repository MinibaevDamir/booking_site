let initialState = {
    offers: [
        {
            id: '0',
            mainImgUrl: "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768",
            kilometersCenter: "10",
            nameHotel: "Ibiza Hotel",
            description: "                                                Hotel Ibiza пропонує обслуговування в номер, обмін валюти і газети для\n" +
                "                                                читання, щоб зробити перебування гостей тут ще більш приємним.\n" +
                "                                                До послуг гостей також басейн і лобі. Ті, хто приїжджає в Hotel Ibiza на\n" +
                "                                                машині, можуть скористатися безкоштовним паркуванням."
        },
        {
            id: '1',
            mainImgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/264/264603329.jpg",
            kilometersCenter: "5",
            nameHotel: "CVK Park Bosphorus Istanbul",
            description: "                                               Пропонує обслуговування в номер, обмін валюти і газети для\n" +
                "                                                читання, щоб зробити перебування гостей тут ще більш приємним.\n" +
                "                                                До послуг гостей також басейн і лобі. Ті, хто приїжджає в CVK Park Bosphorus Istanbul  на\n" +
                "                                                машині, можуть скористатися безкоштовним паркуванням."
        }
    ]
};

const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default offersReducer;