# Ödev 8

1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
```
CREATE TABLE employee(
	id INTEGER PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);
```
2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 100 adet veri ekleyelim.
```
insert into employee (id, name, email, birthday) values (1, 'Rebekkah', 'rbowcock0@nationalgeographic.com', '1929-12-12');
insert into employee (id, name, email, birthday) values (2, 'Hakim', 'hyeulet1@army.mil', '1902-01-11');
insert into employee (id, name, email, birthday) values (3, 'Quent', 'qhasard2@exblog.jp', '1939-12-28');
insert into employee (id, name, email, birthday) values (4, 'Kaine', 'kdraisey3@symantec.com', '1942-03-04');
insert into employee (id, name, email, birthday) values (101, 'Justis', 'jtitta4@gmpg.org', '1941-12-11');
insert into employee (id, name, email, birthday) values (6, 'Tresa', 'tbelone5@google.it', '1913-08-15');
insert into employee (id, name, email, birthday) values (7, 'Sosanna', 'smacaless6@cyberchimps.com', null);
insert into employee (id, name, email, birthday) values (8, 'Jolee', 'jbassom7@ucsd.edu', '1974-11-17');
insert into employee (id, name, email, birthday) values (9, 'Merell', 'madamo8@jigsy.com', '1926-11-28');
insert into employee (id, name, email, birthday) values (10, 'Donelle', 'dhazlegrove9@google.com.hk', '1926-01-08');
insert into employee (id, name, email, birthday) values (11, 'Joellen', 'jempringhama@tuttocitta.it', null);
insert into employee (id, name, email, birthday) values (12, 'Muhammad', 'mthomssonb@reference.com', '1909-07-01');
insert into employee (id, name, email, birthday) values (13, 'Jervis', 'jkauschec@opera.com', '1988-03-08');
insert into employee (id, name, email, birthday) values (14, 'Tallia', 'tgagerd@example.com', null);
insert into employee (id, name, email, birthday) values (15, 'Hyman', 'hglisanee@people.com.cn', '1903-10-12');
insert into employee (id, name, email, birthday) values (16, 'Randolf', 'rchaveyf@flickr.com', null);
insert into employee (id, name, email, birthday) values (17, 'Felic', 'fmundeng@wix.com', '1950-07-04');
insert into employee (id, name, email, birthday) values (18, 'Toby', null, null);
insert into employee (id, name, email, birthday) values (19, 'Bendite', 'bmartijni@simplemachines.org', null);
insert into employee (id, name, email, birthday) values (20, 'Townsend', null, null);
insert into employee (id, name, email, birthday) values (21, 'Adel', null, '1911-11-24');
insert into employee (id, name, email, birthday) values (22, 'Wendell', 'wabramcikl@epa.gov', '1995-10-21');
insert into employee (id, name, email, birthday) values (23, 'Giacobo', 'gpeschmannm@census.gov', '1953-07-20');
insert into employee (id, name, email, birthday) values (24, 'Alyda', 'aebyn@washington.edu', '1914-04-19');
insert into employee (id, name, email, birthday) values (25, 'Dixie', null, null);
insert into employee (id, name, email, birthday) values (26, 'Evangelia', 'esigsworthp@usnews.com', null);
insert into employee (id, name, email, birthday) values (27, 'Claudius', 'cfrigotq@hibu.com', '1929-08-01');
insert into employee (id, name, email, birthday) values (28, 'Roshelle', 'rthornborrowr@domainmarket.com', '1991-05-26');
insert into employee (id, name, email, birthday) values (29, 'Onfre', 'oneills@miibeian.gov.cn', '1932-10-31');
insert into employee (id, name, email, birthday) values (30, 'Celene', 'ccollingst@wiley.com', null);
insert into employee (id, name, email, birthday) values (31, 'Brock', 'bkwietaku@mlb.com', null);
insert into employee (id, name, email, birthday) values (32, 'Annamarie', 'ahaxleyv@e-recht24.de', null);
insert into employee (id, name, email, birthday) values (33, 'Lynett', 'ldepinnaw@t-online.de', '1971-12-17');
insert into employee (id, name, email, birthday) values (34, 'Isador', 'imiddellx@1und1.de', '1942-10-19');
insert into employee (id, name, email, birthday) values (35, 'Ciro', null, null);
insert into employee (id, name, email, birthday) values (36, 'Merralee', 'mtallz@nifty.com', '1946-02-25');
insert into employee (id, name, email, birthday) values (37, 'Tobit', 'tmilier10@simplemachines.org', '1963-04-11');
insert into employee (id, name, email, birthday) values (38, 'Sharyl', 'syakovitch11@amazon.co.uk', '1984-06-29');
insert into employee (id, name, email, birthday) values (39, 'Arline', 'adunnan12@nasa.gov', '1958-08-21');
insert into employee (id, name, email, birthday) values (40, 'Brigham', 'bschops13@bbb.org', '1903-03-25');
insert into employee (id, name, email, birthday) values (41, 'Julina', 'jhyman14@epa.gov', '1938-03-11');
insert into employee (id, name, email, birthday) values (42, 'Bamby', 'bszymczyk15@wufoo.com', '1976-01-16');
insert into employee (id, name, email, birthday) values (43, 'Dennie', 'dscruton16@hao123.com', '1973-04-12');
insert into employee (id, name, email, birthday) values (44, 'Sydelle', 'skobierzycki17@multiply.com', '1966-07-20');
insert into employee (id, name, email, birthday) values (45, 'Urbano', 'uknutton18@shareasale.com', '1938-01-18');
insert into employee (id, name, email, birthday) values (46, 'Peyter', 'psanches19@washingtonpost.com', '1942-01-09');
insert into employee (id, name, email, birthday) values (47, 'Clevey', 'ctabary1a@google.com', '1984-04-02');
insert into employee (id, name, email, birthday) values (48, 'Cleveland', 'ckeywood1b@boston.com', null);
insert into employee (id, name, email, birthday) values (49, 'Dwight', 'dcutress1c@opensource.org', null);
insert into employee (id, name, email, birthday) values (50, 'Lorraine', 'lrumsey1d@plala.or.jp', '1910-12-28');
```
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
```
UPDATE employee
SET name = 'B-----------'
WHERE id IN (SELECT id FROM employee WHERE name LIKE 'B%' LIMIT 5);
```
4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
```
DELETE FROM employee
WHERE id IN (SELECT id FROM employee WHERE name = 'Updated Name' LIMIT 5);
```

### 3. Sorgu
![sql ödev 8 sorgu 3](https://raw.githubusercontent.com/tgmkubi/kodluyoruzilkrepo/fb42fbc9615d6303c8abceab2635b6f189e05e11/Sql/odev8/query.png)