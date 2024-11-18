
var cat_image = 'https://www.studiogallerymelbourne.com.au/cdn/shop/files/Screen_Shot_2022-10-13_at_2.07.20_pm.png?v=1712288350'
var dog_image = 'https://www.studiogallerymelbourne.com.au/cdn/shop/files/IMG_1200gv_copy_2_1512x.jpg?v=1687826493'

const date = new Date();
today_year = new Date().getFullYear();
today_month = date.toLocaleString('default', { month: 'long' });
today_date = new Date().getDate();
day.textContent = today_date + ' ' + today_month + ' ' + today_year;
day.text

if (today_month == "October") {
    gallery1.src = cat_image
} else if (today_month == "November"){
    gallery1.src = dog_image
} else if (today_month == "December"){
    gallery1.src = cat_image
} else if (today_month == "January"){
    gallery1.src = dog_image
} else if (today_month == "February"){
    gallery1.src = cat_image
} else if (today_month == "March"){
    gallery1.src = dog_image
} else if (today_month == "April"){
    gallery1.src = cat_image
} else if (today_month == "May"){
    gallery1.src = cat_image
} else if (today_month == "June"){
    gallery1.src = dog_image
} else if (today_month == "July"){
    gallery1.src = cat_image
} else if (today_month == "August"){
    gallery1.src = dog_image
} else if (today_month == "September"){
    gallery1.src = cat_image
}