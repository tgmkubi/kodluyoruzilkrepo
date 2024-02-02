# Ödev 11

1. actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
```
SELECT first_name FROM actor
UNION
SELECT first_name FROM customer
ORDER BY first_name;
```
2. actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
```
(SELECT first_name FROM actor)
INTERSECT
(SELECT first_name FROM customer)
```
3. actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
```
(SELECT first_name FROM actor)
EXCEPT
(SELECT first_name FROM customer);
```
4. İlk 3 sorguyu tekrar eden veriler için de yapalım.
```
SELECT first_name FROM actor
UNION ALL
SELECT first_name FROM customer
```
```
(SELECT first_name FROM actor)
EXCEPT ALL
(SELECT first_name FROM customer);
```

![sql ödev 11 sorgu 1](https://raw.githubusercontent.com/tgmkubi/kodluyoruzilkrepo/63f91eb40225561dff14f1e2c892fecde5b6bdfe/Sql/odev11/query.JPG)