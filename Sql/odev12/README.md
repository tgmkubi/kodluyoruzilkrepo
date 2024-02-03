# Ödev 12
Aşağıdaki sorgu senaryolarını [dvdrental](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/) örnek veri tabanı üzerinden gerçekleştiriniz.

1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
```
SELECT COUNT(*) FROM film
WHERE length >
(SELECT AVG(length) FROM film);
```
2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
```
SELECT COUNT(*) FROM film
WHERE rental_rate =
(SELECT MAX(rental_rate) FROM film);
```
3. film tablosunda en düşük rental_rate ve en düşük replacement_cost değerlerine sahip filmleri sıralayınız.
```
SELECT * FROM film
WHERE rental_rate = 
(SELECT MIN(rental_rate) FROM film)
AND replacement_cost = 
(SELECT MIN(replacement_cost) FROM film);
```
4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
```
SELECT p.customer_id, c.first_name, c.last_name, p.amount 
FROM payment AS p
JOIN customer AS c ON p.customer_id = c.customer_id
WHERE p.amount = (SELECT MAX(amount) FROM payment);
```

![sql ödev 12 sorgu 4](https://raw.githubusercontent.com/tgmkubi/kodluyoruzilkrepo/6c0e2ad8f62b263caadfc2a78caeb7dbe3a5edc8/Sql/odev12/query.JPG)