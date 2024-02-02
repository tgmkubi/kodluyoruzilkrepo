# Ödev 10

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
```
SELECT city, country FROM city
LEFT JOIN country ON city.country_id = country.country_id
ORDER BY country, city;
```
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name 
isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
```
SELECT payment_id, first_name, last_name FROM customer
RIGHT JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY first_name ASC;
```
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.
```
SELECT rental_id, first_name, last_name FROM rental
FULL JOIN customer ON rental.customer_id = customer.customer_id;
```

![sql ödev 10 sorgu 3](https://raw.githubusercontent.com/tgmkubi/kodluyoruzilkrepo/78081d0dce117986aec793de2f6daf649b646d4e/Sql/odev10/query.JPG)