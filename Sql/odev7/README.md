# Ödev 7
Aşağıdaki sorgu senaryolarını [dvdrental](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/) örnek veri tabanı üzerinden gerçekleştiriniz.

1. film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
```
SELECT rating, COUNT(*) FROM film
GROUP BY rating;
```
2. film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
```
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;
```
3. customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?
```
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;
```
4. city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.
```
SELECT country_id, COUNT(*) FROM city
GROUP BY country_id
ORDER BY COUNT(*) DESC
LIMIT 1;
```

![sql ödev 7 sorgu ](https://raw.githubusercontent.com/tgmkubi/kodluyoruzilkrepo/a2c585f926d3958cfc6714e8f7e3e5ffcec53d0c/Sql/odev7/query.png)